import isNumber from "lodash/isNumber";
export function composeValidators() {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return function (value) {
        validators.reduce(function (error, validator) { return error || validator(value); }, undefined);
    };
}
export var required = function (value) {
    return value && value.trim() ? undefined : "Required";
};
export var requiredNumber = function (value) {
    return value && isNumber(value) ? undefined : "Required";
};
export var minLength = function (min) { return function (value) {
    if (value === void 0) { value = ""; }
    return typeof value === "string" && value.length < min
        ? "Should be at least " + min + " characters long"
        : undefined;
}; };
export var minValue = function (min) { return function (value) {
    return typeof value !== "string" && value && (isNaN(value) || value >= min)
        ? undefined
        : "Should be greater than " + min;
}; };
export var length = function (valLength) { return function (value) {
    if (value === void 0) { value = ""; }
    return value.length === valLength
        ? undefined
        : "Should be " + valLength + " characters long";
}; };
export var email = composeValidators(function (value) {
    if (value === void 0) { value = ""; }
    return typeof value === "string" && charsArePresent(value, "@", ".")
        ? undefined
        : "Should be a valid email";
}, minLength(4));
export var lengthRange = function (min, max) { return function (v) {
    if (v === void 0) { v = ""; }
    if (v.length >= min && v.length <= max) {
        return undefined;
    }
    return "Should be between " + min + " and " + max + " characters long";
}; };
export var isInt = function (value) {
    if (!value) {
        return false;
    }
    var isNum = /^\d+$/.test(value);
    var parsedVal = isNum && Number.parseFloat(value);
    return parsedVal && Number.isInteger(parsedVal);
};
var charsArePresent = function (string) {
    var chars = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        chars[_i - 1] = arguments[_i];
    }
    return chars.every(function (char) { return string.includes(char); });
};
//# sourceMappingURL=input-validations.js.map