"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { howToApply } from "@/content/howToApply";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function HowToApplySection() {
  return (
    <section id="how-to-apply" className="relative scroll-mt-24 border-t border-white/5 bg-midnight py-24">
      <div className="container mx-auto w-full min-w-0 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            {howToApply.subtitle}
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white md:text-4xl">
            {howToApply.title}
          </h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid w-full min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {howToApply.steps.map((step, i) => (
            <motion.div key={step.title} variants={item} className="min-w-0">
              <Card className="min-w-0">
                <CardHeader className="pb-2">
                  <span className="text-2xl font-serif font-bold text-gold">0{i + 1}</span>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-silver">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href={howToApply.downloadHref}>{howToApply.downloadCta}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
