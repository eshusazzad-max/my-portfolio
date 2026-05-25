import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

const Projects = () => {

  const projects = [

    {
      image: project1,

      title: "DocTime",

      desc: "DocTime is a modern full-stack doctor appointment booking platform where users can register, log in, book appointments, manage bookings, and explore doctors easily.",

      tech: ["React", "Firebase", "Tailwind", "MongoDB"],

      github: "https://github.com/eshusazzad-max/doctor-client",

      live: "https://doctor-client-ten.vercel.app",
    },

    {
      image: project2,

      title: "SunCart – Summer Essentials Store",

      desc: "SunCart is a modern summer-themed eCommerce web application. Users can browse seasonal products like sunglasses, summer outfits, skincare, and accessories. Users can view product details and access protected pages after authentication.",

      tech: ["next.js", "DaisyUI", "Tailwind CSS", "BetterAuth"],

      github: "https://github.com/eshusazzad-max/assingment-8",

      live: "https://suncart-delta-wheat.vercel.app/",
    },

    {
      image: project3,

      title: "TechWave",

      desc: "Modern personal portfolio website with smooth animations and responsive layouts.",

      tech: [ "Html", "Tailwind"],

      github: "https://github.com/eshusazzad-max/Esha-Assignment-2",

      live: "https://eshusazzad-max.github.io/Esha-Assignment-2/",
    },

    {
      image: project4,

      title: "GitHub Issue Tracker",

      desc: "This project is a GitHub-style Issue Tracker UI where users can view, manage, and interact with issues. It focuses on clean UI design, structured layout, and basic functionality.",

      tech: ["Html", "CSS", "JavaScript"],

      github: "https://github.com/eshusazzad-max/git-hub-issue-tracker",

      live: "https://eshusazzad-max.github.io/git-hub-issue-tracker/",
    },

  ];

  return (

    <section
      id="projects"

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
            Recent Projects
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">

            Here are some of the real-world projects I've built using
            modern web technologies.

          </p>

        </div>

        {/* PROJECT GRID */}

        <div className="grid md:grid-cols-2 gap-8">

          {
            projects.map((project, i) => (

              <motion.div

                key={i}

                whileHover={{
                  y: -10,
                }}

                className="
                  rounded-3xl

                  overflow-hidden

                  bg-black/5
                  dark:bg-white/5

                  backdrop-blur-xl

                  border border-white/10

                  hover:border-purple-500/30

                  duration-300
                "
              >

                {/* IMAGE */}

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt=""

                    className="
                      w-full
                      h-[260px]

                      object-cover

                      hover:scale-105

                      duration-500
                    "
                  />

                </div>

                {/* CONTENT */}

                <div className="p-8">

                  <h2
                    className="
                      text-2xl
                      font-bold

                      text-black
                      dark:text-white

                      mb-4
                    "
                  >
                    {project.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 leading-7 mb-6">

                    {project.desc}

                  </p>

                  {/* TECH */}

                  <div className="flex flex-wrap gap-3 mb-8">

                    {
                      project.tech.map((item, index) => (

                        <span

                          key={index}

                          className="
                            px-4
                            py-2

                            rounded-full

                            text-sm

                            bg-black/5
                            dark:bg-white/5

                            border border-white/10

                            text-black
                            dark:text-gray-300
                          "
                        >

                          {item}

                        </span>

                      ))
                    }

                  </div>

                  {/* BUTTONS */}

                  <div className="flex gap-4">

                    <a

                      href={project.github}

                      target="_blank"

                      className="
                        px-6
                        py-3

                        rounded-2xl

                        bg-black/10
                        dark:bg-white/5

                        border border-white/10

                        text-black
                        dark:text-white

                        flex items-center gap-2
                      "
                    >

                      <FaGithub />

                      GitHub

                    </a>

                    <a

                      href={project.live}

                      target="_blank"

                      className="
                        px-6
                        py-3

                        rounded-2xl

                        bg-gradient-to-r
                        from-pink-500
                        to-purple-500

                        text-white

                        flex items-center gap-2
                      "
                    >

                      Live Demo

                      <FaExternalLinkAlt />

                    </a>

                  </div>

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>
  );
};

export default Projects;