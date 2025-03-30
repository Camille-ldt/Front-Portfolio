import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
var navigation = [
    { name: "À propos", sectionId: "aboutMe" },
    { name: "Projets", sectionId: "projects" },
    { name: "Contact", sectionId: "contact" },
];
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(" ");
}
var Navbar = function () {
    var _a = useState(""), activeSection = _a[0], setActiveSection = _a[1];
    useEffect(function () {
        var handleScrollEvent = function () {
            var currentSection = "";
            navigation.forEach(function (item) {
                var section = document.getElementById(item.sectionId);
                if (section) {
                    var rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 &&
                        rect.bottom >= window.innerHeight / 2) {
                        currentSection = item.sectionId;
                    }
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener("scroll", handleScrollEvent);
        return function () {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);
    var handleScroll = function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (_jsxs(Disclosure, { as: "nav", className: "fixed top-0 left-0 w-full p-3 bg-stone-500 shadow-xl z-50", children: [_jsx("div", { className: "px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between w-full", children: [_jsx("div", { className: "-ml-2 mr-2 flex items-center md:hidden", children: _jsxs(DisclosureButton, { className: "group relative inline-flex items-center justify-center rounded-full p-2 text-black hover:bg-stone-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [_jsx("span", { className: "absolute -inset-0.5" }), _jsx(Bars3Icon, { className: "block h-6 w-6 group-data-[open]:hidden" }), _jsx(XMarkIcon, { className: "hidden h-6 w-6 group-data-[open]:block" })] }) }), _jsxs("div", { className: "flex items-center w-full", children: [_jsx("img", { src: Logo, alt: "Logo", className: "h-12 w-auto hidden lg:block" }), _jsx("div", { className: "flex-grow flex justify-center", children: _jsx("nav", { className: "hidden md:flex md:items-center md:space-x-6", children: navigation.map(function (item) { return (_jsx("button", { onClick: function () { return handleScroll(item.sectionId); }, className: classNames(activeSection === item.sectionId
                                                ? "bg-stone-800 text-white"
                                                : "text-white hover:text-black", "rounded-md px-2 py-1 text-md font-bold cursor-pointer"), children: item.name }, item.sectionId)); }) }) })] })] }) }), _jsx(DisclosurePanel, { className: "md:hidden", children: _jsx("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation.map(function (item) { return (_jsx(DisclosureButton, { as: "button", onClick: function () { return handleScroll(item.sectionId); }, className: classNames(activeSection === item.sectionId
                            ? "bg-stone-800 text-white"
                            : "text-white hover:text-black", "rounded-md px-2 py-1 text-sm font-bold"), children: item.name }, item.sectionId)); }) }) })] }));
};
export default Navbar;
