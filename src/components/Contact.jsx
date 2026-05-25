import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {

  const contacts = [

    {
      icon: <FaEnvelope className="text-purple-400 text-2xl" />,
      title: "Email",
      value: "eshusazzad@gmail.com",
      link: "mailto:eshusazzad@gmail.com",
    },

    {
      icon: <FaLinkedin className="text-blue-400 text-2xl" />,
      title: "LinkedIn",
      value: "sinthia-akter-esha",
      link: "https://www.linkedin.com/in/sinthia-akter-esha/",
    },

    {
      icon: <FaTwitter className="text-cyan-400 text-2xl" />,
      title: "Twitter",
      value: "@SinthiaEshaa",
      link: "https://x.com/SinthiaEshaa",
    },

  ];

  return (

    <section
      id="contact"

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

              mb-4
            "
          >
            Get In Touch
          </h1>

          <p className="text-gray-600 dark:text-gray-400">
            Contact Me
          </p>

        </div>

        {/* CONTACT CONTENT */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div>

            <h2
              className="
                text-2xl
                font-semibold

                text-black
                dark:text-white

                mb-8
              "
            >
              Talk to me
            </h2>

            <div className="space-y-5">

              {
                contacts.map((item, i) => (

                  <motion.a

                    key={i}

                    href={item.link}

                    target="_blank"

                    whileHover={{
                      y: -5,
                    }}

                    className="
                      p-6

                      rounded-3xl

                      bg-black/5
                      dark:bg-white/5

                      backdrop-blur-xl

                      border border-white/10

                      flex items-center gap-5
                    "
                  >

                    <div
                      className="
                        w-14
                        h-14

                        rounded-2xl

                        bg-black/5
                        dark:bg-white/5

                        flex items-center justify-center
                      "
                    >

                      {item.icon}

                    </div>

                    <div>

                      <h3
                        className="
                          text-lg
                          font-semibold

                          text-black
                          dark:text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400">
                        {item.value}
                      </p>

                    </div>

                  </motion.a>

                ))
              }

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <h2
              className="
                text-2xl
                font-semibold

                text-black
                dark:text-white

                mb-8
              "
            >
              Write me your project
            </h2>

            <form

             action="https://api.web3forms.com/submit"

             method="POST"

             className="space-y-5"
            >

            <input
             type="hidden"
             name="access_key"
             value="3099d3f9-b8b3-450d-9150-88b863aad444"
            />

              <input

                type="text"
                name="name"

                placeholder="Insert your name"

                className="
                  w-full

                  p-5

                  rounded-2xl

                  bg-black/5
                  dark:bg-white/5

                  border border-white/10

                  outline-none

                  text-black
                  dark:text-white
                "
              />

              <input

                type="email"
                name="email"

                placeholder="Insert your email"

                className="
                  w-full

                  p-5

                  rounded-2xl

                  bg-black/5
                  dark:bg-white/5

                  border border-white/10

                  outline-none

                  text-black
                  dark:text-white
                "
              />

              <textarea

                rows="6"
                name="message"

                placeholder="Write your project details"

                className="
                  w-full

                  p-5

                  rounded-2xl

                  bg-black/5
                  dark:bg-white/5

                  border border-white/10

                  outline-none

                  resize-none

                  text-black
                  dark:text-white
                "
              ></textarea>

              <button
                className="
                  px-8
                  py-4

                  rounded-2xl

                  bg-gradient-to-r
                  from-pink-500
                  to-purple-500

                  text-white
                  font-medium

                  flex items-center gap-3
                "
              >

                Send Message

                <FaPaperPlane />

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;