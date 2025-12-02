import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ValuesSection from "@/components/ValuesSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MissionSection />
        <ValuesSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
