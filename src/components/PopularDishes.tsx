"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dishes = [
  {
    id: 1,
    name: "Truffle Mushroom Pasta",
    price: "₹450",
    description: "Creamy fettuccine with wild mushrooms and truffle oil.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Avocado Toast",
    price: "₹320",
    description: "Sourdough toast topped with smashed avocado, cherry tomatoes, and microgreens.",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Signature Cappuccino",
    price: "₹250",
    description: "Perfectly brewed espresso with velvety steamed milk and latte art.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2000&auto=format&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PopularDishes() {
  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-brand-darkBrown"
          >
            Popular Dishes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-darkBrown/70 max-w-2xl mx-auto"
          >
            Savor our most loved culinary creations, crafted with passion and the finest ingredients.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dishes.map((dish) => (
            <motion.div 
              key={dish.id} 
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={dish.image} 
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-brand-darkBrown">{dish.name}</h3>
                  <span className="text-brand-green font-bold text-lg">{dish.price}</span>
                </div>
                <p className="text-brand-darkBrown/70 mb-6">{dish.description}</p>
                <button className="w-full py-3 rounded-xl border-2 border-brand-green text-brand-green font-medium hover:bg-brand-green hover:text-white transition-colors">
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
