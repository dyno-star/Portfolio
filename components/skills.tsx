import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiMongodb, SiCplusplus,  } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-600" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
];

const Skills = () => {
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
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