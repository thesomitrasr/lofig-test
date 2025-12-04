import { motion } from "framer-motion";

const milestones = [
  { quarter: "Q1 2024", title: "Platform Launch", description: "Initial release of the core platform with basic visualization tools." },
  { quarter: "Q2 2024", title: "Mobile App", description: "Native mobile applications for iOS and Android." },
  { quarter: "Q3 2024", title: "AI Integration", description: "Advanced AI-powered predictive analytics and insights." },
  { quarter: "Q4 2024", title: "Global Expansion", description: "Opening new markets in Asia and Europe." },
];

export default function Timeline() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-24 relative z-10 pointer-events-none">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
        >
          Roadmap
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />

          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block w-5/12" />
              
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10" />
              
              <div className="w-full md:w-5/12 pl-8 md:pl-0 pointer-events-auto">
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
                  <span className="text-purple-400 font-mono text-sm mb-2 block">{item.quarter}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
