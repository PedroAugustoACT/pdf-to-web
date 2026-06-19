import React from 'react';
import { PageContent } from '@/content/types';
import { DocumentPage } from './DocumentPage';
import { ContentRenderer } from './ContentRenderer';

interface DocumentViewerProps {
  pages?: PageContent[];
  chapterTitle?: string;
  documentTitle?: string;
  children?: React.ReactNode;
}

export function DocumentViewer({ pages = [], chapterTitle, documentTitle, children }: DocumentViewerProps) {
  return (
    <div className="doc-viewer">
      {pages.map((page) => (
        <DocumentPage
          key={page.pageNumber}
          pageNumber={page.pageNumber}
          chapterTitle={chapterTitle}
          documentTitle={documentTitle}
        >
          {page.elements.map((element, index) => (
            <ContentRenderer key={index} element={element} />
          ))}
        </DocumentPage>
      ))}
      {children}
    </div>
  );
}
