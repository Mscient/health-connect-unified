import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PatientSection from "@/components/PatientSection";
import DoctorSection from "@/components/DoctorSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PatientSection />
        <DoctorSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;