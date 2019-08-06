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
import React, { useRef } from "react";
import Color from "src/definitions/enums/Color";
import Buttons from "src/components/Buttons";
import Typography from "src/components/Typography";
import { transition } from "../../constants";
import styles from "../shared.module.scss";
export default function Option(_a) {
    var children = _a.children, selected = _a.selected, onClick = _a.onClick, onFocus = _a.onFocus, nativeElRef = _a.nativeElRef, rest = __rest(_a, ["children", "selected", "onClick", "onFocus", "nativeElRef"]);
    var style = {
        borderRadius: "361px",
        padding: "4px 12px",
        backgroundColor: Color.highlightGrey,
        transition: transition
    };
    var color;
    if (selected) {
        style = __assign({}, style, { backgroundColor: Color.green400 });
        color = Color.trueWhite;
    }
    var refObj = useRef(null);
    function attachRefs(el) {
        refObj.current = el;
        if (nativeElRef) {
            nativeElRef.current = el;
        }
    }
    return (React.createElement(Buttons.Blank, { className: styles.focusable + " " + (selected ? styles.selected : "") + " w-100 flex justify-center items-center", style: style, onClick: function (e) {
            refObj.current && refObj.current.blur();
            onClick(e);
        }, onFocus: onFocus, nativeElRef: attachRefs, "data-testid": rest["data-testid"] },
        React.createElement(Typography.Small, { color: color }, children)));
}
//# sourceMappingURL=index.js.map