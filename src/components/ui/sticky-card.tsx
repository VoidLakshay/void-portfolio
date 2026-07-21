"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/cn";

export interface ProjectCardData {
  id: number | string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  demoDetails?: string;
  colorClass: string;
  image?: string;
}

interface StickyCardProps {
  cards: ProjectCardData[];
  className?: string;
  containerClassName?: string;
}

export const StickyCard002 = ({
  cards,
  className,
  containerClassName,
}: StickyCardProps) => {
  const container = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Only render iframes on desktop to prevent mobile lag
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cardElements = cardRefs.current;
      const totalCards = cardElements.length;

      if (!cardElements[0]) return;

      gsap.set(cardElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!cardElements[i]) continue;
        gsap.set(cardElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardElements[i];
        const nextCard = cardElements[i + 1];
        const position = i;
        if (!currentCard || !nextCard) continue;

        scrollTimeline.to(
          currentCard,
          {
            scale: 0.9,
            rotation: 5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className={cn("relative h-full w-full", className)} ref={container}>
      <div className="sticky-cards relative flex h-[100vh] w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[85vh] w-full max-w-2xl overflow-hidden rounded-3xl md:max-w-4xl lg:max-w-5xl",
            containerClassName,
          )}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              onClick={() => window.open(card.link, '_blank')}
              className={cn(
                "group absolute h-full w-full rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 overflow-hidden shadow-2xl border border-white/10 hover:border-white/30 transition-colors duration-500 cursor-pointer will-change-transform",
                card.colorClass
              )}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              {/* Left Side: Text Content */}
              <div className="flex flex-col justify-between lg:w-1/2 h-full z-10 relative">
                <div className="flex flex-col gap-6">
                  <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl group-hover:text-blue-200 transition-colors duration-500">
                    {card.title}
                  </h3>
                  <p className="text-lg text-white/80 max-w-xl leading-relaxed md:text-xl">
                    {card.description}
                  </p>
                  {card.demoDetails && (
                    <p className="text-sm font-medium text-emerald-300 bg-emerald-950/50 p-3 rounded-lg w-fit border border-emerald-500/20">
                      {card.demoDetails}
                    </p>
                  )}
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center mt-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black">
                    Visit Project
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Right Side: Live Iframe Preview (Restored & Optimized) */}
              <div className="hidden lg:block relative h-full w-1/2 rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-transform duration-700 will-change-transform">
                {/* Transparent overlay to intercept clicks */}
                <div className="absolute inset-0 z-10 bg-transparent" />
                {isDesktop && (
                  <iframe 
                    src={card.link}
                    title={card.title}
                    className="w-[125%] h-[125%] scale-[0.8] origin-top-left pointer-events-none"
                    style={{ border: 'none' }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
