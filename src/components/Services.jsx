import { motion } from "framer-motion";

import {
  FaCode,
  FaReact,
  FaMobileAlt,
  FaServer,
  FaPalette,
  FaFire,
} from "react-icons/fa";

const Services = () => {

  const services = [

    {
      icon: <FaReact className="text-cyan-400 text-3xl" />,
      title: "Frontend Development",
      desc: "Building responsive and interactive websites using React, Tailwind CSS and modern UI design.",
    },

    {
      icon: <FaServer className="text-green-500 text-3xl" />,
      title: "MERN Stack Development",
      desc: "Creating full-stack web applications using MongoDB, Express.js, React and Node.js.",
    },

    {
      icon: <FaMobileAlt className="text-pink-500 text-3xl" />,
      title: "Responsive Design",
      desc: "Designing websites that work perfectly on desktop, tablet and mobile devices.",
    },

    {
      icon: <FaCode className="text-yellow-400 text-3xl" />,
      title: "API Integration",
      desc: "Connecting frontend applications with REST APIs and dynamic backend services.",
    },

    {
      icon: <FaFire className="text-orange-500 text-3xl" />,
      title: "Firebase Authentication",
      desc: "Implementing secure login, registration and authentication systems using Firebase.",
    },

    {
      icon: <FaPalette className="text-purple-500 text-3xl" />,
      title: "UI/UX Design",
      desc: "Creating clean, modern and user-friendly interfaces with smooth user experiences.",
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
            Services I Provide
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">

            I provide modern web development services focused on building
            responsive, scalable and visually appealing applications.

          </p>

        </div>

        {/* SERVICE CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {
            services.map((service, i) => (

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
                  {service.icon}
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
                  {service.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {service.desc}
                </p>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>
  );
};

export default Services;