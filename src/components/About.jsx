import { motion } from "framer-motion";

import { FaDownload } from "react-icons/fa";

import hero from "../assets/hero.png";

const About = () => {

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

      <div
        className="
          max-w-7xl
          mx-auto

          grid
          lg:grid-cols-2
          gap-16

          items-center
        "
      >

        {/* LEFT */}

        <div className="relative flex justify-center">

          {/* GLOW */}

          <div
            className="
              absolute

              w-[280px]
              h-[280px]

              rounded-full

              bg-purple-500/20

              blur-3xl
            "
          ></div>

          {/* IMAGE */}

          <motion.div

            whileHover={{
              y: -10,
            }}

            className="
              relative
              z-10

              w-[320px]

              rounded-[40px]

              overflow-hidden

              bg-black/10
              dark:bg-white/5

              backdrop-blur-xl

              border border-white/10
            "
          >

            <img
              src={hero}
              alt=""
              className="
                w-full
                h-full
                object-cover
              "
            />

          </motion.div>

          {/* EXPERIENCE CARD */}

          <div
            className="
              absolute

              -bottom-8
              right-0

              px-6
              py-4

              rounded-2xl

              bg-[#111827]

              border border-white/10

              shadow-[0_0_20px_rgba(168,85,247,0.15)]
            "
          >

            <h2 className="text-2xl font-bold text-white">
              1+
            </h2>

            <p className="text-sm text-gray-400">
              Years Experience
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <p className="text-pink-500 font-medium mb-3">
            About Me
          </p>

          <h1
            className="
              text-4xl
              lg:text-5xl

              font-bold

              mb-8

              text-black
              dark:text-white
            "
          >
            Passionate MERN Stack Developer
          </h1>

          {/* DESCRIPTION */}

          <div className="space-y-5">

            <p className="text-gray-600 dark:text-gray-400 leading-[32px]">

              Hello! I'm
              <span className="text-purple-500 font-medium">
                {" "}Sinthia Akter Esha
              </span>

              , a passionate MERN stack developer who loves creating modern,
              responsive and user-friendly websites.

            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-[32px]">

              My programming journey started with curiosity and creativity.
              I enjoy turning ideas into real interactive experiences using
              React, Node.js, Express.js and MongoDB.

            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-[32px]">

              Besides coding, I enjoy learning new technologies, exploring
              creative UI designs and improving my development skills every day.

            </p>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div
              className="
                p-6

                rounded-3xl

                bg-black/10
                dark:bg-white/5

                backdrop-blur-xl

                border border-white/10
              "
            >

              <h2 className="text-3xl font-bold text-purple-500 mb-2">
                10+
              </h2>

              <p className="text-gray-600 dark:text-gray-400">
                Projects Completed
              </p>

            </div>

            <div
              className="
                p-6

                rounded-3xl

                bg-black/10
                dark:bg-white/5

                backdrop-blur-xl

                border border-white/10
              "
            >

              <h2 className="text-3xl font-bold text-pink-500 mb-2">
                100%
              </h2>

              <p className="text-gray-600 dark:text-gray-400">
                Creative Passion
              </p>

            </div>

          </div>

          {/* RESUME BUTTON */}

          <a

            href="/ESHA Resume.pdf"

            download

            className="
              inline-flex
              items-center
              gap-3

              mt-10

              px-8
              py-4

              rounded-2xl

              bg-gradient-to-r
              from-pink-500
              to-purple-500

              text-white
              font-medium

              shadow-[0_0_30px_rgba(168,85,247,0.25)]

              hover:scale-105

              duration-300
            "
          >

            <FaDownload />

            Download Resume

          </a>

        </div>

      </div>

    </section>
  );
};

export default About;