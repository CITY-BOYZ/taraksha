import { motion } from "motion/react";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-medium mb-8 dark:text-white">
              Let's Build a <br />
              <span className="text-brand-teal italic">Cleaner Future.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              For partnerships, pilot inquiries, or to learn more about our technology, get in touch with the Taraksha Foundation team.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-teal">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">WhatsApp</p>
                  <a href="https://wa.me/917579747235" className="text-xl font-medium text-slate-900 dark:text-white hover:text-brand-teal transition-colors">+91 7579747235</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-teal">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <a href="mailto:tarakshafoundation@gmail.com" className="text-xl font-medium text-slate-900 dark:text-white hover:text-brand-teal transition-colors">tarakshafoundation@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] shadow-xl dark:bg-slate-900/80"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <Input placeholder="John Doe" className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 h-12 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Organization</label>
                <Input placeholder="Hospital / School Name" className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <Textarea placeholder="How can we collaborate?" className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 min-h-[150px] rounded-xl" />
              </div>
              <Button className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white h-14 rounded-xl text-lg font-bold">
                Send Inquiry
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
