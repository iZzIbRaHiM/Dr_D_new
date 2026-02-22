import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/25 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-6"
        >
          Elite Trading Education
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
        >
          Learn to Trade
          <br />
          <span className="gold-gradient-text">the Simplified Way.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mx-auto text-muted-foreground font-sans text-lg md:text-xl mb-12 leading-relaxed"
        >
          Dr D Academy is the premier forex market institute providing the most
          simplified and results-driven trading education from scratch for
          aspiring traders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#courses"
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-lg pulse-gold hover:brightness-110 transition-all duration-300 text-lg"
          >
            Enroll Now
          </a>
          <a
            href="#deriv"
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center px-10 py-4 border border-primary/40 text-primary font-sans font-semibold rounded-lg golden-aura hover:bg-primary/10 transition-all duration-300 text-lg"
          >
            Trade on Deriv MT5
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center px-10 py-4 border border-primary/40 text-primary font-sans font-semibold rounded-lg golden-aura hover:bg-primary/10 transition-all duration-300 text-lg"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
