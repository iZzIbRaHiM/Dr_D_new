import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { whyChooseUs, stats } from "@/content/site-data";

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-8">
              We <span className="gold-gradient-text">Simplify</span> Trading
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Dr D Academy has evolved over time and can help anyone with no
              experience and no prior knowledge about the markets to become a
              consistent trader capable of transforming your financial growth.
            </p>
            <div className="space-y-4">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-sans">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block mt-8 px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg pulse-gold hover:brightness-110 transition-all duration-300"
            >
              Enroll Now
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="glass-dark rounded-xl p-6 sm:p-8 text-center golden-aura"
              >
                <span className="font-serif text-3xl md:text-4xl font-bold gold-gradient-text">
                  {stat.value}
                </span>
                <p className="text-muted-foreground font-sans text-sm mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
