import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
function App() {
    return (_jsx("div", { children: _jsx(RouterProvider, { router: router }) }));
}
export default App;
