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
 * Chapter 5 chart — Horizontal bar chart showing OSI model layers.
 * Data source: Table 5.1 from the chapter content (7 OSI layers).
 *
 * Each layer is scored by its relative scope/responsibility breadth (1-10).
 */

const OSI_DATA = [
  { layer: '7 - Aplicação', scope: 9, color: '#1a3c6e', example: 'HTTP, FTP, SMTP' },
  { layer: '6 - Apresentação', scope: 6, color: '#2d5a94', example: 'SSL/TLS, JPEG' },
  { layer: '5 - Sessão', scope: 5, color: '#4178b4', example: 'Sockets, NetBIOS' },
  { layer: '4 - Transporte', scope: 8, color: '#5a93c9', example: 'TCP, UDP' },
  { layer: '3 - Rede', scope: 8, color: '#7aadda', example: 'IP, ICMP' },
  { layer: '2 - Enlace', scope: 7, color: '#96c5e8', example: 'Ethernet, Switch' },
  { layer: '1 - Física', scope: 4, color: '#b0d8f2', example: 'Fibra, RJ45' },
];

export function OsiModelChart() {
  return (
    <ChartContainer
      title="Modelo OSI — Abrangência por Camada"
      subtitle="Escopo funcional relativo de cada camada (1–10) — dados da Tabela 5.1"
      ariaLabel="Gráfico de barras horizontais mostrando a abrangência funcional de cada camada do modelo OSI"
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={OSI_DATA}
          layout="vertical"
          margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            type="number"
            domain={[0, 10]}
            tick={{ fontFamily: 'var(--doc-font-body)', fontSize: 11, fill: '#555' }}
            label={{
              value: 'Abrangência Funcional',
              position: 'insideBottom',
              offset: -4,
              style: { fontFamily: 'var(--doc-font-body)', fontSize: 10, fill: '#555' },
            }}
          />
          <YAxis
            dataKey="layer"
            type="category"
            width={120}
            tick={{ fontFamily: 'var(--doc-font-body)', fontSize: 10, fill: '#555' }}
          />
          <Tooltip
            formatter={(_value, _name, props) => [
              (props.payload as { example: string }).example,
              'Protocolos',
            ]}
            contentStyle={{
              fontFamily: 'var(--doc-font-body)',
              fontSize: '10pt',
              borderColor: '#ccc',
              borderRadius: 4,
            }}
          />
          <Bar dataKey="scope" radius={[0, 4, 4, 0]}>
            {OSI_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
