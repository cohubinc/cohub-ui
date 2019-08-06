import React, { useState } from "react";
import Color from "src/definitions/enums/Color";
import Tooltip from "src/components/Tooltip";
import { getButton } from "./getButton";
import styles from "./Dropdown.module.scss";
export default function Dropdown(props) {
    var options = props.options, style = props.style, className = props.className, disabled = props.disabled, _a = props.buttonType, buttonType = _a === void 0 ? "Secondary" : _a;
    var _b = useState(false), expanded = _b[0], setExpanded = _b[1];
    var _c = useState(props.options[0]), selectedOption = _c[0], setSelectedOption = _c[1];
    var cursor = disabled ? "default" : "pointer";
    var Button = getButton(buttonType);
    return (React.createElement("div", { className: "CohubDropdownButton relative " + className, style: style },
        React.createElement("div", { className: "flex bd-radius" },
            React.createElement(Button, { onClick: selectedOption.onClick, disabled: disabled, style: { borderTopRightRadius: 0, borderBottomRightRadius: 0 } }, selectedOption.label),
            React.createElement(Tooltip, { content: React.createElement("ul", { className: "p-0 m-0 text-left", style: {
                        maxHeight: "50vh",
                        listStyle: "none",
                        overflowY: "auto"
                    } }, options
                    .filter(function (option) { return option.label !== selectedOption.label; })
                    .map(function (option) { return (React.createElement("li", { key: option.label, className: styles.CohubDropdownOption + " cursor-pointer p-05", onClick: function () {
                        setSelectedOption(option);
                        setExpanded(false);
                    } }, option.label)); })), className: "p-0", placement: "bottom-end", theme: "light", interactive: true, trigger: "click", arrow: true, delay: [100, 300], visible: expanded },
                React.createElement(Button, { icon: "chevronDown", iconSize: 16, className: "flex justify-center items-center", style: {
                        width: 35,
                        borderLeft: "1px solid " + Color.trueWhite,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        cursor: cursor
                    }, onClick: function () { return setExpanded(!expanded); } })))));
}
//# sourceMappingURL=index.js.map