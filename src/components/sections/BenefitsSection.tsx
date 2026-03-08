"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { benefitsSection } from "@/content/benefits";
import { Button } from "@/components/ui/button";

export function BenefitsSection() {
  return (
    <section className="relative border-t border-white/5 bg-midnight py-24">
      <div className="container mx-auto w-full min-w-0 px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="text-center">
          <span className="rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            {benefitsSection.badge}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">{benefitsSection.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-silver leading-relaxed">{benefitsSection.description}</p>
        </motion.div>
        <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {benefitsSection.points.map((point) => (
            <motion.li key={point} className="flex items-center gap-3 rounded-lg border border-white/5 bg-slate-950/50 px-4 py-3 backdrop-blur-sm">
              <span className="text-gold">✓</span>
              <span className="text-slate-silver">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href={benefitsSection.href}>{benefitsSection.cta}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
