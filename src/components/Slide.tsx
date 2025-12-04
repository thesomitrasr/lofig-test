import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const Slide: React.FC<SlideProps> = ({ children, className, isActive }) => {
  return (
    <motion.div
      className={cn(
        "w-full h-full flex flex-col items-center justify-center p-4 md:p-8 text-center overflow-y-auto no-scrollbar",
        className
      )}
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.95,
        filter: isActive ? "blur(0px)" : "blur(10px)",
        pointerEvents: isActive ? "auto" : "none"
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Apple-like ease
    >
      <div className="max-w-4xl w-full flex flex-col gap-8">
        {children}
      </div>
    </motion.div>
  );
};

export default Slide;
