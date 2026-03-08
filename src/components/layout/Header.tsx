"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navigation } from "@/content/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="font-serif text-xl font-semibold text-white transition-colors hover:text-gold"
        >
          {navigation.logo}
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-slate-silver transition-all duration-300",
                "hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild>
            <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={cn("h-0.5 w-6 bg-current transition", open && "rotate-45 translate-y-2")} />
          <span className={cn("h-0.5 w-6 bg-current transition", open && "opacity-0")} />
          <span className={cn("h-0.5 w-6 bg-current transition", open && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 backdrop-blur-md md:hidden">
          <div className="container flex flex-col gap-4 px-4 py-4">
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-silver hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild>
              <Link href={navigation.cta.href} onClick={() => setOpen(false)}>
                {navigation.cta.label}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
