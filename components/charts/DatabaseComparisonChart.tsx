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
 * Chapter 4 chart — Grouped bar chart comparing SQL vs. NoSQL databases.
 * Data source: Table 4.1 from the chapter content (SQL vs NoSQL matrix).
 *
 * Dimensions are scored 1-5 based on the qualitative descriptions in the table.
 */

const COMPARISON_DATA = [
  { dimension: 'Rigidez de Esquema', sql: 5, nosql: 1 },
  { dimension: 'Escalabilidade Hor.', sql: 2, nosql: 5 },
  { dimension: 'Garantias ACID', sql: 5, nosql: 2 },
  { dimension: 'Flexibilidade', sql: 2, nosql: 5 },
  { dimension: 'Análise Big Data', sql: 2, nosql: 5 },
];

export function DatabaseComparisonChart() {
  return (
    <ChartContainer
      title="SQL vs. NoSQL — Comparativo"
      subtitle="Avaliação qualitativa em escala 1–5 por dimensão — dados da Tabela 4.1"
      ariaLabel="Gráfico de barras agrupadas comparando bancos de dados SQL e NoSQL em 5 dimensões"
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
          <Bar dataKey="sql" name="SQL (Relacional)" fill="#1a3c6e" radius={[3, 3, 0, 0]} />
          <Bar dataKey="nosql" name="NoSQL (Distribuído)" fill="#2d7d46" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
