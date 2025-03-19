import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BSc in Computer Science",
    institution:
      "Informatics Institute of Technology, affiliated with the University of Westminster (UK)",
    duration: "2023 - Present",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science, focusing on software engineering and data structures.",
  },
  {
    degree: "Ordinary Level",
    institution: "Ananda College",
    duration: "Completed 2019",
    description: "Achieved nine 'A' grades in the Ordinary Level examinations.",
  },
  {
    degree: "Advanced Level",
    institution: "Ananda College",
    duration: "Completed 2022",
    description:
      "Achieved BBC in the Advanced Level examinations, focusing on Maths,Physics, Chemistry subjects.",
  },
];

const certificationData = [
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2022",
    link: "#",
  },
  // Add more certifications as needed
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications that have
            shaped my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
              Education
            </h3>

            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-700 pb-8 last:pb-0"
                >
                  <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-indigo-600 rounded-full border-4 border-gray-900"></div>
                  <h4 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h4>
                  <div className="flex items-center text-gray-400 mt-1 mb-2">
                    <span>{item.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{item.duration}</span>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              Certifications
            </h3>

            <div className="grid gap-6">
              {certificationData.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-indigo-500 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {cert.name}
                  </h4>
                  <div className="flex items-center text-gray-400 mt-1">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <span className="text-indigo-400 text-sm flex items-center">
                      View Certificate
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="/lakindu_cv.pdf"
                download="Lakindu_Perera_CV.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  fetch("/lakindu_cv.pdf")
                    .then((response) => {
                      if (response.ok) {
                        return response.blob();
                      }
                      throw new Error("CV file not available");
                    })
                    .then((blob) => {
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "Lakindu_Perera_CV.pdf";
                      document.body.appendChild(a);
                      a.click();
                      window.URL.revokeObjectURL(url);
                      a.remove();
                    })
                    .catch((error) => {
                      console.error("Download failed:", error);
                      alert(
                        "Sorry, the CV file is currently not available. Please try again later."
                      );
                    });
                }}
                className="inline-flex items-center px-6 py-3 border border-indigo-500 rounded-lg text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                <svg
                  className="w-5 h-5 mr-2 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span className="relative z-10">View Full Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
