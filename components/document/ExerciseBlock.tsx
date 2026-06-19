import React from 'react';

interface ExerciseBlockProps {
  number: number;
  title: string;
  instructions: string;
  items: string[];
}

export function ExerciseBlock({ number, title, instructions, items }: ExerciseBlockProps) {
  return (
    <div className="bg-[var(--doc-color-exercise-bg)] border border-[color:var(--doc-color-border)] p-6 mb-8 rounded-sm">
      <h3 className="font-bold mb-2 text-lg text-[color:var(--doc-color-heading)] doc-font-heading">
        Exercício {number} — {title}
      </h3>
      <p className="doc-body mb-4">{instructions}</p>
      <ol className="list-decimal pl-6 space-y-2 doc-body">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
