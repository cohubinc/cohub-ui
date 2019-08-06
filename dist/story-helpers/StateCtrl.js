import React, { Fragment, useState, useEffect } from "react";
import Toggle from "../components/Inputs/Toggle";
export default function StateCtrl(props) {
    var children = props.children, toggleInterval = props.toggleInterval, _a = props.label, label = _a === void 0 ? "" : _a, _b = props.defaultState, defaultState = _b === void 0 ? false : _b;
    var _c = useState(defaultState), on = _c[0], setOn = _c[1];
    // If toggleInterval prop, toggle the state every X milliseconds
    useEffect(function () {
        if (!toggleInterval)
            return;
        var milliseconds = typeof toggleInterval === "number" ? toggleInterval : 2000;
        var intervalId = setInterval(function () { return setOn(function (onState) { return !onState; }); }, milliseconds);
        return function () { return clearInterval(intervalId); };
    }, []);
    return (React.createElement(Fragment, null,
        !toggleInterval && (React.createElement("div", null,
            React.createElement(Toggle, { label: "Toggle " + label, input: {
                    onChange: function () { return setOn(function (onState) { return !onState; }); },
                    name: "",
                    value: on,
                    onBlur: function () { return null; },
                    onFocus: function () { return null; }
                }, meta: {}, className: "my-05" }))),
        children({ state: on, toggleOff: function () { return setOn(false); } })));
}
//# sourceMappingURL=StateCtrl.js.map