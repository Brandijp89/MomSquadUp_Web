"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    title: "Verified Community",
    description: "Connect with real moms in a safe, vetted environment designed for meaningful interactions.",
    icon: ShieldCheck,
  },
  {
    title: "Local Meetups",
    description: "Find playgroups and support circles right in your neighborhood. Never parent alone.",
    icon: Heart,
  },
  {
    title: "Expert Guidance",
    description: "Get direct access to pediatricians, nutritionists, and parenting experts whenever you need.",
    icon: Sparkles,
  },
  {
    title: "Trusted Marketplace",
    description: "Buy, sell, or swap baby gear with other local moms you can trust.",
    icon: CheckCircle2,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Thrive</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MomSquadUp is more than just an app; it's a lifeline for every stage of your motherhood journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100/50 hover:shadow-xl hover:shadow-brand-100 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 text-brand-500">
                <feature.icon size={30} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
