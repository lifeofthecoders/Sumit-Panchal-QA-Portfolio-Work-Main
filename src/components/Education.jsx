
import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      {/* Top decorative divider */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 -translate-y-[1px] rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section heading */}
        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Education
          </h2>

          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Academic qualifications and achievements that shaped my professional journey.
          </p>
        </div>

        {/* Two equal-width education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 md:gap-8">
          {/* Bachelor's Degree */}
          <div
            data-aos="fade-up"
            className="h-full min-w-0 bg-black/20 backdrop-blur-md rounded-3xl p-7 md:p-8"
          >
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
              Bachelor's Degree
            </p>

            <h3 className="text-white text-xl md:text-2xl font-black mb-3">
              {education.degree}
            </h3>

            <p className="text-red-100 font-semibold leading-relaxed">
              Electronics &amp; Communication Engineering
            </p>

            <p className="text-red-100 mt-2 leading-relaxed">
              Silver Oak University, Ahmedabad, India
            </p>

            <div className="text-white/90 text-sm space-y-2 mt-5">
              <p>
                <span className="font-semibold">CGPA:</span>{' '}
                {education.cgpa}
              </p>
              <p>
                <span className="font-semibold">Graduation:</span>{' '}
                {education.graduation}
              </p>
            </div>
          </div>

          {/* Diploma */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="h-full min-w-0 bg-black/20 backdrop-blur-md rounded-3xl p-7 md:p-8"
          >
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
              Diploma
            </p>

            <h3 className="text-white text-xl md:text-2xl font-black mb-3">
              {education.diploma}
            </h3>

            <p className="text-red-100 font-semibold leading-relaxed">
              Electronics &amp; Communication Engineering
            </p>

            <p className="text-red-100 mt-2 leading-relaxed">
              Atul Polytechnic, Khadat, Mahudi, India
            </p>

            <div className="text-white/90 text-sm space-y-2 mt-5">
              <p>
                <span className="font-semibold">CGPA:</span>{' '}
                {education.diplomaCgpa}
              </p>
              <p>
                <span className="font-semibold">Graduation:</span>{' '}
                {education.diplomaYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
