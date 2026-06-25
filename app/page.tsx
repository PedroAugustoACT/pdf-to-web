import { getAllChaptersMeta } from '@/lib/content-utils';
import { documentMeta } from '@/content/metadata';
import { DocumentViewer } from '@/components/document/DocumentViewer';
import { TableOfContents } from '@/components/document/TableOfContents';
import { DocumentPage } from '@/components/document/DocumentPage';
import { ChapterPagesChart } from '@/components/charts/ChapterPagesChart';

export const metadata = {
  title: `Sumário - ${documentMeta.title}`,
};

export default function Home() {
  const chapters = getAllChaptersMeta();
  
  return (
    <DocumentViewer>
      <DocumentPage pageNumber={0} showHeader={false} showFooter={false}>
        <TableOfContents chapters={chapters} documentMeta={documentMeta} />
      </DocumentPage>
      <ChapterPagesChart chapters={chapters} />
    </DocumentViewer>
  );
}
