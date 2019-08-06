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
import React, { Component } from "react";
import MoneyInput from "../";
import DoczStateCtrl from "src/components/Docz/DoczStateCtrl";
import Divider from "src/components/Divider";
var MoneyDemo = /** @class */ (function (_super) {
    __extends(MoneyDemo, _super);
    function MoneyDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { value: 23.12345 };
        _this.handleChange = function (value) { return _this.setState({ value: value }); };
        return _this;
    }
    MoneyDemo.prototype.render = function () {
        var _this = this;
        var value = this.state.value;
        return (React.createElement("div", null,
            React.createElement(DoczStateCtrl, null, function (_a) {
                var extendedPrecision = _a.on;
                return (React.createElement("div", null,
                    React.createElement("div", { className: "mb-1" },
                        React.createElement("i", null, "(toggle extendedPrecision prop on and off)")),
                    React.createElement(MoneyInput, { label: "Amount", extendedPrecision: extendedPrecision, input: { value: value, onChange: _this.handleChange } })));
            }),
            React.createElement(Divider, { marginSize: 3 }),
            React.createElement(MoneyInput, { extendedPrecision: true, appearance: "contrast", label: "Amount", input: { value: value, onChange: this.handleChange } })));
    };
    return MoneyDemo;
}(Component));
export default MoneyDemo;
//# sourceMappingURL=MoneyDemo.js.map