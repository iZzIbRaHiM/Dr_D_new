import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { applyHero, applicationSteps, prerequisites, faqs } from "@/content/apply-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const Apply = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--midnight-light))_0%,hsl(var(--background))_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans text-sm tracking-widest uppercase mb-4">
            {applyHero.subtitle}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            {applyHero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {applyHero.description}
          </motion.p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-16">
            Application Process
          </h2>
          <div className="space-y-0">
            {applicationSteps.map((s, i) => (
              <motion.div key={s.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4 sm:gap-8 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center golden-aura">
                    <span className="gold-gradient-text font-serif font-bold text-lg">{s.step}</span>
                  </div>
                  {i < applicationSteps.length - 1 && <div className="w-px h-20 bg-border" />}
                </div>
                <div className="pb-12">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-2">{s.description}</p>
                  <p className="text-primary/70 font-sans text-sm italic">{s.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Brochure CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="glass-dark rounded-2xl p-6 sm:p-10 md:p-16 gold-border-glow text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Download Brochure</h2>
            <p className="text-muted-foreground font-sans mb-8">
              Get complete details about our programs, fee structure, and curriculum in our comprehensive brochure.
            </p>
            <a
              href="https://wa.me/923369872332?text=Hi%2C%20I%20would%20like%20to%20request%20the%20Dr%20D%20Academy%20brochure."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded golden-aura pulse-gold transition-all duration-300"
            >
              <Download size={18} /> Request Brochure via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-10">Prerequisites</h2>
          <div className="space-y-4">
            {prerequisites.map((p, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-4 glass-dark rounded-lg p-5 gold-border-glow">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <p className="text-muted-foreground font-sans">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-dark rounded-xl px-6 border border-border gold-border-glow"
              >
                <AccordionTrigger className="font-sans text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Apply;
