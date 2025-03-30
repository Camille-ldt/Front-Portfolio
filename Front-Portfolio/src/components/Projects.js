import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
var projects = [
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
        description: "Ce site permet de lister des Pokémon, de consulter leurs caractéristiques ainsi que leurs équipes.",
        github: "https://github.com/Camille-ldt/Pokedex",
        link: "",
        technologies: [HtmlIcon, CssIcon, JavaScriptIcon],
    },
];
var Projects = function () {
    var _a = useState(null), openModalIndex = _a[0], setOpenModalIndex = _a[1];
    var handleOpenModal = function (index) { return setOpenModalIndex(index); };
    var handleCloseModal = function () { return setOpenModalIndex(null); };
    return (_jsxs("section", { className: "w-full px-4 sm:px-6 lg:px-12", children: [_jsx("h2", { className: "text-black text-center text-2xl sm:text-3xl md:text-5xl font-semibold my-6 mb-5 sm:mb-5 md:mb-10", children: "Mes projets" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full", children: projects.map(function (project, index) { return (_jsxs(motion.div, { className: "relative group rounded-xl overflow-hidden shadow-lg", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-72 sm:h-full md:h-150 lg:h-full object-cover transition-transform duration-300 group-hover:scale-110" }), _jsxs("div", { className: "lg:hidden md:hidden bg-gradient-to-t from-black/100 via-black/70 to-transparent inset-0 text-white p-4 flex flex-col items-center rounded-b-lg", children: [_jsx("h3", { className: "text-xl sm:text-2xl font-bold", children: project.title }), _jsx("div", { className: "flex gap-5 my-2", children: project.technologies.map(function (TechIcon, techIndex) { return (_jsx(TechIcon, { className: "h-7 w-7 rounded-md" }, techIndex)); }) }), _jsx("p", { className: "text-sm text-center", children: project.description }), _jsxs("div", { className: "flex gap-3 mt-3 items-center", children: [_jsx("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "text-white hover:text-gray-300 transition", children: _jsx(FontAwesomeIcon, { icon: faGithub, size: "xl" }) }), _jsx("a", { href: project.link || "#", target: project.link ? "_blank" : undefined, rel: project.link ? "noopener noreferrer" : undefined, onClick: !project.link
                                                ? function (e) {
                                                    e.preventDefault();
                                                    handleOpenModal(index);
                                                }
                                                : undefined, className: "bg-stone-600 hover:bg-stone-700 px-4 py-2 rounded-lg text-white text-md", children: "Voir le site" })] })] }), _jsxs("div", { className: "hidden md:flex lg:hidden bg-gradient-to-t from-black/100 via-black/70 to-transparent inset-0 text-white p-6 flex-col items-center rounded-b-lg", children: [_jsx("h3", { className: "text-2xl font-bold", children: project.title }), _jsx("div", { className: "flex gap-6 my-3", children: project.technologies.map(function (TechIcon, techIndex) { return (_jsx(TechIcon, { className: "h-8 w-8 rounded-md" }, techIndex)); }) }), _jsx("p", { className: "text-base text-center", children: project.description }), _jsxs("div", { className: "flex gap-4 mt-4 items-center", children: [_jsx("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "text-white hover:text-gray-300 transition", children: _jsx(FontAwesomeIcon, { icon: faGithub, size: "2xl" }) }), _jsx("a", { href: project.link || "#", target: project.link ? "_blank" : undefined, rel: project.link ? "noopener noreferrer" : undefined, onClick: !project.link
                                                ? function (e) {
                                                    e.preventDefault();
                                                    handleOpenModal(index);
                                                }
                                                : undefined, className: "bg-stone-600 hover:bg-stone-700 px-4 py-2 rounded-lg text-white text-md", children: "Voir le site" })] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileHover: { opacity: 1, y: 0 }, transition: { duration: 0.1 }, className: "hidden lg:flex absolute inset-0 bg-black/65 text-white flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity", children: [_jsx("h3", { className: "text-3xl font-bold mb-3", children: project.title }), _jsx("div", { className: "flex gap-5 my-2", children: project.technologies.map(function (TechIcon, techIndex) { return (_jsx(TechIcon, { className: "h-8 w-8 rounded-md mb-3" }, techIndex)); }) }), _jsx("p", { className: "text-center text-md mb-3", children: project.description }), _jsxs("div", { className: "flex flex-col gap-3 mt-3", children: [_jsx("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "text-white text-center mb-3", children: _jsx(FontAwesomeIcon, { icon: faGithub, size: "2xl" }) }), _jsx(motion.div, { className: "w-full max-w-xl flex flex-row gap-5", whileHover: { scale: 1.2 }, children: _jsx("a", { href: project.link || "#", target: project.link ? "_blank" : undefined, rel: project.link ? "noopener noreferrer" : undefined, onClick: !project.link
                                                    ? function (e) {
                                                        e.preventDefault();
                                                        handleOpenModal(index);
                                                    }
                                                    : undefined, className: "bg-stone-800 hover:bg-stone-700 px-4 py-2 rounded-lg text-white text-md", children: "Voir le site" }) })] })] }), openModalIndex === index && (_jsx(ModalProject, { isOpen: true, closeModal: handleCloseModal }))] }, index)); }) })] }));
};
export default Projects;
