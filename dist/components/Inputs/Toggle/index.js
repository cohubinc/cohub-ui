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
import React from "react";
import styles from "./Toggle.module.scss";
import Typography from "src/components/Typography";
import Color from "src/definitions/enums/Color";
var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
    function Toggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toggle.prototype.render = function () {
        var _a = this.props, label = _a.label, input = _a.input, labelPosition = _a.labelPosition, _b = _a.className, className = _b === void 0 ? "" : _b;
        var checked = input.value === true || input.value === "true";
        var toggle = function () {
            input.onChange(!checked);
        };
        var keyDown = function (evt) {
            if (evt.keyCode && evt.keyCode === 32) {
                toggle();
            }
        };
        var containerClass;
        switch (labelPosition) {
            case "left":
                containerClass = styles.labelContainerLeft;
                break;
            case "right":
                containerClass = styles.labelContainerRight;
                break;
            case "top":
                containerClass = styles.labelContainerTop;
                break;
            case "bottom":
                containerClass = styles.labelContainerBottom;
                break;
            default:
                containerClass = styles.labelContainerLeft;
        }
        return (React.createElement("div", { className: className + " " + containerClass + " cursor-pointer ", onClick: toggle, tabIndex: 0, onKeyDown: keyDown },
            label && React.createElement(Typography, { color: Color.grey700 }, label),
            React.createElement("div", { className: checked ? styles.containerActive : styles.containerInactive },
                React.createElement("div", { className: checked ? styles.toggleActive : styles.toggleInactive }))));
    };
    Toggle.defaultProps = {
        labelPosition: "right"
    };
    return Toggle;
}(React.Component));
export default Toggle;
//# sourceMappingURL=index.js.map