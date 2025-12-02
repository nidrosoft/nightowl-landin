"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've never felt so understood at 3am. Finally, people who get what it's like to be awake when the world isn't.",
    user: "@MidnightDreamer",
    mood: "Chill",
    moodEmoji: "😌",
    badge: "47 nights active",
    color: "#22D3EE",
  },
  {
    quote:
      "The audio lounges are like late-night radio but with real conversation. I've made genuine friends here.",
    user: "@StarGazer42",
    mood: "Talkative",
    moodEmoji: "🗣️",
    badge: "Night Owl+",
    color: "#4ADE80",
  },
  {
    quote:
      "No photos, no pressure. Just two people connecting over how we actually feel. This is what social should be.",
    user: "@CosmicWanderer",
    mood: "Creative",
    moodEmoji: "✨",
    badge: "89 karma",
    color: "#F472B6",
  },
  {
    quote: "I used to dread being awake at night. Now I look forward to it.",
    user: "@LunarEcho",
    mood: "Sleepless",
    moodEmoji: "🌙",
    badge: "156 nights active",
    color: "#60A5FA",
  },
  {
    quote: "Found my best friend at 4am in an audio lounge. We talk every night now. This app changed my life.",
    user: "@NightWanderer",
    mood: "Grateful",
    moodEmoji: "💜",
    badge: "200+ nights",
    color: "#8B5CF6",
  },
  {
    quote: "The anonymity lets me be truly myself. No judgment, just real conversations about real feelings.",
    user: "@SilentStar",
    mood: "Peaceful",
    moodEmoji: "🌟",
    badge: "Top contributor",
    color: "#FCD34D",
  },
];

const stats = [
  { value: "50K+", label: "Night Owls", description: "Active community members" },
  { value: "2M+", label: "Connections Made", description: "Successful matches" },
  { value: "4.8", label: "App Store Rating", description: "★★★★★", isRating: true },
  { value: "500K+", label: "Thoughts Shared", description: "And counting" },
];

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = numericValue * easeOut;

      if (value.includes(".")) {
        setDisplayValue(currentValue.toFixed(1) + suffix);
      } else {
        setDisplayValue(Math.floor(currentValue).toLocaleString() + suffix);
      }

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animate();
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
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
            Loved by Night Owls
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Real stories from the <span className="gradient-text">night shift</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.user}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-5 md:p-6 rounded-2xl bg-[#1A1A1A]/60 border border-[#262626] hover:border-[#8B5CF6]/30 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                style={{ backgroundColor: `${testimonial.color}20` }}
              />

              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 text-[#8B5CF6]/20" />

              {/* Quote */}
              <p className="text-sm md:text-base text-white mb-4 leading-relaxed relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* User info */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  {/* Avatar with color */}
                  <div 
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: `${testimonial.color}30`, color: testimonial.color }}
                  >
                    {testimonial.user.charAt(1).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{testimonial.user}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs">{testimonial.moodEmoji}</span>
                      <span className="text-xs text-[#A1A1AA]">{testimonial.mood}</span>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <span 
                  className="px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium"
                  style={{ backgroundColor: `${testimonial.color}20`, color: testimonial.color }}
                >
                  {testimonial.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-8 rounded-2xl bg-[#1A1A1A]/60 border border-[#262626]"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.isRating ? (
                  <div className="flex items-center justify-center gap-1">
                    <AnimatedCounter value={stat.value} />
                    <Star className="w-6 h-6 text-[#FCD34D] fill-[#FCD34D]" />
                  </div>
                ) : (
                  <AnimatedCounter value={stat.value} />
                )}
              </div>
              <p className="text-white font-medium mb-1">{stat.label}</p>
              <p className="text-xs text-[#A1A1AA]">{stat.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
