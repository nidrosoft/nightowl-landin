import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProofMarquee from "@/components/SocialProofMarquee";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import NightModeLock from "@/components/NightModeLock";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <CursorGlow />
      <BackToTop />
      <Navigation />
      <Hero />
      <SocialProofMarquee />
      <ProblemStatement />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <NightModeLock />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
