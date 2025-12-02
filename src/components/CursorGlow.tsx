"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Only show on desktop
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, x, y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      </motion.div>

      {/* Inner glow */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-4 h-4 rounded-full bg-[#8B5CF6]/50 blur-sm" />
      </motion.div>
    </>
  );
}
