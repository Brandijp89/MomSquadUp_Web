import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Apple, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <Features />

      {/* App CTA Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-500 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Take the Squad <br /> with You.
              </h2>
              <p className="text-brand-50 mb-10 text-lg opacity-90 leading-relaxed">
                Connect with moms on the go. Get instant notifications for local meetups, expert advice, and community updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-brand-50 transition-all active:scale-95">
                  <Apple size={24} />
                  <div className="text-left leading-tight">
                    <span className="text-[10px] block font-medium opacity-60">Download on</span>
                    App Store
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all active:scale-95">
                  <PlayCircle size={24} />
                  <div className="text-left leading-tight">
                    <span className="text-[10px] block font-medium opacity-60">Get it on</span>
                    Google Play
                  </div>
                </button>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-1/3 aspect-[9/16] bg-gray-900 rounded-[3rem] border-[12px] border-gray-800 shadow-2xl overflow-hidden group">
               {/* Mockup Content */}
               <div className="absolute inset-0 bg-brand-50 p-6 flex flex-col gap-4">
                 <div className="w-12 h-12 bg-brand-500 rounded-xl" />
                 <div className="h-6 w-3/4 bg-gray-200 rounded-full" />
                 <div className="grid grid-cols-2 gap-3 mt-4">
                   <div className="aspect-square bg-white rounded-2xl shadow-sm" />
                   <div className="aspect-square bg-white rounded-2xl shadow-sm" />
                   <div className="aspect-square bg-white rounded-2xl shadow-sm" />
                   <div className="aspect-square bg-white rounded-2xl shadow-sm" />
                 </div>
               </div>
               {/* Floating Bubbles Mock */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-500/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
