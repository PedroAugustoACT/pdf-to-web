'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { ChartContainer } from './ChartContainer';

/**
 * Chapter 2 chart — Bar chart showing Big-O complexity growth at n=100.
 * Data source: Table 2.1 from the chapter content (Big-O classifications).
 *
 * Uses log scale to make the extreme exponential values visible
 * alongside constant/linear ones.
 */

const BIG_O_DATA = [
  { notation: 'O(1)', ops: 1, label: '1 operação', color: '#2d7d46' },
  { notation: 'O(log n)', ops: 7, label: '~7 operações', color: '#4caf50' },
  { notation: 'O(n)', ops: 100, label: '100 operações', color: '#ff9800' },
  { notation: 'O(n log n)', ops: 664, label: '~664 operações', color: '#f57c00' },
  { notation: 'O(n²)', ops: 10000, label: '10.000 operações', color: '#f44336' },
  { notation: 'O(2ⁿ)', ops: 1267650600228229400, label: '~1.27×10¹⁸ operações', color: '#b71c1c' },
];

// For visual display we use a capped log scale to keep bars readable
const DISPLAY_DATA = BIG_O_DATA.map(d => ({
  ...d,
  displayValue: Math.log10(d.ops + 1),
}));

export function BigOComplexityChart() {
  return (
    <ChartContainer
      title="Crescimento da Complexidade Big-O"
      subtitle="Número de operações para n = 100 (escala logarítmica) — dados da Tabela 2.1"
      ariaLabel="Gráfico de barras mostrando o crescimento do número de operações para cada classe de complexidade Big-O"
    >
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={DISPLAY_DATA}
          margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="notation"
            tick={{ fontFamily: 'var(--doc-font-mono)', fontSize: 11, fill: '#555' }}
          />
          <YAxis
            tick={{ fontFamily: 'var(--doc-font-body)', fontSize: 10, fill: '#555' }}
            label={{
              value: 'log₁₀(operações)',
              angle: -90,
              position: 'insideLeft',
              offset: -2,
              style: { fontFamily: 'var(--doc-font-body)', fontSize: 10, fill: '#555' },
            }}
          />
          <Tooltip
            formatter={(_value, _name, props) => [
              (props.payload as { label: string }).label,
              'n = 100',
            ]}
            contentStyle={{
              fontFamily: 'var(--doc-font-body)',
              fontSize: '10pt',
              borderColor: '#ccc',
              borderRadius: 4,
            }}
          />
          <Bar dataKey="displayValue" radius={[4, 4, 0, 0]}>
            {DISPLAY_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
