"use client";

import { motion } from "framer-motion";
import { founder } from "@/content/founder";

export function FounderSection() {
  return (
    <section className="relative border-t border-white/5 bg-midnight-deep/80 py-24">
      <div className="container mx-auto w-full min-w-0 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-3xl break-words text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            {founder.badge}
          </span>
          <p className="mt-6 font-serif text-2xl md:text-3xl leading-relaxed text-white">
            <span className="text-5xl font-serif text-gold/80 leading-none">&ldquo;</span>
            {founder.quote}
            <span className="text-5xl font-serif text-gold/80 leading-none">&rdquo;</span>
          </p>
          <p className="mt-6 font-serif text-lg font-semibold text-gold">{founder.title}</p>
          <p className="text-sm text-slate-silver">{founder.subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
