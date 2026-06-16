"use client";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section id="trial" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-10 md:p-16 overflow-hidden border border-accent/10 bg-white shadow-lg"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center rounded-full bg-accent/10 p-3 mb-6">
              <CalendarCheck className="h-6 w-6 text-accent" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              BOOK YOUR{" "}
              <span className="metallic-text">14 Day Free Trial</span>
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-8">
              Try the Liquid Logic automatic drink mixer risk-free for 14 days.
              Experience 15-second pours and see the savings firsthand.
            </p>

            {!sent ? (
              <form
                onSubmit={onSubmit}
                className="mx-auto flex max-w-md flex-col sm:flex-row items-center gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full flex-1 rounded-full bg-background border border-black/10 px-5 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/30 transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors whitespace-nowrap"
                >
                  Book Free Trial
                </button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-5 py-3 text-sm font-medium text-emerald-700">
                You are booked — we will contact you within 24 hours.
              </div>
            )}

            <p className="text-xs text-muted mt-4">
              No commitment. Free installation support included.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
