/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <SustainabilitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
