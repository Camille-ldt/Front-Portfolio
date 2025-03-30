import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
var Layout = function () {
    return (_jsxs(_Fragment, { children: [_jsx("nav", { children: _jsx(Navbar, {}) }), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx("footer", { children: _jsx(Footer, {}) })] }));
};
export default Layout;
