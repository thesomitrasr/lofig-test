import { motion } from "framer-motion";

interface ProblemSolutionProps {
  title: string;
  description: string;
  align?: "left" | "right";
}

export default function ProblemSolution({ title, description, align = "left" }: ProblemSolutionProps) {
  return (
    <section className="min-h-screen w-full flex items-center py-24 relative z-10 pointer-events-none">
      <div className="container mx-auto px-4">
        <div className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}>
          <motion.div
            initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl pointer-events-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{title}</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
