import { ChapterData, ChapterMeta } from '@/content/types';
import { paginateElements } from '@/lib/pagination';
import { chapter01 } from './chapter-01';
import { chapter02 } from './chapter-02';
import { chapter03 } from './chapter-03';
import { chapter04 } from './chapter-04';
import { chapter05 } from './chapter-05';
import { chapter06 } from './chapter-06';

export const allChapters: ChapterData[] = [
  chapter01,
  chapter02,
  chapter03,
  chapter04,
  chapter05,
  chapter06
];

export const allChaptersMeta: ChapterMeta[] = allChapters.map(ch => ({
  id: ch.id,
  title: ch.title,
  pageCount: paginateElements(ch.pages.flatMap(p => p.elements)).length,
}));
