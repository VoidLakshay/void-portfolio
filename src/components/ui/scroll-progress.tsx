"use client";

import NumberFlow from "@number-flow/react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/cn";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [progressPercent, setProgressPercent] = useState(0);

  const clampedProgress = useTransform(scrollYProgress, (value) =>
    Math.min(Math.max(value, 0), 1),
  );
  const progressAsPercent = useTransform(clampedProgress, (value) =>
    Math.round(value * 100),
  );

  useMotionValueEvent(progressAsPercent, "change", (value) => {
    setProgressPercent(value);
  });

  const svgRadius = 18;
  const circumference = 2 * Math.PI * svgRadius;

  return (
    <motion.div
      drag
      dragMomentum={false}
      className={cn(
        "group fixed bottom-8 right-8 z-[100] cursor-grab items-center gap-1 active:cursor-grabbing text-white",
      )}
    >
      <NumberFlow
        value={progressPercent}
        className={cn(
          "text-white/50 absolute top-1 flex h-8 -translate-y-full items-center justify-center px-4 text-sm font-bold tabular-nums opacity-0 group-hover:opacity-100 transition-opacity",
        )}
        suffix="%"
      />
      <div className="bg-black/50 hover:bg-black/80 flex size-14 items-center justify-center rounded-2xl border border-white/10 backdrop-blur shadow-2xl transition-colors">
        <svg
          className={cn("size-10")}
          viewBox="0 0 48 48"
          role="presentation"
        >
          <circle
            cx="24"
            cy="24"
            r={svgRadius}
            stroke="currentColor"
            strokeWidth="3"
            className={cn("opacity-20")}
            fill="none"
          />
          <motion.circle
            cx="24"
            cy="24"
            r={svgRadius}
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference}`}
            style={{
              pathLength: clampedProgress,
              rotate: -90,
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
};
