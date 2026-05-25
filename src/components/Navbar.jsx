import { motion } from "framer-motion";

import { useState } from "react";

import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaChevronDown,
  FaSun,
  FaMoon,
  FaUser,
  FaServicestack,
  FaGraduationCap,
} from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {

  const [open, setOpen] = useState(false);

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

          <div className="relative">

            <button

              onClick={() => setOpen(!open)}

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
              className={`
                absolute
                top-14
                right-0

                w-56

                p-5

                rounded-3xl

                bg-[#0f172a]

                border border-white/10

                backdrop-blur-xl

                duration-300

                z-50

                ${open
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
                }
              `}
            >

              <div className="flex flex-col gap-5">

                {/* ABOUT */}

                <a

                  href="#about"

                  onClick={() => setOpen(false)}

                  className="
                    flex items-center gap-3

                    text-white

                    hover:text-purple-400

                    duration-300
                  "
                >

                  <FaUser />

                  About Me

                </a>

                {/* SERVICES */}

                <a

                  href="#services"

                  onClick={() => setOpen(false)}

                  className="
                    flex items-center gap-3

                    text-white

                    hover:text-purple-400

                    duration-300
                  "
                >

                  <FaServicestack />

                  Services

                </a>

                {/* EDUCATION */}

                <a

                  href="#education"

                  onClick={() => setOpen(false)}

                  className="
                    flex items-center gap-3

                    text-white

                    hover:text-purple-400

                    duration-300
                  "
                >

                  <FaGraduationCap />

                  Qualification

                </a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* THEME BUTTON */}

       
      </div>

    </header>
  );
};

export default Navbar;