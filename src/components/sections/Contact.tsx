"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaXTwitter, FaDiscord } from "react-icons/fa6";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative bg-background text-foreground w-full min-h-screen flex flex-col justify-between pt-24 px-4 overflow-hidden transition-colors duration-300">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 dark:bg-blue-900/10 rounded-full pointer-events-none blur-[150px]"
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto flex-grow flex flex-col items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Got a project in mind or just want to say hi? I'd love to hear from you!
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 rounded-xl px-6 py-4 text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/20 focus:border-black/20 dark:focus:border-white/20 transition-all"
              required
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 rounded-xl px-6 py-4 text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/20 focus:border-black/20 dark:focus:border-white/20 transition-all"
              required
            />
            <textarea
              placeholder="Tell me about your project or question..."
              rows={5}
              className="w-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 rounded-xl px-6 py-4 text-foreground placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/20 focus:border-black/20 dark:focus:border-white/20 transition-all resize-none"
              required
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                type="submit"
                className="flex-1 bg-foreground text-background font-semibold rounded-xl px-6 py-4 hover:opacity-80 transition-colors duration-300"
              >
                Send Message
              </button>
              <a
                href="https://drive.google.com/file/d/15QvL9a8kHvcbzpeqPGqdUN2WyIYeRQ1n/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-foreground font-semibold rounded-xl px-6 py-4 hover:bg-zinc-200 hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Resume
              </a>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Footer Area */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-full max-w-6xl mx-auto border-t border-foreground/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-zinc-500 text-sm font-medium">
          © {currentYear} / Lakshay Vashisth
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/VoidLakshay" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-foreground transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/lakshayvashisth" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-foreground transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:lakshayvashisth09@gmail.com" className="text-zinc-500 hover:text-foreground transition-colors">
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a href="https://x.com/voidlakshay" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-foreground transition-colors">
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/voidlakshay/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-foreground transition-colors">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://discordapp.com/users/1248901938993565696" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-foreground transition-colors">
            <FaDiscord className="w-6 h-6" />
          </a>
        </div>
      </motion.footer>
    </section>
  );
};
