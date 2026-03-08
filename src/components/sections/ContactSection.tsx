"use client";

import { motion } from "framer-motion";
import { contact } from "@/content/contact";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-white/5 bg-midnight py-24">
      <div className="container mx-auto w-full min-w-0 px-4 md:px-6">
        <div className="grid w-full min-w-0 gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} className="min-w-0">
            <span className="text-xs font-medium uppercase tracking-widest text-gold">{contact.subtitle}</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white md:text-4xl">{contact.title}</h2>
            <p className="mt-4 text-slate-silver">{contact.description}</p>
            <ul className="mt-8 space-y-4">
              {contact.details.map((d) => (
                <li key={d.label} className="break-words">
                  <span className="text-xs uppercase text-gold/80">{d.label}</span>
                  <p className="text-slate-silver">{d.value}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} className="min-w-0">
            <h3 className="font-serif text-xl font-semibold text-white">{contact.formTitle}</h3>
            <p className="mt-1 text-sm text-slate-silver">{contact.formSubtitle}</p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
