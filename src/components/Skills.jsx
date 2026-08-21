
import { motion } from 'framer-motion';
import { Code2, BarChart3, Brain, PieChart, Database } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  programming: <Code2 className="w-5 h-5 text-[#2D5A43]" />,
  analysis: <BarChart3 className="w-5 h-5 text-[#2D5A43]" />,
  'ml-ai': <Brain className="w-5 h-5 text-[#2D5A43]" />,
  visualization: <PieChart className="w-5 h-5 text-[#2D5A43]" />,
  tools: <Database className="w-5 h-5 text-[#2D5A43]" />
};

const skillLogos = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'Java (Basic Knowledge)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Spring Boot (Basic Knowledge)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  NumPy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'Data Modeling': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/diagramsdotnet.svg',
  'Data Cleaning': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/databricks.svg',
  'Scikit-Learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  LangChain: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg',
  'Power BI': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg',
  Matplotlib: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  Seaborn: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Git / GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Jupyter Notebook': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  Uvicorn: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uvicorn.svg'
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Tag */}
        <span className="text-xs font-bold tracking-[0.2em] text-[#7E8681] uppercase block mb-3">
          TECHNICAL SKILLS
        </span>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1B201E] leading-tight mb-10 tracking-tight">
          Skills & Core Competencies
        </h2>

        {/* Horizontal Row of Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-[#EFECE6] rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-shadow"
            >
              <div>
                {/* Icon Header */}
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4F0] flex items-center justify-center mb-5 shrink-0">
                  {categoryIcons[cat.id] || <Code2 className="w-5 h-5 text-[#2D5A43]" />}
                </div>

                {/* Category Title */}
                <h3 className="text-base font-bold text-[#1B201E] mb-4 leading-snug">
                  {cat.title}
                </h3>

                {/* List of Skills with Logos */}
                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2.5 text-xs text-[#4A524D] font-semibold leading-tight">
                      {skillLogos[skill.name] ? (
                        <img
                          src={skillLogos[skill.name]}
                          alt={skill.name}
                          className="w-4 h-4 object-contain shrink-0"
                          loading="lazy"
                        />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A43] shrink-0" />
                      )}
                      <span className="text-[#1B201E]">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

