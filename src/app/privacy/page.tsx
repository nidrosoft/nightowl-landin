import { Moon, Shield, Lock, Eye, Database, Trash2, Globe, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Night Owl",
  description: "Learn how Night Owl protects your privacy and handles your data.",
};

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-[#8B5CF6]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-[#A1A1AA] text-lg">
            Your privacy isn&apos;t just a feature—it&apos;s our foundation.
          </p>
          <p className="text-[#666] text-sm mt-4">Last updated: December 1, 2025</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose prose-invert max-w-none">
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#8B5CF6]" />
                Our Privacy Promise
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                At Night Owl, we believe that late-night conversations should stay between you and the people you choose to share them with. We built this app for night owls who want genuine connections without sacrificing their privacy. Unlike other social apps, <strong className="text-white">we don&apos;t sell your data, we don&apos;t show you ads, and we don&apos;t track your every move.</strong>
              </p>
            </div>
          </section>

          {/* What We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Database className="w-6 h-6 text-[#8B5CF6]" />
              What We Collect (And Why)
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Account Information",
                  description: "Your email address (for account recovery only), username, and password. We never require your real name or phone number.",
                },
                {
                  title: "Mood & Preferences",
                  description: "The moods you select help us match you with like-minded night owls. This data is used solely for matching and is never shared externally.",
                },
                {
                  title: "Messages & Thoughts",
                  description: "Your conversations are end-to-end encrypted. We cannot read them, and they auto-delete based on your settings.",
                },
                {
                  title: "Usage Data",
                  description: "Anonymous analytics help us improve the app. We track features used, not the content you create.",
                },
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[#A1A1AA] text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Don't Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#8B5CF6]" />
              What We DON&apos;T Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Your real name or identity",
                "Your location data",
                "Your contacts or address book",
                "Your browsing history",
                "Your photos or camera roll",
                "Data from other apps",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-[#0D0D0D] border border-[#262626]">
                  <div className="w-6 h-6 rounded-full bg-[#6EE7B7]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#6EE7B7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#A1A1AA]">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#8B5CF6]" />
              How We Protect Your Data
            </h2>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#0D0D0D] border border-[#8B5CF6]/20">
              <ul className="space-y-4 text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5CF6] mt-1">•</span>
                  <span><strong className="text-white">End-to-end encryption</strong> for all private messages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5CF6] mt-1">•</span>
                  <span><strong className="text-white">Zero-knowledge architecture</strong> means we can&apos;t read your conversations even if we wanted to</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5CF6] mt-1">•</span>
                  <span><strong className="text-white">Regular security audits</strong> by independent third parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5CF6] mt-1">•</span>
                  <span><strong className="text-white">Data stored on secure servers</strong> with industry-standard encryption</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Trash2 className="w-6 h-6 text-[#8B5CF6]" />
              Your Rights & Controls
            </h2>
            <p className="text-[#A1A1AA] mb-6">
              You&apos;re in control of your data. Here&apos;s what you can do:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Download Your Data", desc: "Export everything we have about you anytime" },
                { title: "Delete Your Account", desc: "Permanently remove all your data with one tap" },
                { title: "Manage Permissions", desc: "Control what the app can access on your device" },
                { title: "Opt Out of Analytics", desc: "Disable anonymous usage tracking in settings" },
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-[#A1A1AA] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#8B5CF6]" />
              Third-Party Services
            </h2>
            <p className="text-[#A1A1AA] mb-4">
              We use minimal third-party services, and only when absolutely necessary:
            </p>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>• <strong className="text-white">Cloud hosting:</strong> For secure, reliable service</li>
              <li>• <strong className="text-white">Analytics:</strong> Anonymous, aggregated data only</li>
              <li>• <strong className="text-white">Payment processing:</strong> For premium subscriptions (we never see your card details)</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#8B5CF6]" />
              Questions?
            </h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <p className="text-[#A1A1AA] mb-4">
                We&apos;re here to help. If you have any questions about our privacy practices, reach out to us:
              </p>
              <a 
                href="mailto:privacy@nightowl.app" 
                className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors"
              >
                <Mail className="w-4 h-4" />
                privacy@nightowl.app
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
