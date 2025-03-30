var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.svg";
var footer = {
    social: [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/camille-laidet/",
            icon: function (props) { return (_jsx("a", __assign({ href: "https://www.linkedin.com/in/camille-laidet/", target: "_blank", rel: "noopener noreferrer" }, props, { children: _jsx(FontAwesomeIcon, { icon: faLinkedin, size: "2x", className: "text-gray-900 h-7 w-7 sm:h-7 sm:w-7 md:h-10 md:w-10" }) }))); },
        },
        {
            name: "GitHub",
            href: "https://github.com/Camille-ldt",
            icon: function (props) { return (_jsx("a", __assign({ href: "https://github.com/Camille-ldt", target: "_blank", rel: "noopener noreferrer" }, props, { children: _jsx(FontAwesomeIcon, { icon: faGithub, size: "2x", className: "text-gray-900 h-7 w-7 sm:h-7 sm:w-7 md:h-10 md:w-10" }) }))); },
        },
    ],
};
var Footer = function () {
    return (_jsx("footer", { className: "bg-stone-500 shadow-xl my-0", children: _jsxs("div", { className: "mx-auto max-w-7xl overflow-hidden px-6 py-4 sm:py-4 lg:px-8", children: [_jsxs("div", { className: "flex items-center mt-5 mb-10", children: [_jsx("div", { className: "flex-grow border-t border-black" }), _jsx("img", { src: Logo, alt: "Logo", className: "h-12 w-auto mx-auto" }), _jsx("div", { className: "flex-grow border-t border-black" })] }), _jsx("div", { className: "mt-5 mb-5 flex justify-center gap-x-10", children: footer.social.map(function (item) {
                        return item.icon ? (_jsxs("a", { href: item.href, className: "transform transition-transform duration-200 hover:scale-150 text-dark", children: [_jsx("span", { className: "sr-only", children: item.name }), _jsx(item.icon, { "aria-hidden": "true", className: "h-9 w-9" })] }, item.name)) : null;
                    }) }), _jsx("p", { className: "mb-2 mt-5 text-center text-sm/6 text-gray-300", children: "Copyright \u00A9 2025 Camille Laidet - Tous droits r\u00E9serv\u00E9s." })] }) }));
};
export default Footer;
