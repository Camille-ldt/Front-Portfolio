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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
var Contact = function () {
    var _a = useState({
        lastname: "",
        firstname: "",
        company: "",
        email: "",
        number: "",
        message: "",
    }), formData = _a[0], setFormData = _a[1];
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useState(null), captchaValue = _c[0], setCaptchaValue = _c[1];
    var handleCaptchaChange = function (value) {
        setCaptchaValue(value);
    };
    var handleChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        if (name === "number") {
            // Supprimer les caractères non numériques sauf "+"
            var numericValue = value.replace(/\D/g, "");
            // Si le numéro commence par +33, on le convertit en 06 ou 07
            if (numericValue.startsWith("33")) {
                numericValue = "0" + numericValue.slice(2);
            }
            // Vérifier que le numéro commence par 06 ou 07
            if (!numericValue.startsWith("06") && !numericValue.startsWith("07")) {
                return;
            }
            var formattedValue_1 = ((_a = numericValue
                .slice(0, 10) // Limite à 10 chiffres
                .match(/.{1,2}/g) // Regroupe les chiffres par paquets de 2
            ) === null || _a === void 0 ? void 0 : _a.join("-")) || ""; // Ajoute un tiret entre chaque groupe
            setFormData(function (prev) { return (__assign(__assign({}, prev), { number: formattedValue_1 })); });
        }
        else {
            setFormData(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
            });
        }
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true); // Définir l'état de chargement sur true au début
                    if (!captchaValue) {
                        toast.error("Veuillez valider le reCAPTCHA.");
                        setLoading(false);
                        return [2 /*return*/]; // Si le captcha n'est pas validé, on ne soumet pas le formulaire
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    console.log("Données du formulaire : ", formData);
                    return [4 /*yield*/, fetch("http://portfolio-api.test/mailer.php", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(__assign(__assign({}, formData), { captcha: captchaValue })),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Erreur du serveur");
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log("Réponse du serveur : ", data);
                    if (data.success) {
                        toast.success(data.message); // Afficher le message du serveur
                        setFormData({
                            // Réinitialiser le formulaire
                            firstname: "",
                            lastname: "",
                            company: "",
                            email: "",
                            number: "",
                            message: "",
                        });
                    }
                    else {
                        toast.error(data.message); // Afficher le message d'erreur du serveur
                    }
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    toast.error("Erreur lors de l'envoi du message");
                    console.error("Erreur : ", error_1);
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false); // Définir l'état de chargement sur false à la fin
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("section", { children: _jsxs("div", { className: "bg-orange-50 px-6 py-5 sm:py-10 lg:px-8", children: [_jsx("div", { "aria-hidden": "true", className: "absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]", children: _jsx("div", { style: {
                            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }, className: "relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" }) }), _jsx("div", { className: "mx-auto max-w-2xl text-center", children: _jsx("h2", { className: "text-center text-2xl sm:text-3xl md:text-5xl font-semibold mt-2 sm:mt-3 md:mt-5 mb-5 sm:mb-5 md:mb-10", children: "Contact" }) }), _jsxs("form", { onSubmit: handleSubmit, className: "mx-auto mt-16 max-w-xl sm:mt-20", children: [_jsxs("div", { className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "firstname", className: "block text-sm/6 font-semibold text-gray-900", children: "Pr\u00E9nom" }), _jsx("div", { className: "mt-2.5", children: _jsx("input", { id: "firstname", name: "firstname", type: "text", autoComplete: "given-name", className: "block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800", onChange: handleChange, value: formData.firstname, required: true }) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "lastname", className: "block text-sm/6 font-semibold text-gray-900", children: "Nom" }), _jsx("div", { className: "mt-2.5", children: _jsx("input", { id: "lastname", name: "lastname", type: "text", autoComplete: "family-name", className: "block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800", onChange: handleChange, value: formData.lastname, required: true }) })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "company", className: "block text-sm/6 font-semibold text-gray-900", children: "Entreprise" }), _jsx("div", { className: "mt-2.5", children: _jsx("input", { id: "company", name: "company", type: "text", autoComplete: "organization", className: "block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800", onChange: handleChange, value: formData.company, required: true }) })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "email", className: "block text-sm/6 font-semibold text-gray-900", children: "Email" }), _jsx("div", { className: "mt-2.5", children: _jsx("input", { id: "email", name: "email", type: "email", autoComplete: "email", className: "block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800", onChange: handleChange, value: formData.email, required: true }) })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "number", className: "block text-sm/6 font-semibold text-gray-900", children: "Num\u00E9ro de t\u00E9l\u00E9phone" }), _jsx("div", { className: "mt-2.5", children: _jsxs("div", { className: "flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-stone-800", children: [_jsxs("div", { className: "grid shrink-0 grid-cols-1 focus-within:relative", children: [_jsx("select", { id: "country", name: "country", autoComplete: "country", "aria-label": "Country", className: "col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800 sm:text-sm/6", children: _jsx("option", { children: "FR" }) }), _jsx(ChevronDownIcon, { "aria-hidden": "true", className: "pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" })] }), _jsx("input", { id: "number", name: "number", type: "tel", autoComplete: "tel", className: "block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800 sm:text-sm/6", onChange: handleChange, value: formData.number, required: true })] }) })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "message", className: "block text-sm/6 font-semibold text-gray-900", children: "Message" }), _jsx("div", { className: "mt-2.5", children: _jsx("textarea", { id: "message", name: "message", rows: 4, className: "block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800", onChange: handleChange, value: formData.message, required: true }) })] })] }), _jsxs("div", { className: "mt-8 text-center", children: [_jsx(ReCAPTCHA, { sitekey: "6Lcdq_0qAAAAAIqVstxgoP7yTQWIIxcbKs5fyElS", onChange: handleCaptchaChange }), _jsx("button", { type: "submit", className: "inline-flex items-center justify-center rounded-md border border-transparent bg-stone-800 px-6 py-2 text-base font-semibold text-white shadow-sm transition-all hover:bg-stone-700 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 mt-7 cursor-pointer ".concat(loading ? "cursor-not-allowed opacity-50" : ""), disabled: loading || !captchaValue, children: loading ? "Envoi en cours..." : "Envoyer" }), _jsx(ToastContainer, {})] })] })] }) }));
};
export default Contact;
