"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import { ThemeToggleButton } from "@/components/ui/theme-toggle";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-2xl px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-600 flex items-center justify-center overflow-hidden border border-white/20">
          <span className="text-xs font-bold text-white">MA</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-sm font-medium text-zinc-400 hidden sm:flex">
        <Link href="#projects" className="hover:text-white transition-colors duration-200">Work</Link>
        <Link href="#about" className="hover:text-white transition-colors duration-200">About</Link>
      </div>
      
      <div className="flex items-center">
        <Link 
          href="mailto:lakshayvashisth09@gmail.com"
          className="flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300"
        >
          <Mail className="w-4 h-4" />
          <span>Contact</span>
        </Link>
      </div>
    </motion.nav>
  );
}
