import { notFound } from 'next/navigation';
import { getChapterById, getAllChapterIds } from '@/lib/content-utils';
import { documentMeta } from '@/content/metadata';
import { DocumentViewer } from '@/components/document/DocumentViewer';
import { paginateElements } from '@/lib/pagination';
import { ChapterChart } from '@/components/charts/ChapterChart';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = getAllChapterIds();
  return ids.map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const chapter = getChapterById(id);
  
  if (!chapter) return { title: 'Página não encontrada' };
  
  return {
    title: `${chapter.title} - ${documentMeta.title}`,
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { id } = await params;
  const chapter = getChapterById(id);
  
  if (!chapter) {
    notFound();
  }

  // Flatten the statically authored pages to extract pure elements
  const allElements = chapter.pages.flatMap(p => p.elements);
  
  // Dynamically re-paginate the elements based on precise height heuristics
  const dynamicallyPaginatedPages = paginateElements(allElements);

  return (
    <DocumentViewer 
      pages={dynamicallyPaginatedPages} 
      chapterTitle={chapter.title} 
      documentTitle={documentMeta.title} 
    >
      <ChapterChart chapterId={chapter.id} elements={allElements} />
    </DocumentViewer>
  );
}
