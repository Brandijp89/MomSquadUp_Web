"use client";

import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Your Squad is <span className="text-brand-500">Waiting</span>.
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The community for moms to connect, share wisdom, and find local support. Smooth, simple, and always here for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-sm flex flex-col md:flex-row items-center gap-2 border border-brand-100">
            <div className="flex-1 flex items-center gap-3 px-6 py-3 w-full border-b md:border-b-0 md:border-r border-gray-100">
              <MapPin className="text-brand-500" size={24} />
              <input
                type="text"
                placeholder="Where are you located?"
                className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 font-medium"
              />
            </div>
            {/* <div className="flex-1 flex items-center gap-3 px-6 py-3 w-full">
              <Search className="text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Find playgroups, experts, advice..."
                className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 font-medium"
              />
            </div> */}
            <button className="w-full md:w-auto bg-brand-500 text-white px-10 py-4 rounded-xl md:rounded-full font-bold hover:bg-brand-600 transition-all active:scale-95">
              Search
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500"
        >
          <span>Popular:</span>
          {["Newborn Care", "Toddler Playdates", "Postpartum Wellness", "Expert Q&A"].map((tag) => (
            <button key={tag} className="px-4 py-1.5 bg-gray-50 rounded-full hover:bg-brand-50 hover:text-brand-600 transition-colors">
              {tag}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
