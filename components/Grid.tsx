import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "B.A.G.S", description: "A recycling app to detect plastic bags.", link: "https://github.com/dyno-star" },
  { id: 2, title: "StoryTelling-AI", description: "AI-powered storytelling app.", link: "https://github.com/dyno-star/StoryTelling-AI" },
  { id: 3, title: "Recipe", description: "Recipe management tool.", link: "https://github.com/dyno-star/Recipe" },
];

const Grid = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">My Projects</h2>
      <BentoGrid className="mt-10">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BentoGridItem
              id={item.id}
              title={<span className="text-gray-900 dark:text-white">{item.title}</span>}
              description={<span className="text-gray-600 dark:text-gray-300">{item.description}</span>}
              className="hover:bg-blue-100/10 transition-colors duration-300"
              header={
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 underline">
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