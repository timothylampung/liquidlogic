"use client";
import { motion } from "framer-motion";
import { MousePointerClick, FlaskConical, Coffee } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MousePointerClick,
    title: "Select",
    desc: "Choose a drink recipe on the touchscreen — or let guests order from their phone.",
  },
  {
    num: "02",
    icon: FlaskConical,
    title: "Mix",
    desc: "Liquid Logic dispenses precise ratios, temperature, and ice level automatically.",
  },
  {
    num: "03",
    icon: Coffee,
    title: "Serve",
    desc: "Collect a perfectly mixed drink in just 15 seconds — 3× faster than a normal mixer.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Effortless in <span className="metallic-text">3 Steps</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            No training. No mess. Just consistent, café-quality drinks every
            time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* connector line on desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-6 inline-flex items-center justify-center rounded-2xl bg-white border border-black/5 p-4 shadow-sm">
                <s.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="text-xs font-bold text-accent mb-3">{s.num}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
