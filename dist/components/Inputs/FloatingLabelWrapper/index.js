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
import React, { useState, useRef } from "react";
import Color, { ContrastColor } from "src/definitions/enums/Color";
import "./FloatingLabelWrapper.scss";
import isEmpty from "lodash/isEmpty";
import isNumber from "lodash/isNumber";
var defaultStyle = {
    color: Color.black,
    cursor: "text"
};
export default function FloatingLabelWrapper(_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? "" : _c, appearance = _a.appearance, _d = _a.type, type = _d === void 0 ? "text" : _d, _e = _a.autoComplete, autoComplete = _e === void 0 ? "off" : _e, _f = _a.autoFocus, autoFocus = _f === void 0 ? false : _f, _g = _a.onClick, onClick = _g === void 0 ? function () { return null; } : _g, _h = _a.style, style = _h === void 0 ? defaultStyle : _h, _j = _a["data-qa"], dataQa = _j === void 0 ? "base-input-element" : _j, _k = _a["data-qa-label"], dataQaLabel = _k === void 0 ? "base-input-element-label" : _k, floatLabel = _a.floatLabel, onFocus = _a.onFocus, onBlur = _a.onBlur, htmlFor = _a.htmlFor, error = _a.error, onChange = _a.onChange, children = _a.children, label = _a.label, value = _a.value;
    var _l = useState({
        hasFocus: false
    }), state = _l[0], setState = _l[1];
    var cursor = style.cursor, textAlign = style.textAlign;
    var inputRef = useRef(null);
    var labelTextColor;
    var inputBackgroundColor;
    var inputClassName;
    if (appearance === "contrast") {
        labelTextColor = Color.grey700;
        inputClassName = "ContrastInput";
    }
    else if (appearance === "inverted") {
        labelTextColor = Color.trueWhite;
        inputClassName = "GenericInput inverted";
    }
    else {
        labelTextColor = Color.grey700;
        inputBackgroundColor = Color.trueWhite;
        inputClassName = "GenericInput";
    }
    var isValidString = value && typeof value === "string" && value.length > 0;
    var isValidNumber = value && typeof value === "number" && isNumber(value);
    var isValidOject = value && !isEmpty(value);
    var labelFloated = floatLabel ||
        state.hasFocus ||
        (inputRef.current && inputRef.current.value) ||
        isValidString ||
        isValidNumber ||
        isValidOject;
    var setInputRef = function (element) {
        inputRef.current = element;
    };
    var componentProps = (_b = {
            onFocus: function (e) {
                onFocus && onFocus(e);
                setState({ hasFocus: true });
            },
            onBlur: function (e) {
                onBlur && onBlur(e);
                setState({ hasFocus: false });
            },
            style: __assign({}, defaultStyle, {
                cursor: cursor,
                textAlign: textAlign
            }),
            // So the label is associated with the input. Mostly for easier testing
            id: htmlFor
        },
        _b["aria-invalid"] = error,
        _b.onClick = onClick,
        _b.onChange = onChange,
        _b.value = value,
        _b);
    return (React.createElement("div", { className: "FloatingLabelWrapper " + inputClassName + " " + className, style: __assign({ position: "relative" }, defaultStyle, style) },
        React.createElement("div", { className: "inputWrapper " + (error ? "error" : "") + " bd-radius" },
            children({
                componentProps: componentProps,
                setInputRef: setInputRef
            }),
            React.createElement("span", { className: "bar " + (state.hasFocus ? "focused" : "") })),
        label && (React.createElement("label", { className: labelFloated ? "FloatedLabel" : "", style: {
                backgroundColor: error
                    ? Color.red200
                    : inputBackgroundColor,
                color: error
                    ? ContrastColor[Color.red200]
                    : labelTextColor,
                cursor: cursor,
                width: labelFloated ? undefined : "80%"
            }, onClick: function (e) {
                onClick && onClick(e);
                inputRef.current && inputRef.current.focus();
            }, "data-qa": dataQaLabel, htmlFor: htmlFor }, label))));
}
//# sourceMappingURL=index.js.map