"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Riya Patel",
    text: "Absolutely love the vibe here! The truffle pasta was heavenly, and the coffee is the best in Surat. My new go-to place.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    text: "Great place for weekend hangouts. The aesthetic is so calming, and the staff is very polite. Highly recommend the avocado toast.",
  },
  {
    id: 3,
    name: "Anjali Desai",
    text: "Such a beautiful cafe! The interiors are so photogenic, and the food matches the hype. Will definitely visit again.",
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-brand-darkBrown"
          >
            What Our Guests Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-brown/10 hover:shadow-xl transition-shadow relative"
            >
              <Quote className="w-12 h-12 text-brand-green/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6 text-brand-green">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-brand-darkBrown/80 mb-6 italic leading-relaxed">&quot;{review.text}&quot;</p>
              <h4 className="font-bold text-brand-darkBrown text-lg">- {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
