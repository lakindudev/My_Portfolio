import { useState } from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "Python", icon: "/py.svg", category: "Languages" },
  { name: "Java", icon: "/java.svg", category: "Languages" },
  { name: "JavaScript", icon: "/js.svg", category: "Languages" },
  { name: "HTML", icon: "/html.svg", category: "Frontend" },
  { name: "CSS", icon: "/css.svg", category: "Frontend" },
  { name: "React", icon: "/re.svg", category: "Frontend" },
  { name: "NextJS", icon: "/next.svg", category: "Frontend" },
  { name: "TailwindCSS", icon: "/tail.svg", category: "Frontend" },
  { name: "Bootstrap", icon: "/bootstrap.svg", category: "Frontend" },
  { name: "NodeJS", icon: "/node.svg", category: "Backend" },
  { name: "Spring Boot", icon: "/spring.svg", category: "Backend" },
  { name: "MySQL", icon: "/mysql.svg", category: "Database" },
  { name: "PostgreSQL", icon: "/postgresql.svg", category: "Database" },
  { name: "Figma", icon: "/figma.svg", category: "Tools" },
  { name: "Trello", icon: "/trello.svg", category: "Tools" },
  { name: "Postman", icon: "/postman.svg", category: "Tools" },
];

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech =
    activeCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section
      id="tech-stack"
      className="relative py-20 flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          A collection of technologies and tools I've mastered throughout my
          journey as a developer.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-all"
              whileHover={{ y: -5, scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <h3 className="text-white font-medium text-center">
                {tech.name}
              </h3>
              <span className="text-xs text-gray-400 mt-1">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
