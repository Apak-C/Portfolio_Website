import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowRight, X } from 'lucide-react';
import { extraCurricularProjects } from '../data/portfolioData';

export default function ExtraCurriculum() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="extracurriculum" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#7E8681] uppercase block mb-3">
            EXTRACURRICULAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B201E] leading-tight tracking-tight">
            ExtraCurriculum
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraCurricularProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-[#EFECE6] rounded-3xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all group"
            >
              <div className="space-y-4">
                {/* Category Pill */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block text-[11px] font-bold tracking-wider text-[#2D5A43] bg-[#EEF4F0] px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                  {project.subtitle && (
                    <span className="text-[11px] font-medium text-[#7E8681]">
                      {project.subtitle}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#1B201E] leading-snug group-hover:text-[#2D5A43] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A524D] leading-relaxed">
                  {project.summary}
                </p>

                {/* Role / Key Contribution Highlight */}
                {project.contribution && (
                  <div className="p-3 rounded-2xl bg-[#FBF9F5] border border-[#EFECE6] text-xs text-[#2D5A43] font-semibold">
                    <span>{project.contribution}</span>
                  </div>
                )}

                {/* Tech Stack string */}
                <p className="text-xs font-semibold text-[#7E8681] pt-1">
                  {project.techList}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex items-center justify-between border-t border-[#EFECE6] mt-6">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-bold text-[#1B201E] hover:text-[#2D5A43] flex items-center gap-1.5 transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#7E8681] hover:text-[#1B201E] flex items-center gap-1 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B201E]/40 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-[#EFECE6] rounded-3xl max-w-xl w-full p-7 sm:p-9 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-[#7E8681] hover:text-[#1B201E] hover:bg-[#EEF4F0] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-wider text-[#2D5A43] bg-[#EEF4F0] px-3 py-1 rounded-full uppercase inline-block">
                    {activeModalProject.category}
                  </span>
                  {activeModalProject.subtitle && (
                    <span className="text-xs font-medium text-[#7E8681]">
                      • {activeModalProject.subtitle}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[#1B201E] mb-2">
                  {activeModalProject.title}
                </h3>

                {activeModalProject.contribution && (
                  <p className="text-xs font-semibold text-[#2D5A43] mb-4">
                    {activeModalProject.contribution}
                  </p>
                )}

                <div className="space-y-4 text-xs sm:text-sm text-[#4A524D]">
                  <div>
                    <strong className="text-[#1B201E] block font-bold mb-1">Problem:</strong>
                    <p className="bg-[#FBF9F5] p-4 rounded-2xl border border-[#EFECE6] leading-relaxed">
                      {activeModalProject.problem}
                    </p>
                  </div>

                  <div>
                    <strong className="text-[#1B201E] block font-bold mb-1">Solution:</strong>
                    <p className="bg-[#FBF9F5] p-4 rounded-2xl border border-[#EFECE6] leading-relaxed">
                      {activeModalProject.solution}
                    </p>
                  </div>

                  <div>
                    <strong className="text-[#1B201E] block font-bold mb-1">Technologies & Tools:</strong>
                    <p className="text-xs font-semibold text-[#2D5A43]">
                      {activeModalProject.techList}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#EFECE6] flex items-center justify-end gap-3">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
