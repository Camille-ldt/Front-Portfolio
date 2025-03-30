import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
var HomePage = function () {
    var _a = useState(false), showScrollButton = _a[0], setShowScrollButton = _a[1];
    // Gestion du scroll pour afficher/cacher le bouton de retour en haut
    useEffect(function () {
        var handleScroll = function () {
            setShowScrollButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    // Remonter en haut de la page
    var scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // Animation des sections
    var sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    return (_jsxs("div", { className: "bg-orange-50", children: [_jsx(motion.section, { id: "aboutMe", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, variants: sectionVariants, children: _jsx(AboutMe, {}) }), _jsx(motion.section, { id: "projects", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, variants: sectionVariants, children: _jsx(Projects, {}) }), _jsx(motion.section, { id: "contact", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, variants: sectionVariants, children: _jsx(Contact, { value: null, firstname: "", lastname: "", company: "", email: "", number: "", message: "" }) }), showScrollButton && (_jsx("button", { onClick: scrollToTop, className: "fixed bottom-5 right-5 bg-stone-800 text-white p-3 rounded-full shadow-lg hover:bg-stone-700 transition cursor-pointer", children: _jsx(FontAwesomeIcon, { icon: faArrowUp, size: "xl" }) }))] }));
};
export default HomePage;
