"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { courses, flagshipProgram } from "@/content/courses";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export function CoursesSection() {
  return (
    <section id="programs" className="relative scroll-mt-24 border-t border-white/5 bg-midnight py-24">
      <div className="container mx-auto w-full min-w-0 px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="mb-4 text-center">
          <span className="rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            {flagshipProgram.badge}
          </span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl text-center mb-16">
          {flagshipProgram.title}
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="mx-auto max-w-3xl text-center text-slate-silver mb-16">
          {flagshipProgram.description}
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} className="flex justify-center mb-20">
          <Button variant="outline" size="lg" asChild>
            <Link href={flagshipProgram.href}>{flagshipProgram.cta}</Link>
          </Button>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="grid w-full min-w-0 gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <motion.div key={course.id} variants={item} className="min-w-0">
              <Card className="flex h-full min-w-0 flex-col">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1" />
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={course.href}>{course.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
