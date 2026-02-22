import { motion } from "framer-motion";
import { TrendingUp, CheckCircle } from "lucide-react";
import courseSentiment from "@/assets/course-sentiment.jpg";

const CourseSection = () => {
  return (
    <section id="courses" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            Flagship Program
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Trading With <span className="gold-gradient-text">Market Sentiment</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto glass-dark rounded-2xl overflow-hidden golden-aura"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="text-primary font-sans font-semibold tracking-wide uppercase text-sm">
                  No. 1 Forex Market Course
                </span>
              </div>

              <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
                The Trading With Market Sentiment Program equips you with the knowledge
                and skills of a professional trader, with the potential for profitable
                outcomes. It encompasses numerous strategies and price action techniques
                suitable for various financial markets and trading styles.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Price Action Mastery",
                  "Market Structure Analysis",
                  "Risk Management Framework",
                  "Live Trading Sessions",
                  "Community Access",
                  "Lifetime Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-sans text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg pulse-gold hover:brightness-110 transition-all duration-300"
              >
                Enroll Now
              </a>
            </div>
            <div className="hidden lg:block">
              <img
                src={courseSentiment}
                alt="Trading course in session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSection;
