'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartContainer } from './ChartContainer';

interface ContentDistributionChartProps {
  /** Pre-computed counts of each content element type in the chapter */
  distribution: { name: string; value: number; color: string }[];
}

/**
 * Chapter 1 chart — Donut chart showing distribution of content element types.
 * Data source: ContentElement[] already loaded by the chapter page.
 */
export function ContentDistributionChart({ distribution }: ContentDistributionChartProps) {
  return (
    <ChartContainer
      title="Composição do Capítulo"
      subtitle="Distribuição dos tipos de conteúdo — proporção entre teoria, exercícios e recursos visuais"
      ariaLabel="Gráfico de rosca mostrando a distribuição dos tipos de conteúdo do capítulo 1"
    >
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={distribution}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) =>
              `${name} (${((percent ?? 0) * 100).toFixed(0)}%)`
            }
            labelLine={{ stroke: '#999' }}
          >
            {distribution.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value} elementos`]}
            contentStyle={{
              fontFamily: 'var(--doc-font-body)',
              fontSize: '10pt',
              borderColor: '#ccc',
              borderRadius: 4,
            }}
          />
          <Legend
            wrapperStyle={{
              fontFamily: 'var(--doc-font-body)',
              fontSize: '10pt',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
