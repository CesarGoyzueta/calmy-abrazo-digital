import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustHighlightsBand from "@/components/landing/TrustHighlightsBand";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FounderGroupSection from "@/components/landing/FounderGroupSection";
import TrustSection from "@/components/landing/TrustSection";
import PrivacySection from "@/components/landing/PrivacySection";
import FAQSection from "@/components/landing/FAQSection";
import AboutSection from "@/components/landing/AboutSection";
import CTASection from "@/components/landing/CTASection";
import TikTokSection from "@/components/landing/TikTokSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <a
      href="#contenido-principal"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-card focus:px-4 focus:py-2.5 focus:font-body focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-[var(--shadow-card)] focus:outline-none focus:ring-2 focus:ring-ring"
    >
      Saltar al contenido
    </a>
    <Navbar />
    <main id="contenido-principal">
      <HeroSection />
      <TrustHighlightsBand />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FounderGroupSection />
      <AboutSection />
      <TrustSection />
      <PrivacySection />
      <FAQSection />
      <CTASection />
      <TikTokSection />
    </main>
    <Footer />
  </div>
);

export default Index;
