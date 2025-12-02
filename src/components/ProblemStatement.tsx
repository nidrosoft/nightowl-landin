"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CloudMoon, Ghost, MessageCircle, Moon, Heart, Zap } from "lucide-react";

const painPoints = [
  {
    icon: CloudMoon,
    title: "3am loneliness hits different",
    description:
      "When everyone's asleep, who do you talk to? Regular social apps feel wrong at this hour.",
    color: "#60A5FA",
    stat: "78%",
    statLabel: "feel isolated at night",
  },
  {
    icon: Ghost,
    title: "Tired of the facade?",
    description:
      "On most apps, you're judged by your photos before you even speak. Your thoughts become afterthoughts.",
    color: "#F472B6",
    stat: "92%",
    statLabel: "prefer anonymous chats",
  },
  {
    icon: MessageCircle,
    title: "Shallow connections don't help",
    description:
      "Quick likes and swipes don't cure insomnia. You need real conversation with someone who gets it.",
    color: "#4ADE80",
    stat: "3.2x",
    statLabel: "deeper conversations",
  },
];

export default function ProblemStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1a1033]/50 to-[#0D0D0D]" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 max-w-3xl mx-auto leading-tight"
        >
          Ever feel more alive at{" "}
          <span className="gradient-text">2am</span> than any other time?
        </motion.h2>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative p-6 md:p-8 rounded-2xl bg-[#1A1A1A]/60 border border-[#262626] hover:border-opacity-50 transition-all duration-300"
              style={{ 
                ["--hover-border-color" as string]: point.color,
              }}
            >
              {/* Glow effect on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                style={{ backgroundColor: `${point.color}15` }}
              />

              <div className="relative z-10">
                {/* Icon with color */}
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ backgroundColor: `${point.color}15` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <point.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: point.color }} />
                </motion.div>
                
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed mb-4">
                  {point.description}
                </p>
                
                {/* Stat */}
                <div className="pt-4 border-t border-[#262626]">
                  <span className="text-2xl md:text-3xl font-bold" style={{ color: point.color }}>
                    {point.stat}
                  </span>
                  <p className="text-xs text-[#A1A1AA] mt-1">{point.statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto"
        >
          That&apos;s why we built <span className="text-white font-semibold">Night Owl</span>. 
          A different kind of social app, designed for a different kind of person.
        </motion.p>
      </div>
    </section>
  );
}
