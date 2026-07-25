"use client";

import React from 'react';
import { cn } from "@/lib/cn";

const row1 = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  { name: 'Prisma', icon: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg', invert: true },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

const row2 = [
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { name: 'RabbitMQ', icon: 'https://cdn.worldvectorlogo.com/logos/rabbitmq.svg' },
  { name: 'Amazon S3', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg' },
  { name: 'Cloudinary', icon: 'https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg' },
  { name: 'Vercel', icon: 'https://cdn.worldvectorlogo.com/logos/vercel.svg', invert: true },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  { name: 'Postman', icon: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
];

export const TechMarquee = () => {
  const css = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .animate-scroll-left {
    animation: scroll-left 40s linear infinite;
    width: max-content;
  }
  .animate-scroll-right {
    animation: scroll-right 40s linear infinite;
    width: max-content;
  }
  /* Pause on hover */
  .group:hover .animate-scroll-left,
  .group:hover .animate-scroll-right {
    animation-play-state: paused;
  }
  `;

  const allRows = [
    { data: row1, direction: 'animate-scroll-left', duration: '40s' },
    { data: row2, direction: 'animate-scroll-right', duration: '45s' },
  ];

  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-2 py-2">
      <h2 className="text-xl font-bold font-mono text-foreground px-2 sm:px-4 md:px-10 tracking-tight">Technology & Tools</h2>
      
      {/* Container with left & right fade shadow */}
      <div 
        className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-3"
        style={{ 
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" 
        }}
      >
        <style>{css}</style>
        
        {allRows.map((rowConfig, rowIndex) => (
          <div key={rowIndex} className="flex overflow-hidden group w-full py-1">
            <div 
              className={cn("flex shrink-0 gap-4 whitespace-nowrap px-2", rowConfig.direction)}
              style={{ animationDuration: rowConfig.duration }}
            >
              {/* Duplicate 4 times to ensure seamless infinite scroll even on ultra-wide screens */}
              {[...rowConfig.data, ...rowConfig.data, ...rowConfig.data, ...rowConfig.data].map((tech, i) => (
                <div 
                  key={i} 
                  className="w-[100px] h-[90px] sm:w-[120px] sm:h-[105px] bg-[#1a1a1a] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:bg-[#222] cursor-pointer"
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="h-8 w-8 sm:h-10 sm:w-10 object-contain" 
                    style={tech.invert ? { filter: 'invert(1)' } : {}} 
                  />
                  <span className="text-[10px] sm:text-xs text-[#888] font-mono font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};
