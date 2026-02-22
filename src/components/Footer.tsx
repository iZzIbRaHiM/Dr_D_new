import { Link } from "react-router-dom";
import { navLinks } from "@/content/site-data";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 sm:gap-3 flex-wrap">
              <img src="/New_Logo.png" alt="Dr D Academy" className="h-12 sm:h-14 w-auto shrink-0" />
              <span className="font-serif text-xl sm:text-2xl font-bold text-foreground">Dr D Academy</span>
            </Link>
            <p className="text-muted-foreground font-sans text-sm mt-4 leading-relaxed break-words">
              The premier trading institute dedicated to transforming aspiring
              traders into consistently profitable professionals through
              simplified, proven strategies.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-muted-foreground font-sans text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">
              Contact
            </h4>
            <div className="space-y-3 text-muted-foreground font-sans text-sm break-words">
              <p>City Housing Society, Jhelum</p>
              <p>info@drdacademy.com</p>
              <p>+923369872332</p>
              <p>10:00 AM - 07:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground font-sans text-sm">
            © {new Date().getFullYear()} Dr D Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
