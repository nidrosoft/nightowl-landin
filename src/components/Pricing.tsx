"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Crown } from "lucide-react";

const freeFeatures = [
  "Unlimited mood matching",
  "Join audio lounges",
  "Share thoughts",
  "Basic chat features",
  "3 moods per match session",
];

const premiumFeatures = [
  "Everything in Free",
  "Unlimited mood selections",
  "Priority matching",
  "Voice call your matches",
  "See who liked your thoughts",
  "Custom alias colors",
  "Invisible mode",
  "Ad-free (we're already ad-free, but future-proof)",
  "Early access to new features",
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium mb-4 uppercase tracking-wider">
            <Crown className="w-4 h-4" />
            Night Owl+
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Unlock the <span className="gradient-text">full experience</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-[#1A1A1A]/60 border border-[#262626]"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-[#A1A1AA]">Always free, forever</p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-[#A1A1AA]">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#6EE7B7]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#6EE7B7]" />
                  </div>
                  <span className="text-[#A1A1AA]">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="block w-full py-3 text-center rounded-full border-2 border-[#262626] text-white font-semibold hover:border-[#8B5CF6]/50 transition-colors"
            >
              Get Started Free
            </a>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#4C1D95]/20 border border-[#8B5CF6]/30"
          >
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-sm font-medium">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Night Owl+</h3>
              <p className="text-[#A1A1AA]">For the true night owls</p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold">$4.99</span>
              <span className="text-[#A1A1AA]">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#8B5CF6]" />
                  </div>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="block w-full py-3 text-center rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/25 transition-all"
            >
              Start 7-Day Free Trial
            </a>

            <p className="text-center text-xs text-[#A1A1AA] mt-4">
              Cancel anytime. No questions asked.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
