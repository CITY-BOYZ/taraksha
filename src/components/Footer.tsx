import { Droplets, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-brand-teal">
                TARAKSHA FOUNDATION
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
              Smart, self-sustaining public hygiene infrastructure designed to solve the critical gap in Indian public healthcare.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-slate-500">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#problem" className="hover:text-brand-teal transition-colors">The Problem</a></li>
              <li><a href="#solution" className="hover:text-brand-teal transition-colors">Our Solution</a></li>
              <li><a href="#sustainability" className="hover:text-brand-teal transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-slate-500">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>tarakshafoundation@gmail.com</li>
              <li>+91 7579747235</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Taraksha Foundation. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
