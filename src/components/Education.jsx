import { motion } from "framer-motion";

const Education = () => {

  const education = [

    {
      title: "SSC",

      institute: "A.Wahed Girl's High School",

      year: "2018 - 2019",

      side: "left",
    },

    {
      title: "Diploma in Engineering",

      institute: "Faridpur Polytechnic Institute",

      year: "2019 - 2023",

      side: "right",
    },

    {
      title: "Web Development Journey",

      institute: "Programimg Hero",

      year: "2026",

      side: "left",
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

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

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
            Qualification
          </h1>

          <p className="text-gray-600 dark:text-gray-400">
            My educational journey
          </p>

        </div>

        {/* TIMELINE */}

        <div className="relative">

          {/* CENTER LINE */}

          <div
            className="
              absolute
              left-1/2
              top-0

              -translate-x-1/2

              w-[2px]
              h-full

              bg-purple-500/30
            "
          ></div>

          <div className="space-y-20">

            {
              education.map((item, i) => (

                <motion.div

                  key={i}

                  initial={{
                    opacity: 0,
                    y: 50,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.6,
                  }}

                  className={`
                    relative

                    flex

                    ${item.side === "left"
                      ? "justify-start"
                      : "justify-end"
                    }
                  `}
                >

                  {/* CARD */}

                  <div
                    className="
                      w-[45%]

                      p-6

                      rounded-3xl

                      bg-black/5
                      dark:bg-white/5

                      backdrop-blur-xl

                      border border-white/10
                    "
                  >

                    <h2
                      className="
                        text-2xl
                        font-bold

                        text-black
                        dark:text-white

                        mb-2
                      "
                    >
                      {item.title}
                    </h2>

                    <p className="text-purple-500 mb-2">
                      {item.institute}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400">
                      {item.year}
                    </p>

                  </div>

                  {/* DOT */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2

                      -translate-x-1/2
                      -translate-y-1/2

                      w-5
                      h-5

                      rounded-full

                      bg-purple-500

                      border-4
                      border-[#050816]
                    "
                  ></div>

                </motion.div>

              ))
            }

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;