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
import Select from "react-select";
import Creatable from "react-select/creatable";
import { uniqBy } from "lodash";
import Color from "src/definitions/enums/Color";
import FloatingLabelWrapper from "../FloatingLabelWrapper";
import "./Multiselect.scss";
export default function Multiselect(_a) {
    var options = _a.options, label = _a.label, allowCreate = _a.allowCreate, loading = _a.loading, input = _a.input, appearance = _a.appearance;
    var onChange = function (selectedOption) {
        if (!selectedOption) {
            return;
        }
        if ("value" in selectedOption) {
            input.onChange(selectedOption.value);
        }
        else {
            input.onChange(selectedOption.map(function (opt) { return opt.value; }));
        }
    };
    var value = options.filter(function (o) { return input.value.includes(o.value); });
    if (allowCreate && input.value.length) {
        var inputValues = input.value.map(function (val) {
            var selectedOption = options.find(function (opt) { return opt.value === val; });
            return {
                value: val,
                label: selectedOption && selectedOption.label
            };
        });
        value = inputValues.concat(value);
        value = uniqBy(value, "value");
    }
    var contrastPadding = appearance === "contrast" ? { paddingTop: "1rem" } : {};
    var selectConfig = {
        options: options,
        isMulti: true,
        isLoading: loading,
        styles: getSelectStyles(contrastPadding),
        placeholder: ""
    };
    return (React.createElement(FloatingLabelWrapper, { className: "MultiselectField", onBlur: input.onBlur, onFocus: input.onFocus, onChange: onChange, label: label, value: value, appearance: appearance }, function (_a) {
        var componentProps = _a.componentProps;
        return allowCreate ? (React.createElement(Select, __assign({}, selectConfig, componentProps))) : (React.createElement(Creatable, __assign({}, selectConfig, componentProps)));
    }));
}
var styles = {
    container: {
        height: "100%"
    },
    control: {
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        boxShadow: "none",
        height: "100%"
    },
    input: {
        color: Color.black
    },
    menu: {
        backgroundColor: Color.background
    },
    dropdownIndicator: {
        display: "none"
    },
    indicatorSeparator: {
        display: "none"
    },
    multiValue: {
        backgroundColor: Color.grey200,
        borderRadius: "11px",
        paddingLeft: "6px"
    },
    multiValueLabel: {
        color: Color.black
    },
    multiValueRemove: {
        cursor: "pointer",
        paddingRight: "4px"
    },
    clearIndicator: {
        paddingTop: "-1rem"
    }
};
var getSelectStyles = function (controlStyles) {
    return {
        control: function (style) { return (__assign({}, style, styles.control, controlStyles)); },
        container: function (style) { return (__assign({}, style, styles.container)); },
        input: function (style) { return (__assign({}, style, styles.input)); },
        menu: function (style) { return (__assign({}, style, styles.menu)); },
        option: function (style, _a) {
            var isFocused = _a.isFocused;
            return (__assign({}, style, { backgroundColor: isFocused ? "var(--admin-grey)" : "var(--admin-bg)", ":hover": {
                    backgroundColor: "var(--admin-grey)"
                } }));
        },
        dropdownIndicator: function () { return styles.dropdownIndicator; },
        indicatorSeparator: function () { return styles.indicatorSeparator; },
        multiValue: function (style) { return (__assign({}, style, styles.multiValue)); },
        multiValueLabel: function (style) { return (__assign({}, style, styles.multiValueLabel)); },
        multiValueRemove: function (style) { return (__assign({}, style, styles.multiValueRemove, { ":hover": {
                backgroundColor: "var(--admin-grey)",
                borderRadius: "11px"
            } })); },
        clearIndicator: function (style) { return (__assign({}, style, styles.clearIndicator)); }
    };
};
//# sourceMappingURL=index.js.map