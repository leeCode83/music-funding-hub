import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsMuding from "@/components/WhatIsMuding";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import KeyFeatures from "@/components/KeyFeatures";
import Comparison from "@/components/Comparison";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <WhatIsMuding />
        <HowItWorks />
        <WhyChoose />
        <KeyFeatures />
        <Comparison />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
