import { motion } from "motion/react";
import { IndianRupee, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SustainabilitySection() {
  const points = [
    {
      icon: <IndianRupee className="text-brand-gold" />,
      title: "Self-Funding Model",
      value: "₹3,000 – ₹5,000",
      desc: "Monthly ad revenue generated per unit covers all refills and maintenance costs."
    },
    {
      icon: <TrendingUp className="text-brand-gold" />,
      title: "Scalable Impact",
      value: "1,000 Units",
      desc: "Our roadmap to scale across India without requiring repeated government funding."
    },
    {
      icon: <Zap className="text-brand-gold" />,
      title: "Zero Burden",
      value: "0 Cost",
      desc: "Institutions get world-class hygiene infrastructure at zero recurring expense."
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-brand-cream dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                alt="Sustainability and Growth"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-teal/20 mix-blend-multiply" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-3xl shadow-xl max-w-xs dark:bg-slate-800/80">
              <HeartHandshake className="text-brand-teal mb-4" size={32} />
              <p className="text-slate-900 dark:text-white font-serif text-xl mb-2 italic">"Sustainability is not an option, it's the foundation."</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-medium mb-8 leading-tight dark:text-white">
              A Model that <br />
              <span className="text-brand-gold italic">Sustains Itself.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              We solve the "Broken Window" problem of public infrastructure. By integrating digital advertising, we ensure that every Taraksha unit is always full, always functional, and never a burden on local budgets.
            </p>

            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center shrink-0">
                        {point.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-bold text-slate-900 dark:text-white">{point.title}</h3>
                          <span className="text-brand-gold font-serif font-bold">{point.value}</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{point.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
