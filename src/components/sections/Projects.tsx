"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { cn } from "@/lib/cn";

const projectsData = [
  {
    title: "Spotify Clone",
    description: "Full-stack music app featuring real-time friend activity, live chat system, active user status, and seamless playback.",
    image: "https://res.cloudinary.com/dgzd6pzm7/image/upload/v1784991508/5edb765f-fdf3-4c44-9ad8-c0392f772cd6_zjmgv4.jpg",
    tech: ["MERN", "Socket.io", "Zustand", "Clerk Auth"],
    github: "https://github.com/VoidLakshay/spotify-clonee",
    live: "https://spotify-clonee-ten.vercel.app/"
  },
  {
    title: "Playtube",
    description: "YouTube-inspired platform featuring RabbitMQ background workers for async video processing, FFmpeg HLS transcoding, and AWS S3 storage.",
    image: "https://res.cloudinary.com/dgzd6pzm7/image/upload/v1784991130/WhatsApp_Image_2026-07-25_at_8.21.40_PM_kggw3f.jpg",
    tech: ["React", "Node.js", "PostgreSQL", "RabbitMQ", "AWS S3"],
    github: "https://github.com/VoidLakshay/playtube",
    live: "https://playtube-tau.vercel.app/"
  },
  {
    title: "EMS (React)",
    description: "Admin/Employee dashboards, role-based login, and responsive UI built purely with React. (Demo: admin@company.com/123, emp1@company.com/123)",
    image: "https://res.cloudinary.com/dgzd6pzm7/image/upload/v1784992023/WhatsApp_Image_2026-07-25_at_8.36.30_PM_hqq6u7.jpg",
    tech: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/VoidLakshay/EMS",
    live: "https://voidlakshay.github.io/EMS/"
  }
];

export const Projects = () => {
  // Duplicate the array so Swiper's loop works perfectly even with only 3 unique items
  const loopedProjects = [...projectsData, ...projectsData];

  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-6 py-2">
      <h2 className="text-xl font-semibold text-foreground px-2 sm:px-4 md:px-10 tracking-tight">Featured Projects</h2>
      <div className="w-full flex justify-center items-center">
        <ProjectCarousel projects={loopedProjects} showPagination loop />
      </div>
    </div>
  );
};

const ProjectCarousel = ({
  projects,
  className,
  showPagination = false,
  showNavigation = true,
  loop = true,
  autoplay = true,
  spaceBetween = 0,
}: {
  projects: typeof projectsData;
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .ProjectCarousel {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 30px !important;
  }
  
  .ProjectCarousel .swiper-slide {
    width: 85vw;
    max-width: 600px;
    aspect-ratio: 16/9;
    border-radius: 16px;
    overflow: hidden;
  }

  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  
  .swiper-pagination-bullet-active {
    background-color: #fff !important;
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={cn("relative w-full max-w-6xl px-0 sm:px-2", className)}
    >
      <style>{css}</style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1836 1053"
        className="absolute w-0 h-0 pointer-events-none"
      >
        <clipPath id="customMaskProjects" clipPathUnits="objectBoundingBox">
          <path
            fill="currentColor"
            d="M457.525 1.148c-20.789-3.198-193.979 1.16-283.854 2.496 11.104-.178 1.297-2.868-81.146-2.496-103.5.468-86 102.499-86 109.999s-7 524.5-6.5 547.5 10 59 6.5 99c-2.8 32-1.167 234.667 0 332.003.5 75 62.5 66.5 67 68.5s38.5 0 81.5 0 436 6 526 10.5 438.995-.5 505.495 0 330.01-12.5 417.51-12.5 230.99 2 270.99 0 40.5-16 51-31.5 12.5-61 12.5-105.5c0-44.503 7.01-274.504 7.01-348.004s-3.51-159.998-7.01-230.998 0-256.002 0-318.002 7.01-92.998-22.5-110.999c-18.79-11.471-81.99-9.999-133.49-9.999H853.525c-29 0-370 4-396 0Z"
            transform="scale(0.0005139987561, 0.0008543065594)"
          ></path>
        </clipPath>
      </svg>
      <Swiper
        spaceBetween={spaceBetween}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: true } : false}
        effect="coverflow"
        grabCursor={true}
        slidesPerView="auto"
        centeredSlides={true}
        loop={loop}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={showPagination ? { clickable: true } : false}
        navigation={
          showNavigation
            ? { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
            : false
        }
        className="ProjectCarousel"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {projects.map((project, index) => (
          <SwiperSlide 
            key={index} 
            className="shadow-2xl bg-black group"
            style={{ clipPath: "url(#customMaskProjects)" }}
          >
            {/* Image container using object-contain to prevent cropping */}
            <img
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={project.image}
              alt={project.title}
            />
            
            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300"></div>
            
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl sm:text-4xl font-bold font-mono text-white drop-shadow-lg">{project.title}</h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl drop-shadow-md font-mono">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-[10px] sm:text-xs px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-white font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Actions (GitHub / Live) */}
            <div className="absolute top-0 right-0 p-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-black/50 border border-white/10 rounded-full hover:bg-white/20 backdrop-blur-md text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-black/50 border border-white/10 rounded-full hover:bg-white/20 backdrop-blur-md text-white transition-colors">
                <FaExternalLinkAlt size={22} />
              </a>
            </div>
          </SwiperSlide>
        ))}
        
        {showNavigation && (
          <>
            <div className="swiper-button-next after:hidden !right-4 sm:!right-10 !text-white/50 hover:!text-white transition-colors">
              <ChevronRightIcon className="h-10 w-10 sm:h-12 sm:w-12 drop-shadow-lg" />
            </div>
            <div className="swiper-button-prev after:hidden !left-4 sm:!left-10 !text-white/50 hover:!text-white transition-colors">
              <ChevronLeftIcon className="h-10 w-10 sm:h-12 sm:w-12 drop-shadow-lg" />
            </div>
          </>
        )}
      </Swiper>
    </motion.div>
  );
};
