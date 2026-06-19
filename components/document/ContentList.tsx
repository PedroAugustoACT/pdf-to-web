import React from 'react';

interface ContentListProps {
  items: string[];
  ordered: boolean;
}

export function ContentList({ items, ordered }: ContentListProps) {
  const ListTag = ordered ? 'ol' : 'ul';
  const listClass = ordered ? 'list-decimal' : 'list-disc';
  
  return (
    <ListTag className={`${listClass} pl-8 mb-6 space-y-1 doc-body`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ListTag>
  );
}
