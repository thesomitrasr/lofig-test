import { motion } from "framer-motion";

const stats = [
  { label: "Active Users", value: "100K+" },
  { label: "Total Volume", value: "$500M" },
  { label: "Countries", value: "150+" },
];

export default function Stats() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center py-24 relative z-10 pointer-events-none">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="text-center pointer-events-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                {stat.value}
              </h3>
              <p className="text-xl text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
