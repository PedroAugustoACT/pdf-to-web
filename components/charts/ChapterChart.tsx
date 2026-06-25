'use client';

import React from 'react';
import { ContentDistributionChart } from './ContentDistributionChart';
import { BigOComplexityChart } from './BigOComplexityChart';
import { MethodologyComparisonChart } from './MethodologyComparisonChart';
import { DatabaseComparisonChart } from './DatabaseComparisonChart';
import { OsiModelChart } from './OsiModelChart';
import { OwaspRiskChart } from './OwaspRiskChart';
import { ContentElement } from '@/content/types';

interface ChapterChartProps {
  chapterId: string;
  elements: ContentElement[];
}

/** Type labels in Portuguese for the content distribution chart */
const ELEMENT_TYPE_LABELS: Record<string, { name: string; color: string }> = {
  'paragraph': { name: 'Parágrafos', color: '#1a3c6e' },
  'section': { name: 'Seções', color: '#4178b4' },
  'list': { name: 'Listas', color: '#2d7d46' },
  'table': { name: 'Tabelas', color: '#ff9800' },
  'question': { name: 'Questões', color: '#f44336' },
  'exercise': { name: 'Exercícios', color: '#8b6914' },
  'chapter-title': { name: 'Título', color: '#9bc5e8' },
};

/**
 * Renders the appropriate chart for a given chapter ID.
 * This component is the single integration point between
 * chapter pages and the chart system.
 */
export function ChapterChart({ chapterId, elements }: ChapterChartProps) {
  switch (chapterId) {
    case '1': {
      // Compute content distribution from the elements
      const counts: Record<string, number> = {};
      for (const el of elements) {
        counts[el.type] = (counts[el.type] || 0) + 1;
      }
      const distribution = Object.entries(counts)
        .filter(([type]) => type !== 'spacer')
        .map(([type, value]) => ({
          name: ELEMENT_TYPE_LABELS[type]?.name || type,
          value,
          color: ELEMENT_TYPE_LABELS[type]?.color || '#999',
        }))
        .sort((a, b) => b.value - a.value);

      return <ContentDistributionChart distribution={distribution} />;
    }
    case '2':
      return <BigOComplexityChart />;
    case '3':
      return <MethodologyComparisonChart />;
    case '4':
      return <DatabaseComparisonChart />;
    case '5':
      return <OsiModelChart />;
    case '6':
      return <OwaspRiskChart />;
    default:
      return null;
  }
}
