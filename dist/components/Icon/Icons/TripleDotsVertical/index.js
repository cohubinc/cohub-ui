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
import React from "react";
import IconWrapper from "../../IconWrapper";
var TripleDotsVertical = function (props) { return (React.createElement(IconWrapper, __assign({}, props), function (_a) {
    var color = _a.color, size = _a.size;
    return (React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0,0h24v24h-24Z", fill: "none" }),
        React.createElement("path", { fill: color, d: "M12,8c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2Zm0,2c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2Zm0,6c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2Z" })));
})); };
export default TripleDotsVertical;
//# sourceMappingURL=index.js.map