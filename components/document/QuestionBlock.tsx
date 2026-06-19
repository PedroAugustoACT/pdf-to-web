import React from 'react';

interface QuestionBlockProps {
  number: number;
  text: string;
  options?: string[];
  questionType?: 'open' | 'multiple-choice';
}

export function QuestionBlock({ number, text, options, questionType }: QuestionBlockProps) {
  return (
    <div className="mb-6">
      <div className="flex gap-2 mb-2">
        <span className="font-bold doc-text-accent doc-font-body text-[length:var(--doc-font-size-body)]">{number}.</span>
        <p className="doc-body doc-mb-none">{text}</p>
      </div>
      
      {options && options.length > 0 && (
        <ol className="list-[lower-alpha] pl-8 space-y-1 doc-body">
          {options.map((opt, i) => (
            <li key={i}>{opt}</li>
          ))}
        </ol>
      )}
      
      {questionType === 'open' && (
        <div className="mt-4 space-y-4">
          <div className="border-b border-[color:var(--doc-color-border)] h-6"></div>
          <div className="border-b border-[color:var(--doc-color-border)] h-6"></div>
          <div className="border-b border-[color:var(--doc-color-border)] h-6"></div>
        </div>
      )}
    </div>
  );
}
