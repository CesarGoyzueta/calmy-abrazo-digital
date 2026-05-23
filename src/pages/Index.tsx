import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ExamplesSection from "@/components/landing/ExamplesSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import MidCTASection from "@/components/landing/MidCTASection";
import TrustSection from "@/components/landing/TrustSection";
import FAQSection from "@/components/landing/FAQSection";
import AboutSection from "@/components/landing/AboutSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <UseCasesSection />
    <HowItWorksSection />
    <ExamplesSection />
    <ComparisonSection />
    <MidCTASection />
    <TrustSection />
    <FAQSection />
    <AboutSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
