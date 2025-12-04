import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center py-24 relative z-10 pointer-events-none">
      <div className="container mx-auto px-4 text-center pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to dive in?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join the waitlist and be the first to experience the future of data visualization.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-slate-500"
                required
              />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                Get Early Access
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 font-medium text-lg"
            >
              Thanks for joining! We'll be in touch soon.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
