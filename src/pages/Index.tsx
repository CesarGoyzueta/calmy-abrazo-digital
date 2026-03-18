import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ValuesSection from "@/components/landing/ValuesSection";
import AboutSection from "@/components/landing/AboutSection";
import EthicsSection from "@/components/landing/EthicsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <ValuesSection />
    <AboutSection />
    <EthicsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
