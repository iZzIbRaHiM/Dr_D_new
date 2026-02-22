import { motion } from "framer-motion";
import { Shield, TrendingUp, Smartphone, CheckCircle2 } from "lucide-react";
import { derivSection, DERIV_REFERRAL_URL } from "@/content/deriv-data";

const iconMap = [Shield, TrendingUp, Smartphone, CheckCircle2];

const DerivSection = () => {
  return (
    <section id="deriv" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            {derivSection.badge}
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-6"
        >
          {derivSection.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-3xl mx-auto text-center text-muted-foreground font-sans text-lg leading-relaxed mb-10"
        >
          {derivSection.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10"
        >
          {derivSection.features.map((feature, i) => {
            const Icon = iconMap[i] ?? CheckCircle2;
            return (
              <div
                key={feature}
                className="flex items-center gap-3 text-foreground font-sans text-sm"
              >
                <Icon className="w-5 h-5 text-primary shrink-0" />
                <span>{feature}</span>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-center"
        >
          <a
            href={DERIV_REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg pulse-gold hover:brightness-110 transition-all duration-300"
          >
            {derivSection.cta}
          </a>
          <p className="text-muted-foreground font-sans text-xs mt-3">
            Opens Deriv.com — regulated broker. We may earn a referral benefit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DerivSection;
