import React from "react";
import Icon from "../Icon";
import BoxShadow from "src/definitions/enums/BoxShadow";
export default function FloatingActionButton(props) {
    var icon = props.icon, backgroundColor = props.backgroundColor, size = props.size, iconColor = props.iconColor, _a = props.elevation, elevation = _a === void 0 ? 0 : _a, onClick = props.onClick;
    var dpLevel = "dp" + elevation;
    return (React.createElement("div", { className: "flex items-center justify-center pointer", style: {
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: backgroundColor,
            boxShadow: BoxShadow[dpLevel],
            cursor: "pointer"
        }, onClick: onClick },
        React.createElement(Icon, { name: icon, size: size / 1.5, color: iconColor })));
}
//# sourceMappingURL=index.js.map