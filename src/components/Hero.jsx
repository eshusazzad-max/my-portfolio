import { useEffect, useRef } from "react";

import gsap from "gsap";

import { Typewriter } from "react-simple-typewriter";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import hero from "../assets/hero.png";

const Hero = () => {

  const textRef = useRef(null);

  useEffect(() => {

    gsap.from(textRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

  }, []);

  const socials = [

    {
      icon: <FaGithub />,
      link: "https://github.com/eshusazzad-max",
    },

    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sinthia-akter-esha/",
    },

    {
      icon: <FaTwitter />,
      link: "https://x.com/SinthiaEshaa",
    },

  ];

  const techs = [

    {
      icon: <FaReact className="text-cyan-400 text-3xl" />,
      style: "top-10 left-10",
    },

    {
      icon: <FaHtml5 className="text-orange-500 text-3xl" />,
      style: "top-20 right-0",
    },

    {
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
      style: "bottom-10 left-10",
    },

    {
      icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
      style: "bottom-16 right-4",
    },

  ];

  return (

    <section
      className="
        min-h-screen
        px-6
        lg:px-16
        pt-36
        overflow-hidden

        bg-white
        dark:bg-[#050816]

        duration-300
      "
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}

        <div className="relative">

          {/* SOCIAL */}
          

             {/* SOCIAL */}

<div className="hidden lg:flex flex-col gap-5 absolute left-0 top-48 z-50">

  {/* GITHUB */}

  <motion.a

    href="https://github.com/eshusazzad-max"

    target="_blank"

    rel="noopener noreferrer"

    whileHover={{
      y: -5,
      scale: 1.1,
    }}

    className="
      w-12 h-12 rounded-full

      bg-black/5
      dark:bg-white/5

      backdrop-blur-xl

      border border-purple-500/10

      flex items-center justify-center

      text-black
      dark:text-white
    "
  >

    <FaGithub />

  </motion.a>

  {/* LINKEDIN */}

  <motion.a

    href="https://www.linkedin.com/in/sinthia-akter-esha/"

    target="_blank"

    rel="noopener noreferrer"

    whileHover={{
      y: -5,
      scale: 1.1,
    }}

    className="
      w-12 h-12 rounded-full

      bg-black/5
      dark:bg-white/5

      backdrop-blur-xl

      border border-purple-500/10

      flex items-center justify-center

      text-black
      dark:text-white
    "
  >

    <FaLinkedin />

  </motion.a>

  {/* TWITTER */}

  <motion.a

    href="https://x.com/SinthiaEshaa"

    target="_blank"

    rel="noopener noreferrer"

    whileHover={{
      y: -5,
      scale: 1.1,
    }}

    className="
      w-12 h-12 rounded-full

      bg-black/5
      dark:bg-white/5

      backdrop-blur-xl

      border border-purple-500/10

      flex items-center justify-center

      text-black
      dark:text-white
    "
  >

    <FaTwitter />

  </motion.a>

  {/* EMAIL */}

  <motion.a

    href="https://mail.google.com/mail/?view=cm&fs=1&to=eshusazzad@gmail.com"


    whileHover={{
      y: -5,
      scale: 1.1,
    }}

    className="
      w-12 h-12 rounded-full

      bg-black/5
      dark:bg-white/5

      backdrop-blur-xl

      border border-purple-500/10

      flex items-center justify-center

      text-black
      dark:text-white
    "
  >

    <FaEnvelope />

  </motion.a>

</div>
          
          {/* TEXT */}

          <div ref={textRef} className="lg:pl-20">

            <div
              className="
                inline-flex items-center gap-2

                px-5 py-3

                rounded-full

                bg-black/5
                dark:bg-white/5

                border border-purple-500/10

                mb-8
              "
            >

              <div className="w-2 h-2 rounded-full bg-purple-500"></div>

              <p className="text-sm text-black dark:text-gray-300">
                Available for work
              </p>

            </div>

            <p className="text-xl mb-4 text-black dark:text-gray-500">
              Hey, I'm
            </p>

            <h1
              className="
                text-5xl lg:text-7xl

                font-bold

                leading-tight

                bg-gradient-to-r
                from-pink-500
                via-purple-500
                to-blue-500

                bg-clip-text
                text-transparent
              "
            >
              Sinthia Akter Esha
            </h1>

            {/* TYPEWRITER */}

            <h2
              className="
                text-2xl lg:text-3xl

                font-semibold

                mt-6
                mb-6

                text-black
                dark:text-white
              "
            >

              I am a{" "}

              <span className="text-purple-500">

                <Typewriter

                  words={[
                    "Web Developer",
                    "Web Designer",
                    "Problem Solver",
                  ]}

                  loop={true}

                  cursor
                  cursorStyle="|"

                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}

                />

              </span>

            </h2>

            {/* DESCRIPTION */}

            <div className="space-y-3 mb-10">

              <p className="text-lg text-black dark:text-gray-400">
                 Turning ideas into stunning websites
              </p>

              <p className="text-lg text-black dark:text-gray-400">
                 Available for projects & collaborations
              </p>

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5">

  <a
    href="#projects"

    className="
      px-8 py-4 rounded-full

      bg-gradient-to-r
      from-pink-500
      to-purple-500

      text-white font-medium

      inline-flex
      items-center
      justify-center
    "
  >
    View Projects
  </a>

  <a
    href="#contact"

    className="
      px-8 py-4 rounded-full

      border border-gray-300
      dark:border-white/10

      text-black
      dark:text-white

      inline-flex
      items-center
      justify-center
    "
  >
    Let's Connect
  </a>

</div>
          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center z-0">

          {/* RING */}

          <div
            className="
              absolute

              w-[320px]
              h-[320px]

              lg:w-[380px]
              lg:h-[380px]

              rounded-full

              border-[6px]
              border-purple-500/40
            "
          ></div>

          {/* GLOW */}

          <div
            className="
              absolute

              w-[320px]
              h-[320px]

              rounded-full

              bg-purple-500/20

              blur-3xl
            "
          ></div>

          {/* IMAGE */}

          <motion.img

            animate={{
              y: [0, -12, 0],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
            }}

            src={hero}

            alt=""

            className="
              relative z-10

              w-[260px]
              md:w-[340px]

              object-cover
            "
          />

          {/* FLOATING ICONS */}

          {
            techs.map((item, i) => (

              <motion.div

                key={i}

                animate={{
                  y: [0, -10, 0],
                }}

                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}

                className={`
                  absolute ${item.style}

                  w-16 h-16 rounded-2xl

                  bg-black/5
                  dark:bg-white/5

                  backdrop-blur-xl

                  border border-purple-500/10

                  flex items-center justify-center
                `}
              >

                {item.icon}

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>

  );
};

export default Hero;