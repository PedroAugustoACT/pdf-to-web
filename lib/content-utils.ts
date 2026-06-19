import { ChapterData, ChapterMeta } from '@/content/types';
import { allChapters, allChaptersMeta } from '@/content/chapters';

export function getChapterById(id: string): ChapterData | undefined {
  return allChapters.find(ch => ch.id === id);
}

export function getAllChapterIds(): string[] {
  return allChapters.map(ch => ch.id);
}

export function getAllChaptersMeta(): ChapterMeta[] {
  return allChaptersMeta;
}
