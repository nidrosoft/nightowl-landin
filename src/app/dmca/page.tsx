import { Moon, Copyright, FileText, AlertCircle, Send, Clock, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "DMCA Policy | Night Owl",
  description: "Night Owl's Digital Millennium Copyright Act (DMCA) policy and takedown procedures.",
};

export default function DMCAPolicy() {
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
            <Copyright className="w-8 h-8 text-[#8B5CF6]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">DMCA Policy</h1>
          <p className="text-[#A1A1AA] text-lg">
            Protecting intellectual property rights in our community.
          </p>
          <p className="text-[#666] text-sm mt-4">Last updated: December 1, 2025</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Overview */}
          <section className="prose prose-invert max-w-none">
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#8B5CF6]" />
                Overview
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                Night Owl respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (&quot;DMCA&quot;), we will respond promptly to claims of copyright infringement that are reported to our designated copyright agent.
              </p>
            </div>
          </section>

          {/* What is DMCA */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">What is the DMCA?</h2>
            <p className="text-[#A1A1AA] mb-4">
              The Digital Millennium Copyright Act is a United States copyright law that provides a process for copyright owners to request the removal of infringing content from online platforms. It also provides protections for platforms that comply with takedown requests in good faith.
            </p>
          </section>

          {/* Filing a Notice */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-[#8B5CF6]" />
              Filing a DMCA Takedown Notice
            </h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <p className="text-[#A1A1AA] mb-6">
                If you believe your copyrighted work has been copied and is accessible on Night Owl in a way that constitutes copyright infringement, please provide our DMCA Agent with the following information:
              </p>
              <ol className="space-y-4 text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 text-[#8B5CF6] text-sm font-bold">1</span>
                  <span>A physical or electronic signature of the copyright owner or authorized representative</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 text-[#8B5CF6] text-sm font-bold">2</span>
                  <span>Identification of the copyrighted work claimed to have been infringed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 text-[#8B5CF6] text-sm font-bold">3</span>
                  <span>Identification of the material that is claimed to be infringing, including its location on Night Owl</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 text-[#8B5CF6] text-sm font-bold">4</span>
                  <span>Your contact information (address, telephone number, and email)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 text-[#8B5CF6] text-sm font-bold">5</span>
                  <span>A statement that you have a good faith belief that the use is not authorized by the copyright owner</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 text-[#8B5CF6] text-sm font-bold">6</span>
                  <span>A statement, under penalty of perjury, that the information in the notice is accurate</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Counter Notice */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-[#FBBF24]" />
              Counter-Notification
            </h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <p className="text-[#A1A1AA] mb-4">
                If you believe your content was removed in error, you may file a counter-notification containing:
              </p>
              <ul className="space-y-2 text-[#A1A1AA]">
                <li>• Your physical or electronic signature</li>
                <li>• Identification of the removed material and its former location</li>
                <li>• A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                <li>• Your name, address, and telephone number</li>
                <li>• Consent to the jurisdiction of federal court in your district</li>
                <li>• Agreement to accept service of process from the complainant</li>
              </ul>
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#8B5CF6]" />
              Our Process
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">1. Receipt & Review</h3>
                <p className="text-[#A1A1AA] text-sm">
                  Upon receiving a valid DMCA notice, we will review it for completeness and validity.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">2. Content Removal</h3>
                <p className="text-[#A1A1AA] text-sm">
                  If the notice is valid, we will promptly remove or disable access to the allegedly infringing content.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">3. User Notification</h3>
                <p className="text-[#A1A1AA] text-sm">
                  We will notify the user who posted the content about the takedown and provide information about filing a counter-notice.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <h3 className="font-semibold text-white mb-2">4. Counter-Notice Review</h3>
                <p className="text-[#A1A1AA] text-sm">
                  If a valid counter-notice is received, we will forward it to the original complainant. Content may be restored after 10-14 business days unless we receive notice of legal action.
                </p>
              </div>
            </div>
          </section>

          {/* Repeat Infringers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Repeat Infringers</h2>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#EF4444]/10 to-[#0D0D0D] border border-[#EF4444]/20">
              <p className="text-[#A1A1AA]">
                Night Owl maintains a policy of terminating accounts of users who are repeat copyright infringers. If a user receives multiple valid DMCA notices, their account may be permanently suspended or terminated.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#8B5CF6]" />
              DMCA Agent Contact
            </h2>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <p className="text-[#A1A1AA] mb-4">
                Send all DMCA notices and counter-notices to our designated agent:
              </p>
              <div className="space-y-2 text-[#A1A1AA]">
                <p><strong className="text-white">DMCA Agent</strong></p>
                <p>Rizzer Inc.</p>
                <p>Attn: Legal Department</p>
                <a 
                  href="mailto:dmca@nightowl.app" 
                  className="inline-flex items-center gap-2 text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  dmca@nightowl.app
                </a>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#262626]">
              <h3 className="font-semibold text-white mb-2">Important Note</h3>
              <p className="text-[#A1A1AA] text-sm">
                Filing a false DMCA notice or counter-notice may result in legal liability. We recommend consulting with a legal professional before submitting a notice if you are unsure whether your rights have been infringed or whether the content qualifies as fair use.
              </p>
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
