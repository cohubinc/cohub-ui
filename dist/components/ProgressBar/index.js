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
import Color from "src/definitions/enums/Color";
import styles from "./ProgressBar.module.scss";
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, barHeight = _a.barHeight, barColor = _a.barColor, progressColor = _a.progressColor, progress = _a.progress;
        return (React.createElement("div", { className: styles.Bar, style: { backgroundColor: barColor, height: barHeight + "px" } },
            React.createElement("div", { className: styles.Progress, style: {
                    backgroundColor: progressColor,
                    width: progress + "%"
                } })));
    };
    ProgressBar.defaultProps = {
        barHeight: 8,
        barColor: Color.green200,
        progressColor: Color.primaryGreen
    };
    return ProgressBar;
}(React.PureComponent));
export default ProgressBar;
//# sourceMappingURL=index.js.map