var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
// interface IProps extends Omit<IDividerProps, "marginSize"> {
//   /**
//    * Margin as rems used on Y axis of element
//    * @defaultValue 1.5
//    */
//   marginSize?: TMargin;
// }
export default function Margin(props) {
    var _a = props.marginSize, marginSize = _a === void 0 ? 1.5 : _a, _b = props.showDividerLine, showDividerLine = _b === void 0 ? false : _b, rest = __rest(props, ["marginSize", "showDividerLine"]);
    return React.createElement("span", null);
}
//# sourceMappingURL=Margin.js.map