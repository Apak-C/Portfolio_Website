import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Tag */}
        <span className="text-xs font-bold tracking-[0.2em] text-[#7E8681] uppercase block mb-3">
          ABOUT ME
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B201E] leading-[1.25] tracking-tight">
              Curious about data,<br />
              dedicated to <span className="text-[#2D5A43]">continuous growth.</span>
            </h2>

            <p className="text-base text-[#4A524D] leading-relaxed font-normal">
              {personalInfo.aboutBio}
            </p>
          </div>

          {/* Right Column: White Card with Education & Location Info Rows */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#EFECE6] rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-6"
            >
              {/* Education Row */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4F0] flex items-center justify-center shrink-0 text-[#2D5A43]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold tracking-wide text-[#7E8681] uppercase block">
                    Education
                  </span>
                  <h4 className="text-base font-bold text-[#1B201E]">
                    Mapúa University – Makati
                  </h4>
                  <p className="text-xs text-[#7E8681] font-medium">
                    Bachelor of Science in Computer Science
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#EFECE6] w-full" />

              {/* Location Row */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4F0] flex items-center justify-center shrink-0 text-[#2D5A43]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold tracking-wide text-[#7E8681] uppercase block">
                    Location
                  </span>
                  <h4 className="text-base font-bold text-[#1B201E]">
                    Taguig, Philippines
                  </h4>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

