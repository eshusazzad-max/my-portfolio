import { motion } from "framer-motion";

import { useEffect, useState } from "react";

const Cursor = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const mouseMove = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  return (

    <motion.div

      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}

      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}

      className="
        fixed
        top-0
        left-0

        w-6
        h-6

        rounded-full

        bg-gradient-to-r
        from-pink-500
        to-purple-500

        pointer-events-none

        z-[9999]

        mix-blend-difference
      "
    />

  );
};

export default Cursor;