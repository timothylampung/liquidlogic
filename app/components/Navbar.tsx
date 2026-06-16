"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "#demo" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 28 C14 18, 34 18, 44 28"
          stroke="#6b9cc4"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M4 36 C14 26, 34 26, 44 36"
          stroke="#3b7eb9"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M4 44 C14 34, 34 34, 44 44"
          stroke="#0f4c81"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium tracking-[0.25em] text-muted uppercase">
          Liquid
        </span>
        <span className="text-lg font-bold tracking-[0.2em] text-foreground uppercase">
          Logic
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/5 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#trial"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            Free Trial
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-black/5 shadow-lg"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#trial"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-accent px-5 py-2 text-center text-sm font-semibold text-white"
              >
                Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
