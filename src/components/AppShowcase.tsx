"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle, Headphones, Heart, Moon, Users } from "lucide-react";

const screens = [
  {
    id: 1,
    title: "Home Dashboard",
    description: "Your night stats at a glance",
    icon: Moon,
    color: "#8B5CF6",
    content: (
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon className="w-5 h-5 text-[#8B5CF6]" />
            <span className="text-sm font-medium">Good evening</span>
          </div>
          <span className="text-xs text-[#A1A1AA]">11:42 PM</span>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#4C1D95]/20 border border-[#8B5CF6]/30">
          <p className="text-xs text-[#A1A1AA] mb-1">Tonight&apos;s Activity</p>
          <p className="text-2xl font-bold">47 <span className="text-sm font-normal text-[#A1A1AA]">connections</span></p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626]">
            <MessageCircle className="w-4 h-4 text-[#60A5FA] mb-2" />
            <p className="text-lg font-bold">12</p>
            <p className="text-xs text-[#A1A1AA]">New matches</p>
          </div>
          <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626]">
            <Heart className="w-4 h-4 text-[#F472B6] mb-2" />
            <p className="text-lg font-bold">89</p>
            <p className="text-xs text-[#A1A1AA]">Thought likes</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Mood Selection",
    description: "Find your perfect match",
    icon: Sparkles,
    color: "#F472B6",
    content: (
      <div className="p-4 space-y-4">
        <div className="text-center">
          <p className="text-sm font-medium mb-1">How are you feeling?</p>
          <p className="text-xs text-[#A1A1AA]">Select up to 3 moods</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { name: "Lonely", color: "#FB923C", selected: true },
            { name: "Chill", color: "#22D3EE", selected: true },
            { name: "Anxious", color: "#FCD34D", selected: false },
            { name: "Talkative", color: "#4ADE80", selected: true },
            { name: "Creative", color: "#F472B6", selected: false },
            { name: "Sleepless", color: "#60A5FA", selected: false },
          ].map((mood) => (
            <span
              key={mood.name}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                mood.selected
                  ? "border-2"
                  : "bg-[#262626] text-[#A1A1AA]"
              }`}
              style={mood.selected ? { 
                backgroundColor: `${mood.color}20`, 
                color: mood.color,
                borderColor: mood.color 
              } : {}}
            >
              {mood.name}
            </span>
          ))}
        </div>
        <motion.button 
          className="w-full py-3 rounded-full bg-gradient-to-r from-[#F472B6] to-[#8B5CF6] text-white font-medium text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Find My Match
        </motion.button>
      </div>
    ),
  },
  {
    id: 3,
    title: "Match Found!",
    description: "Connect with someone special",
    icon: Heart,
    color: "#6EE7B7",
    content: (
      <div className="p-4 flex flex-col items-center justify-center h-full">
        <motion.div
          className="relative mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#F472B6]" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#6EE7B7]"
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-lg font-bold mb-1">It&apos;s a Match!</p>
        <p className="text-sm text-[#A1A1AA] mb-2">@MidnightDreamer</p>
        <div className="flex gap-2 mb-4">
          <span className="px-2 py-1 rounded-full text-[10px] bg-[#FB923C]/20 text-[#FB923C]">Lonely</span>
          <span className="px-2 py-1 rounded-full text-[10px] bg-[#22D3EE]/20 text-[#22D3EE]">Chill</span>
        </div>
        <p className="text-xs text-[#6EE7B7] font-medium">92% compatibility</p>
        <div className="flex gap-3 mt-4">
          <button className="px-6 py-2 rounded-full bg-[#262626] text-sm">Later</button>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-sm font-medium">Say Hi</button>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Chat Interface",
    description: "Deep conversations await",
    icon: MessageCircle,
    color: "#60A5FA",
    content: (
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center gap-3 pb-3 border-b border-[#262626]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#F472B6]" />
          <div>
            <p className="text-sm font-medium">@MidnightDreamer</p>
            <p className="text-xs text-[#6EE7B7]">Online now</p>
          </div>
        </div>
        <div className="flex-1 py-3 space-y-3 overflow-hidden">
          <div className="flex justify-start">
            <div className="max-w-[80%] px-3 py-2 rounded-2xl rounded-bl-sm bg-[#262626]">
              <p className="text-xs">Hey! Can&apos;t sleep either? 🌙</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] px-3 py-2 rounded-2xl rounded-br-sm bg-[#8B5CF6]">
              <p className="text-xs">Nope, been up since 2am. What&apos;s on your mind?</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[80%] px-3 py-2 rounded-2xl rounded-bl-sm bg-[#262626]">
              <p className="text-xs">Just thinking about life, you know? The usual 3am thoughts 😅</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 px-4 py-2 rounded-full bg-[#262626] text-xs outline-none"
          />
          <button className="w-8 h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Audio Lounges",
    description: "Join live conversations",
    icon: Headphones,
    color: "#34D399",
    content: (
      <div className="p-4 space-y-3">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#34D399]/20 to-[#0D0D0D] border border-[#34D399]/30">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-medium">Late Night Deep Talk</p>
              <p className="text-xs text-[#A1A1AA]">Philosophy & Life</p>
            </div>
            <span className="px-2 py-1 rounded-full bg-[#EF4444]/20 text-[#EF4444] text-[10px] font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
              LIVE
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#F472B6] border-2 border-[#0D0D0D]" />
              ))}
            </div>
            <span className="text-xs text-[#A1A1AA]">+24 listening</span>
          </div>
          <button className="w-full py-2 rounded-full bg-[#34D399] text-black text-xs font-medium">
            Join Lounge
          </button>
        </div>
        <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-between">
          <div>
            <p className="text-xs font-medium">Music & Vibes</p>
            <p className="text-[10px] text-[#A1A1AA]">12 in room</p>
          </div>
          <Users className="w-4 h-4 text-[#A1A1AA]" />
        </div>
        <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-between">
          <div>
            <p className="text-xs font-medium">Creative Corner</p>
            <p className="text-[10px] text-[#A1A1AA]">8 in room</p>
          </div>
          <Users className="w-4 h-4 text-[#A1A1AA]" />
        </div>
      </div>
    ),
  },
];

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1a1033]/30 to-[#0D0D0D]" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium mb-4 uppercase tracking-wider">
            App Preview
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience the <span className="gradient-text">night life</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
            Take a peek inside Night Owl and see what awaits you
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#262626] flex items-center justify-center text-white hover:bg-[#262626] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#262626] flex items-center justify-center text-white hover:bg-[#262626] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Phone mockups */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Left phone (previous) */}
            <motion.div
              className="hidden md:block relative w-[200px] h-[400px] opacity-40 scale-90"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 0.4, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] p-2">
                <div className="w-full h-full rounded-[2rem] bg-[#0D0D0D] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0D0D0D] rounded-b-xl z-10" />
                  {screens[(activeIndex - 1 + screens.length) % screens.length].content}
                </div>
              </div>
            </motion.div>

            {/* Center phone (active) */}
            <motion.div
              className="relative w-[280px] h-[560px] z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] p-2">
                <div className="w-full h-full rounded-[2.5rem] bg-[#0D0D0D] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0D0D0D] rounded-b-2xl z-10" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="h-full pt-8"
                    >
                      {screens[activeIndex].content}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              {/* Glow effect */}
              <div
                className="absolute -inset-4 rounded-[4rem] opacity-30 blur-2xl -z-10"
                style={{ backgroundColor: screens[activeIndex].color }}
              />
            </motion.div>

            {/* Right phone (next) */}
            <motion.div
              className="hidden md:block relative w-[200px] h-[400px] opacity-40 scale-90"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 0.4, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] p-2">
                <div className="w-full h-full rounded-[2rem] bg-[#0D0D0D] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0D0D0D] rounded-b-xl z-10" />
                  {screens[(activeIndex + 1) % screens.length].content}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Screen info */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 mb-2">
                  {(() => {
                    const IconComponent = screens[activeIndex].icon;
                    return <IconComponent className="w-5 h-5" style={{ color: screens[activeIndex].color }} />;
                  })()}
                  <h3 className="text-xl font-bold">{screens[activeIndex].title}</h3>
                </div>
                <p className="text-[#A1A1AA]">{screens[activeIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {screens.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[#8B5CF6]"
                    : "bg-[#262626] hover:bg-[#404040]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
