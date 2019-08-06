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
import "./Checkbox.scss";
import Icon from "src/components/Icon";
import Color from "src/definitions/enums/Color";
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, label = _a.label, input = _a.input;
        var checked = input.value === true || input.value === "true";
        var toggle = function () {
            input.onChange(!checked);
        };
        var keyDown = function (evt) {
            if (evt.keyCode && evt.keyCode === 32) {
                toggle();
            }
        };
        return (React.createElement("div", { className: "CheckboxField-Container flex justify-start items-center" },
            React.createElement("div", { className: "CheckboxField mr-05", role: "checkbox", tabIndex: 0, onKeyDown: keyDown, onClick: toggle }, checked && React.createElement(Icon.Checkmark, { color: Color.primary, size: 16 })),
            React.createElement("label", null, label)));
    };
    return Checkbox;
}(React.Component));
export default Checkbox;
//# sourceMappingURL=index.js.map