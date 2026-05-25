import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {

  const skills = [

    {
      icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
      title: "Tailwind CSS",
      desc: "Creating responsive, modern and clean layouts using utility-first styling.",
    },

    {
      icon: <SiJavascript className="text-yellow-400 text-4xl" />,
      title: "JavaScript",
      desc: "Writing efficient, modern and optimized code for frontend and backend logic.",
    },

    {
      icon: <FaReact className="text-cyan-300 text-4xl" />,
      title: "React",
      desc: "Building fast, interactive and component-based UIs with clean state management.",
    },

    {
      icon: <FaNodeJs className="text-green-500 text-4xl" />,
      title: "Node.js",
      desc: "Developing scalable backend logic and high-performance server-side applications.",
    },

    {
      icon: <SiMongodb className="text-green-400 text-4xl" />,
      title: "MongoDB",
      desc: "Managing NoSQL databases with flexible schemas for high-performance data storage.",
    },

    {
      icon: <FaHtml5 className="text-orange-500 text-4xl" />,
      title: "HTML",
      desc: "Creating clean, semantic and well-structured page layouts for accessibility.",
    },

  ];

  const techStack = [

    {
      icon: <SiJavascript className="text-yellow-400 text-2xl" />,
      name: "JS",
    },

    {
      icon: <SiTypescript className="text-blue-500 text-2xl" />,
      name: "TS",
    },

    {
      icon: <FaReact className="text-cyan-400 text-2xl" />,
      name: "React",
    },

    {
      icon: <SiNextdotjs className="text-white text-2xl" />,
      name: "Next.js",
    },

    {
      icon: <FaNodeJs className="text-green-500 text-2xl" />,
      name: "Node.js",
    },

    {
      icon: <FaAws className="text-orange-400 text-2xl" />,
      name: "AWS",
    },

    

  ];

  return (

    <section
      className="
        py-24
        px-6
        lg:px-16

        bg-white
        dark:bg-[#050816]

        duration-300
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-16">

          <h1
            className="
              text-4xl
              lg:text-5xl

              font-bold

              text-black
              dark:text-white

              mb-5
            "
          >
            Skills & Technologies
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">

            I work with modern tools and technologies to build fast,
            scalable and efficient web applications.

          </p>

        </div>

        {/* SKILL CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {
            skills.map((skill, i) => (

              <motion.div

                key={i}

                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}

                className="
                  p-8

                  rounded-3xl

                  bg-black/5
                  dark:bg-white/5

                  backdrop-blur-xl

                  border border-white/10

                  hover:border-purple-500/30

                  duration-300
                "
              >

                <div className="mb-6">
                  {skill.icon}
                </div>

                <h2
                  className="
                    text-2xl

                    font-semibold

                    text-black
                    dark:text-white

                    mb-4
                  "
                >
                  {skill.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {skill.desc}
                </p>

              </motion.div>

            ))
          }

        </div>

        {/* TECH STACK */}

        <div className="mt-24 text-center">

          <h2
            className="
              text-3xl
              font-bold

              text-black
              dark:text-white

              mb-10
            "
          >
            My Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-8">

            {
              techStack.map((tech, i) => (

                <motion.div

                  key={i}

                  whileHover={{
                    y: -8,
                    scale: 1.1,
                  }}

                  className="
                    flex
                    flex-col
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      w-16
                      h-16

                      rounded-full

                      bg-black/5
                      dark:bg-white/5

                      border border-white/10

                      backdrop-blur-xl

                      flex
                      items-center
                      justify-center
                    "
                  >

                    {tech.icon}

                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </p>

                </motion.div>

              ))
            }

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;