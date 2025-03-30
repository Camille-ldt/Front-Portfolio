import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
var Typewriter = function (_a) {
    var text = _a.text, _b = _a.speed, speed = _b === void 0 ? 50 : _b;
    var _c = useState(""), displayedText = _c[0], setDisplayedText = _c[1];
    var _d = useState(true), showCursor = _d[0], setShowCursor = _d[1];
    useEffect(function () {
        var i = 0;
        var interval = setInterval(function () {
            if (i < text.length) {
                setDisplayedText(function (prev) { return prev + text.charAt(i); });
                i++;
            }
            else {
                clearInterval(interval);
            }
        }, speed);
        // Faire clignoter le curseur
        var cursorInterval = setInterval(function () {
            setShowCursor(function (prev) { return !prev; });
        }, 500);
        return function () {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    }, [text, speed]);
    return (_jsxs("span", { children: [_jsx("span", { dangerouslySetInnerHTML: {
                    __html: displayedText,
                } }), showCursor && "|"] }));
};
export default Typewriter;
