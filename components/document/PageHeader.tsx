import React from 'react';

interface PageHeaderProps {
  chapterTitle?: string;
  pageNumber: number;
}

export function PageHeader({ chapterTitle, pageNumber }: PageHeaderProps) {
  return (
    <div className="doc-page-header">
      <span className="doc-header-text">{chapterTitle || ''}</span>
      <span className="doc-header-text">{pageNumber}</span>
    </div>
  );
}
