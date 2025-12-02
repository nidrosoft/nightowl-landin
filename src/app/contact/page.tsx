import { Moon, Mail, MessageCircle, Clock, MapPin, Send, HelpCircle, Bug, Heart } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Night Owl",
  description: "Get in touch with the Night Owl team. We're here to help.",
};

export default function ContactUs() {
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
            <MessageCircle className="w-8 h-8 text-[#8B5CF6]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-[#A1A1AA] text-lg">
            We&apos;re night owls too. Reach out anytime—we&apos;re probably awake.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626] hover:border-[#8B5CF6]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">General Support</h3>
            <p className="text-[#A1A1AA] text-sm mb-4">
              Questions about your account, features, or how things work? We&apos;ve got you.
            </p>
            <a 
              href="mailto:support@nightowl.app" 
              className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@nightowl.app
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626] hover:border-[#8B5CF6]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#EF4444]/10 flex items-center justify-center mb-4">
              <Bug className="w-6 h-6 text-[#EF4444]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Report a Bug</h3>
            <p className="text-[#A1A1AA] text-sm mb-4">
              Found something broken? Let us know and we&apos;ll squash it faster than you can say &quot;insomnia.&quot;
            </p>
            <a 
              href="mailto:bugs@nightowl.app" 
              className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors"
            >
              <Mail className="w-4 h-4" />
              bugs@nightowl.app
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626] hover:border-[#8B5CF6]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#6EE7B7]/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#6EE7B7]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Partnerships</h3>
            <p className="text-[#A1A1AA] text-sm mb-4">
              Interested in collaborating? We&apos;re always open to meaningful partnerships.
            </p>
            <a 
              href="mailto:partners@nightowl.app" 
              className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors"
            >
              <Mail className="w-4 h-4" />
              partners@nightowl.app
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626] hover:border-[#8B5CF6]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FBBF24]/10 flex items-center justify-center mb-4">
              <Send className="w-6 h-6 text-[#FBBF24]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Press & Media</h3>
            <p className="text-[#A1A1AA] text-sm mb-4">
              Writing about Night Owl? We&apos;d love to help with your story.
            </p>
            <a 
              href="mailto:press@nightowl.app" 
              className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors"
            >
              <Mail className="w-4 h-4" />
              press@nightowl.app
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#0D0D0D] border border-[#8B5CF6]/20 mb-16">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Response Times</h3>
              <p className="text-[#A1A1AA] mb-4">
                We aim to respond to all inquiries within 24-48 hours. For urgent safety concerns, we prioritize those immediately.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6EE7B7]"></div>
                  <span className="text-[#A1A1AA]">General: 24-48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FBBF24]"></div>
                  <span className="text-[#A1A1AA]">Bugs: 12-24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#EF4444]"></div>
                  <span className="text-[#A1A1AA]">Safety: Immediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Redirect */}
        <div className="text-center p-8 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
          <h3 className="text-xl font-bold text-white mb-2">Looking for Quick Answers?</h3>
          <p className="text-[#A1A1AA] mb-4">
            Check out our FAQ section—your question might already be answered!
          </p>
          <Link 
            href="/#faq" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white font-semibold rounded-full hover:bg-[#7C3AED] transition-colors"
          >
            View FAQ
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center gap-4">
            {[
              { name: "Twitter", href: "#" },
              { name: "Instagram", href: "#" },
              { name: "TikTok", href: "#" },
              { name: "Discord", href: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6]/30 transition-colors text-sm"
              >
                {social.name}
              </a>
            ))}
          </div>
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
