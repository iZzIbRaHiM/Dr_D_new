import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contactHero, contactInfo, contactFaqs } from "@/content/contact-data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm, isContactFormConfigured } from "@/lib/submitContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin size={20} className="text-primary" />,
  Mail: <Mail size={20} className="text-primary" />,
  Phone: <Phone size={20} className="text-primary" />,
  Clock: <Clock size={20} className="text-primary" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isContactFormConfigured()) {
      toast.error("Form is not configured. Set VITE_CONTACT_FORM_ENDPOINT in production.");
      return;
    }
    setSubmitting(true);
    try {
      const ok = await submitContactForm(form);
      if (ok) {
        toast.success("Message sent. We'll get back to you within 24 hours.");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again or contact us by phone/email.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--midnight-light))_0%,hsl(var(--background))_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans text-sm tracking-widest uppercase mb-4">
            {contactHero.subtitle}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            {contactHero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {contactHero.description}
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div key={info.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-dark rounded-xl p-6 gold-border-glow flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {iconMap[info.icon]}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground text-sm">{info.label}</h4>
                    <p className="text-muted-foreground font-sans text-sm mt-1">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="lg:col-span-3">
              <div className="glass-dark rounded-2xl p-8 md:p-12 gold-border-glow">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Ready to Get Started?</h2>
                <p className="text-muted-foreground font-sans text-sm mb-8">Fill out the form below and our team will reach out within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] transition-all"
                    />
                    <Input
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] transition-all"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] transition-all"
                  />
                  <Input
                    placeholder="Phone / WhatsApp"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] transition-all"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary focus:shadow-[0_10px_10px_-5px_rgba(212,175,55,0.2)] transition-all resize-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-sans font-semibold rounded golden-aura pulse-gold transition-all duration-300 disabled:opacity-70"
                  >
                    <Send size={16} /> {submitting ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {contactFaqs.map((faq, i) => (
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

export default Contact;
