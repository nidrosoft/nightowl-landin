import { Moon, FileText, Users, AlertTriangle, Scale, Ban, RefreshCw, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Night Owl",
  description: "Read the terms and conditions for using Night Owl.",
};

export default function TermsOfService() {
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
            <FileText className="w-8 h-8 text-[#8B5CF6]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-[#A1A1AA] text-lg">
            The rules of the night. Simple, fair, and designed to keep everyone safe.
          </p>
          <p className="text-[#666] text-sm mt-4">Last updated: December 1, 2025</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Welcome */}
          <section className="prose prose-invert max-w-none">
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <h2 className="text-2xl font-bold text-white mb-4">Welcome to Night Owl 🦉</h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                By using Night Owl, you&apos;re joining a community of fellow night owls who value genuine connections, privacy, and respect. These terms exist to protect you and everyone in our community. We&apos;ve written them in plain English because legal jargon is for daytime people.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-[#8B5CF6]" />
              Who Can Use Night Owl
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">Age Requirement</h3>
                <p className="text-[#A1A1AA] text-sm">
                  You must be at least <strong className="text-white">18 years old</strong> to use Night Owl. This is a space for adults to connect, and we take this seriously.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">One Account Per Person</h3>
                <p className="text-[#A1A1AA] text-sm">
                  You may only create one account. Creating multiple accounts to evade bans or manipulate the platform will result in permanent removal.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">Be a Real Human</h3>
                <p className="text-[#A1A1AA] text-sm">
                  Bots, automated accounts, and fake profiles aren&apos;t welcome here. Night Owl is for real people seeking real connections.
                </p>
              </div>
            </div>
          </section>

          {/* Your Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Scale className="w-6 h-6 text-[#8B5CF6]" />
              Your Responsibilities
            </h2>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#0D0D0D] border border-[#8B5CF6]/20">
              <p className="text-[#A1A1AA] mb-4">When you use Night Owl, you agree to:</p>
              <ul className="space-y-3 text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <span className="text-[#6EE7B7] mt-1">✓</span>
                  <span>Treat other users with respect and kindness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6EE7B7] mt-1">✓</span>
                  <span>Keep your account secure and not share your login</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6EE7B7] mt-1">✓</span>
                  <span>Report any concerning behavior you encounter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6EE7B7] mt-1">✓</span>
                  <span>Use the app for its intended purpose: genuine connection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6EE7B7] mt-1">✓</span>
                  <span>Respect others&apos; privacy and boundaries</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Prohibited Content */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Ban className="w-6 h-6 text-[#EF4444]" />
              What&apos;s Not Allowed
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Harassment, bullying, or hate speech",
                "Sharing explicit content without consent",
                "Spam, scams, or promotional content",
                "Impersonating others",
                "Sharing others' private information",
                "Illegal activities of any kind",
                "Encouraging self-harm",
                "Discriminatory behavior",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                  <div className="w-6 h-6 rounded-full bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[#A1A1AA] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Consequences */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[#FBBF24]" />
              What Happens If You Break the Rules
            </h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <p className="text-[#A1A1AA] mb-4">
                We want Night Owl to be a safe space for everyone. If you violate these terms:
              </p>
              <ul className="space-y-2 text-[#A1A1AA]">
                <li>• <strong className="text-white">First offense:</strong> Warning and content removal</li>
                <li>• <strong className="text-white">Repeated violations:</strong> Temporary suspension</li>
                <li>• <strong className="text-white">Serious violations:</strong> Permanent ban without warning</li>
                <li>• <strong className="text-white">Illegal activity:</strong> Reported to authorities</li>
              </ul>
            </div>
          </section>

          {/* Premium */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <RefreshCw className="w-6 h-6 text-[#8B5CF6]" />
              Premium Subscriptions
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">Billing</h3>
                <p className="text-[#A1A1AA] text-sm">
                  Premium subscriptions are billed monthly or annually. Your subscription automatically renews unless cancelled at least 24 hours before the end of the current period.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">Refunds</h3>
                <p className="text-[#A1A1AA] text-sm">
                  We offer a 7-day money-back guarantee for first-time subscribers. After that, refunds are handled through your app store (Apple/Google).
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">Cancellation</h3>
                <p className="text-[#A1A1AA] text-sm">
                  You can cancel anytime through your device&apos;s subscription settings. You&apos;ll keep premium features until the end of your billing period.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <p className="text-[#A1A1AA] leading-relaxed">
                Night Owl and its original content, features, and functionality are owned by Rizzer and are protected by international copyright, trademark, and other intellectual property laws. Your content remains yours—we just need a license to display it within the app.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Changes to These Terms</h2>
            <p className="text-[#A1A1AA]">
              We may update these terms from time to time. When we do, we&apos;ll notify you through the app and update the date at the top of this page. Continued use of Night Owl after changes means you accept the new terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#8B5CF6]" />
              Questions?
            </h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <p className="text-[#A1A1AA] mb-4">
                Have questions about these terms? We&apos;re happy to clarify:
              </p>
              <a 
                href="mailto:legal@nightowl.app" 
                className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors"
              >
                <Mail className="w-4 h-4" />
                legal@nightowl.app
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
