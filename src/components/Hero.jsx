import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Brain, Database, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline, Bio & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Small Uppercase Prefix & AI Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#7E8681] uppercase block">
                HELLO, I'M
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4F0] border border-[#2D5A43]/20 text-[#2D5A43] text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#2D5A43] animate-pulse" />
                <span>AI Enthusiast</span>
              </span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#1B201E] tracking-tight leading-[1.12]">
                Christian Warren
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#2D5A43] tracking-tight">
                {personalInfo.title}
              </p>
            </div>

            {/* Bio text */}
            <p className="text-base text-[#4A524D] leading-relaxed max-w-xl font-normal pt-1">
              {personalInfo.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a href="#projects" className="btn-primary">
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#contact" className="btn-secondary">
                <Mail className="w-4 h-4 text-[#1B201E]" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Image Frame with Dotted Grid & Green Crescent Backdrop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">

              {/* Green Arc / Soft Circle Glow Backdrop Behind Right Edge */}
              <div className="absolute -right-8 -bottom-6 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#D8E6DD]/60 blur-xl pointer-events-none -z-10" />
              <div className="absolute -right-4 -bottom-4 w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#CBE2D5] -z-10" />

              {/* Dotted Grid Background Graphic */}
              <div className="absolute -top-4 -right-8 w-32 h-44 bg-dot-pattern opacity-60 -z-10" />

              {/* Profile Image Box with Rounded Corners & Soft Shadow */}
              <div className="w-full h-full rounded-[2rem] bg-white p-2 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.08)] overflow-hidden border border-[#EFECE6]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-[1.6rem] bg-[#F3F0EB]"
                />
              </div>

            </div>
          </motion.div>

        </div>

        {/* AI & Analytics Highlight Strip (Positioned right before About section) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 pt-8 border-t border-[#EFECE6] grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="flex items-center gap-3.5 bg-white border border-[#EFECE6] rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 rounded-xl bg-[#EEF4F0] text-[#2D5A43] flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B201E]">AI Enthusiast</h4>
              <p className="text-xs text-[#7E8681]">Creating intelligent AI-driven applications</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-white border border-[#EFECE6] rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 rounded-xl bg-[#EEF4F0] text-[#2D5A43] flex items-center justify-center shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B201E]">Data Analytics</h4>
              <p className="text-xs text-[#7E8681]">Statistical modeling & SQL pipelines</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-white border border-[#EFECE6] rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 rounded-xl bg-[#EEF4F0] text-[#2D5A43] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B201E]">Rapid Prototyping</h4>
              <p className="text-xs text-[#7E8681]">Building & experimenting through practice</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

