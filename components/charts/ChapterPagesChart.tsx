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
import { ChapterMeta } from '@/content/types';
import { ChartContainer } from './ChartContainer';

interface ChapterPagesChartProps {
  chapters: ChapterMeta[];
}

const COLORS = [
  '#1a3c6e', '#2d5a94', '#4178b4', '#5a93c9',
  '#7aadda', '#9bc5e8',
];

/**
 * Home page chart — Bar chart showing pages per chapter.
 * Data source: ChapterMeta[] already loaded by the Table of Contents.
 */
export function ChapterPagesChart({ chapters }: ChapterPagesChartProps) {
  const data = chapters.map((ch, index) => ({
    name: `Cap. ${index + 1}`,
    fullName: ch.title,
    pages: ch.pageCount,
  }));

  return (
    <ChartContainer
      title="Visão Geral do Conteúdo"
      subtitle="Número de páginas por capítulo — volume de conteúdo de cada unidade do guia"
      ariaLabel="Gráfico de barras mostrando o número de páginas por capítulo"
    >
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          margin={{ top: 8, right: 16, left: 0, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="name"
            tick={{ fontFamily: 'var(--doc-font-body)', fontSize: 11, fill: '#555' }}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fontFamily: 'var(--doc-font-body)', fontSize: 11, fill: '#555' }}
            label={{
              value: 'Páginas',
              angle: -90,
              position: 'insideLeft',
              style: { fontFamily: 'var(--doc-font-body)', fontSize: 11, fill: '#555' },
            }}
          />
          <Tooltip
            formatter={(value, _name, props) => [
              `${value} páginas`,
              (props.payload as { fullName: string }).fullName,
            ]}
            contentStyle={{
              fontFamily: 'var(--doc-font-body)',
              fontSize: '10pt',
              borderColor: '#ccc',
              borderRadius: 4,
            }}
          />
          <Bar dataKey="pages" radius={[4, 4, 0, 0]}>
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
