import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/content/site-data";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
const SCROLL_THRESHOLD = 60;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      setScrolledPast(window.scrollY > SCROLL_THRESHOLD);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const headerHidden = isMobile && !scrolledPast;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: headerHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" onClick={scrollToTop} className="flex items-center gap-2">
          <img src="/Dr_D_Header.png" alt="Dr D Academy" className="h-12 w-auto" />
          <span className="font-serif text-2xl font-bold gold-gradient-text">Dr D Academy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={scrollToTop}
              className={`text-sm font-sans gold-underline hover:text-primary transition-colors duration-300 pb-1 ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="ml-4 px-6 py-2.5 border border-primary/50 text-primary font-sans text-sm font-medium rounded golden-aura hover:bg-primary/10 transition-all duration-300"
          >
            Contact us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => { setIsOpen(false); scrollToTop(); }}
                  className={`font-sans transition-colors ${
                    location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => { setIsOpen(false); scrollToTop(); }}
                className="px-6 py-2.5 border border-primary/50 text-primary text-center font-sans text-sm font-medium rounded golden-aura"
              >
                Contact us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
