import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aboutHero, founderSection, mission, values, milestones } from "@/content/about-data";
import { stats } from "@/content/site-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--midnight-light))_0%,hsl(var(--background))_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans text-sm tracking-widest uppercase mb-4">
            {aboutHero.subtitle}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            {aboutHero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {aboutHero.description}
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="glass-dark rounded-2xl p-6 sm:p-10 md:p-16 gold-border-glow text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">{mission.title}</h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed">{mission.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="md:col-span-2">
              <div className="glass-dark rounded-2xl p-6 sm:p-8 gold-border-glow text-center">
                <img src="/Abbass.jpeg" alt="Syed Abbas Shah — CEO, Dr D Academy" className="w-40 h-40 mx-auto rounded-full object-cover border-2 border-primary/30 mb-6" />
                <h3 className="font-serif text-2xl font-bold text-foreground">{founderSection.name}</h3>
                <p className="text-primary font-sans text-sm mt-1">{founderSection.title}</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="md:col-span-3 space-y-6">
              {founderSection.bio.map((para, i) => (
                <p key={i} className="text-muted-foreground font-sans leading-relaxed text-base">{para}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <span className="gold-gradient-text font-serif text-4xl md:text-5xl font-bold">{stat.value}</span>
                <p className="text-muted-foreground font-sans text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-dark rounded-xl p-6 sm:p-8 gold-border-glow">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Journey</h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div key={m.year} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4 sm:gap-6 items-start group">
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                  {i < milestones.length - 1 && <div className="w-px h-16 bg-border" />}
                </div>
                <div className="pb-8">
                  <span className="gold-gradient-text font-serif text-lg font-bold">{m.year}</span>
                  <p className="text-muted-foreground font-sans text-sm mt-1">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
