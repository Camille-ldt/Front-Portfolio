import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
var ModalProject = function (_a) {
    var isOpen = _a.isOpen, closeModal = _a.closeModal;
    if (!isOpen)
        return null;
    return (_jsx("section", { children: _jsx("div", { className: "fixed inset-0 bg-black/50 flex justify-center items-center z-50", onClick: closeModal, children: _jsxs(motion.div, { className: "bg-white p-6 rounded-lg shadow-lg w-1/2 text-center", onClick: function (e) { return e.stopPropagation(); }, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, transition: { duration: 0.3, ease: "easeOut" }, children: [_jsx("h2", { className: "text-3xl font-bold", children: "Oups..." }), _jsx("p", { className: "mt-4", children: "Ce projet est actuellement en d\u00E9veloppement et sera bient\u00F4t disponible." }), _jsx("button", { onClick: closeModal, className: "mt-6 px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition cursor-pointer", children: "Fermer" })] }) }) }));
};
export default ModalProject;
