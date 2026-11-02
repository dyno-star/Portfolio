import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer Co-op",
    company: "Penn Mutual Life Insurance",
    location: "Philadelphia, PA",
    duration: "April 2026 – September 2026",
    achievements: [
      "Built a reusable masked-input React component for SSN/TIN handling, reducing data validation errors by 20%.",
      "Integrated USPS ZIP code lookup into client forms, auto-populating city and state and eliminating manual entry.",
      "Rewrote Elasticsearch search sanitization to escape special characters instead of stripping valid search terms.",
      "Corrected billing window logic for UL, IUL, and VUL life insurance policies, ensuring accurate billing periods.",
      "Built repeatable beneficiary entries and fixed stale-state and validation bugs in the Next.js death claim form.",
    ],
  },
  {
    title: "Software Engineering Resident",
    company: "Headstarter",
    location: "Remote",
    duration: "September 2025 – March 2026",
    achievements: [
      "Built full-stack web apps with React and FastAPI, improving code efficiency by 25%.",
      "Optimized database performance through advanced SQL query tuning, reducing average request latency by 150ms.",
      "Implemented GitHub Actions CI/CD pipelines, cutting deployment time by 50%.",
      "Collaborated cross-functionally with frontend engineers to improve core user experience metrics by 25%.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Codesoft",
    location: "Remote",
    duration: "April 2025 – August 2025",
    achievements: [
      "Built a customer behavior classifier in scikit-learn, boosting accuracy 12% to 78% via hyperparameter tuning.",
      "Implemented AWS S3 for 2GB+ of training data, reducing preprocessing time by 30%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Delaware Caregivers",
    location: "",
    duration: "July 2024 – September 2024",
    achievements: [
      "Built a web platform using Django and React, increasing client sign-ups by 25%.",
      "Implemented SEO strategies that improved website traffic by 40%.",
      "Integrated automated appointment booking, reducing scheduling errors by 35%.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "National Institute of Information Technology (NIIT)",
    location: "",
    duration: "July 2023 – September 2023",
    achievements: [
      "Redesigned a learning portal using React, improving usability for 500+ students.",
      "Integrated a user authentication system, enhancing platform security.",
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
            <p className="text-muted-foreground">{exp.company}{exp.location ? ` · ${exp.location}` : ""} | {exp.duration}</p>
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