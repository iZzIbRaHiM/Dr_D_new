import { HeroSection } from "@/components/sections/HeroSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { HowToApplySection } from "@/components/sections/HowToApplySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <BenefitsSection />
      <FounderSection />
      <HowToApplySection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
