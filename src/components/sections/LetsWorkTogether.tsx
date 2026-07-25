"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  "Got a crazy idea? Let's build it.",
  "Need a 10x developer for your team?",
  "Let's turn your vision into reality!",
  "Looking for flawless web experiences?",
  "Ready to level up your digital presence?",
  "Want to create something extraordinary?"
];

export const LetsWorkTogether = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-4 py-2">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
          .font-handwritten {
            font-family: 'Caveat', cursive;
          }
        `}
      </style>
      <h2 className="text-xl font-bold font-mono text-foreground px-2 sm:px-4 md:px-10 tracking-tight">Let's Work Together</h2>
      <div className="w-full px-2 sm:px-4 md:px-10">
        <div 
          className="w-full relative aspect-[4/5] sm:aspect-[2/1] overflow-hidden group rounded-xl shadow-xl mx-auto"
        >
          <img 
            src="https://res.cloudinary.com/dgzd6pzm7/image/upload/v1784989784/download_xhrwlx.jpg" 
            alt="Let's Work Together Background" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 bg-black/40">
            <div className="h-28 sm:h-20 md:h-24 w-full relative flex justify-center items-center mb-4 perspective-[1000px]">
              <AnimatePresence mode="popLayout">
                <motion.h3
                  key={index}
                  initial={{ y: -50, opacity: 0, rotateX: 60 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: 50, opacity: 0, rotateX: -60 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  className="absolute text-2xl sm:text-4xl md:text-5xl text-white text-center drop-shadow-lg font-handwritten tracking-wide w-full px-4 leading-tight"
                  style={{ transformOrigin: "center center" }}
                >
                  {phrases[index]}
                </motion.h3>
              </AnimatePresence>
            </div>
            <p className="text-white text-sm sm:text-base text-center max-w-3xl mb-8 font-mono font-medium leading-relaxed drop-shadow-md">
              From sleek web applications to powerful mobile apps, I craft digital products that combine beautiful design with robust engineering to drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
              <a 
                href="tel:+919499333091" 
                className="group/btn px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black font-bold rounded-full hover:bg-green-500 transition-colors shadow-lg font-mono text-sm flex items-center justify-center gap-2 min-w-[140px] sm:min-w-[160px]"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 group-hover/btn:hidden transition-all"></span>
                <span>Book a Call</span>
                <span className="hidden group-hover/btn:inline-block ml-[-4px]">→</span>
              </a>
              <span className="hidden sm:inline-block text-white/50 text-2xl font-light">|</span>
              <a 
                href="https://www.instagram.com/voidlakshay/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black font-bold rounded-full hover:bg-green-500 transition-colors shadow-lg font-mono text-sm flex items-center justify-center gap-2 min-w-[140px] sm:min-w-[160px]"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 group-hover/btn:hidden transition-all"></span>
                <span>Message Me</span>
                <span className="hidden group-hover/btn:inline-block ml-[-4px]">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
