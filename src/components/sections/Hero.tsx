"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground px-4 transition-colors duration-300">
      
      {/* Dynamic Amorphous Blue Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1000px] h-[400px] bg-blue-700/60 rounded-[100%] pointer-events-none"
        style={{ filter: "blur(120px)" }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Apple-style Animated Outline Text */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <motion.svg 
          viewBox="0 0 1000 300" 
          className="w-full max-w-[1200px] h-auto drop-shadow-2xl"
        >
          <motion.text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="font-black tracking-tighter"
            style={{ fontSize: '200px', fontFamily: 'system-ui, sans-serif' }}
            initial={{ 
              strokeDasharray: "0 1000", 
              strokeDashoffset: 0,
              fill: "rgba(255,255,255,0)", 
              stroke: "rgba(255,255,255,1)", 
              strokeWidth: 2 
            }}
            animate={{ 
              strokeDasharray: "1000 0", 
              fill: "rgba(255,255,255,1)",
              strokeWidth: 0
            }}
            transition={{ 
              strokeDasharray: { duration: 2.5, ease: "easeInOut" },
              fill: { duration: 1, delay: 2, ease: "easeIn" },
              strokeWidth: { duration: 0.5, delay: 2.5 }
            }}
          >
            Hello.
          </motion.text>
        </motion.svg>
      </div>

      {/* Name (Bottom Left like the screenshot's name placement) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-10 left-10 flex flex-col leading-tight"
      >
        <span className="text-sm font-bold text-foreground tracking-wide">Lakshay</span>
        <span className="text-sm font-bold text-foreground tracking-wide">Vashisth</span>
      </motion.div>

    </section>
  );
}
