"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/content/testimonials";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative border-t border-white/5 bg-midnight-deep/80 py-24">
      <div className="container mx-auto w-full min-w-0 px-4 md:px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-serif text-3xl font-bold text-white text-center md:text-4xl mb-16">
          What Our Members Say
        </motion.h2>
        <div className="grid w-full min-w-0 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="min-w-0">
              <Card className="min-w-0">
                <CardContent className="pt-6">
                  <span className="font-serif text-5xl text-gold/60 leading-none">"</span>
                  <p className="mt-2 break-words text-slate-silver leading-relaxed">{t.quote}</p>
                  <p className="mt-4 text-sm font-medium text-gold">{t.author}</p>
                  <p className="text-xs text-slate-silver">{t.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
