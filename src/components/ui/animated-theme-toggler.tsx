import { motion } from "motion/react";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

interface AnimatedThemeTogglerProps {
  className?: string;
}

export function AnimatedThemeToggler({ className }: AnimatedThemeTogglerProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-lg ${
        className || ""
      }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background circle that rotates */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full"
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        style={{
          background: isDark
            ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)"
            : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
        }}
      />

      {/* Inner circle with icon */}
      <motion.div
        className="flex relative z-10 justify-center items-center w-8 h-8 bg-white rounded-full dark:bg-gray-800"
        initial={false}
        animate={{
          scale: isDark ? 0.9 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {/* Sun Icon */}
        <motion.svg
          className="absolute w-4 h-4 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          initial={{ opacity: 1, scale: 1, rotate: 0 }}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.3 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </motion.svg>

        {/* Moon Icon */}
        <motion.svg
          className="absolute w-4 h-4 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.3,
            rotate: isDark ? 0 : -90,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      </motion.div>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gray-400/20"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </button>
  );
}
