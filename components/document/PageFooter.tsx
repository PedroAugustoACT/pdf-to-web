import React from 'react';

interface PageFooterProps {
  pageNumber: number;
  documentTitle?: string;
}

export function PageFooter({ pageNumber, documentTitle }: PageFooterProps) {
  return (
    <div className="doc-page-footer">
      <span className="doc-footer-text">
        {documentTitle ? `${documentTitle} — ` : ''}{pageNumber}
      </span>
    </div>
  );
}
