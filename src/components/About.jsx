import React from 'react';
import stackImage from '../assets/about/Sumit_Avatar.png';
import seleniumImage from '../assets/about/selenium.png';
import aiImage from '../assets/about/ai.png';
import burpSuiteImage from '../assets/about/burpsuite.png';
import githubImage from '../assets/about/github.png';
import jiraImage from '../assets/about/jira.png';
import jmeterImage from '../assets/about/jmeter.png';
import postmanImage from '../assets/about/postman.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack icons using official high-quality logos from devicons CDN

const QaToolIcon = ({ src, alt, label, className = "w-16 h-16 md:w-20 md:h-20" }) => (
  <div className="flex flex-col items-center gap-2">
    <img
      src={src}
      alt={alt}
      title={alt}
      className={`${className} object-contain drop-shadow-lg`}
    />
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider text-center">
      {label}
    </span>
  </div>
);

const SeleniumIcon = () => (
  <QaToolIcon src={seleniumImage} alt="Selenium WebDriver" label="Selenium" />
);

const JiraIcon = () => (
  <QaToolIcon src={jiraImage} alt="Jira" label="Jira" />
);

const QAToolsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center justify-center gap-3">
      <img src={postmanImage} alt="Postman" title="Postman" className="w-9 h-9 md:w-11 md:h-11 object-contain drop-shadow-lg" />
      <img src={burpSuiteImage} alt="Burp Suite" title="Burp Suite" className="w-9 h-9 md:w-11 md:h-11 object-contain drop-shadow-lg" />
      <img src={jmeterImage} alt="Apache JMeter" title="Apache JMeter" className="w-9 h-9 md:w-11 md:h-11 object-contain drop-shadow-lg" />
      <img src={githubImage} alt="GitHub" title="GitHub" className="w-9 h-9 md:w-11 md:h-11 object-contain drop-shadow-lg" />
      <img src={aiImage} alt="AI Tools" title="AI Tools" className="w-9 h-9 md:w-11 md:h-11 object-contain drop-shadow-lg" />
    </div>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
      QA Tools
    </span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">

          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  src={stackImage}
                  alt="Sumit Panchal - Quality Assurance Analyst"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p
            className="text-lg text-justify font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SeleniumIcon />
            </div>

            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JiraIcon />
            </div>

            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <QAToolsIcon />
            </div>
          </div>

          {/* Highlights Section */}
          {aboutContent.highlights && (
            <div data-aos="fade-up" data-aos-delay="700" className="mt-12 bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">Key Highlights</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {aboutContent.highlights.map((highlight, index) => (
                  <p key={index} className="text-sm font-semibold text-white/80 leading-relaxed">
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  );
};

export default About;
