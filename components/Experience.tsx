import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Delaware Caregivers",
    duration: "July 2024 - September 2024",
    achievements: [
      "Built a web platform using Django and React, increasing client sign-ups by 25%.",
      "Implemented SEO strategies that improved website traffic by 40%.",
      "Integrated automated appointment booking, reducing scheduling errors by 35%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "App Technologies",
    duration: "November 2024 - January 2025",
    achievements: [
      "Optimized database performance through SQL query tuning, reducing latency by 150ms per request.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing manual errors by 40%.",
      "Collaborated with frontend team to enhance user experience metrics by 25%.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "National Institute of Information Technology (NIIT)",
    duration: "July 2023 - September 2023",
    achievements: [
      "Redesigned learning portal using React, improving usability for 500+ students.",
      "Integrated user authentication system, enhancing platform security.",
      "Managed GitHub repositories and technical documentation.",
    ],
  },
];

const Experience = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="experience">
      <h2 className="heading">Experience</h2>
      <div className="mt-10 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-8 border-l-2 border-blue-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-300 rounded-full" />
            <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
            <p className="text-muted-foreground">{exp.company} | {exp.duration}</p>
            <ul className="mt-2 list-disc list-inside text-foreground">
              {exp.achievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + index * 0.2 + 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;