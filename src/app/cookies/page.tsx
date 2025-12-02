import { Moon, Cookie, Settings, Shield, ToggleLeft, Info, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Night Owl",
  description: "Learn about how Night Owl uses cookies and similar technologies.",
};

export default function CookiePolicy() {
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
            <Cookie className="w-8 h-8 text-[#8B5CF6]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-[#A1A1AA] text-lg">
            No, not the midnight snack kind. Here&apos;s how we use digital cookies.
          </p>
          <p className="text-[#666] text-sm mt-4">Last updated: December 1, 2025</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What Are Cookies */}
          <section className="prose prose-invert max-w-none">
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Info className="w-6 h-6 text-[#8B5CF6]" />
                What Are Cookies?
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                Cookies are small text files stored on your device when you visit a website or use an app. They help us remember your preferences, keep you logged in, and understand how you use Night Owl. Think of them as tiny notes that help the app work better for you.
              </p>
            </div>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Settings className="w-6 h-6 text-[#8B5CF6]" />
              Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">Essential Cookies</h3>
                  <span className="px-2 py-1 rounded-full bg-[#6EE7B7]/10 text-[#6EE7B7] text-xs font-medium">Required</span>
                </div>
                <p className="text-[#A1A1AA] text-sm mb-3">
                  These cookies are necessary for Night Owl to function. They keep you logged in, remember your security settings, and ensure the app works properly.
                </p>
                <ul className="text-[#666] text-xs space-y-1">
                  <li>• Session management</li>
                  <li>• Authentication tokens</li>
                  <li>• Security preferences</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">Functional Cookies</h3>
                  <span className="px-2 py-1 rounded-full bg-[#60A5FA]/10 text-[#60A5FA] text-xs font-medium">Recommended</span>
                </div>
                <p className="text-[#A1A1AA] text-sm mb-3">
                  These enhance your experience by remembering your preferences like theme settings, language, and notification preferences.
                </p>
                <ul className="text-[#666] text-xs space-y-1">
                  <li>• Theme preferences (dark mode)</li>
                  <li>• Language settings</li>
                  <li>• Notification preferences</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">Analytics Cookies</h3>
                  <span className="px-2 py-1 rounded-full bg-[#FBBF24]/10 text-[#FBBF24] text-xs font-medium">Optional</span>
                </div>
                <p className="text-[#A1A1AA] text-sm mb-3">
                  Help us understand how you use Night Owl so we can improve. This data is anonymous and aggregated—we never track individual behavior.
                </p>
                <ul className="text-[#666] text-xs space-y-1">
                  <li>• Feature usage statistics</li>
                  <li>• Performance monitoring</li>
                  <li>• Error tracking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What We Don't Do */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#8B5CF6]" />
              What We DON&apos;T Do With Cookies
            </h2>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#0D0D0D] border border-[#8B5CF6]/20">
              <ul className="space-y-3 text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <span className="text-[#6EE7B7] mt-1">✓</span>
                  <span>We <strong className="text-white">don&apos;t use advertising cookies</strong>—no ads, remember?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6EE7B7] mt-1">✓</span>
                  <span>We <strong className="text-white">don&apos;t sell cookie data</strong> to third parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6EE7B7] mt-1">✓</span>
                  <span>We <strong className="text-white">don&apos;t track you</strong> across other websites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6EE7B7] mt-1">✓</span>
                  <span>We <strong className="text-white">don&apos;t build advertising profiles</strong> about you</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <ToggleLeft className="w-6 h-6 text-[#8B5CF6]" />
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">In the App</h3>
                <p className="text-[#A1A1AA] text-sm">
                  Go to <strong className="text-white">Settings → Privacy → Cookie Preferences</strong> to manage which optional cookies you allow.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">In Your Browser</h3>
                <p className="text-[#A1A1AA] text-sm">
                  Most browsers let you block or delete cookies. Check your browser&apos;s help section for instructions. Note that blocking essential cookies may prevent Night Owl from working properly.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">On Your Device</h3>
                <p className="text-[#A1A1AA] text-sm">
                  iOS and Android have privacy settings that let you limit tracking. We respect these settings automatically.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">How Long Do Cookies Last?</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#262626]">
                    <th className="text-left py-3 px-4 text-white font-semibold">Cookie Type</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-[#A1A1AA]">
                  <tr className="border-b border-[#262626]">
                    <td className="py-3 px-4">Session cookies</td>
                    <td className="py-3 px-4">Until you close the app</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="py-3 px-4">Authentication cookies</td>
                    <td className="py-3 px-4">30 days (or until logout)</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="py-3 px-4">Preference cookies</td>
                    <td className="py-3 px-4">1 year</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Analytics cookies</td>
                    <td className="py-3 px-4">90 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
            <p className="text-[#A1A1AA]">
              We may update this Cookie Policy from time to time. When we make changes, we&apos;ll update the date at the top and notify you if the changes are significant.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#8B5CF6]" />
              Questions About Cookies?
            </h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <p className="text-[#A1A1AA] mb-4">
                If you have questions about our use of cookies, reach out:
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
