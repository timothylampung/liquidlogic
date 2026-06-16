"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-black/5">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Contact Us
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Have questions about leasing, pricing, or the free trial? Reach out
            and our team will get back to you quickly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="rounded-2xl glass-card p-6 flex items-start gap-4 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-xl bg-surface-light p-3 border border-black/5">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Email</div>
                <div className="text-sm text-muted">hello@liquidlogic.my</div>
              </div>
            </div>

            <div className="rounded-2xl glass-card p-6 flex items-start gap-4 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-xl bg-surface-light p-3 border border-black/5">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Phone</div>
                <div className="text-sm text-muted">+60 12-345 6789</div>
              </div>
            </div>

            <div className="rounded-2xl glass-card p-6 flex items-start gap-4 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-xl bg-surface-light p-3 border border-black/5">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Office</div>
                <div className="text-sm text-muted">Kuala Lumpur, Malaysia</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl p-8 border border-black/10 bg-white shadow-sm"
          >
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    className="rounded-xl bg-background border border-black/10 px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/30 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="rounded-xl bg-background border border-black/10 px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/30 transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full rounded-xl bg-background border border-black/10 px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/30 transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-xl bg-background border border-black/10 px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-5 py-3 text-sm font-medium text-emerald-700">
                  Message sent — we will be in touch soon.
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
