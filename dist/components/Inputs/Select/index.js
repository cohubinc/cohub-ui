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
import React from "react";
import SelectField from "react-select";
import { uniqBy } from "lodash";
import "./Select.scss";
import Color from "src/definitions/enums/Color";
import FloatingLabelWrapper from "../FloatingLabelWrapper";
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (selectedOption) {
            if (!selectedOption) {
                return;
            }
            var input = _this.props.input;
            if ("value" in selectedOption) {
                input.onChange(selectedOption.value);
            }
            else {
                input.onChange(selectedOption.map(function (opt) { return opt.value; }));
            }
        };
        return _this;
    }
    Select.prototype.render = function () {
        var _a = this.props, options = _a.options, input = _a.input, label = _a.label, allowCreate = _a.allowCreate, loading = _a.loading, appearance = _a.appearance;
        var value = options.filter(function (o) { return input.value === o.value; });
        if (allowCreate && input.value.length && typeof input.value !== "string") {
            var inputValues = input.value.map(function (v) { return ({
                value: v,
                label: v
            }); });
            value = inputValues.concat(value);
            value = uniqBy(value, "value");
        }
        return (React.createElement(FloatingLabelWrapper, { className: "SelectField", onBlur: input.onBlur, onFocus: input.onFocus, onChange: this.onChange, label: label, value: value, appearance: appearance }, function (_a) {
            var componentProps = _a.componentProps;
            return (React.createElement(SelectField, __assign({ options: options, isLoading: loading, styles: selectStyles, placeholder: "" }, componentProps)));
        }));
    };
    return Select;
}(React.Component));
export default Select;
var styles = {
    singleValue: {
        color: Color.black
    },
    indicatorSeparator: {
        display: "none"
    },
    dropdownIndicator: {
        display: "none"
    },
    menu: {
        backgroundColor: Color.trueWhite
    },
    option: {
        marginTop: 0
    },
    menuList: {
        marginTop: 0
    },
    input: {
        color: Color.trueWhite,
        padding: "8px",
        cursor: "pointer",
        borderRadius: 4
    },
    control: {
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        boxShadow: "none"
    }
};
var selectStyles = {
    control: function (style) { return (__assign({}, style, styles.control)); },
    input: function (style) { return (__assign({}, style, styles.input)); },
    menu: function (style) { return (__assign({}, style, styles.menu)); },
    menuList: function (style) { return (__assign({}, style, styles.menuList)); },
    option: function (style, _a) {
        var isFocused = _a.isFocused;
        return (__assign({}, style, styles.option, { backgroundColor: isFocused ? Color.grey300 : Color.trueWhite, color: isFocused ? Color.black : Color.black, ":hover": {
                backgroundColor: Color.grey300,
                color: Color.black
            } }));
    },
    dropdownIndicator: function () { return styles.dropdownIndicator; },
    indicatorSeparator: function () { return styles.indicatorSeparator; },
    singleValue: function (style) { return (__assign({}, style, styles.singleValue)); }
};
//# sourceMappingURL=index.js.map