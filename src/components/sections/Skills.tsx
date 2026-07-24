"use client";

import { motion, useMotionValue, useSpring, useAnimationFrame, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiRabbitmq,
  SiRedis,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const ICONS = [
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
  { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', Icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Prisma', Icon: SiPrisma, color: '#2D3748' },
  { name: 'RabbitMQ', Icon: SiRabbitmq, color: '#FF6600' },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
  { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', Icon: FaGithub, color: '#ffffff' },
  { name: 'Vercel', Icon: SiVercel, color: '#ffffff' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Global cursor glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  // Text Hover Spotlight Physics
  const [isHoveringText, setIsHoveringText] = useState(false);
  const textMouseX = useMotionValue(0);
  const textMouseY = useMotionValue(0);
  const smoothTextX = useSpring(textMouseX, { stiffness: 100, damping: 25 });
  const smoothTextY = useSpring(textMouseY, { stiffness: 100, damping: 25 });

  const handleTextMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHoveringText(true);
    const rect = e.currentTarget.getBoundingClientRect();
    textMouseX.set(e.clientX - rect.left);
    textMouseY.set(e.clientY - rect.top);
  };

  const handleTextMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    textMouseX.set(e.clientX - rect.left);
    textMouseY.set(e.clientY - rect.top);
  };

  const handleTextMouseLeave = () => {
    setIsHoveringText(false);
  };

  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  const descriptionText = "My technical stack is built on modern, scalable, and high-performance technologies. I specialize in the full lifecycle of product development—from highly interactive frontends to robust, distributed backend architectures.";

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
          filter: "blur(80px)",
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center gap-16 lg:gap-24 px-8 py-24 md:py-32 relative z-20 pointer-events-none">
        
        {/* Top Side: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center text-center relative pointer-events-auto z-20"
        >
          <div className="relative z-20 flex flex-col items-center mt-[-5vh] lg:mt-0">
            <h2 className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[110px] font-black tracking-tighter leading-[0.9] mb-6 lg:mb-8 text-foreground uppercase text-center">
              Software Skills
            </h2>
            
            <div 
              onMouseEnter={handleTextMouseEnter}
              onMouseMove={handleTextMouseMove}
              onMouseLeave={handleTextMouseLeave}
              className="relative cursor-default max-w-[800px] mx-auto text-center"
            >
              {/* Base text shown when NOT hovering */}
              <p className={`text-[16px] md:text-[18px] font-medium leading-[1.9] text-zinc-400 transition-opacity duration-300 ${isHoveringText ? 'opacity-0' : 'opacity-100'}`}>
                {descriptionText}
              </p>

              {/* Dim Base layer for hover effect */}
              <p className={`absolute inset-0 text-[16px] md:text-[18px] font-medium leading-[1.9] text-zinc-700 transition-opacity duration-300 ${isHoveringText ? 'opacity-100' : 'opacity-0'}`}>
                {descriptionText}
              </p>
              
              {/* Bright Layer with Mask (only visible on hover) */}
              <motion.p
                className={`absolute inset-0 text-[16px] md:text-[18px] font-medium leading-[1.9] text-zinc-100`}
                style={{
                  WebkitMaskImage: useMotionTemplate`radial-gradient(180px circle at ${smoothTextX}px ${smoothTextY}px, black 0%, transparent 100%)`,
                  maskImage: useMotionTemplate`radial-gradient(180px circle at ${smoothTextX}px ${smoothTextY}px, black 0%, transparent 100%)`,
                  opacity: isHoveringText ? 1 : 0
                }}
                transition={{ opacity: { duration: 0.3 } }}
              >
                {descriptionText}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Side: Floating Skills Grid */}
        <div className="w-full flex items-center justify-center relative z-20 mt-4 pointer-events-auto">
          {/* Ambient Blue Background Glow */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "500px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[300px] lg:w-[800px] aspect-[2/1] bg-blue-600/20 rounded-full blur-[100px] lg:blur-[140px] pointer-events-none"
          />

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 max-w-[1000px] relative z-10">
            {ICONS.map((skill, index) => {
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                  className="flex flex-col items-center justify-center gap-3 cursor-pointer group"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3 + (index % 4),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (index % 5) * 0.2,
                    }}
                  >
                    <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-black/40 backdrop-blur-md border border-foreground/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 group-hover:scale-110">
                      <skill.Icon size={36} color={skill.color} className="opacity-80 group-hover:opacity-100 transition-all drop-shadow-lg group-hover:scale-110" />
                    </div>
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-500 group-hover:text-blue-300 transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
