"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Moon, Star, Sparkles } from "lucide-react";
import { useWaitlist } from "@/context/WaitlistContext";

// Floating star component
function FloatingStar({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 1, 0.3],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Star className="text-[#FCD34D]" style={{ width: size, height: size }} fill="#FCD34D" />
    </motion.div>
  );
}

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [onlineCount, setOnlineCount] = useState(2847);
  const { openWaitlist } = useWaitlist();

  // Generate floating stars
  const stars = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: i * 0.3,
      x: `${10 + (i * 8) % 80}%`,
      y: `${15 + (i * 13) % 70}%`,
      size: 12 + (i % 3) * 4,
    }));
  }, []);

  // Simulate online count fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 10) - 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="download"
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1a1033] to-[#0D0D0D]" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)`,
        }} />
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <FloatingStar key={star.id} {...star} />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated glow orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F472B6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Moon icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] mb-8"
        >
          <Moon className="w-10 h-10 text-white" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          The night is <span className="gradient-text">calling</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-[#A1A1AA] mb-8"
        >
          Join thousands of night owls who&apos;ve found their tribe
        </motion.p>

        {/* Live counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A1A1A]/80 border border-[#262626] mb-10"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6EE7B7]"></span>
          </span>
          <span className="text-white font-medium">
            {onlineCount.toLocaleString()} people are online right now
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={openWaitlist}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#8B5CF6]/30 transition-all duration-300 hover:-translate-y-1"
          >
            <Sparkles className="w-6 h-6" />
            <span className="text-base font-bold">Join the Waitlist</span>
          </button>
        </motion.div>

        {/* Final text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#A1A1AA]"
        >
          Free forever. No ads. No judgment. Just connection.
        </motion.p>
      </div>
    </section>
  );
}
