"use client";

import { motion } from "framer-motion";
import { Baby, Heart, Users, Calendar, ShoppingBag, GraduationCap } from "lucide-react";

const categories = [
  { name: "New Moms", icon: Baby, color: "bg-pink-100 text-pink-600" },
  { name: "Wellness", icon: Heart, color: "bg-rose-100 text-rose-600" },
  { name: "Communities", icon: Users, color: "bg-brand-100 text-brand-600" },
  { name: "Events", icon: Calendar, color: "bg-pink-50 text-pink-500" },
  { name: "Marketplace", icon: ShoppingBag, color: "bg-rose-50 text-rose-500" },
  { name: "Experts", icon: GraduationCap, color: "bg-brand-50 text-brand-500" },
];

export function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Explore MomSquadUp</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className={`w-24 h-24 rounded-full ${cat.color} flex items-center justify-center mb-4 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300`}>
                <cat.icon size={36} />
              </div>
              <span className="font-bold text-gray-700 group-hover:text-brand-600 transition-colors">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
