import Layout from "./landing/Layout";
import Hero from "./landing/Hero";
import ProblemSolution from "./landing/ProblemSolution";
import Stats from "./landing/Stats";
import Timeline from "./landing/Timeline";
import CTA from "./landing/CTA";
import Experience from "./landing/Experience";
import { useEffect, useState } from "react";

function ProgressIndicator() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -window.innerHeight / 2 && rect.top < window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === index ? "bg-purple-500 scale-150" : "bg-white/20"
          }`}
        />
      ))}
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <Experience />
      <ProgressIndicator />
      
      <Hero />
      
      <ProblemSolution 
        title="The Problem" 
        description="Traditional finance data is flat, boring, and hard to interpret. Spreadsheets and 2D charts fail to capture the complexity of modern decentralized networks."
        align="left"
      />
      
      <ProblemSolution 
        title="The Solution" 
        description="Lofig.io transforms complex data into immersive 3D visualizations. See the flow of assets, understand network topology, and make better decisions with spatial context."
        align="right"
      />

      <Stats />
      
      <Timeline />
      
      <CTA />
    </Layout>
  );
}

export default Home;
