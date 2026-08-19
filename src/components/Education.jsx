import React from 'react';
import { motion } from 'framer-motion';
import { educationDetails } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-[#7E8681] uppercase block mb-3">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B201E] leading-tight tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#EFECE6] rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold text-[#2D5A43] bg-[#EEF4F0] px-3 py-1 rounded-full uppercase tracking-wider">
                {educationDetails.period}
              </span>
              <span className="text-xs font-medium text-[#7E8681]">
                {educationDetails.location}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#1B201E] mt-2">
              {educationDetails.institution}
            </h3>

            <p className="text-base font-semibold text-[#2D5A43] mt-1">
              {educationDetails.degree}
            </p>

            <p className="mt-4 text-sm text-[#4A524D] leading-relaxed">
              {educationDetails.description}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

