"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { about, whyUs, stats } from "@/content/about";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 border-t border-white/5 bg-midnight-deep/80 py-24">
      <div className="container mx-auto w-full min-w-0 px-4 md:px-6">
        <div className="grid w-full min-w-0 gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} className="min-w-0">
            <span className="text-xs font-medium uppercase tracking-widest text-gold">{about.subtitle}</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white md:text-4xl">{about.title}</h2>
            <div className="mt-6 space-y-4 text-slate-silver leading-relaxed break-words">
              {about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Button variant="outline" size="lg" className="mt-8" asChild>
              <Link href={about.href}>{about.cta}</Link>
            </Button>
          </motion.div>
          <motion.div id="why-us" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} className="min-w-0 scroll-mt-24">
            <span className="text-xs font-medium uppercase tracking-widest text-gold">{whyUs.subtitle}</span>
            <h3 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">{whyUs.title}</h3>
            <p className="mt-4 break-words text-slate-silver leading-relaxed">{whyUs.description}</p>
            <ul className="mt-6 space-y-3">
              {whyUs.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-slate-silver">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
            <Button variant="ghost" size="sm" className="mt-6 text-gold" asChild>
              <Link href={whyUs.href}>{whyUs.cta}</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-24 grid grid-cols-2 gap-8 border-t border-white/10 pt-16 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-bold text-gold md:text-5xl">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-silver">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
