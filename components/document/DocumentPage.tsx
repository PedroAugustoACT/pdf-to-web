import React from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';

interface DocumentPageProps {
  pageNumber: number;
  chapterTitle?: string;
  documentTitle?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
}

export function DocumentPage({
  pageNumber,
  chapterTitle,
  documentTitle,
  showHeader = true,
  showFooter = true,
  children,
}: DocumentPageProps) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className="doc-page">
      {showHeader ? (
        <PageHeader chapterTitle={chapterTitle} pageNumber={pageNumber} />
      ) : (
        <div style={{ height: 'var(--doc-page-margin-top)', flexShrink: 0 }} />
      )}
      
      <div className={`doc-content-area ${isDev ? 'dev-overflow-detector' : ''}`}>
        {children}
      </div>

      {showFooter ? (
        <PageFooter pageNumber={pageNumber} documentTitle={documentTitle} />
      ) : (
        <div style={{ height: 'var(--doc-page-margin-bottom)', flexShrink: 0 }} />
      )}
    </div>
  );
}
