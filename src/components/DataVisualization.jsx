import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from 'recharts';
import { dataInMotionMetrics } from '../data/portfolioData';

export default function DataVisualization() {
  const [activeTab, setActiveTab] = useState('line');

  const SOFT_COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];

  return (
    <section id="data-in-motion" className="py-20 border-t border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-2">
            Data Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
            Data in Motion
          </h2>
          <p className="mt-2 text-sm text-slate-600 font-sans">
            Sample interactive visualizations demonstrating model evaluation curves, feature rankings, and cluster analyses.
          </p>
        </div>

        {/* Clean KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {dataInMotionMetrics.kpis.map((kpi, idx) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="minimal-panel p-5 bg-white"
            >
              <span className="text-xs font-mono text-slate-500 block mb-1">
                {kpi.label}
              </span>
              <div className="text-2xl font-bold font-display text-slate-900">
                {kpi.value}
              </div>
              <span className="text-xs text-blue-600 font-sans block mt-1">
                {kpi.change}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Chart Panel Container */}
        <div className="minimal-panel p-6 sm:p-8 bg-white">
          
          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <h3 className="text-lg font-bold font-display text-slate-900">
              Interactive Analytics Preview
            </h3>

            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('line')}
                className={`px-3 py-1.5 rounded-md text-xs font-sans font-medium transition-all ${
                  activeTab === 'line'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Loss & Accuracy
              </button>
              <button
                onClick={() => setActiveTab('bar')}
                className={`px-3 py-1.5 rounded-md text-xs font-sans font-medium transition-all ${
                  activeTab === 'bar'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Feature Importance
              </button>
              <button
                onClick={() => setActiveTab('scatter')}
                className={`px-3 py-1.5 rounded-md text-xs font-sans font-medium transition-all ${
                  activeTab === 'scatter'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Scatter Clusters
              </button>
            </div>
          </div>

          {/* Chart Frame */}
          <div className="w-full h-80 sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              {activeTab === 'line' ? (
                <LineChart data={dataInMotionMetrics.trainingCurve}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="epoch" stroke="#64748b" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis yAxisId="left" stroke="#64748b" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis yAxisId="right" orientation="right" stroke="#64748b" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Line yAxisId="left" type="monotone" dataKey="trainingLoss" name="Training Loss" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="accuracy" name="Accuracy (%)" stroke="#059669" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              ) : activeTab === 'bar' ? (
                <BarChart data={dataInMotionMetrics.featureImportance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis type="number" stroke="#64748b" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis dataKey="feature" type="category" stroke="#64748b" width={160} tick={{ fontSize: 11, fill: '#64748b' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px' }} />
                  <Bar dataKey="importance" name="Importance Score" radius={[0, 4, 4, 0]}>
                    {dataInMotionMetrics.featureImportance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={SOFT_COLORS[index % SOFT_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              ) : (
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis type="number" dataKey="x" name="Dimension X" stroke="#64748b" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis type="number" dataKey="y" name="Dimension Y" stroke="#64748b" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px' }} />
                  <Scatter name="Data Points" data={dataInMotionMetrics.clusterData} fill="#2563eb" />
                </ScatterChart>
              )}
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </section>
  );
}
