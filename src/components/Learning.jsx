import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Learning() {
  return (
    <section className="py-20 border-t border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
            Growth Philosophy
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
            Always Learning. Always Improving.
          </h2>

          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl font-sans text-slate-700 leading-relaxed italic max-w-3xl mx-auto pt-2"
          >
            "{personalInfo.learningQuote}"
          </motion.blockquote>

        </div>
      </div>
    </section>
  );
}
