import React from 'react';

interface ParagraphProps {
  text: string;
}

export function Paragraph({ text }: ParagraphProps) {
  return <p className="doc-body">{text}</p>;
}
