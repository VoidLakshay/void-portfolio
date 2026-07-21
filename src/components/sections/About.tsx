"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const hoveredNodeRef = useRef<HTMLElement | null>(null);

  // Mouse tracking for global cursor glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Mouse tracking for text mask effect
  const maskX = useMotionValue(0);
  const maskY = useMotionValue(0);
  const smoothMaskX = useSpring(maskX, { stiffness: 100, damping: 30 });
  const smoothMaskY = useSpring(maskY, { stiffness: 100, damping: 30 });
  
  const maskImage = useMotionTemplate`radial-gradient(150px at ${smoothMaskX}px ${smoothMaskY}px, black 0%, transparent 100%)`;

  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for 60 FPS performance
      animationFrameId = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }
        
        if (hoveredNodeRef.current) {
          const rect = hoveredNodeRef.current.getBoundingClientRect();
          maskX.set(e.clientX - rect.left);
          maskY.set(e.clientY - rect.top);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY, maskX, maskY]);

  const aboutText = "I'm a Full Stack Software Engineer focused on building fast, scalable, and user-friendly web applications. I enjoy solving real-world problems through clean architecture, modern frontend experiences, and efficient backend systems. I'm continuously learning new technologies and love turning ideas into production-ready products.";
  const goalText = "Mastering Data Structures & Algorithms, Artificial Intelligence, Backend Engineering and System Design to build scalable, production-ready software.";

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    hoveredNodeRef.current = e.currentTarget;
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    hoveredNodeRef.current = null;
    setHoveredId(null);
  };

  return (
    <section 
      ref={sectionRef}
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
      className="relative min-h-screen bg-background text-foreground overflow-hidden flex items-center transition-colors duration-300"
    >
      {/* Global Cursor Glow */}
      <motion.div
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,rgba(96,165,250,0.5)_40%,transparent_80%)] rounded-full pointer-events-none z-50"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHoveringSection ? 0.2 : 0,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />

      {/* Bear + Glow Wrapper */}
      <div className="absolute bottom-0 left-1/2 lg:left-[25%] -translate-x-1/2 z-0 pointer-events-none overflow-visible">
        
        {/* Layer 1 (Outer Glow) */}
        <motion.div
          className="absolute left-1/2 top-[-200px] -translate-x-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Layer 2 (Middle Glow) */}
        <motion.div
          className="absolute left-1/2 top-[-75px] -translate-x-1/2 w-[650px] h-[650px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.30) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Layer 3 (Inner Glow) */}
        <motion.div
          className="absolute left-1/2 top-[40px] -translate-x-1/2 w-[420px] h-[420px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.50) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.07, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Layer 4 (Head Glow) */}
        <motion.div
          className="absolute left-1/2 top-[140px] -translate-x-1/2 w-[220px] h-[220px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(96,165,250,0.80) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Bear */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[650px] z-10"
        >
          <img
            src="/polarbear.png"
            alt="Lakshay"
            className="w-full h-auto object-contain translate-y-[8%]"
            style={{ filter: "drop-shadow(0 0 25px rgba(59,130,246,0.3)) drop-shadow(0 25px 25px rgba(0,0,0,0.5))" }}
          />
        </motion.div>

        {/* Fade Mask (Placed IN FRONT of the bear to hide the sharp bottom edge of the image/coat) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[200px] bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 px-8 py-24 md:py-32 relative z-20 pointer-events-none">
        
        {/* Left Column: Visual Identity & Persona */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 flex flex-col relative pointer-events-auto"
        >
          {/* Header Text (Top Left) */}
          <div className="relative z-20 flex flex-col items-start -mt-8 md:-mt-16 lg:-mt-12 mb-auto">
            <span className="text-base text-foreground font-bold mb-1">
              Hello, I am
            </span>

            <h2 className="text-5xl md:text-[4rem] font-black tracking-tighter leading-none mb-2">
              Lakshay
            </h2>

            <p className="text-zinc-600 dark:text-zinc-200 text-sm md:text-base font-medium tracking-wide">
              Full Stack Software Engineer
            </p>
          </div>
        </motion.div>

        {/* Right Column: Professional Dossier */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="lg:w-1/2 flex flex-col justify-center gap-16 lg:pl-10 pointer-events-auto"
        >
          {/* About Me */}
          <div className="max-w-[640px]">
            <h3 className="text-sm font-black tracking-[0.18em] uppercase mb-6 text-foreground">
              About Me
            </h3>

            <div 
              onMouseEnter={(e) => handleMouseEnter(e, 'about')}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-default"
            >
              {/* Base text shown when NOT hovering */}
              <p className={`font-medium text-[16px] md:text-[17px] lg:text-[18px] leading-[1.9] text-black/70 dark:text-zinc-300 transition-opacity duration-300 ${hoveredId === 'about' ? 'opacity-0' : 'opacity-100'}`}>
                {aboutText}
              </p>

              {/* Dim Base layer for hover effect */}
              <p className={`absolute inset-0 font-medium text-[16px] md:text-[17px] lg:text-[18px] leading-[1.9] text-black/30 dark:text-zinc-700 transition-opacity duration-300 ${hoveredId === 'about' ? 'opacity-100' : 'opacity-0'}`}>
                {aboutText}
              </p>
              
              {/* Bright Layer with Mask (only visible on hover) */}
              <motion.p
                className={`absolute inset-0 font-medium text-[16px] md:text-[17px] lg:text-[18px] leading-[1.9] text-black dark:text-zinc-100`}
                style={{
                  WebkitMaskImage: maskImage,
                  maskImage: maskImage,
                  opacity: hoveredId === 'about' ? 1 : 0,
                }}
                transition={{ opacity: { duration: 0.3 } }}
              >
                {aboutText}
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[640px]">
            {/* Education */}
            <div>
              <h3 className="text-sm font-black tracking-[0.18em] uppercase mb-6 text-foreground">
                Education
              </h3>

              <div 
                onMouseEnter={(e) => handleMouseEnter(e, 'education')}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-default"
              >
                {/* Base text shown when NOT hovering */}
                <div className={`flex flex-col gap-1 transition-opacity duration-300 ${hoveredId === 'education' ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-sm text-black/60 dark:text-zinc-400 font-extrabold mb-1">
                    2025 – 2028
                  </span>
                  <span className="text-sm font-medium text-black/80 dark:text-zinc-200">
                    Bachelor of Computer Applications (BCA)
                  </span>
                  <span className="text-sm text-black/60 dark:text-zinc-400 font-medium">
                    IITM Murthal
                  </span>
                </div>

                {/* Dim Base layer for hover effect */}
                <div className={`absolute inset-0 flex flex-col gap-1 transition-opacity duration-300 ${hoveredId === 'education' ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="text-sm text-black/30 dark:text-zinc-700 font-extrabold mb-1">
                    2025 – 2028
                  </span>
                  <span className="text-sm text-black/30 dark:text-zinc-700 font-medium">
                    Bachelor of Computer Applications (BCA)
                  </span>
                  <span className="text-sm text-black/30 dark:text-zinc-700 font-medium">
                    IITM Murthal
                  </span>
                </div>
                
                {/* Bright Layer with Mask (only visible on hover) */}
                <motion.div
                  className={`absolute inset-0 flex flex-col gap-1`}
                  style={{
                    WebkitMaskImage: maskImage,
                    maskImage: maskImage,
                    opacity: hoveredId === 'education' ? 1 : 0,
                  }}
                  transition={{ opacity: { duration: 0.3 } }}
                >
                  <span className="text-sm text-black dark:text-zinc-100 font-extrabold mb-1">
                    2025 – 2028
                  </span>
                  <span className="text-sm text-black dark:text-zinc-100 font-medium">
                    Bachelor of Computer Applications (BCA)
                  </span>
                  <span className="text-sm text-black dark:text-zinc-100 font-medium">
                    IITM Murthal
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Current Goal */}
            <div>
              <h3 className="text-sm font-black tracking-[0.18em] uppercase mb-6 text-foreground">
                Current Goal
              </h3>

              <div 
                onMouseEnter={(e) => handleMouseEnter(e, 'goal')}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-default"
              >
                {/* Base text shown when NOT hovering */}
                <p className={`text-zinc-400 dark:text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-[1.9] transition-opacity duration-300 ${hoveredId === 'goal' ? 'opacity-0' : 'opacity-100'}`}>
                  {goalText}
                </p>

                {/* Dim Base layer for hover effect */}
                <p className={`absolute inset-0 text-black/30 dark:text-zinc-700 text-sm font-medium leading-[1.9] transition-opacity duration-300 ${hoveredId === 'goal' ? 'opacity-100' : 'opacity-0'}`}>
                  {goalText}
                </p>
                
                {/* Bright Layer with Mask (only visible on hover) */}
                <motion.p
                  className={`absolute inset-0 text-black dark:text-zinc-100 text-sm font-medium leading-[1.9]`}
                  style={{
                    WebkitMaskImage: maskImage,
                    maskImage: maskImage,
                    opacity: hoveredId === 'goal' ? 1 : 0,
                  }}
                  transition={{ opacity: { duration: 0.3 } }}
                >
                  {goalText}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}