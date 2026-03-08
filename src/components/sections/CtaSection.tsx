"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative border-t border-white/5 bg-midnight-deep/80 py-16">
      <div className="container mx-auto w-full min-w-0 px-4 text-center md:px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm uppercase tracking-widest text-gold">
          Find out more about our programs
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4">
          <Button variant="outline" size="lg" asChild>
            <a href="tel:+923152191891">Call: +92 315 2191891</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
