import { motion } from "motion/react";
import { Droplets, Cpu, Shield, Smartphone, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SolutionSection() {
  const features = [
    {
      icon: <Droplets className="text-brand-teal" />,
      title: "Dual Dispensing",
      desc: "Handwash and sanitizer in a single touchless unit."
    },
    {
      icon: <Shield className="text-brand-teal" />,
      title: "Vandal-Proof",
      desc: "Durable construction designed for high-traffic public spaces."
    },
    {
      icon: <Cpu className="text-brand-teal" />,
      title: "IoT Enabled",
      desc: "Real-time usage tracking and automated refill alerts."
    },
    {
      icon: <Monitor className="text-brand-teal" />,
      title: "Digital Screen",
      desc: "Integrated display for health awareness and ad revenue."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 border-brand-teal text-brand-teal px-4 py-1 rounded-full uppercase tracking-widest font-bold">
            The Solution
          </Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-medium mb-6 dark:text-white">
            <span className="text-brand-teal italic">Taraksha</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A smart, robust, and self-monitoring infrastructure designed specifically for the rigors of Indian public institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-12">
            {features.slice(0, 2).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6 items-start text-right flex-row-reverse"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-teal/5 dark:bg-brand-teal/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Mockup of the unit */}
            <div className="w-64 h-[500px] bg-slate-100 dark:bg-slate-900 rounded-[3rem] border-8 border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
              <div className="h-1/3 bg-slate-800 flex items-center justify-center p-4">
                <div className="w-full h-full bg-blue-500/20 rounded-lg border border-blue-400/30 flex items-center justify-center">
                  <Monitor className="text-blue-400 animate-pulse" size={40} />
                </div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between items-center">
                <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-brand-teal animate-ping" />
                </div>
                <div className="space-y-4 w-full">
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-full" />
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-2/3" />
                </div>
                <div className="w-full h-24 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  <Droplets className="text-slate-300 dark:text-slate-600" size={32} />
                </div>
              </div>
            </div>
            
            {/* Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-brand-teal/10 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-teal/5 rounded-full -z-10" />
          </motion.div>

          <div className="space-y-12">
            {features.slice(2, 4).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-teal/5 dark:bg-brand-teal/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
