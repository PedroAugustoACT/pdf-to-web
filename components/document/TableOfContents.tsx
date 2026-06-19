import React from 'react';
import Link from 'next/link';
import { ChapterMeta, DocumentMeta } from '@/content/types';

interface TableOfContentsProps {
  chapters: ChapterMeta[];
  documentMeta: DocumentMeta;
}

export function TableOfContents({ chapters, documentMeta }: TableOfContentsProps) {
  return (
    <div className="w-full pt-16">
      <div className="mb-16 border-b border-[color:var(--doc-color-border)] pb-8 text-center">
        <h1 className="doc-h1 doc-mb-small">{documentMeta.title}</h1>
        {documentMeta.subtitle && (
          <h2 className="text-xl doc-text-muted doc-font-body italic">{documentMeta.subtitle}</h2>
        )}
      </div>

      <h2 className="doc-h2 text-center doc-mb-large">Sumário</h2>

      <div className="flex flex-col space-y-6 max-w-xl mx-auto w-full">
        {chapters.map((chapter, index) => (
          <div key={chapter.id} className="flex items-end justify-between group">
            <Link
              href={`/chapter/${chapter.id}`}
              className="flex-1 flex items-end no-underline text-[color:var(--doc-color-text)] doc-font-body text-lg group-hover:text-[color:var(--doc-color-accent)]"
            >
              <span className="font-bold mr-4 shrink-0">Capítulo {index + 1}</span>
              <span className="shrink-0">{chapter.title}</span>
              <span className="flex-1 border-b-2 border-dotted border-[color:var(--doc-color-border)] mx-4 mb-2"></span>
            </Link>
            <span className="shrink-0 doc-font-body font-bold text-[color:var(--doc-color-text)]">{chapter.pageCount} páginas</span>
          </div>
        ))}
      </div>
    </div>
  );
}
