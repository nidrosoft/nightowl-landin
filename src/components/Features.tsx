"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Feather, Headphones, Shield, Heart, MessageSquare, Users, Lock } from "lucide-react";

const features = [
  {
    id: "matching",
    color: "#F472B6",
    icon: Sparkles,
    title: "Find Your Match",
    subtitle: "Connect based on how you feel, not how you look",
    description:
      "Select up to 3 moods that describe your current state. Our algorithm finds someone feeling the same way. No photos. No bios. Just two night owls who understand each other.",
    features: [
      "Select from 12+ moods (lonely, chill, anxious, talkative, creative, sleepless...)",
      "See match compatibility percentage",
      "Swipe to connect or pass",
      "Start chatting instantly when you match",
    ],
    mockup: "mood-selection",
  },
  {
    id: "thoughts",
    color: "#60A5FA",
    icon: Feather,
    title: "Share Your Thoughts",
    subtitle: "Your 3am thoughts deserve to be heard",
    description:
      'Post what\'s on your mind anonymously. No names, no photos—just raw, unfiltered thoughts from fellow insomniacs. Like, reply, and connect over shared experiences.',
    features: [
      "Post thoughts with mood tags",
      '"Whisper" mode for temporary posts (disappear in 24h)',
      "Trending thoughts feed",
      "Double-tap to like (Instagram-style interaction)",
      "Bookmark to save",
    ],
    mockup: "thoughts-feed",
  },
  {
    id: "lounges",
    color: "#34D399",
    icon: Headphones,
    title: "Audio Lounges",
    subtitle: "Late-night conversations, live",
    description:
      "Join voice rooms where night owls come together. Listen in on conversations about life, love, music, and everything in between. Raise your hand to speak when you're ready.",
    features: [
      "Browse lounges by topic (Deep Talk, Music, Creative, Random)",
      "See who's speaking with live audio waves",
      "React with emojis that float across the screen",
      "Room chat for quiet participation",
      "Create your own lounge",
    ],
    mockup: "audio-lounge",
  },
  {
    id: "privacy",
    color: "#FBBF24",
    icon: Shield,
    title: "Privacy First",
    subtitle: "Your secrets are safe with us",
    description:
      "We built Night Owl with privacy at its core. No real names required, no data selling, and end-to-end encryption for all conversations.",
    features: [
      "Anonymous by default",
      "Messages auto-delete",
      "No data selling or ads",
      "Block & report tools",
      "Community moderated",
      "Invisible mode option",
    ],
    mockup: "privacy",
  },
];

