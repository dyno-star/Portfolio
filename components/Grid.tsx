import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "B.A.G.S",
    description: "A recycling app to detect plastic bags and improve sorting.",
    link: "https://github.com/dyno-star", 
  },
  {
    id: 2,
    title: "Stock Dashboard",
    description: "Interactive dashboard with real-time stock updates using React and FastAPI.",
    link: "https://github.com/dyno-star/Portfolio", 
  },
  {
    id: 4,
    title: "StoryTelling-AI",
    description: "AI-powered storytelling application.",
    link: "https://github.com/dyno-star/StoryTelling-AI",
  },
  {
    id: 5,
    title: "Recipe",
    description: "A Python-based recipe management tool.",
    link: "https://github.com/dyno-star/Recipe",
  },
];

const Grid = () => {
  return (
    <section id="projects">
      <h2 className="heading">My Projects</h2>
      <BentoGrid className="mt-10">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BentoGridItem
              id={item.id}
              title={item.title}
              description={item.description}
              className="hover:bg-blue-100/10 transition-colors duration-300"
              header={
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                  View on GitHub
                </a>
              }
            />
          </motion.div>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;