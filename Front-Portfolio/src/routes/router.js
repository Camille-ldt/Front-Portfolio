import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Layout, {}),
        children: [
            {
                path: "/",
                element: _jsx(HomePage, {}),
            },
        ],
    },
]);
export default router;
