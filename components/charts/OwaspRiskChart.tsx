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
 * Chapter 6 chart — Horizontal bar chart showing OWASP Top 10 risk severity.
 * Data source: Table 6.2 from the chapter content (OWASP Top 10 partial).
 *
 * Severity scored 1-10 (inverted from position — rank 1 is most severe = 10).
 */

const OWASP_DATA = [
  {
    risk: 'Controle de Acesso',
    severity: 10,
    position: '1º',
    color: '#b71c1c',
  },
  {
    risk: 'Falhas Criptográficas',
    severity: 9,
    position: '2º',
    color: '#d32f2f',
  },
  {
    risk: 'Injeção (SQL/NoSQL)',
    severity: 8,
    position: '3º',
    color: '#f44336',
  },
  {
    risk: 'Design Inseguro',
    severity: 7,
    position: '4º',
    color: '#ef5350',
  },
];

export function OwaspRiskChart() {
  return (
    <ChartContainer
      title="OWASP Top 10 — Severidade dos Riscos"
      subtitle="Classificação de severidade por posição analítica — dados da Tabela 6.2"
      ariaLabel="Gráfico de barras horizontais mostrando a severidade dos riscos OWASP Top 10"
    >
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={OWASP_DATA}
          layout="vertical"
          margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            type="number"
            domain={[0, 10]}
            tick={{ fontFamily: 'var(--doc-font-body)', fontSize: 11, fill: '#555' }}
            label={{
              value: 'Severidade',
              position: 'insideBottom',
              offset: -4,
              style: { fontFamily: 'var(--doc-font-body)', fontSize: 10, fill: '#555' },
            }}
          />
          <YAxis
            dataKey="risk"
            type="category"
            width={140}
            tick={{ fontFamily: 'var(--doc-font-body)', fontSize: 10, fill: '#555' }}
          />
          <Tooltip
            formatter={(value, _name, props) => [
              `Severidade: ${value}/10`,
              `Posição: ${(props.payload as { position: string }).position}`,
            ]}
            contentStyle={{
              fontFamily: 'var(--doc-font-body)',
              fontSize: '10pt',
              borderColor: '#ccc',
              borderRadius: 4,
            }}
          />
          <Bar dataKey="severity" radius={[0, 4, 4, 0]}>
            {OWASP_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
