"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border border-white/30 rounded-full glass"
          >
            Welcome to Raada
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Best Cafe in <br className="hidden md:block" />
            <span className="text-brand-green">Vesu, Surat</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Experience the perfect blend of cozy aesthetics, premium coffee, and exquisite culinary delights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="w-full sm:w-auto px-8 py-4 bg-brand-green text-white rounded-full font-medium hover:bg-brand-darkGreen transition-all hover:scale-105 active:scale-95"
            >
              Book Table
            </Link>
            <a
              href="https://wa.me/918238959529?text=Hi,%20I%20want%20to%20order%20from%20Raada%20Resto%20&%20Cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
            >
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
