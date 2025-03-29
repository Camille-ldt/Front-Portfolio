import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Gestion du scroll pour afficher/cacher le bouton de retour en haut
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation des sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-orange-50">
      <motion.section
        id="aboutMe"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutMe />
      </motion.section>

      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Contact
          value={null}
          firstname=""
          lastname=""
          company=""
          email=""
          number=""
          message=""
        />
      </motion.section>

      {/* Flèche de retour en haut */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-stone-800 text-white p-3 rounded-full shadow-lg hover:bg-stone-700 transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowUp} size="xl" />
        </button>
      )}
    </div>
  );
};

export default HomePage;
