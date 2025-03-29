import { useState } from "react";
import QuoteGeneratorImage from "../assets/quote_generator.webp";
import PokedexImage from "../assets/pokedex.webp";
import JavaScriptIcon from "./icon/JavaScriptIcon";
import HtmlIcon from "./icon/HtmlIcon";
import CssIcon from "./icon/CssIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import ModalProject from "./ModalProject";

const projects = [
  {
    title: "Générateur de citations",
    image: QuoteGeneratorImage,
    description: "Ce site permet de générer des citations aléatoirement.",
    github: "https://github.com/Camille-ldt/Quote-Generator",
    link: "https://camille-ldt.github.io/Quote-Generator/",
    technologies: [HtmlIcon, CssIcon, JavaScriptIcon],
  },
  {
    title: "Pokédex",
    image: PokedexImage,
    description:
      "Ce site permet de lister des Pokémon, de consulter leurs caractéristiques ainsi que leurs équipes.",
    github: "https://github.com/Camille-ldt/Pokedex",
    link: "",
    technologies: [HtmlIcon, CssIcon, JavaScriptIcon],
  },
];

const Projects = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => setOpenModalIndex(index);
  const handleCloseModal = () => setOpenModalIndex(null);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12">
      <h2 className="text-black text-center text-2xl sm:text-3xl md:text-5xl font-semibold my-6 mb-5 sm:mb-5 md:mb-10">
        Mes projets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 sm:h-full md:h-150 lg:h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Contenu en version mobile */}
            <div className="lg:hidden md:hidden bg-gradient-to-t from-black/100 via-black/70 to-transparent inset-0 text-white p-4 flex flex-col items-center rounded-b-lg">
              <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>

              <div className="flex gap-5 my-2">
                {project.technologies.map((TechIcon, techIndex) => (
                  <TechIcon key={techIndex} className="h-7 w-7 rounded-md" />
                ))}
              </div>

              <p className="text-sm text-center">{project.description}</p>

              <div className="flex gap-3 mt-3 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition"
                >
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
                <a
                  href={project.link || "#"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  onClick={
                    !project.link
                      ? (e) => {
                          e.preventDefault();
                          handleOpenModal(index);
                        }
                      : undefined
                  }
                  className="bg-stone-600 hover:bg-stone-700 px-4 py-2 rounded-lg text-white text-md"
                >
                  Voir le site
                </a>
              </div>
            </div>

            {/* Contenu en version tablette */}
            <div className="hidden md:flex lg:hidden bg-gradient-to-t from-black/100 via-black/70 to-transparent inset-0 text-white p-6 flex-col items-center rounded-b-lg">
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <div className="flex gap-6 my-3">
                {project.technologies.map((TechIcon, techIndex) => (
                  <TechIcon key={techIndex} className="h-8 w-8 rounded-md" />
                ))}
              </div>

              <p className="text-base text-center">{project.description}</p>

              <div className="flex gap-4 mt-4 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition"
                >
                  <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>
                <a
                  href={project.link || "#"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  onClick={
                    !project.link
                      ? (e) => {
                          e.preventDefault();
                          handleOpenModal(index);
                        }
                      : undefined
                  }
                  className="bg-stone-600 hover:bg-stone-700 px-4 py-2 rounded-lg text-white text-md"
                >
                  Voir le site
                </a>
              </div>
            </div>

            {/* Contenu en version desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className="hidden lg:flex absolute inset-0 bg-black/65 text-white flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
              <div className="flex gap-5 my-2">
                {project.technologies.map((TechIcon, techIndex) => (
                  <TechIcon
                    key={techIndex}
                    className="h-8 w-8 rounded-md mb-3"
                  />
                ))}
              </div>
              <p className="text-center text-md mb-3">{project.description}</p>
              <div className="flex flex-col gap-3 mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-center mb-3"
                >
                  <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>
                <motion.div
                  className="w-full max-w-xl flex flex-row gap-5"
                  whileHover={{ scale: 1.2 }}
                >
                  <a
                    href={project.link || "#"}
                    target={project.link ? "_blank" : undefined}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    onClick={
                      !project.link
                        ? (e) => {
                            e.preventDefault();
                            handleOpenModal(index);
                          }
                        : undefined
                    }
                    className="bg-stone-800 hover:bg-stone-700 px-4 py-2 rounded-lg text-white text-md"
                  >
                    Voir le site
                  </a>
                </motion.div>
              </div>
            </motion.div>
            {/* Modal spécifique à chaque projet */}
            {openModalIndex === index && (
              <ModalProject isOpen={true} closeModal={handleCloseModal} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
