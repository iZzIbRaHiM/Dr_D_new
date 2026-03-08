"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { hero } from "@/content/hero";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      <div className="hero-chart-bg absolute inset-0 bg-midnight-deep/50" />
      <div className="hero-chart-lines" />
      <div className="container relative z-10 mx-auto flex min-h-[90vh] w-full max-w-full flex-col items-center justify-center px-4 py-24 text-center md:px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold"
        >
          {hero.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-silver md:text-xl"
        >
          {hero.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="pulse" size="xl" asChild>
            <Link href={hero.ctaPrimaryHref}>{hero.ctaPrimary}</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href={hero.ctaSecondaryHref}>{hero.ctaSecondary}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
