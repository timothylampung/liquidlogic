"use client";
import { motion } from "framer-motion";
import { Droplets, Timer, ShieldCheck, SlidersHorizontal, Smartphone, Gem } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "15-Second Drinks",
    desc: "Serve every order in 15 seconds — 3× faster than a normal drink mixer.",
  },
  {
    icon: Droplets,
    title: "Automated Pouring",
    desc: "Sensor-driven precision delivers the exact volume every time with zero spillage.",
  },
  {
    icon: ShieldCheck,
    title: "Touchless Hygiene",
    desc: "Advanced IR sensors eliminate surface contact, keeping your station pristine and safe.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customizable Recipes",
    desc: "Program ratios, flavors, and strengths to match your exact taste profile.",
  },
  {
    icon: Smartphone,
    title: "App Integration",
    desc: "Manage queues, track consumption, and reorder supplies from your phone.",
  },
  {
    icon: Gem,
    title: "Stainless Finish",
    desc: "Brushed surgical-grade steel resists fingerprints and elevates any interior aesthetic.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Built for Speed, Savings & Service
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Every detail of Liquid Logic is designed to cut costs and serve
            more drinks, faster — without sacrificing quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="group relative h-full rounded-2xl p-6 glass-card hover:bg-white transition-colors shadow-sm">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-surface-light p-3 border border-black/5">
                  <f.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
