import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ExamplesSection from "@/components/landing/ExamplesSection";
import TrustSection from "@/components/landing/TrustSection";
import AboutSection from "@/components/landing/AboutSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <TrustSection />
    <SolutionSection />
    <HowItWorksSection />
    <ExamplesSection />
    <AboutSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
