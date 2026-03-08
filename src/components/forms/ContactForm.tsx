"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" required placeholder="First Name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" required placeholder="Last Name" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone / Mobile *</Label>
        <Input id="phone" name="phone" type="tel" required placeholder="+92 300 1234567" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="flex w-full rounded-md border border-white/10 bg-slate-900/80 px-4 py-2 text-white placeholder:text-slate-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all"
          placeholder="How can we help?"
        />
      </div>
      {status === "success" && <p className="text-sm text-gold">Thank you. We will be in touch shortly.</p>}
      {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
      <Button type="submit" variant="default" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}
