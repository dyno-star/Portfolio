import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from "framer-motion";

const projects: { id: number; title: string; year: string; tech: string[]; points: string[]; link: string; linkLabel: string }[] = [
  {
    id: 1,
    title: "SyllabusSync",
    year: "2026",
    tech: ["FastAPI", "React", "PostgreSQL"],
    points: [
      "Full-stack AI app that extracts assignments, deadlines, and grading policies from academic syllabi.",
      "90% extraction accuracy through eval-driven development, with a custom Word/PDF parsing pipeline.",
    ],
    link: "https://github.com/dyno-star/syllabussync",
    linkLabel: "View on GitHub",
  },
  {
    id: 2,
    title: "Recycling-AI",
    year: "2025",
    tech: ["Python", "YOLOv5", "OpenCV"],
    points: [
      "Real-time plastic bag detection system achieving up to 90% detection accuracy.",
      "Scalable Python backend handling 500+ requests/second via async processing.",
    ],
    link: "https://github.com/dyno-star/Recycling-AI",
    linkLabel: "View on GitHub",
  },
  {
    id: 3,
    title: "StoryTelling-AI",
    year: "",
    tech: [],
    points: ["AI-powered storytelling app."],
    link: "https://github.com/dyno-star/StoryTelling-AI",
    linkLabel: "View on GitHub",
  },
  {
    id: 4,
    title: "Find IT",
    year: "",
    tech: [],
    points: ["Lost and found site to help students find their lost items."],
    link: "https://github.com/dyno-star/Find-It",
    linkLabel: "View on GitHub",
  },
];

const Grid = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">My Projects</h2>
      <BentoGrid className="mt-10 md:auto-rows-auto md:grid-cols-2">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            className="h-full"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BentoGridItem
              id={item.id}
              title={
                <span className="flex items-baseline justify-between gap-2 text-gray-900 dark:text-white">
                  {item.title}
                  <span className="text-xs font-normal text-gray-500 dark:text-gray-400">{item.year}</span>
                </span>
              }
              description={
                <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {item.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  {item.tech.length > 0 && <div className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="rounded-full border border-blue-400/40 px-2 py-0.5 text-xs text-blue-600 dark:text-blue-300">{t}</span>
                    ))}
                  </div>}
                </div>
              }
              className="h-full justify-start hover:bg-blue-100/10 transition-colors duration-300"
              header={
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 underline">
                  {item.linkLabel}
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
