import { Moon, Users, Heart, Shield, MessageCircle, AlertTriangle, ThumbsUp, Ban, Flag, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Community Guidelines | Night Owl",
  description: "Our community guidelines for a safe and welcoming Night Owl experience.",
};

export default function CommunityGuidelines() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      {/* Header */}
      <div className="border-b border-[#262626]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <Moon className="w-8 h-8 text-[#8B5CF6] group-hover:text-[#C4B5FD] transition-colors" />
            <span className="text-xl font-bold text-white">Night Owl</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8B5CF6]/10 mb-6">
            <Users className="w-8 h-8 text-[#8B5CF6]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Guidelines</h1>
          <p className="text-[#A1A1AA] text-lg">
            Building a safe space for night owls to connect, one conversation at a time.
          </p>
          <p className="text-[#666] text-sm mt-4">Last updated: December 1, 2025</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Our Philosophy */}
          <section className="prose prose-invert max-w-none">
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-[#F472B6]" />
                Our Philosophy
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                Night Owl exists because we believe everyone deserves a place to be themselves, especially during those quiet hours when the rest of the world is asleep. Our community is built on empathy, authenticity, and mutual respect. These guidelines help us maintain that safe space for everyone.
              </p>
            </div>
          </section>

          {/* The Golden Rules */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <ThumbsUp className="w-6 h-6 text-[#8B5CF6]" />
              The Golden Rules
            </h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Be Kind",
                  description: "Remember there's a real person on the other side of every conversation. Treat them how you'd want to be treated at 3am when you're feeling vulnerable.",
                  icon: Heart,
                  color: "#F472B6",
                },
                {
                  title: "Be Authentic",
                  description: "You don't need to share your real name, but be genuine in your interactions. Fake personas and catfishing have no place here.",
                  icon: Users,
                  color: "#60A5FA",
                },
                {
                  title: "Be Respectful",
                  description: "Respect boundaries, consent, and differences. Not everyone thinks like you, and that's what makes conversations interesting.",
                  icon: Shield,
                  color: "#6EE7B7",
                },
                {
                  title: "Be Supportive",
                  description: "Many people come here during difficult moments. A little kindness can go a long way. If someone's struggling, be there for them.",
                  icon: MessageCircle,
                  color: "#FBBF24",
                },
              ].map((rule, index) => (
                <div key={index} className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${rule.color}15` }}
                    >
                      <rule.icon className="w-5 h-5" style={{ color: rule.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{rule.title}</h3>
                      <p className="text-[#A1A1AA] text-sm">{rule.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What's Not Allowed */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Ban className="w-6 h-6 text-[#EF4444]" />
              What&apos;s Not Allowed
            </h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#EF4444]/20">
              <p className="text-[#A1A1AA] mb-6">
                The following behaviors will result in immediate action, including potential permanent bans:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Harassment or bullying of any kind",
                  "Hate speech or discrimination",
                  "Sexual harassment or unwanted advances",
                  "Sharing explicit content without consent",
                  "Threats of violence or self-harm",
                  "Doxxing or sharing private information",
                  "Spam, scams, or promotional content",
                  "Impersonation or catfishing",
                  "Encouraging illegal activities",
                  "Exploiting or manipulating others",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-[#A1A1AA] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Conversations */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-[#8B5CF6]" />
              Conversation Guidelines
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">In Private Chats</h3>
                <ul className="text-[#A1A1AA] text-sm space-y-2">
                  <li>• Always ask before sharing explicit content</li>
                  <li>• Respect when someone wants to end a conversation</li>
                  <li>• Don&apos;t pressure anyone to share personal information</li>
                  <li>• Report any concerning behavior immediately</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">In Audio Lounges</h3>
                <ul className="text-[#A1A1AA] text-sm space-y-2">
                  <li>• Wait your turn to speak—don&apos;t interrupt</li>
                  <li>• Keep the conversation on topic</li>
                  <li>• Be mindful of background noise</li>
                  <li>• Respect the room moderators</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">In Thoughts Feed</h3>
                <ul className="text-[#A1A1AA] text-sm space-y-2">
                  <li>• Share authentically, but consider the impact</li>
                  <li>• Add content warnings for sensitive topics</li>
                  <li>• Engage constructively with others&apos; thoughts</li>
                  <li>• Don&apos;t use it for self-promotion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Reporting */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Flag className="w-6 h-6 text-[#FBBF24]" />
              Reporting & Enforcement
            </h2>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#0D0D0D] border border-[#8B5CF6]/20">
              <h3 className="font-semibold text-white mb-4">How to Report</h3>
              <p className="text-[#A1A1AA] mb-4">
                If you encounter behavior that violates these guidelines:
              </p>
              <ol className="text-[#A1A1AA] space-y-2 mb-6">
                <li>1. Tap the <strong className="text-white">three dots</strong> on any message, profile, or thought</li>
                <li>2. Select <strong className="text-white">&quot;Report&quot;</strong></li>
                <li>3. Choose the reason and add any details</li>
                <li>4. Our team will review within 24 hours</li>
              </ol>
              <p className="text-[#A1A1AA] text-sm">
                All reports are confidential. The reported user won&apos;t know who reported them.
              </p>
            </div>
          </section>

          {/* Consequences */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[#FBBF24]" />
              What Happens When Rules Are Broken
            </h2>
            <div className="space-y-4">
              {[
                { level: "Warning", desc: "First-time minor violations result in a warning and content removal.", color: "#FBBF24" },
                { level: "Temporary Suspension", desc: "Repeated violations or moderate offenses lead to 24-72 hour suspensions.", color: "#FB923C" },
                { level: "Permanent Ban", desc: "Serious violations or repeated offenses result in permanent account removal.", color: "#EF4444" },
                { level: "Legal Action", desc: "Illegal activities will be reported to appropriate authorities.", color: "#DC2626" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                  <div 
                    className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <h3 className="font-semibold text-white">{item.level}</h3>
                    <p className="text-[#A1A1AA] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mental Health */}
          <section>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F472B6]/10 to-[#0D0D0D] border border-[#F472B6]/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-[#F472B6]" />
                A Note on Mental Health
              </h2>
              <p className="text-[#A1A1AA] mb-4">
                Many night owls come here during difficult moments. While we encourage supportive conversations, Night Owl is not a substitute for professional help.
              </p>
              <p className="text-[#A1A1AA]">
                If you or someone you&apos;re talking to is in crisis, please reach out to a mental health professional or crisis hotline. In the US, you can text HOME to 741741 or call 988.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#8B5CF6]" />
              Questions?
            </h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <p className="text-[#A1A1AA] mb-4">
                Have questions about our community guidelines? We&apos;re here to help:
              </p>
              <a 
                href="mailto:community@nightowl.app" 
                className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors"
              >
                <Mail className="w-4 h-4" />
                community@nightowl.app
              </a>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-[#262626] text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors"
          >
            ← Back to Night Owl
          </Link>
        </div>
      </div>
    </main>
  );
}
