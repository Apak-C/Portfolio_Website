import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Learning() {
  return (
    <section className="py-16 md:py-24 border-t border-[#EFECE6] bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          
          <span className="text-xs font-bold tracking-[0.2em] text-[#7E8681] uppercase block">
            GROWTH PHILOSOPHY
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B201E] leading-tight tracking-tight">
            Always Learning. Always Improving.
          </h2>

          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg text-[#4A524D] leading-relaxed italic pt-2"
          >
            "{personalInfo.learningQuote}"
          </motion.blockquote>

        </div>
      </div>
    </section>
  );
}
