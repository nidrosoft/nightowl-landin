"use client";

import { motion } from "framer-motion";

const users = [
  { name: "@MidnightDreamer", mood: "Chill", color: "#22D3EE" },
  { name: "@StarGazer42", mood: "Talkative", color: "#4ADE80" },
  { name: "@NightWanderer", mood: "Creative", color: "#F472B6" },
  { name: "@LunarEcho", mood: "Sleepless", color: "#60A5FA" },
  { name: "@CosmicSoul", mood: "Lonely", color: "#FB923C" },
  { name: "@DreamCatcher", mood: "Anxious", color: "#FCD34D" },
  { name: "@NocturnalVibes", mood: "Chill", color: "#22D3EE" },
  { name: "@MoonChild", mood: "Creative", color: "#F472B6" },
  { name: "@SilentNight", mood: "Sleepless", color: "#60A5FA" },
  { name: "@TwilightZone", mood: "Talkative", color: "#4ADE80" },
  { name: "@InsomniacClub", mood: "Lonely", color: "#FB923C" },
  { name: "@NightOwlPro", mood: "Chill", color: "#22D3EE" },
];

const reviews = [
  { text: "Finally found my people!", rating: 5 },
  { text: "3am conversations hit different here", rating: 5 },
  { text: "Best app for night owls", rating: 5 },
  { text: "Love the anonymous matching", rating: 5 },
  { text: "Audio lounges are amazing", rating: 5 },
  { text: "No judgment, just vibes", rating: 5 },
];

function UserCard({ name, mood, color }: { name: string; mood: string; color: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#1A1A1A]/80 border border-[#262626] whitespace-nowrap">
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {name.charAt(1).toUpperCase()}
      </div>
      <div>
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs" style={{ color }}>{mood}</p>
      </div>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6EE7B7]"></span>
      </span>
    </div>
  );
}

function ReviewCard({ text, rating }: { text: string; rating: number }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1A1A1A]/80 border border-[#262626] whitespace-nowrap">
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#FCD34D]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-white">&ldquo;{text}&rdquo;</p>
    </div>
  );
}

export default function SocialProofMarquee() {
  return (
    <section className="py-12 overflow-hidden">
      {/* Users marquee - moving right */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />
        
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...users, ...users, ...users].map((user, i) => (
            <UserCard key={i} {...user} />
          ))}
        </motion.div>
      </div>

      {/* Reviews marquee - moving left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />
        
        <motion.div
          className="flex gap-4"
          animate={{ x: [-1920, 0] }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
