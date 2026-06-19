import { ContentElement, PageContent } from '@/content/types';

export const PaginationConfig = {
  PAGE_MAX_HEIGHT: 940, // 979px physical limit - safe margin
  DOC_CONTENT_WIDTH: 624, // 794 - 85 - 85
  LINE_HEIGHT_PX: 23.47, // 14.67 * 1.6
  CHARS_PER_LINE: 83, // Math.floor(624 / 7.5)
  CHARS_PER_CELL: 30, // roughly 4 equal columns
  PARAGRAPH_MARGIN: 11, // ~10.67px rounded
  TABLE_HEADER_HEIGHT: 50,
  TABLE_ROW_PADDING: 12,
  LIST_ITEM_PADDING: 24,
  QUESTION_PADDING: 40,
  EXERCISE_PADDING: 80,
  CHAPTER_TITLE_HEIGHT: 120,
  SECTION_L2_HEIGHT: 80,
  SECTION_L3_HEIGHT: 60,
};

function getEstimatedHeight(element: ContentElement): number {
  switch (element.type) {
    case 'chapter-title': return PaginationConfig.CHAPTER_TITLE_HEIGHT;
    case 'section': return element.level === 2 ? PaginationConfig.SECTION_L2_HEIGHT : PaginationConfig.SECTION_L3_HEIGHT;
    case 'paragraph': {
      const lines = Math.ceil(element.text.length / PaginationConfig.CHARS_PER_LINE);
      return lines * PaginationConfig.LINE_HEIGHT_PX + PaginationConfig.PARAGRAPH_MARGIN;
    }
    case 'list': {
      let lines = 0;
      for (const item of element.items) {
        lines += Math.ceil(item.length / PaginationConfig.CHARS_PER_LINE);
      }
      return lines * PaginationConfig.LINE_HEIGHT_PX + PaginationConfig.LIST_ITEM_PADDING;
    }
    case 'table': {
      let height = PaginationConfig.TABLE_HEADER_HEIGHT;
      for (const row of element.rows) {
        let maxLines = 1;
        for (const cell of row) {
          maxLines = Math.max(maxLines, Math.ceil(cell.length / PaginationConfig.CHARS_PER_CELL));
        }
        height += maxLines * PaginationConfig.LINE_HEIGHT_PX + PaginationConfig.TABLE_ROW_PADDING;
      }
      return height;
    }
    case 'question': {
      let height = Math.ceil(element.text.length / PaginationConfig.CHARS_PER_LINE) * PaginationConfig.LINE_HEIGHT_PX + PaginationConfig.QUESTION_PADDING;
      if (element.options) {
        for (const opt of element.options) {
          height += Math.ceil(opt.length / PaginationConfig.CHARS_PER_LINE) * PaginationConfig.LINE_HEIGHT_PX + PaginationConfig.TABLE_ROW_PADDING;
        }
      }
      return height;
    }
    case 'exercise': {
      let height = PaginationConfig.EXERCISE_PADDING + Math.ceil(element.instructions.length / PaginationConfig.CHARS_PER_LINE) * PaginationConfig.LINE_HEIGHT_PX;
      for (const item of element.items) {
        height += Math.ceil(item.length / PaginationConfig.CHARS_PER_LINE) * PaginationConfig.LINE_HEIGHT_PX + PaginationConfig.PARAGRAPH_MARGIN;
      }
      return height;
    }
    case 'spacer': return element.height;
    default: return 50;
  }
}

