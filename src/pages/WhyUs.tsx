import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { whyUsHero, advantages, testimonials, whyUsFaqs } from "@/content/why-us-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import whyMentorship from "@/assets/why-mentorship.jpg";
import whyPractical from "@/assets/why-practical.jpg";
import whyTeam from "@/assets/why-team.jpg";
import whyLifetime from "@/assets/why-lifetime.jpg";

const whyImages = [whyMentorship, whyPractical, whyTeam, whyLifetime];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const WhyUs = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--midnight-light))_0%,hsl(var(--background))_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans text-sm tracking-widest uppercase mb-4">
            {whyUsHero.subtitle}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            {whyUsHero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {whyUsHero.description}
          </motion.p>
        </div>
      </section>

      {/* Advantages — alternating layout */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-24">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image placeholder */}
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="rounded-2xl overflow-hidden gold-border-glow aspect-[4/3]">
                  <img
                    src={whyImages[i]}
                    alt={adv.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {adv.title}
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                  {adv.description}
                </p>
                <ul className="space-y-3">
                  {adv.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-muted-foreground font-sans text-sm">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What Our Graduates Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-dark rounded-xl p-6 sm:p-8 gold-border-glow relative"
              >
                <Quote size={40} className="text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground font-sans leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-serif font-semibold text-foreground">{t.name}</p>
                  <p className="text-primary font-sans text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {whyUsFaqs.map((faq, i) => (
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

export default WhyUs;
