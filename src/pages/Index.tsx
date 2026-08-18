import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustHighlightsBand from "@/components/landing/TrustHighlightsBand";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FounderGroupSection from "@/components/landing/FounderGroupSection";
import TrustSection from "@/components/landing/TrustSection";
import FAQSection from "@/components/landing/FAQSection";
import AboutSection from "@/components/landing/AboutSection";
import CTASection from "@/components/landing/CTASection";
import TikTokSection from "@/components/landing/TikTokSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TrustHighlightsBand />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <FounderGroupSection />
    <AboutSection />
    <TrustSection />
    <FAQSection />
    <CTASection />
    <TikTokSection />
    <Footer />
  </div>
);

export default Index;
