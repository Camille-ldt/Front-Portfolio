import ReactIcon from "./icon/ReactIcon";
import TypeScriptIcon from "./icon/TypeScriptIcon";
import TailwindIcon from "./icon/TailwindIcon";
import PhpIcon from "./icon/PhpIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Typewriter from "./Writer";

const AboutMe = () => {
  return (
    <section>
      <div className="text-black p-5 mt-10 sm:mt-15 md:mt-15 pt-20">
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between px-10 sm:px-20 md:px-10 lg:px-30 lg:gap-40">
          {/* Image à gauche */}
          <div className="flex flex-col items-center text-center sm:items-center sm:text-center md:items-center md:text-center lg:items-start lg:text-left">
            <div className="h-35 w-35 sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-70 lg:w-70 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="../src/assets/me.webp"
                alt="Avatar"
                className="h-full w-full object-cover scale-150 object-[30%]"
              />
            </div>
            <h1 className="mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Camille Laidet
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl">
              <Typewriter
                text="À  la recherche d'une <strong>alternance</strong> en tant que <strong>Conceptrice Développeuse d'Applications</strong> à partir de <strong>Septembre 2025</strong> 🚀"
                speed={60}
              />
            </p>
            <div className="flex gap-5 mt-2 sm:mt-3 md:mt-5">
              <motion.div
                className="w-full max-w-xl flex flex-row gap-5"
                whileHover={{ scale: 1.3 }}
              >
                <a
                  href="https://www.linkedin.com/in/camille-laidet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="text-gray-900 h-7 w-7 sm:h-7 sm:w-7 md:h-10 md:w-10"
                  />
                </a>
              </motion.div>
              <motion.div
                className="w-full max-w-xl flex flex-row gap-5"
                whileHover={{ scale: 1.3 }}
              >
                <a
                  href="https://github.com/Camille-ldt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="text-gray-900 h-7 w-7 sm:h-7 sm:w-7 md:h-10 md:w-10"
                  />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Texte à droite */}
          <div className="max-w-5xl">
            <p className="text-left text-2xl sm:text-3xl md:text-5xl font-semibold mt-5 sm:mt-5 md:mt-0 mb-0 sm:mb-0 md:mb-10">
              Bonjour 👋
            </p>
            <p className="text-left mt-5 text-base sm:text-lg md:text-xl">
              Auparavant, j'étais
              <strong> toiletteuse canin et vendeuse en animalerie</strong>.
              Suite à un licenciement économique, j'ai décidé de me réorienter
              vers un domaine qui me passionne depuis longtemps :
              <strong> l'informatique</strong>.
            </p>
            <p className="text-left mt-5 text-base sm:text-lg md:text-xl">
              Dans un premier temps, j'ai suivi une formation de
              <strong> découverte </strong> afin de confirmer mon choix de
              <strong> reconversion professionnelle</strong>. Cette formation
              m'a permis d'explorer plusieurs aspects du secteur et de réaliser
              plusieurs stages pour mieux définir mon orientation. C'est à ce
              moment-là, en 2023, que j'ai découvert le
              <strong> développement web</strong>. Curieuse et motivée, j'ai
              commencé à m'autoformer en
              <strong> HTML et CSS </strong>
              pour apprendre les bases.
            </p>
            <p className="text-left mt-5 text-base sm:text-lg md:text-xl">
              Souhaitant approfondir mes compétences et me professionnaliser,
              j'ai activement recherché une <strong> formation adaptée</strong>.
              C'est ainsi que j'ai découvert <strong> l'école O'Clock</strong>,
              où j'ai suivi la formation
              <strong> Développeur Web & Web Mobile FullStack</strong>.
            </p>
            <p className="text-left mt-5 text-base sm:text-lg md:text-xl">
              Aujourd'hui, je suis <strong> prête </strong> et{" "}
              <strong> déterminée </strong> à relever de nouveaux défis. Mon
              objectif est d'intégrer une entreprise dynamique qui me permettra
              de continuer à apprendre, d'évoluer et de renforcer mes
              compétences dans le domaine du <strong> développement web</strong>
              .
            </p>
            <div className="flex flex-row items-center gap-5">
              <p className="text-left text-2xl sm:text-2xl md:text-4xl font-bold mt-5">
                Stack |
              </p>
              <div className="flex flex-row gap-5 mt-7">
                <motion.div
                  className="w-full max-w-xl flex flex-row gap-5"
                  whileHover={{ scale: 1.3 }}
                >
                  <ReactIcon className="rounded-md h-7 w-7 sm:h-7 sm:w-7 md:h-10 md:w-10" />
                </motion.div>
                <motion.div
                  className="w-full max-w-xl flex flex-row gap-5"
                  whileHover={{ scale: 1.3 }}
                >
                  <TypeScriptIcon className="rounded-md h-7 w-7 sm:h-7 sm:w-7 md:h-10 md:w-10" />
                </motion.div>

                <motion.div
                  className="w-full max-w-xl flex flex-row gap-5"
                  whileHover={{ scale: 1.3 }}
                >
                  <TailwindIcon className="rounded-md h-7 w-7 sm:h-7 sm:w-7 md:h-10 md:w-10" />
                </motion.div>
                <motion.div
                  className="w-full max-w-xl flex flex-row gap-5"
                  whileHover={{ scale: 1.3 }}
                >
                  <PhpIcon className="rounded-md h-7 w-7 sm:h-7 sm:w-7 md:h-10 md:w-10" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
