import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AwardSection from "@/components/AwardSection";
import ValuesSection from "@/components/ValuesSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AwardSection />
        <ValuesSection />
        <PlansSection />
        <TestimonialsSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
