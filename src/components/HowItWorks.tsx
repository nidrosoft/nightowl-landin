"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Ghost, Heart, Users } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download",
    description: "Get Night Owl free on iOS or Android. No payment required.",
    color: "#60A5FA", // Blue
  },
  {
    icon: Ghost,
    title: "Create Your Alias",
    description: "Pick a fun, anonymous name. We'll suggest some creative ones.",
    color: "#A78BFA", // Light Purple
  },
  {
    icon: Heart,
    title: "Set Your Mood",
    description: "Tell us how you're feeling tonight. Your mood helps us find your match.",
    color: "#F472B6", // Pink
  },
  {
    icon: Users,
    title: "Start Connecting",
    description: "Find your match, join a lounge, or share a thought. The night is yours.",
    color: "#6EE7B7", // Green
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
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
            Simple
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Getting started takes <span className="gradient-text">60 seconds</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent -translate-y-1/2" />
          
          {/* Animated glow on line */}
          <motion.div
            className="hidden md:block absolute top-1/2 h-1 w-20 bg-[#8B5CF6] rounded-full blur-sm -translate-y-1/2"
            animate={{ left: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#8B5CF6]/30 to-transparent h-8" />
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="relative mb-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors"
                      style={{ 
                        backgroundColor: `${step.color}15`,
                        borderWidth: 1,
                        borderColor: `${step.color}40`,
                      }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    <div 
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
