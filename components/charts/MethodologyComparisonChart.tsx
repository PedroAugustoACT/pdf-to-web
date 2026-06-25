'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartContainer } from './ChartContainer';

/**
 * Chapter 3 chart — Grouped bar chart comparing Waterfall vs. Agile.
 * Data source: Table 3.1 from the chapter content (Methodology comparison matrix).
 *
 * Dimensions are scored 1-5 based on the qualitative descriptions in the table.
 */

const COMPARISON_DATA = [
  { dimension: 'Flexibilidade', waterfall: 1, agile: 5 },
  { dimension: 'Engajamento', waterfall: 2, agile: 5 },
  { dimension: 'Manejo de Mudanças', waterfall: 1, agile: 5 },
  { dimension: 'Risco Isolado', waterfall: 1, agile: 4 },
  { dimension: 'Documentação', waterfall: 5, agile: 2 },
];

export function MethodologyComparisonChart() {
  return (
    <ChartContainer
      title="Cascata vs. Ágil — Comparativo"
      subtitle="Avaliação qualitativa em escala 1–5 por dimensão — dados da Tabela 3.1"
      ariaLabel="Gráfico de barras agrupadas comparando metodologias Cascata e Ágil em 5 dimensões"
    >
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={COMPARISON_DATA}
          margin={{ top: 8, right: 16, left: 0, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="dimension"
            tick={{ fontFamily: 'var(--doc-font-body)', fontSize: 10, fill: '#555' }}
            interval={0}
            angle={-15}
            textAnchor="end"
            height={50}
          />
          <YAxis
            domain={[0, 5]}
            ticks={[0, 1, 2, 3, 4, 5]}
            tick={{ fontFamily: 'var(--doc-font-body)', fontSize: 11, fill: '#555' }}
            label={{
              value: 'Pontuação',
              angle: -90,
              position: 'insideLeft',
              style: { fontFamily: 'var(--doc-font-body)', fontSize: 11, fill: '#555' },
            }}
          />
          <Tooltip
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
          <Bar dataKey="waterfall" name="Cascata" fill="#8b6914" radius={[3, 3, 0, 0]} />
          <Bar dataKey="agile" name="Ágil" fill="#1a3c6e" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
