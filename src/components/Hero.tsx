"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Apple, Play, ChevronDown } from "lucide-react";

// Star component for the starfield
function Star({ delay, duration, size, top, left }: { 
  delay: number; 
  duration: number; 
  size: number;
  top: string;
  left: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        top,
        left,
      }}
      animate={{
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Shooting star component
function ShootingStar() {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: "20%", left: "10%" });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        top: `${Math.random() * 40}%`,
        left: `${Math.random() * 60}%`,
      });
      setShow(true);
      setTimeout(() => setShow(false), 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{ top: position.top, left: position.left }}
      initial={{ opacity: 1, x: 0, y: 0 }}
      animate={{ opacity: 0, x: 300, y: 300 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="absolute w-20 h-0.5 bg-gradient-to-r from-white to-transparent -rotate-45 origin-left" />
    </motion.div>
  );
}

// Flying Owl SVG Component
function FlyingOwl({ delay, duration, startX, startY, endX, size, flip }: {
  delay: number;
  duration: number;
  startX: string;
  startY: string;
  endX: string;
  size: number;
  flip?: boolean;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ 
        left: startX, 
        top: startY,
        transform: flip ? 'scaleX(-1)' : 'scaleX(1)',
      }}
      initial={{ x: 0, opacity: 0 }}
      animate={{ 
        x: endX,
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        animate={{
          y: [0, -8, 0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Owl body */}
        <ellipse cx="32" cy="36" rx="14" ry="16" fill="#4C1D95" />
        {/* Owl head */}
        <circle cx="32" cy="22" r="12" fill="#5B21B6" />
        {/* Ears */}
        <path d="M22 14 L26 22 L20 20 Z" fill="#5B21B6" />
        <path d="M42 14 L38 22 L44 20 Z" fill="#5B21B6" />
        {/* Eyes */}
        <circle cx="27" cy="22" r="5" fill="#FCD34D" />
        <circle cx="37" cy="22" r="5" fill="#FCD34D" />
        <circle cx="27" cy="22" r="2" fill="#0D0D0D" />
        <circle cx="37" cy="22" r="2" fill="#0D0D0D" />
        {/* Beak */}
        <path d="M32 26 L30 30 L34 30 Z" fill="#FB923C" />
        {/* Wings - animated */}
        <motion.path
          d="M18 36 Q8 30 4 40 Q12 38 18 42 Z"
          fill="#7C3AED"
          animate={{
            d: [
              "M18 36 Q8 30 4 40 Q12 38 18 42 Z",
              "M18 36 Q8 26 4 32 Q12 34 18 38 Z",
              "M18 36 Q8 30 4 40 Q12 38 18 42 Z",
            ],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M46 36 Q56 30 60 40 Q52 38 46 42 Z"
          fill="#7C3AED"
          animate={{
            d: [
              "M46 36 Q56 30 60 40 Q52 38 46 42 Z",
              "M46 36 Q56 26 60 32 Q52 34 46 38 Z",
              "M46 36 Q56 30 60 40 Q52 38 46 42 Z",
            ],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </motion.div>
  );
}

// Firefly component
function Firefly({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0.5, 1, 0.8, 1, 0.5],
        x: [0, 20, -10, 15, 0],
        y: [0, -15, 10, -20, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-full h-full rounded-full bg-[#FCD34D] blur-sm" />
      <div className="absolute inset-0 rounded-full bg-[#FCD34D]" />
    </motion.div>
  );
}

// City Skyline Component
function CitySkyline() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        className="absolute bottom-0 w-full h-auto"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Background buildings - darker */}
        <rect x="50" y="100" width="40" height="100" fill="#1A1A1A" />
        <rect x="100" y="80" width="60" height="120" fill="#1A1A1A" />
        <rect x="180" y="120" width="35" height="80" fill="#1A1A1A" />
        <rect x="230" y="60" width="50" height="140" fill="#1A1A1A" />
        <rect x="300" y="90" width="45" height="110" fill="#1A1A1A" />
        <rect x="360" y="70" width="70" height="130" fill="#1A1A1A" />
        <rect x="450" y="110" width="40" height="90" fill="#1A1A1A" />
        <rect x="510" y="50" width="55" height="150" fill="#1A1A1A" />
        <rect x="580" y="85" width="48" height="115" fill="#1A1A1A" />
        <rect x="650" y="95" width="42" height="105" fill="#1A1A1A" />
        <rect x="710" y="65" width="65" height="135" fill="#1A1A1A" />
        <rect x="790" y="100" width="38" height="100" fill="#1A1A1A" />
        <rect x="850" y="75" width="52" height="125" fill="#1A1A1A" />
        <rect x="920" y="110" width="44" height="90" fill="#1A1A1A" />
        <rect x="980" y="55" width="58" height="145" fill="#1A1A1A" />
        <rect x="1060" y="90" width="46" height="110" fill="#1A1A1A" />
        <rect x="1120" y="70" width="62" height="130" fill="#1A1A1A" />
        <rect x="1200" y="100" width="40" height="100" fill="#1A1A1A" />
        <rect x="1260" y="80" width="55" height="120" fill="#1A1A1A" />
        <rect x="1340" y="95" width="50" height="105" fill="#1A1A1A" />
        
        {/* Window lights - scattered yellow dots */}
        {[
          [115, 95], [125, 110], [135, 125], [115, 140],
          [245, 75], [255, 90], [245, 105], [260, 120], [250, 150],
          [380, 85], [395, 100], [385, 115], [400, 130], [390, 155],
          [525, 65], [540, 80], [530, 95], [545, 110], [535, 140],
          [730, 80], [745, 95], [735, 110], [750, 125], [740, 150],
          [870, 90], [885, 105], [875, 120], [890, 145],
          [1000, 70], [1015, 85], [1005, 100], [1020, 115], [1010, 145],
          [1140, 85], [1155, 100], [1145, 115], [1160, 130], [1150, 155],
          [1280, 95], [1295, 110], [1285, 125], [1300, 145],
        ].map(([x, y], i) => (
          <motion.rect
            key={i}
            x={x}
            y={y}
            width="4"
            height="4"
            fill="#FCD34D"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + (i % 3),
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      {/* Gradient overlay for smooth blend */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
    </div>
  );
}

// Floating gradient orbs
function GradientOrbs() {
  return (
    <>
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)",
          top: "40%",
          right: "-5%",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.3) 0%, transparent 70%)",
          bottom: "20%",
          left: "30%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

export default function Hero() {
  const [onlineCount, setOnlineCount] = useState(2847);
  const { scrollY } = useScroll();
  const moonY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Generate stars with stable positions using useMemo
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      delay: (i * 0.1) % 3,
      duration: 2 + (i % 3),
      size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
      top: `${Math.floor((i * 17) % 85)}%`,
      left: `${Math.floor((i * 23) % 100)}%`,
    }));
  }, []);

  // Generate fireflies
  const fireflies = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: i * 0.5,
      x: `${10 + (i * 7) % 80}%`,
      y: `${50 + (i * 11) % 40}%`,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1a1033] to-[#0D0D0D]" />

      {/* Animated gradient orbs */}
      <GradientOrbs />

      {/* Starfield */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <Star key={star.id} {...star} />
        ))}
        <ShootingStar />
        <ShootingStar />
      </div>

      {/* Flying Owls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FlyingOwl delay={0} duration={20} startX="-10%" startY="20%" endX="120vw" size={48} />
        <FlyingOwl delay={5} duration={25} startX="-10%" startY="35%" endX="120vw" size={36} />
        <FlyingOwl delay={10} duration={18} startX="110%" startY="15%" endX="-120vw" size={42} flip />
        <FlyingOwl delay={15} duration={22} startX="110%" startY="40%" endX="-120vw" size={32} flip />
        <FlyingOwl delay={8} duration={28} startX="-10%" startY="50%" endX="120vw" size={28} />
      </div>

      {/* Fireflies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fireflies.map((firefly) => (
          <Firefly key={firefly.id} {...firefly} />
        ))}
      </div>

      {/* Moon with glow and rings - parallax */}
      <motion.div 
        className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ y: moonY }}
      >
        {/* Expanding rings */}
        <motion.div
          className="absolute inset-0 rounded-full border border-[#8B5CF6]/30"
          style={{ width: 200, height: 200, marginLeft: -100, marginTop: -100 }}
          animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-[#8B5CF6]/30"
          style={{ width: 200, height: 200, marginLeft: -100, marginTop: -100 }}
          animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
        />
        
        {/* Moon glow */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-[#8B5CF6]/20 blur-3xl"
          style={{ marginLeft: -80, marginTop: -80 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Moon */}
        <motion.div
          className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#C4B5FD] to-[#8B5CF6] shadow-2xl"
          style={{ marginLeft: -48, marginTop: -48 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Moon craters */}
          <div className="absolute top-4 left-6 w-4 h-4 rounded-full bg-[#7C3AED]/30" />
          <div className="absolute top-10 right-4 w-3 h-3 rounded-full bg-[#7C3AED]/20" />
          <div className="absolute bottom-6 left-4 w-2 h-2 rounded-full bg-[#7C3AED]/25" />
          <div className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-[#7C3AED]/15" />
        </motion.div>
      </motion.div>

      {/* City Skyline */}
      <CitySkyline />

      {/* Content - parallax */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#8B5CF6]/30 mb-6 md:mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
          </motion.div>
          <span className="text-xs sm:text-sm text-[#A1A1AA]">Available on iOS & Android</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-2"
        >
          The city sleeps.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight gradient-text mb-6 md:mb-8"
        >
          We don&apos;t.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
        >
          A safe, anonymous space to connect with fellow night owls. Share thoughts, 
          find your match, and join live conversations—all when the world is asleep.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 px-4"
        >
          <motion.a
            href="#download"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Apple className="w-5 h-5" />
            Download for iOS
          </motion.a>
          <motion.a
            href="#download"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-[#8B5CF6] text-white font-semibold rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5" />
            Download for Android
          </motion.a>
        </motion.div>

        {/* Tertiary text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xs sm:text-sm text-[#A1A1AA] mb-8 md:mb-12"
        >
          Free to download. No ads. Ever.
        </motion.p>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-flex items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#262626]"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6EE7B7]"></span>
          </span>
          <span className="text-white text-sm sm:text-base font-medium">
            {onlineCount.toLocaleString()} night owls online right now
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-24 md:bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#A1A1AA]"
        >
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
