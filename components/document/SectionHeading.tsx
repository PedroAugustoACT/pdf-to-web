import React from 'react';

interface SectionHeadingProps {
  level: 2 | 3 | 4;
  title: string;
  number?: string;
}

export function SectionHeading({ level, title, number }: SectionHeadingProps) {
  const content = number ? `${number} ${title}` : title;
  
  if (level === 2) return <h2 className="doc-h2">{content}</h2>;
  if (level === 3) return <h3 className="doc-h3">{content}</h3>;
  return <h4 className="doc-h4">{content}</h4>;
}
