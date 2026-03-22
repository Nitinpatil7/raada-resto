"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const categories = ["Starters", "Main Course", "Beverages"];

const menuItems = {
  "Starters": [
    { name: "Garlic Parmesan Fries", price: "₹220" },
    { name: "Bruschetta Platter", price: "₹280" },
    { name: "Crispy Cheese Balls", price: "₹250" },
    { name: "BBQ Chicken Wings", price: "₹350" },
  ],
  "Main Course": [
    { name: "Truffle Mushroom Pasta", price: "₹450" },
    { name: "Margherita Pizza", price: "₹400" },
    { name: "Grilled Herb Chicken", price: "₹550" },
    { name: "Paneer Tikka Panini", price: "₹380" },
  ],
  "Beverages": [
    { name: "Signature Cappuccino", price: "₹250" },
    { name: "Iced Caramel Macchiato", price: "₹280" },
    { name: "Matcha Latte", price: "₹300" },
    { name: "Fresh Berry Smoothie", price: "₹320" },
  ],
};

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState("Starters");

  return (
    <section className="py-24 bg-brand-darkBrown text-brand-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Explore Our Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-beige/70 max-w-2xl mx-auto"
          >
            Carefully curated dishes to tantalize your taste buds.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category 
                    ? "bg-brand-green text-white" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {(menuItems as Record<string, {name: string, price: string}[]>)[activeCategory].map((item, index) => (
              <div key={index} className="flex justify-between items-end border-b border-brand-beige/20 pb-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.name}</h4>
                  <p className="text-sm text-brand-beige/60">Includes taxes</p>
                </div>
                <span className="text-xl font-bold text-brand-green">{item.price}</span>
              </div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link 
              href="/menu"
              className="inline-block px-8 py-4 border-2 border-brand-green text-brand-green rounded-full font-medium hover:bg-brand-green hover:text-white transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
