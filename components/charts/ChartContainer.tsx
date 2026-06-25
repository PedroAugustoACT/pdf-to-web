'use client';

import React from 'react';

interface ChartContainerProps {
  title: string;
  subtitle: string;
  ariaLabel: string;
  children: React.ReactNode;
}

/**
 * Shared wrapper for all chart sections.
 * Renders outside the paginated DocumentViewer flow
 * with consistent styling and accessibility attributes.
 */
export function ChartContainer({ title, subtitle, ariaLabel, children }: ChartContainerProps) {
  return (
    <section className="chart-section" role="img" aria-label={ariaLabel}>
      <h3 className="chart-section__title">{title}</h3>
      <p className="chart-section__subtitle">{subtitle}</p>
      <div className="chart-section__body">
        {children}
      </div>
    </section>
  );
}
