import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExtraCurriculum from './components/ExtraCurriculum';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-fafafa text-slate-800 selection:bg-blue-600 selection:text-white relative">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExtraCurriculum />
        <Learning />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
