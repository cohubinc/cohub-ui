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
import React, { PureComponent } from "react";
import logError from "../../utils/logError";
import icons from "./Icons";
import "./Icon.scss";
var DefaultIcon = function (props) {
    var Ico = icons[props.name];
    if (!Ico) {
        logError(props.name + " Icon does not exist");
        return null;
    }
    return React.createElement(Ico, __assign({}, props));
};
var buildIcon = function (name) { return function (props) { return (React.createElement(DefaultIcon, __assign({ name: name }, props))); }; };
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        return React.createElement(DefaultIcon, __assign({}, this.props));
    };
    Icon.Add = buildIcon("add");
    Icon.ArrowDown = buildIcon("arrowDown");
    Icon.ArrowUp = buildIcon("arrowUp");
    Icon.Bell = buildIcon("bell");
    Icon.Back = buildIcon("back");
    Icon.Calculator = buildIcon("calculator");
    Icon.Calendar = buildIcon("calendar");
    Icon.CaretDown = buildIcon("caretDown");
    Icon.ChevronDown = buildIcon("chevronDown");
    Icon.ChevronLeft = buildIcon("chevronLeft");
    Icon.ChevronRight = buildIcon("chevronRight");
    Icon.Circle = buildIcon("circle");
    Icon.CircleCheck = buildIcon("circleCheck");
    Icon.CirclePlus = buildIcon("circlePlus");
    Icon.CirclePlusInverted = buildIcon("circlePlusInverted");
    Icon.CircleRemove = buildIcon("circleRemove");
    Icon.Close = buildIcon("close");
    Icon.Columns = buildIcon("columns");
    Icon.ControlPanel = buildIcon("controlPanel");
    Icon.Dashboard = buildIcon("dashboard");
    Icon.Eye = buildIcon("eye");
    Icon.Laptop = buildIcon("laptop");
    Icon.Report = buildIcon("report");
    Icon.Sales = buildIcon("sales");
    Icon.Save = buildIcon("save");
    Icon.Scales = buildIcon("scales");
    Icon.Search = buildIcon("search");
    Icon.Shipping = buildIcon("shipping");
    Icon.TagDollar = buildIcon("tagDollar");
    Icon.Trash = buildIcon("trash");
    Icon.Triangle = buildIcon("triangle");
    Icon.TripleDotsVertical = buildIcon("tripleDotsVertical");
    Icon.UserGroup = buildIcon("userGroup");
    Icon.User = buildIcon("user");
    return Icon;
}(PureComponent));
export default Icon;
//# sourceMappingURL=index.js.map