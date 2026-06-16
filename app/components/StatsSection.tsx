"use client";
import { motion } from "framer-motion";
import { DollarSign, Timer, Gauge, Wallet } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "3×",
    label: "Cheaper to run",
    detail: "vs replacing a traditional drink mixer",
  },
  {
    icon: Timer,
    value: "15s",
    label: "Per drink",
    detail: "Liquid Logic Mixer speed",
  },
  {
    icon: Gauge,
    value: "3×",
    label: "Faster",
    detail: "Normal mixer takes 45s / drink",
  },
  {
    icon: Wallet,
    value: "RM 29.90",
    label: "Lease per day",
    detail: "Up to RM 49.90 / day",
  },
];

export default function StatsSection() {
  return (
    <section
      id="why-us"
      className="relative py-20 border-y border-black/5 bg-surface-light"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-white border border-black/5 p-3 mb-4 shadow-sm">
                <s.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold metallic-text mb-1">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {s.label}
              </div>
              <div className="text-xs text-muted">{s.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
