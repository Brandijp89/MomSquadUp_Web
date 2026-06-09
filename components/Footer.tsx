import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl font-bold text-brand-500">MomSquadUp</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering moms to build stronger communities, one connection at a time. Join the squad today.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <button key={idx} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-500 hover:border-brand-500 transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Find Local Groups</Link></li>
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Events Calendar</Link></li>
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Expert Q&A</Link></li>
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Partnerships</Link></li>
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-brand-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 MumSquadUp. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-600">English</Link>
            <Link href="#" className="hover:text-gray-600">Español</Link>
            <Link href="#" className="hover:text-gray-600">Français</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
