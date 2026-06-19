import React from 'react';

interface ChapterTitleProps {
  number: number;
  title: string;
  subtitle?: string;
}

export function ChapterTitle({ number, title, subtitle }: ChapterTitleProps) {
  return (
    <div className="mb-8 border-b border-[color:var(--doc-color-border)] pb-4">
      <div className="doc-header-text uppercase tracking-wider mb-2">Capítulo {number}</div>
      <h1 className="doc-h1 doc-mb-small">{title}</h1>
      {subtitle && <p className="doc-body doc-text-muted italic mt-2 doc-mb-none">{subtitle}</p>}
    </div>
  );
}
