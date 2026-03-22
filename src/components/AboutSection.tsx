"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop"
              alt="Cozy interior of Raada Cafe"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darkBrown/80 to-transparent flex items-end p-8">
              <div className="glass p-6 rounded-xl border-white/10">
                <p className="text-white font-medium text-lg italic">
                  &quot;More than just coffee, it&apos;s an experience we pour into every cup.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-darkBrown">
              A Cozy Retreat in the Heart of Surat
            </h2>
            <p className="text-lg text-brand-darkBrown/80 mb-6 leading-relaxed">
              At Raada Resto & Cafe, we believe in creating moments that linger. Located in the vibrant neighborhood of Vesu, our doors are open to those seeking a warm embrace of delightful aromas and comforting flavors.
            </p>
            <p className="text-lg text-brand-darkBrown/80 mb-8 leading-relaxed">
              Our earthy aesthetic—blending soothing beiges, deep greens, and warm browns—provides the perfect backdrop for your morning rituals, afternoon catch-ups, or evening dates. Every corner is designed to help you unplug and savor the present.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-brand-brown/20 p-4 rounded-xl text-center hover:bg-white transition-colors shadow-sm">
                <h3 className="text-3xl font-bold text-brand-green mb-2">5+</h3>
                <p className="text-brand-darkBrown/70 font-medium">Years of Excellence</p>
              </div>
              <div className="border border-brand-brown/20 p-4 rounded-xl text-center hover:bg-white transition-colors shadow-sm">
                <h3 className="text-3xl font-bold text-brand-green mb-2">10k+</h3>
                <p className="text-brand-darkBrown/70 font-medium">Happy Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
