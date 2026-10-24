import React from 'react';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">

        <div className="flex flex-col gap-2">
          {footerContent.taglines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2 md:items-center">
          {footerContent.credential.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <a
            href="#projects"
            className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1"
          >
            View Work
          </a>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <p>Available for opportunities</p>
          <p>{new Date().getFullYear()}</p>
        </div>

      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter select-none text-[#ff2a2a] w-full text-center">
          {personalInfo.brandName}
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">

        {/* Copyright and Motto */}
        <div className="flex flex-col gap-6">
          <a
            href="#contact"
            className="text-[#ff2a2a] font-bold tracking-[0.2em] uppercase underline hover:text-white transition-colors underline-offset-4 decoration-1"
          >
            Contact
          </a>

          <div className="flex flex-col gap-3 text-white/60 font-mono text-[9px] md:text-[10px] tracking-widest">
            {footerContent.copyright.map((line, i) => (
              <p key={i} className="leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-white/60 font-mono text-[9px] md:text-[10px] tracking-widest">
            {footerContent.motto.map((line, i) => (
              <p key={i} className="leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Email and Social Links */}
        <div className="flex flex-col gap-3 md:items-center">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="text-[#ff2a2a] hover:text-blue-500 transition-colors duration-300 underline underline-offset-4 decoration-1 lowercase"
          >
            {personalInfo.emails.primary}
          </a>

          <div className="flex items-center gap-6 mt-2">

            {/* GitHub 🐙 */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-all duration-300 transform hover:scale-125"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            {/* LinkedIn 💼 */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-[#1877F2] transition-all duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Instagram 📸 */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-125"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* Facebook 👥 */}
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-[#1877F2] transition-all duration-300 transform hover:scale-125"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.093 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.71 4.533-4.71 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.93-1.956 1.886v2.278h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.1 24 12.073z" />
              </svg>
            </a>

            {/* Quora ❓ */}
            <a
              href={socialLinks.quora}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-[#B92B27] transition-all duration-300 transform hover:scale-125"
              aria-label="Quora"
              title="Quora"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.378 0C5.19 0 0 5.422 0 12.064c0 6.703 5.19 11.936 12.378 11.936 2.26 0 4.306-.534 6.017-1.485l1.562 1.485h4.04l-3.438-3.26c1.418-2.034 2.197-4.613 2.197-7.557C22.756 6.018 18.45 0 12.378 0zm-.22 20.49c-4.21 0-6.667-3.786-6.667-8.426 0-4.654 2.457-8.54 6.667-8.54 4.213 0 6.666 3.886 6.666 8.54 0 2.08-.428 3.97-1.22 5.43l-2.36-2.24h-3.84l3.91 3.72c-.9.97-2.03 1.516-3.156 1.516z" />
              </svg>
            </a>

          </div>

          <div className="flex items-center gap-6 mt-2">
            <a
              className="text-[#ff2a2a] hover:text-blue-500 transition-colors duration-300 underline underline-offset-4 decoration-1 lowercase whitespace-nowrap"
            >
              📡 ... ..- -- .. - / .--. .- -. -.-. .... .- .-.. 🛰️
            </a>
          </div>
          
        </div>

        {/* Quality Commitment */}
        <div className="flex flex-col gap-4 md:items-end md:text-right">
          <p className="underline text-[#ff2a2a] font-bold tracking-[0.2em] uppercase">
            Quality Commitment
          </p>

          <p className="max-w-sm text-white/70 leading-relaxed normal-case tracking-normal">
            Quality is built through attention to detail, thoughtful testing,
            and continuous improvement.
          </p>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {["Reliable Software", "Defect Prevention", "Regression Testing"].map(
              (item) => (
                <span
                  key={item}
                  className="border border-white/20 rounded-full px-3 py-2 text-[9px] text-white/80 tracking-normal"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#ff2a2a] transition-colors underline-offset-4 mt-2"
          >
            Explore My GitHub ↗
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;