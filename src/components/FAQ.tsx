"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Night Owl really free?",
    answer:
      "Yes! The core experience—matching, thoughts, lounges, and chat—is completely free. We offer Night Owl+ for power users who want extra features, but the free version is full-featured.",
  },
  {
    question: "Why does the app only work at night?",
    answer:
      "Night Owl is designed for a specific community: people who are awake when most aren't. By limiting activity to night hours (8PM-6AM in your timezone), we ensure everyone online is a genuine night owl, leading to more authentic connections.",
  },
  {
    question: "Is my identity really anonymous?",
    answer:
      "Completely. We never ask for your real name, and your phone number is only used for verification—it's never shown to other users. You appear only as your chosen alias and mood.",
  },
  {
    question: "Are messages really private?",
    answer:
      "Yes. All direct messages are end-to-end encrypted. We also auto-delete messages after a set period, and you can clear your chat history anytime.",
  },
  {
    question: "How does mood matching work?",
    answer:
      "When you select your current moods (up to 3), our algorithm finds others feeling similarly. You'll see a compatibility percentage based on mood overlap, activity patterns, and community karma.",
  },
  {
    question: "What are Whispers?",
    answer:
      "Whispers are temporary thoughts that disappear after 24 hours. They're perfect for those fleeting 3am thoughts you want to share but not forever.",
  },
  {
    question: "Is there moderation?",
    answer:
      "Yes. Night Owl is community-moderated with robust block and report tools. Harassment, spam, and bad actors are quickly removed. We take kindness seriously.",
  },
  {
    question: "What are Audio Lounges?",
    answer:
      "Live voice rooms where night owls gather to chat. You can listen in, react with emojis, or raise your hand to speak. Topics range from deep talks to music sharing to just hanging out.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-[#262626] last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-[#8B5CF6] transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#8B5CF6]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#A1A1AA] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1a1033]/20 to-[#0D0D0D]" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium mb-4 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">Got questions?</h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-[#1A1A1A]/60 border border-[#262626] px-6 md:px-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
