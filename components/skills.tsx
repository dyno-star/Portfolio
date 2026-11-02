import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaJava, FaAws, FaGitAlt, FaJs, FaHtml5 } from "react-icons/fa";
import {
  SiCplusplus, SiNextdotjs, SiDjango, SiFastapi, SiFlask, SiPostgresql,
  SiScikitlearn, SiOpencv, SiGithubactions, SiMysql,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
  { name: "Flask", icon: <SiFlask className="text-foreground" /> },
  { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
  { name: "OpenCV / YOLOv5", icon: <SiOpencv className="text-red-500" /> },
  { name: "AWS (S3)", icon: <FaAws className="text-orange-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
];

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="skills">
      <h2 className="heading">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-muted rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="mt-2 text-center text-foreground">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;