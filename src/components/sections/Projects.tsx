"use client";

import { StickyCard002 } from "@/components/ui/sticky-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const defaultCards = [
  {
    id: 1,
    title: "PlayTube",
    description: "Built a production-style YouTube-inspired video streaming platform with authentication, channels, playlists, likes, comments, watch history and chat. Implemented asynchronous video processing using RabbitMQ background workers, and integrated FFmpeg to transcode uploaded videos into adaptive HLS streams.",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "RabbitMQ", "FFmpeg", "AWS S3"],
    link: "https://playtube-tau.vercel.app/",
    colorClass: "bg-gradient-to-br from-red-950 via-neutral-900 to-black"
  },
  {
    id: 2,
    title: "Spotify Clone",
    description: "Developed a Spotify-inspired full-stack music streaming application with a primary focus on real-time chat capabilities. Includes JWT authentication, playlist management, seamless music playback, and an admin dashboard for efficient content management.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io", "Zustand", "JWT", "Cloudinary"],
    link: "https://spotify-clonee-ten.vercel.app/",
    colorClass: "bg-gradient-to-br from-emerald-950 via-neutral-900 to-black"
  },
  {
    id: 3,
    title: "Employee Management System",
    description: "Developed a role-based Employee Management System with separate Admin and Employee dashboards. Implemented authentication flow, responsive UI, and reusable React components to manage and display employee-related information efficiently.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://voidlakshay.github.io/EMS/",
    demoDetails: "Demo: admin@company.com/123 | emp1@company.com/123",
    colorClass: "bg-gradient-to-br from-blue-950 via-neutral-900 to-black"
  }
];

export const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const introY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <section id="projects" ref={containerRef} className="relative bg-black w-full overflow-hidden">
      {/* Background ambient glow to blend with About/Skills sections */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full pointer-events-none blur-[150px]"
      />
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/10 rounded-full pointer-events-none blur-[120px]"
      />

      {/* Creative Centered Intro (Sticky until cards reach it) */}
      <div className="h-[150vh] w-full">
        <motion.div 
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4"
          style={{ opacity: introOpacity, scale: introScale, y: introY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 uppercase leading-none drop-shadow-2xl">
              Projects
            </h2>
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
              className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full mt-4" 
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* The component handles its own height and padding for the sticky effect */}
      <div className="relative z-10 h-full w-full pb-24 -mt-[50vh]">
        <StickyCard002 cards={defaultCards} />
      </div>
    </section>
  );
};
