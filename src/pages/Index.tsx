import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DerivSection from "@/components/DerivSection";
import CourseSection from "@/components/CourseSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToApplySection from "@/components/HowToApplySection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DerivSection />
      <CourseSection />
      <AboutSection />
      <WhyChooseUsSection />
      <BenefitsSection />
      <HowToApplySection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
