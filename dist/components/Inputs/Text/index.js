var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React from "react";
import { Fade } from "src/components/Transition";
import Typography from "src/components/Typography";
import Base from "../Base";
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.render = function () {
        var _a = this.props, input = _a.input, _b = _a.meta, touched = _b.touched, error = _b.error, active = _b.active, style = _a.style, className = _a.className, _c = _a.msgPosition, msgPosition = _c === void 0 ? {} : _c, dataQa = _a["data-qa"], restProps = __rest(_a, ["input", "meta", "style", "className", "msgPosition", "data-qa"]);
        var showError = !!(touched && error);
        return (React.createElement("div", __assign({}, { className: className, style: __assign({}, Text.defaultProps.style, style) }),
            React.createElement(Base, __assign({}, input, restProps, { error: showError, "data-qa": dataQa })),
            React.createElement(Fade, { show: active && showError },
                React.createElement(Typography.Tiny, { error: true, style: __assign({ position: "absolute", left: 1, bottom: -15 }, msgPosition) }, error))));
    };
    Text.defaultProps = {
        type: "text",
        meta: {},
        style: {
            width: "100%"
        }
    };
    return Text;
}(React.Component));
export default Text;
//# sourceMappingURL=index.js.map