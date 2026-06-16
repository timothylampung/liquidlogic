"use client";
import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+60 14-886 8674";
const WHATSAPP_LINK = "https://wa.me/60148868674?text=Hi%20Liquid%20Logic%2C%20I%20would%20like%20to%20book%20my%2014%20day%20free%20trial.";

export default function CTASection() {
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

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Book Free Trial via WhatsApp
            </a>

            <p className="text-xs text-muted mt-4">
              Message us on {WHATSAPP_NUMBER}. No commitment. Free installation
              support included.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