// Phone mockup component
function PhoneMockup({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="relative mx-auto w-[280px] h-[560px]">
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] p-2">
        <div className="w-full h-full rounded-[2.5rem] bg-[#0D0D0D] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0D0D0D] rounded-b-2xl z-10" />
          
          {/* Screen content based on feature */}
          <div className="w-full h-full p-4 pt-10">
            {feature.id === "matching" && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <p className="text-sm text-[#A1A1AA]">How are you feeling?</p>
                  <p className="text-xs text-[#666]">Select up to 3 moods</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Lonely", "Chill", "Anxious", "Talkative", "Creative", "Sleepless"].map((mood, i) => (
                    <span
                      key={mood}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        i < 3
                          ? "bg-[#F472B6]/20 text-[#F472B6] border border-[#F472B6]/50"
                          : "bg-[#262626] text-[#A1A1AA]"
                      }`}
                    >
                      {mood}
                    </span>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F472B6] to-[#8B5CF6]" />
                    <div>
                      <p className="text-sm font-medium">@MidnightSoul</p>
                      <p className="text-xs text-[#6EE7B7]">87% match</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded-full text-[10px] bg-[#F472B6]/20 text-[#F472B6]">Lonely</span>
                    <span className="px-2 py-1 rounded-full text-[10px] bg-[#22D3EE]/20 text-[#22D3EE]">Chill</span>
                  </div>
                </div>
              </div>
            )}
            
            {feature.id === "thoughts" && (
              <div className="space-y-3">
                <div className="text-center mb-4">
                  <p className="text-sm font-medium">Thoughts</p>
                </div>
                {[
                  { text: "Does anyone else feel like the night is the only time you can truly think?", likes: 234, mood: "Sleepless" },
                  { text: "Just realized I've been staring at the ceiling for 2 hours. At least I'm not alone here.", likes: 156, mood: "Lonely" },
                ].map((thought, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                    <p className="text-xs text-white mb-2">{thought.text}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#60A5FA]/20 text-[#60A5FA]">{thought.mood}</span>
                      <div className="flex items-center gap-1 text-[#A1A1AA]">
                        <Heart className="w-3 h-3" />
                        <span className="text-[10px]">{thought.likes}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {feature.id === "lounges" && (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <p className="text-sm font-medium">Audio Lounges</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#34D399]/20 to-[#0D0D0D] border border-[#34D399]/30">
                  <p className="text-sm font-medium mb-1">Late Night Deep Talk</p>
                  <p className="text-xs text-[#A1A1AA] mb-3">Philosophy & Life</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#F472B6] border-2 border-[#0D0D0D]" />
                      ))}
                    </div>
                    <span className="text-xs text-[#A1A1AA]">+24 listening</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 text-[#34D399]" />
                    <span className="text-xs text-[#34D399]">Live now</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                  <p className="text-xs font-medium mb-1">Music & Vibes</p>
                  <p className="text-[10px] text-[#A1A1AA]">12 in room</p>
                </div>
              </div>
            )}
            
            {feature.id === "privacy" && (
              <div className="flex flex-col items-center justify-center h-full -mt-10">
                <div className="w-20 h-20 rounded-full bg-[#FBBF24]/20 flex items-center justify-center mb-4">
                  <Lock className="w-10 h-10 text-[#FBBF24]" />
                </div>
                <p className="text-sm font-medium mb-2">End-to-End Encrypted</p>
                <p className="text-xs text-[#A1A1AA] text-center px-4">Your conversations are private. Only you and your match can read them.</p>
                <div className="mt-6 space-y-2 w-full px-4">
                  {["Anonymous Identity", "Auto-Delete Messages", "No Data Selling"].map((item) => (
                    <div key={item} className="flex items-center gap-2 p-2 rounded-lg bg-[#1A1A1A]">
                      <div className="w-4 h-4 rounded-full bg-[#FBBF24]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#FBBF24]" />
                      </div>
                      <span className="text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Glow effect - persistent and always visible */}
      <div
        className="absolute -inset-4 rounded-[4rem] blur-2xl -z-10 transition-colors duration-500"
        style={{ 
          backgroundColor: feature.color,
          opacity: 0.5,
        }}
      />
    </div>
  );
}

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium mb-4 uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need when you can&apos;t sleep
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
            Four powerful ways to connect, all in one app
          </p>
        </motion.div>

        {/* Feature Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 ${
                activeFeature === index
                  ? "text-white"
                  : "bg-[#1A1A1A] text-[#A1A1AA] hover:text-white"
              }`}
              style={{
                backgroundColor: activeFeature === index ? feature.color : undefined,
              }}
            >
              <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">{feature.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Feature Content */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: `${features[activeFeature].color}20` }}
            >
              {(() => {
                const IconComponent = features[activeFeature].icon;
                return <IconComponent className="w-5 h-5" style={{ color: features[activeFeature].color }} />;
              })()}
              <span style={{ color: features[activeFeature].color }} className="font-medium">
                {features[activeFeature].title}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {features[activeFeature].subtitle}
            </h3>

            <p className="text-[#A1A1AA] text-lg mb-8 leading-relaxed">
              {features[activeFeature].description}
            </p>

            <ul className="space-y-3">
              {features[activeFeature].features.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${features[activeFeature].color}20` }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: features[activeFeature].color }}
                    />
                  </div>
                  <span className="text-[#A1A1AA]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <PhoneMockup feature={features[activeFeature]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
