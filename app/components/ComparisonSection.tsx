"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Monthly cost", old: "$ 700.00 / Month", new: "RM 29.90 – 49.90 / Day" },
  { label: "Time per drink", old: "45 seconds", new: "15 seconds" },
  { label: "Speed advantage", old: "Standard", new: "3× Faster" },
  { label: "Cost advantage", old: "Standard", new: "3× Cheaper" },
];

export default function ComparisonSection() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Outmix. Outsave. Outperform.
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Compare the old way of mixing drinks with Liquid Logic — lower
            daily lease, faster pours, and zero upfront replacement cost.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 border border-black/10 bg-white shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex items-center justify-center rounded-full bg-red-500/10 p-2">
                <X className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Normal Drink Mixer</h3>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-surface-light p-5 border border-black/5">
                <div className="text-xs text-muted mb-1">Replacing 1 Drink Mixer est.</div>
                <div className="text-3xl font-bold text-foreground">$ 700.00</div>
                <div className="text-sm text-muted">/ Month</div>
              </div>

              <div className="rounded-2xl bg-surface-light p-5 border border-black/5">
                <div className="text-xs text-muted mb-1">Time per drink</div>
                <div className="text-3xl font-bold text-foreground">45 seconds</div>
                <div className="text-sm text-muted">/ Drink</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl p-8 border border-accent/20 bg-gradient-to-b from-accent/[0.03] to-white shadow-md"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 p-2">
                <Check className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Liquid Logic Mixer</h3>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-surface-light p-5 border border-black/5">
                <div className="text-xs text-muted mb-1">Leased from</div>
                <div className="text-3xl font-bold metallic-text">RM 29.90 – 49.90</div>
                <div className="text-sm text-muted">/ Day</div>
              </div>

              <div className="rounded-2xl bg-surface-light p-5 border border-black/5">
                <div className="text-xs text-muted mb-1">Time per drink</div>
                <div className="text-3xl font-bold metallic-text">15 Seconds</div>
                <div className="text-sm text-muted">/ Drink</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-black/10 overflow-hidden shadow-sm"
        >
          <table className="w-full text-sm">
            <thead className="bg-surface-light text-left">
              <tr>
                <th className="px-6 py-4 font-medium text-muted">Metric</th>
                <th className="px-6 py-4 font-medium text-muted">Normal Drink Mixer</th>
                <th className="px-6 py-4 font-medium text-accent">Liquid Logic Mixer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {rows.map((r) => (
                <tr key={r.label} className="bg-white">
                  <td className="px-6 py-4 text-foreground">{r.label}</td>
                  <td className="px-6 py-4 text-muted">{r.old}</td>
                  <td className="px-6 py-4 font-semibold text-emerald-600">{r.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