export function paginateElements(inputElements: ContentElement[]): PageContent[] {
  // Clone to avoid mutating the original array (Fix for C1-01 which prevents double mutation in index.ts)
  const elements = [...inputElements];
  const pages: PageContent[] = [];
  let currentPageElements: ContentElement[] = [];
  let currentHeight = 0;
  let pageNumber = 1;

  const commitPage = () => {
    if (currentPageElements.length > 0) {
      pages.push({ pageNumber, elements: currentPageElements });
      pageNumber++;
      currentPageElements = [];
      currentHeight = 0;
    }
  };

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const elHeight = getEstimatedHeight(el);

    if (currentHeight + elHeight <= PaginationConfig.PAGE_MAX_HEIGHT) {
      currentPageElements.push(el);
      currentHeight += elHeight;
    } else {
      // Element exceeds remaining space.
      const remaining = PaginationConfig.PAGE_MAX_HEIGHT - currentHeight;

      // Protection: Avoid orphan headings
      if (el.type === 'section') {
        commitPage();
        currentPageElements.push(el);
        currentHeight += elHeight;
        continue;
      }

      // Protection: If very little space remains, just break page
      if (remaining < 80) {
        commitPage();
        i--; // Re-process this element on new page
        continue;
      }

      // Splitting logic for specific types
      if (el.type === 'paragraph') {
        const charsThatFit = Math.floor((remaining - PaginationConfig.PARAGRAPH_MARGIN) / PaginationConfig.LINE_HEIGHT_PX) * PaginationConfig.CHARS_PER_LINE;
        if (charsThatFit < 100) {
          commitPage();
          i--;
          continue;
        }
        // Find safe split point (nearest space)
        let splitIndex = el.text.lastIndexOf(' ', charsThatFit);
        if (splitIndex === -1) splitIndex = charsThatFit;

        const part1 = el.text.substring(0, splitIndex);
        const part2 = el.text.substring(splitIndex).trimStart();

        currentPageElements.push({ type: 'paragraph', text: part1 });
        commitPage();
        elements.splice(i + 1, 0, { type: 'paragraph', text: part2 });
      } 
      else if (el.type === 'table') {
        // We need at least 100px for header + 1 row
        if (remaining < 100) {
          commitPage();
          i--;
          continue;
        }

        // Split table rows
        let used = PaginationConfig.TABLE_HEADER_HEIGHT;
        let splitRowIndex = 0;
        
        for (let r = 0; r < el.rows.length; r++) {
          const row = el.rows[r];
          let maxLines = 1;
          for (const cell of row) maxLines = Math.max(maxLines, Math.ceil(cell.length / PaginationConfig.CHARS_PER_CELL));
          const rowHeight = maxLines * PaginationConfig.LINE_HEIGHT_PX + PaginationConfig.TABLE_ROW_PADDING;
          
          if (used + rowHeight > remaining && splitRowIndex > 0) {
            break;
          }
          used += rowHeight;
          splitRowIndex++;
        }

        if (splitRowIndex === 0) {
          commitPage();
          i--;
          continue;
        }

        const tablePart1: ContentElement = { ...el, rows: el.rows.slice(0, splitRowIndex) };
        const tablePart2: ContentElement = { ...el, rows: el.rows.slice(splitRowIndex), caption: `${el.caption || ''} (Continuação)` };

        currentPageElements.push(tablePart1);
        commitPage();
        elements.splice(i + 1, 0, tablePart2);
      }
      else if (el.type === 'list') {
        if (remaining < 80) {
          commitPage();
          i--;
          continue;
        }
        let used = 24;
        let splitIndex = 0;
        for (let j = 0; j < el.items.length; j++) {
          const itemHeight = Math.ceil(el.items[j].length / PaginationConfig.CHARS_PER_LINE) * PaginationConfig.LINE_HEIGHT_PX;
          if (used + itemHeight > remaining && splitIndex > 0) break;
          used += itemHeight;
          splitIndex++;
        }

        if (splitIndex === 0) {
          commitPage();
          i--;
          continue;
        }

        const listPart1: ContentElement = { ...el, items: el.items.slice(0, splitIndex) };
        const listPart2: ContentElement = { ...el, items: el.items.slice(splitIndex) };

        currentPageElements.push(listPart1);
        commitPage();
        elements.splice(i + 1, 0, listPart2);
      }
      else {
        // Cannot cleanly split questions/exercises, just push to next page
        commitPage();
        i--;
      }
    }
  }
  
  commitPage();
  return pages;
}
