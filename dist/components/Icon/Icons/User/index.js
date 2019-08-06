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
import React from 'react';
import IconWrapper from '../../IconWrapper';
import guid from '../../../../helpers/guid';
var User = function (props) {
    var uniqueId = guid();
    return (React.createElement(IconWrapper, __assign({}, props), function (_a) {
        var size = _a.size;
        return (React.createElement("svg", { width: size, height: size, viewBox: "0 0 " + size + " " + size },
            React.createElement("mask", { id: uniqueId, "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: size, height: size },
                React.createElement("circle", { cx: size / 2, cy: size / 2, r: size / 2, fill: "#F2F2F2" })),
            React.createElement("g", { mask: "url(#" + uniqueId + ")" },
                React.createElement("circle", { cx: size / 2, cy: size / 2, r: size / 2, fill: "#F2F2F2" }),
                React.createElement("circle", { cx: size / 2, cy: size / 1.0909090909, r: size / 3, fill: "#C4C4C4" }),
                React.createElement("circle", { cx: size / 2, cy: size / 2.6666666667, r: size / 6, fill: "#C4C4C4" }))));
    }));
};
export default User;
//# sourceMappingURL=index.js.map