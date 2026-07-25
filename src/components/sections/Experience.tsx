"use client";

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const experiences = [
    {
      company: "MoonKind",
      role: "AI Product Engineer",
      period: "Sep'25 - Present",
      location: "Remote",
      logo: "https://via.placeholder.com/150/000000/FFFFFF/?text=MoonKind",
      description: [
        "Architected and scaled the core system for Quillo Club, owning ~60% of frontend.",
        "Designed and launched the Character Messenger feature (0→1).",
        "Engineered the Trailer Reels automation pipeline from scratch."
      ]
    },
    {
      company: "Rhombuz",
      role: "Software Engineer",
      period: "Jul'23 - Dec'24",
      location: "Remote",
      logo: "https://via.placeholder.com/150/FFFFFF/000000/?text=Rhombuz",
      description: [
        "Led development of a frontend system to parse and structure Swagger files.",
        "Worked on a data-intensive full-stack system optimizing backend computation pipelines."
      ]
    }
  ];

  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-4 py-8">
      <h2 className="text-xl font-bold font-mono text-foreground px-2 sm:px-4 md:px-10 tracking-tight">Experience</h2>
      <div className="w-full h-auto flex flex-col items-start justify-start px-2 sm:px-4 md:px-10 gap-2">
        {experiences.map((exp, index) => (
          <div key={index} className="w-full flex flex-col items-start justify-start cursor-pointer group" onClick={() => toggle(index)}>
            <div className="w-full flex items-center justify-between py-2 border-b border-white/5 hover:bg-foreground/5 rounded-md px-2 transition-colors">
              <div className="flex items-center justify-start gap-4">
                <div className="w-12 h-12 rounded-md overflow-hidden bg-white/10 shrink-0">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <div className="flex items-center justify-start gap-2">
                    <span className="text-foreground text-sm sm:text-lg font-semibold">{exp.company} in <span className="inline-flex border border-white/20 p-[2px] rounded text-[10px] items-center justify-center align-middle">⌘</span></span>
                  </div>
                  <span className="text-foreground/50 text-xs font-mono">{exp.role}</span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-1">
                <span className="text-foreground/50 text-xs font-mono">{exp.period}</span>
                <span className="text-foreground/50 text-xs font-mono">{exp.location}</span>
              </div>
            </div>
            
            <div className={`w-full flex flex-col pl-16 sm:pl-20 pr-4 gap-2 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
              <ul className="list-disc pl-4 text-foreground/70 text-xs sm:text-sm space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
