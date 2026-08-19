import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-[#EFECE6] bg-[#FBF9F5] py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Name & Title */}
          <div>
            <span className="font-bold text-[#1B201E] block text-base">
              {personalInfo.name}
            </span>
            <span className="text-xs text-[#7E8681]">
              {personalInfo.title}
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="text-xs text-[#7E8681]">
            © {new Date().getFullYear()} {personalInfo.name}
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-4 text-xs font-semibold text-[#4A524D]">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2D5A43] transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2D5A43] transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={personalInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2D5A43] transition-colors"
            >
              Facebook
            </a>
            <span>·</span>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="hover:text-[#2D5A43] transition-colors"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

