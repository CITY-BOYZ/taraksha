import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-teal/5 dark:bg-brand-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-brand-gold/5 dark:bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal-dark dark:text-brand-teal text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>Redefining Public Hygiene</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] text-slate-900 dark:text-white mb-8 text-balance">
              Smart Hygiene <br />
              <span className="text-brand-teal italic">Infrastructure</span> <br />
              for India.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
              Taraksha is a self-sustaining, IoT-enabled public hygiene system designed to eliminate cross-infection in government hospitals, schools, and transit hubs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-dark text-white rounded-full px-8 h-14 text-lg">
                Explore the Pilot
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-200 dark:border-slate-800 dark:text-white rounded-full px-8 h-14 text-lg">
                Our Vision
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-teal" size={24} />
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Vandal-Proof Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">IoT Integrated</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Hygiene Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-panel p-6 rounded-2xl dark:bg-slate-900/60">
                  <p className="text-white font-serif text-2xl mb-2 italic">"A cleaner, safer future for every citizen."</p>
                  <p className="text-white/70 text-sm uppercase tracking-widest font-bold">Taraksha Foundation</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-panel p-6 rounded-2xl shadow-xl hidden md:block dark:bg-slate-900/80"
            >
              <p className="text-brand-teal text-4xl font-serif font-bold">80%</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Hospital Gap</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-xl hidden md:block dark:bg-slate-900/80"
            >
              <p className="text-brand-gold text-4xl font-serif font-bold">100%</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Self-Sustaining</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
