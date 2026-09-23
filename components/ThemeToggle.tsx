"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5" />
    );
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setIsAnimating(true);

    setTheme(isDark ? "light" : "dark");

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="relative z-50 flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-black/5 text-black/70 transition-all duration-300 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{
              rotate: -90,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              rotate: 90,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {isDark ? <Moon size={17} /> : <Sun size={17} />}
          </motion.div>
        </AnimatePresence>
      </button>

      {/* Theme transition overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="theme-overlay"
            className="pointer-events-none fixed inset-0 z-[9999]"
            initial={{
              clipPath: "circle(0% at 50% 50%)",
            }}
            animate={{
              clipPath: "circle(150% at 50% 50%)",
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              backgroundColor: isDark ? "#ffffff" : "#050505",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
