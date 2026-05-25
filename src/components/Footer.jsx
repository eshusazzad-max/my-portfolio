import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {

  return (

    <footer
      className="
        px-6
        lg:px-16

        py-16

        bg-white
        dark:bg-[#050816]

        border-t border-black/10 dark:border-white/10

        duration-300
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          grid
          md:grid-cols-3

          gap-12
        "
      >

        {/* LEFT */}

        <div>

          <h1
            className="
              text-3xl
              font-bold

              text-black
              dark:text-white

              mb-5
            "
          >
            Sinthia Akter Esha
          </h1>

          <p className="text-gray-600 dark:text-gray-400 leading-7">

            Full Stack Developer passionate about creating beautiful
            and functional web experiences.

          </p>

        </div>

        {/* LINKS */}

        <div>

          <h2
            className="
              text-xl
              font-semibold

              text-black
              dark:text-white

              mb-5
            "
          >
            Quick Links
          </h2>

          <div className="flex flex-col gap-3">

            <a
              href="#home"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-500 duration-300"
            >
              Home
            </a>

            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-500 duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-500 duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-500 duration-300"
            >
              Contact
            </a>

          </div>

        </div>

        {/* SOCIAL */}

        <div>

          <h2
            className="
              text-xl
              font-semibold

              text-black
              dark:text-white

              mb-5
            "
          >
            Connect With Me
          </h2>

          <div className="flex gap-4">

            <a

              href="https://github.com/eshusazzad-max"

              target="_blank"

              className="
                w-12
                h-12

                rounded-xl

                bg-black/5
                dark:bg-white/5

                border border-black/10 dark:border-white/10

                flex
                items-center
                justify-center

                text-black
                dark:text-white

                hover:text-purple-500

                duration-300
              "
            >

              <FaGithub />

            </a>

            <a

              href="https://www.linkedin.com/in/sinthia-akter-esha/"

              target="_blank"

              className="
                w-12
                h-12

                rounded-xl

                bg-black/5
                dark:bg-white/5

                border border-black/10 dark:border-white/10

                flex
                items-center
                justify-center

                text-black
                dark:text-white

                hover:text-purple-500

                duration-300
              "
            >

              <FaLinkedin />

            </a>

            <a

              href="https://mail.google.com/mail/?view=cm&fs=1&to=eshusazzad@gmail.com"

              className="
                w-12
                h-12

                rounded-xl

                bg-black/5
                dark:bg-white/5

                border border-black/10 dark:border-white/10

                flex
                items-center
                justify-center

                text-black
                dark:text-white

                hover:text-purple-500

                duration-300
              "
            >

              <FaEnvelope />

            </a>

            <a

              href="https://x.com/SinthiaEshaa"

              target="_blank"

              className="
                w-12
                h-12

                rounded-xl

                bg-black/5
                dark:bg-white/5

                border border-black/10 dark:border-white/10

                flex
                items-center
                justify-center

                text-black
                dark:text-white

                hover:text-purple-500

                duration-300
              "
            >

              <FaTwitter />

            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div
        className="
          mt-16
          pt-8

          border-t border-black/10 dark:border-white/10

          text-center
        "
      >

        <p className="text-gray-600 dark:text-gray-400">

          © 2026 Sinthia Akter Esha. Built with passion and creativity.

        </p>

      </div>

    </footer>
  );
};

export default Footer;