import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

  }, [darkMode]);

  return (

    <div className="bg-white dark:bg-[#050816] duration-300">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>

    </div>

  );
};

export default Home;