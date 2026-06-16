"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

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
                href="#trial"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors shadow-sm"
              >
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
            className="relative"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden chrome-border bg-surface-light border border-black/5 shadow-lg">
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
