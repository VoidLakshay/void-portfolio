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

  // Interactive Casino Wheel Physics
  const rotation = useMotionValue(0);
  const counterRotation = useTransform(rotation, (r) => -r);
  
  const isDragging = useRef(false);
  const velocity = useRef(15); // Base auto-spin speed (degrees per second)

  useAnimationFrame((t, delta) => {
    if (!isDragging.current) {
      // Smoothly return to the base spinning speed when not dragging
      velocity.current += (15 - velocity.current) * 0.05;
    }
    // Apply velocity to rotation continuously
    rotation.set(rotation.get() + (velocity.current * delta) / 1000);
  });

  const RADIUS = 450;
  const ANGLE_STEP = 360 / ICONS.length;

  const descriptionText = "My technical stack is built on modern, scalable, and high-performance technologies. I specialize in the full lifecycle of product development—from highly interactive frontends to robust, distributed backend architectures.";

  return (
    <section 
      ref={sectionRef}
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center"
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
      />

      <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 px-8 py-24 md:py-32 relative z-20 pointer-events-none">
        
        {/* Left Side: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 flex flex-col justify-center relative pointer-events-auto z-20"
        >
          <div className="relative z-20 flex flex-col items-start mb-auto">
            <h2 className="text-[60px] md:text-[80px] lg:text-[110px] font-black tracking-tighter leading-[0.9] mb-8 text-white uppercase">
              Software<br />Skills
            </h2>
            
            <div 
              onMouseEnter={handleTextMouseEnter}
              onMouseMove={handleTextMouseMove}
              onMouseLeave={handleTextMouseLeave}
              className="relative cursor-default max-w-[550px]"
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
      </div>

      {/* Right Side: Massive Rotating Arc (Carousel) */}
      {/* Placed absolute to the SECTION so the center is EXACTLY on the right edge of the screen */}
      <div className="absolute top-1/2 right-0 w-0 h-0 flex items-center justify-center pointer-events-none z-20">
        
        {/* Ambient Blue Background Glow */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "500px" }} // Large margin ensures it triggers even if offscreen
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-[300px] lg:w-[600px] aspect-square bg-blue-600/20 rounded-full blur-[100px] lg:blur-[140px] pointer-events-none"
        />

        {/* Center Anchor */}
        <div className="absolute top-0 left-0 w-0 h-0 flex items-center justify-center transform scale-[0.65] sm:scale-[0.8] md:scale-90 lg:scale-100 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "1000px" }} // Extremely safe margin so it definitely fades in
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-0 h-0 pointer-events-auto"
          >
            {/* The Spinning Wheel */}
            <motion.div
              style={{ rotate: rotation }}
              className="relative w-0 h-0"
            >
              {ICONS.map((skill, index) => {
                const angle = index * ANGLE_STEP;
                
                return (
                  <div
                    key={skill.name}
                    className="absolute top-1/2 left-1/2 -mt-12 -ml-12" // 96x96 container centered
                    // We push it out along the X axis. 
                    // Using -RADIUS places the icons on the left half of the circle, facing into the screen.
                    style={{ transform: `rotate(${angle}deg) translateX(-${RADIUS}px)` }}
                  >
                    {/* Counter-rotation driven by the parent's actual rotation value */}
                    <motion.div
                      style={{ rotate: counterRotation }}
                      className="w-full h-full"
                    >
                      <div className="w-full h-full" style={{ transform: `rotate(${-angle}deg)` }}>
                        <motion.div 
                          // Draggable Casino Handle Logic
                          onPanStart={() => {
                            isDragging.current = true;
                          }}
                          onPan={(e, info) => {
                            // Panning up/down rapidly spins the wheel
                            rotation.set(rotation.get() + info.delta.y * 0.5);
                            // Capture the velocity to throw the wheel
                            velocity.current = info.velocity.y * 0.5;
                          }}
                          onPanEnd={() => {
                            isDragging.current = false;
                          }}
                          whileHover={{ scale: 1.2, x: -15 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          className="relative flex items-center justify-center w-24 h-24 rounded-[1.5rem] bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:border-white/50 hover:bg-white/10 transition-colors duration-300 cursor-grab active:cursor-grabbing group z-10"
                          title={skill.name}
                        >
                          <skill.Icon size={48} color={skill.color} className="opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
