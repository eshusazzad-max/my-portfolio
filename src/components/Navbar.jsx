import { motion } from "framer-motion";

import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaChevronDown,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {

  return (

    <header className="fixed top-0 left-0 w-full z-50">

      <div className="flex items-center justify-center pt-6 px-4">

        {/* NAVBAR */}

        <motion.div

          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}

          className="
            flex items-center gap-2

            px-4 py-3

            rounded-full

            bg-white/10
            dark:bg-white/5

            backdrop-blur-xl

            border border-white/10

            shadow-[0_0_30px_rgba(168,85,247,0.12)]
          "
        >

          {/* HOME */}

          <a

            href="#home"

            className="
              px-4 py-2

              rounded-full

              bg-white/10

              text-white

              text-sm

              flex items-center gap-2

              hover:bg-white/20

              duration-300
            "
          >

            <FaHome size={12} />

            Home

          </a>

          {/* SKILLS */}

          <a

            href="#skills"

            className="
              px-4 py-2

              rounded-full

              text-black
              dark:text-gray-300

              hover:text-white
              hover:bg-white/5

              duration-300

              text-sm

              flex items-center gap-2
            "
          >

            <FaCode size={12} />

            Skills

          </a>

          {/* PROJECTS */}

          <a

            href="#projects"

            className="
              px-4 py-2

              rounded-full

              text-black
              dark:text-gray-300

              hover:text-white
              hover:bg-white/5

              duration-300

              text-sm

              flex items-center gap-2
            "
          >

            <FaProjectDiagram size={12} />

            Projects

          </a>

          {/* CONTACT */}

          <a

            href="#contact"

            className="
              px-4 py-2

              rounded-full

              text-black
              dark:text-gray-300

              hover:text-white
              hover:bg-white/5

              duration-300

              text-sm

              flex items-center gap-2
            "
          >

            <FaEnvelope size={12} />

            Contact

          </a>

          {/* MORE */}

          <div className="relative group">

            <button

              className="
                px-4 py-2

                rounded-full

                text-black
                dark:text-gray-300

                hover:text-white
                hover:bg-white/5

                duration-300

                text-sm

                flex items-center gap-2
              "
            >

              More

              <FaChevronDown size={10} />

            </button>

            {/* DROPDOWN */}

            <div
              className="
                absolute
                top-14
                right-0

                w-52

                p-4

                rounded-3xl

                bg-[#0f172a]

                border border-white/10

                backdrop-blur-xl

                opacity-0
                invisible

                group-hover:opacity-100
                group-hover:visible

                duration-300

                z-50
              "
            >

              <div className="flex flex-col gap-4">

                <a
                  href="#about"

                  className="
                    text-white

                    hover:text-purple-400

                    duration-300
                  "
                >
                  About Me
                </a>

                <a
                  href="#services"

                  className="
                    text-white

                    hover:text-purple-400

                    duration-300
                  "
                >
                  Services
                </a>

                <a
                  href="#education"

                  className="
                    text-white

                    hover:text-purple-400

                    duration-300
                  "
                >
                  Qualification
                </a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* THEME BUTTON */}

        <button

          onClick={() => setDarkMode(!darkMode)}

          className="
            ml-4

            w-11
            h-11

            rounded-full

            bg-white/10
            dark:bg-white/5

            backdrop-blur-xl

            border border-white/10

            flex items-center justify-center

            text-black
            dark:text-white
          "
        >

          {
            darkMode
              ? <FaSun />
              : <FaMoon />
          }

        </button>

      </div>

    </header>
  );
};

export default Navbar;