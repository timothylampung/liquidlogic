"use client";
import { motion } from "framer-motion";
import { Play, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60148868674?text=Hi%20Liquid%20Logic%2C%20I%20would%20like%20to%20book%20my%2014%20day%20free%20trial.";

export default function HeroSection() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-1.5 text-xs font-medium text-accent mb-6 shadow-sm">
              <Play className="h-3.5 w-3.5" />
              Watch Our Demo Video
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
              3×{" "}
              <span className="metallic-text">Cheaper.</span>
              <br />
              3×{" "}
              <span className="metallic-text">Faster.</span>
            </h1>

            <p className="text-lg text-muted max-w-lg leading-relaxed mb-8">
              The Liquid Logic automatic drink mixer slashes costs and wait
              times. Lease from just RM 29.90 – 49.90 per day and serve every
              drink in 15 seconds.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                BOOK YOUR 14 Day Free Trial
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-light transition-colors"
              >
                See Pricing
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full md:max-w-xs aspect-[9/16] rounded-3xl overflow-hidden chrome-border bg-surface-light border border-black/5 shadow-xl">
              <video
                className="h-full w-full object-cover"
                src="/videos/Liquid%20Logic.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                poster="/product/image1.png"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
