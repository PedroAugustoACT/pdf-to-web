import React from 'react';

interface ContentTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export function ContentTable({ headers, rows, caption }: ContentTableProps) {
  return (
    <div className="mb-8">
      <table className="w-full text-left border-collapse border border-[color:var(--doc-color-border)]">
        {caption && (
          <caption className="caption-top mb-2 text-sm doc-text-muted text-left doc-font-body">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b border-[color:var(--doc-color-border)]">
            {headers.map((h, i) => (
              <th key={i} className="p-2 font-bold uppercase text-[length:10pt] text-[color:var(--doc-color-heading)] border-r border-[color:var(--doc-color-border)] last:border-0 doc-font-body">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-[color:var(--doc-color-border)] last:border-0 even:bg-[var(--doc-color-table-stripe)]">
              {row.map((cell, c) => (
                <td key={c} className="p-2 border-r border-[color:var(--doc-color-border)] last:border-0 doc-font-body text-[length:var(--doc-font-size-body)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
