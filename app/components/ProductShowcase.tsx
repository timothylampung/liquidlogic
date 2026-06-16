"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/product/image1.png", alt: "Liquid Logic front profile" },
  { src: "/product/image2.png", alt: "Liquid Logic detail shot" },
  { src: "/product/image3.png", alt: "Liquid Logic interface" },
  { src: "/product/image4.png", alt: "Liquid Logic ambient shot" },
];

export default function ProductShowcase() {
  return (
    <section id="gallery" className="relative py-24 bg-surface-light">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            A Masterpiece in <span className="metallic-text">Steel</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Liquid Logic is not just a machine — it is a statement piece for modern spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm md:col-span-2 md:row-span-2 aspect-video md:aspect-auto"
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm aspect-video md:aspect-auto"
          >
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm aspect-video md:aspect-auto"
          >
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm md:col-span-3 aspect-video md:aspect-auto"
          >
            <Image
              src={images[3].src}
              alt={images[3].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
