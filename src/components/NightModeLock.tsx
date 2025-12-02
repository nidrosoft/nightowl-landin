"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Moon, Sun, Lock, Clock } from "lucide-react";

export default function NightModeLock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Night mode phone (active) */}
              <div className="relative w-[240px] h-[480px] z-10">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] p-2">
                  <div className="w-full h-full rounded-[2rem] bg-[#0D0D0D] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0D0D0D] rounded-b-xl z-10" />
                    
                    {/* Active night content */}
                    <div className="w-full h-full p-4 pt-10 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Moon className="w-4 h-4 text-[#8B5CF6]" />
                          <span className="text-xs text-[#8B5CF6]">Night Mode Active</span>
                        </div>
                        <span className="text-xs text-[#A1A1AA]">2:34 AM</span>
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                          <p className="text-xs text-white mb-1">@StarGazer</p>
                          <p className="text-[10px] text-[#A1A1AA]">Anyone want to talk about the meaning of life?</p>
                        </div>
                        <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                          <p className="text-xs text-white mb-1">@NightWanderer</p>
                          <p className="text-[10px] text-[#A1A1AA]">Can&apos;t sleep again... at least I have you all</p>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-r from-[#8B5CF6]/20 to-[#F472B6]/20 border border-[#8B5CF6]/30">
                          <p className="text-xs text-[#8B5CF6] mb-1">New Match!</p>
                          <p className="text-[10px] text-[#A1A1AA]">@MidnightDreamer is feeling the same way</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-around py-3 border-t border-[#262626]">
                        <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
                          <Moon className="w-4 h-4 text-[#8B5CF6]" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full border-2 border-[#A1A1AA]" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full border-2 border-[#A1A1AA]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute -inset-4 rounded-[3rem] bg-[#8B5CF6]/20 blur-2xl -z-10" />
              </div>

              {/* Day mode phone (locked) - offset */}
              <div className="absolute -right-20 top-10 w-[200px] h-[400px] opacity-60">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-[#3A3A3A] to-[#2A2A2A] p-2">
                  <div className="w-full h-full rounded-[1.5rem] bg-[#1A1A1A] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1A1A1A] rounded-b-lg z-10" />
                    
                    {/* Locked content */}
                    <div className="w-full h-full flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 rounded-full bg-[#262626] flex items-center justify-center mb-4">
                        <Lock className="w-8 h-8 text-[#A1A1AA]" />
                      </div>
                      <p className="text-sm font-medium text-center mb-2">Night Owl is sleeping</p>
                      <p className="text-xs text-[#A1A1AA] text-center mb-4">Come back when the sun sets</p>
                      
                      {/* Moon phases */}
                      <div className="flex gap-2 mb-4">
                        {[0.2, 0.4, 0.6, 0.8, 1].map((opacity, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 rounded-full bg-[#8B5CF6]"
                            style={{ opacity }}
                          />
                        ))}
                      </div>
                      
                      {/* Countdown */}
                      <div className="flex items-center gap-2 text-[#A1A1AA]">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">Opens in 6h 23m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium mb-4 uppercase tracking-wider">
              Unique Feature
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Night Owl is only awake{" "}
              <span className="gradient-text">when you are</span>
            </h2>

            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
              We&apos;re not like other apps that want your attention 24/7. Night Owl 
              activates at 8PM and gently locks at 6AM. Because the best connections 
              happen when the world is quiet and people are real.
            </p>

            <p className="text-[#A1A1AA] leading-relaxed mb-8">
              During the day, you&apos;ll see a beautiful lock screen with a countdown 
              to your next night session. It&apos;s our way of ensuring everyone you 
              meet is a true night owl.
            </p>

            {/* Time indicators */}
            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4C1D95]/30 flex items-center justify-center">
                  <Moon className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <p className="text-sm font-medium">8 PM</p>
                  <p className="text-xs text-[#A1A1AA]">Night begins</p>
                </div>
              </div>
              
              <div className="h-8 w-px bg-[#262626]" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FCD34D]/10 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-[#FCD34D]" />
                </div>
                <div>
                  <p className="text-sm font-medium">6 AM</p>
                  <p className="text-xs text-[#A1A1AA]">Rest time</p>
                </div>
              </div>
            </div>

            {/* Stat callout */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1A1A1A] border border-[#262626]">
              <div className="w-2 h-2 rounded-full bg-[#6EE7B7]" />
              <span className="text-sm">
                <span className="text-[#6EE7B7] font-semibold">127%</span>{" "}
                <span className="text-[#A1A1AA]">higher engagement during night hours vs. typical social apps</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
