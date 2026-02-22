import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BarChart3, Target, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { programsHero, programs } from "@/content/programs-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Programs = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--midnight-light))_0%,hsl(var(--background))_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-sans text-sm tracking-widest uppercase mb-4"
          >
            {programsHero.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight"
          >
            {programsHero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            {programsHero.description}
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-16">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="glass-dark rounded-2xl p-6 sm:p-8 md:p-12 gold-border-glow"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-sans font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/30">
                  {program.tag}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground text-sm font-sans">
                  <Clock size={14} /> {program.duration}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground text-sm font-sans">
                  <BarChart3 size={14} /> {program.level}
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {program.title}
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed max-w-3xl mb-8">
                {program.description}
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Outcomes */}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Target size={18} className="text-primary" /> Expected Outcomes
                  </h3>
                  <ul className="space-y-3">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3 text-muted-foreground font-sans text-sm">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modules */}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    Curriculum Modules
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {program.modules.map((mod) => (
                      <div
                        key={mod}
                        className="px-3 py-2 rounded-lg bg-secondary/50 text-muted-foreground font-sans text-sm border border-border"
                      >
                        {mod}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 mt-10 pt-8 border-t border-border">
                <div className="flex gap-2 flex-wrap">
                  {program.markets.map((m) => (
                    <span key={m} className="px-2.5 py-1 text-xs font-sans bg-muted rounded text-muted-foreground">
                      {m}
                    </span>
                  ))}
                </div>
                <div className="sm:ml-auto w-full sm:w-auto">
                  <Link
                    to="/apply"
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto px-8 py-3 border border-primary/50 text-primary font-sans text-sm font-medium rounded golden-aura hover:bg-primary/10 transition-all duration-300"
                  >
                    Enroll Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Programs;
