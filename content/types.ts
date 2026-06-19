export type ContentElement =
  | { type: 'chapter-title'; number: number; title: string; subtitle?: string }
  | { type: 'section'; level: 2 | 3 | 4; title: string; number?: string }
  | { type: 'paragraph'; text: string }
  | { type: 'question'; number: number; text: string; options?: string[]; questionType?: 'open' | 'multiple-choice' }
  | { type: 'exercise'; number: number; title: string; instructions: string; items: string[] }
  | { type: 'list'; items: string[]; ordered: boolean }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'spacer'; height: number };

export interface PageContent {
  pageNumber: number;
  elements: ContentElement[];
}

export interface ChapterData {
  id: string;
  title: string;
  pages: PageContent[];
}

export interface ChapterMeta {
  id: string;
  title: string;
  pageCount: number;
}

export interface DocumentMeta {
  title: string;
  subtitle?: string;
  author?: string;
  edition?: string;
}
