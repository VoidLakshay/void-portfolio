"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface HeroProfileProps {
  avatarUrl: string;
  name: string;
  videoUrl: string;
}

export const HeroProfile = ({ avatarUrl, name, videoUrl }: HeroProfileProps) => {
  const [age, setAge] = useState("");

  useEffect(() => {
    const calculateAge = () => {
      const dob = new Date("2007-09-02T00:00:00");
      const now = new Date();
      
      let years = now.getFullYear() - dob.getFullYear();
      let months = now.getMonth() - dob.getMonth();
      let days = now.getDate() - dob.getDate();

      if (days < 0) {
        months -= 1;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
      }
      
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      setAge(`${years}y, ${months}m, ${days}d, ${hours}:${minutes}:${seconds}`);
    };

    calculateAge();
    const timer = setInterval(calculateAge, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full aspect-[16/9] overflow-hidden rounded-md relative border border-white/5 shadow-xl">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center" 
          src={videoUrl}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="w-full flex flex-col gap-4 items-center justify-center -mt-16 sm:-mt-8 md:-mt-10 relative z-10">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 px-2 sm:px-4 md:px-10">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 border-4 border-background rounded-md overflow-hidden bg-background shadow-lg">
              <img 
                src={avatarUrl || "https://github.com/VoidLakshay.png"} 
                alt={`${name}'s pfp`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start gap-1 sm:mt-6 md:mt-10">
              <h1 className="text-3xl sm:text-4xl font-bold font-mono text-center sm:text-left tracking-tight">
                {name}
              </h1>
              <span className="text-sm text-foreground/60 font-mono tracking-wider min-h-[20px]">
                {age || "..."}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-4 sm:mt-6 md:mt-10">
            <button className="group relative flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer bg-foreground/5 overflow-hidden transition-all duration-300 hover:bg-green-500/10 border border-transparent hover:border-green-500/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-foreground text-sm font-medium transition-all duration-300 group-hover:text-green-400">
                Hire Me Now
              </span>
            </button>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/voidlakshay/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://github.com/VoidLakshay" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://discord.com/users/1248901938993565696" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
                <FaDiscord size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <p className="text-foreground/80 text-[13px] sm:text-[14px] text-left w-full px-2 sm:px-4 md:px-10 mt-4 leading-7 font-mono">
          <span className="text-foreground font-semibold">Full Stack Software Engineer</span> passionate about building highly interactive web applications, crafting intuitive user interfaces, and writing clean, scalable code. I focus on bridging the gap between aesthetics and functionality to deliver exceptional digital experiences.
        </p>
      </div>
    </div>
  );
};
