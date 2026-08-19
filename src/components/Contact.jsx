import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Facebook, ExternalLink, Copy, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-[#7E8681] uppercase block mb-3">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B201E] leading-tight tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-base text-[#4A524D] leading-relaxed">
            {personalInfo.contactIntro}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Primary Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-3 bg-white border border-[#EFECE6] rounded-3xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF4F0] text-[#2D5A43] flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#7E8681] block uppercase tracking-wider">
                  Direct Email
                </span>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="text-lg sm:text-xl font-bold text-[#1B201E] hover:text-[#2D5A43] transition-colors break-all"
                >
                  {personalInfo.socials.email}
                </a>
                <p className="text-xs text-[#7E8681]">
                  Click to open your email client, or copy the address.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 md:pt-0">
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="btn-primary py-3 px-5 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-secondary py-3 px-5 text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#2D5A43]" />
                    <span className="text-[#2D5A43]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#7E8681]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* GitHub Card */}
          <motion.a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border border-[#EFECE6] rounded-3xl p-6 sm:p-7 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#2D5A43]/30 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#EEF4F0] text-[#2D5A43] group-hover:bg-[#2D5A43] group-hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#7E8681] block uppercase tracking-wider mb-0.5">
                  GitHub
                </span>
                <span className="text-sm font-bold text-[#1B201E] group-hover:text-[#2D5A43] transition-colors">
                  github.com/Apak-C
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#7E8681] group-hover:text-[#2D5A43] transition-colors" />
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white border border-[#EFECE6] rounded-3xl p-6 sm:p-7 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#2D5A43]/30 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#EEF4F0] text-[#2D5A43] group-hover:bg-[#2D5A43] group-hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#7E8681] block uppercase tracking-wider mb-0.5">
                  LinkedIn
                </span>
                <span className="text-sm font-bold text-[#1B201E] group-hover:text-[#2D5A43] transition-colors">
                  christian-george-warren
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#7E8681] group-hover:text-[#2D5A43] transition-colors" />
          </motion.a>

          {/* Facebook Card */}
          <motion.a
            href={personalInfo.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white border border-[#EFECE6] rounded-3xl p-6 sm:p-7 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#2D5A43]/30 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#EEF4F0] text-[#2D5A43] group-hover:bg-[#2D5A43] group-hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#7E8681] block uppercase tracking-wider mb-0.5">
                  Facebook
                </span>
                <span className="text-sm font-bold text-[#1B201E] group-hover:text-[#2D5A43] transition-colors">
                  facebook.com/nerraw24
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#7E8681] group-hover:text-[#2D5A43] transition-colors" />
          </motion.a>

        </div>

      </div>
    </section>
  );
}

