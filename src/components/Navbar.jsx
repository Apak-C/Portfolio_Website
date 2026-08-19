import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md py-4 border-b border-[#EFECE6]'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="text-2xl font-extrabold text-[#1B201E] tracking-tight hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            CW
          </a>

          {/* Clean Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`text-sm font-semibold relative py-1 transition-colors ${
                    isActive ? 'text-[#1B201E]' : 'text-[#4A524D] hover:text-[#1B201E]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#2D5A43] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1B201E] hover:bg-[#EFECE6] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#EFECE6] px-6 py-5 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveSection(link.id);
                setMobileMenuOpen(false);
              }}
              className="block text-base font-semibold text-[#1B201E] py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

