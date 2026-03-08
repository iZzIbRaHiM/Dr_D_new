import Link from "next/link";
import { footer } from "@/content/contact";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-black">
      <div className="container mx-auto w-full min-w-0 px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-silver transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-silver">{footer.copyright}</p>
          <p className="text-xs uppercase tracking-widest text-gold/80">{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
