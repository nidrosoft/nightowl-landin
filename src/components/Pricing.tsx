"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Rocket, Zap, Heart, Users, MessageCircle, Mic, Shield, Palette, Bell, Globe } from "lucide-react";

const socialFeatures = [
  { icon: Heart, title: "Mood-Based Matching", description: "Connect with people who feel the same way you do right now" },
  { icon: MessageCircle, title: "Anonymous Whispers", description: "Share your deepest thoughts without revealing your identity" },
  { icon: Mic, title: "Live Audio Lounges", description: "Join voice rooms for late-night conversations and debates" },
  { icon: Users, title: "Night Owl Communities", description: "Find your tribe in topic-based groups that come alive at night" },
  { icon: Shield, title: "Safe Space Guarantee", description: "AI-powered moderation keeps conversations respectful" },
  { icon: Zap, title: "Instant Connections", description: "No swiping, no waiting—get matched in seconds" },
];

const premiumFeatures = [
  { icon: Palette, title: "Custom Themes & Colors", description: "Personalize your Night Owl experience with unique styles" },
  { icon: Bell, title: "Smart Notifications", description: "Get notified when your mood matches are most active" },
  { icon: Globe, title: "Global Night Network", description: "Connect with night owls across different time zones" },
  { icon: Rocket, title: "Priority Matching", description: "Be first in line when someone shares your mood" },
  { icon: Heart, title: "Unlimited Mood Selections", description: "Express yourself with unlimited mood combinations" },
  { icon: Users, title: "Private Lounges", description: "Create invite-only audio rooms for your inner circle" },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium mb-4 uppercase tracking-wider">
            <Rocket className="w-4 h-4" />
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What&apos;s <span className="gradient-text">coming next</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            We&apos;re building the ultimate late-night social experience. Here&apos;s a sneak peek at what&apos;s in store.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-[#1A1A1A]/60 border border-[#262626]"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6EE7B7]/10 text-[#6EE7B7] text-sm font-medium mb-4">
                <Sparkles className="w-3 h-3" />
                Launch Features
              </div>
              <h3 className="text-2xl font-bold mb-2">Core Experience</h3>
              <p className="text-[#A1A1AA]">Everything you need to connect at night</p>
            </div>

            <ul className="space-y-5">
              {socialFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6EE7B7]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#6EE7B7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#A1A1AA]">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#4C1D95]/20 border border-[#8B5CF6]/30"
          >
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-sm font-medium">
                <Zap className="w-3 h-3" />
                Night Owl+
              </span>
            </div>

            <div className="mb-8 mt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium mb-4">
                <Rocket className="w-3 h-3" />
                Premium Features
              </div>
              <h3 className="text-2xl font-bold mb-2">Enhanced Experience</h3>
              <p className="text-[#A1A1AA]">Take your night owl journey to the next level</p>
            </div>

            <ul className="space-y-5">
              {premiumFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#A1A1AA]">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#A1A1AA]">
            Join the waitlist to be the first to experience these features when we launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
