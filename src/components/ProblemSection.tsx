import { motion } from "motion/react";
import { AlertCircle, TrendingDown, Users, Hospital } from "lucide-react";

export default function ProblemSection() {
  const stats = [
    {
      icon: <Hospital className="text-red-500" />,
      value: "80%+",
      label: "Govt Hospitals",
      desc: "Lack consistent access to hand hygiene products."
    },
    {
      icon: <TrendingDown className="text-red-500" />,
      value: "High",
      label: "Infection Rates",
      desc: "Cross-infection is a leading cause of hospital mortality."
    },
    {
      icon: <Users className="text-red-500" />,
      value: "Low",
      label: "Staff Bandwidth",
      desc: "Manual monitoring of refills is often neglected."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-slate-900 dark:bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-6 border border-red-500/20">
              <AlertCircle size={14} />
              <span>The Critical Gap</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
              A Silent Crisis in <br />
              <span className="text-red-400 italic">Public Healthcare.</span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl">
              Despite being the backbone of disease prevention, hand hygiene infrastructure in India remains broken. High recurring costs and lack of monitoring lead to empty dispensers and increased risk for millions.
            </p>

            <div className="grid sm:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-white">{stat.value}</p>
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-xs text-slate-400 mt-1">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                alt="Healthcare Challenges"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
