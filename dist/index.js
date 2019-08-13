'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactTransition = _interopDefault(require('react-transition-group/Transition'));
var NumberFormat = _interopDefault(require('react-number-format'));
var ReactResponsiveModal = _interopDefault(require('react-responsive-modal'));
var lowerFirst = _interopDefault(require('lodash/lowerFirst'));
var findKey = _interopDefault(require('lodash/findKey'));
var pick = _interopDefault(require('lodash/pick'));
var Tippy = _interopDefault(require('@tippy.js/react'));
var reactRouterDom = require('react-router-dom');
var kebabCase = _interopDefault(require('lodash/kebabCase'));
var isEmpty = _interopDefault(require('lodash/isEmpty'));
var isNumber = _interopDefault(require('lodash/isNumber'));
var moment = _interopDefault(require('moment'));
var isInteger = _interopDefault(require('lodash/isInteger'));
var AnimateHeight = _interopDefault(require('react-animate-height'));
var padStart = _interopDefault(require('lodash/padStart'));
var times = _interopDefault(require('lodash/times'));
var rangeRight = _interopDefault(require('lodash/rangeRight'));
var Select$1 = _interopDefault(require('react-select'));
var Creatable = _interopDefault(require('react-select/creatable'));
var lodash = require('lodash');
var connectedReactRouter = require('connected-react-router');
var reactRedux = require('react-redux');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var defaultScrollOpts = {
  behavior: "smooth",
  block: "center"
};

var ScrollIntoView =
/** @class */
function (_super) {
  __extends(ScrollIntoView, _super);

  function ScrollIntoView(props) {
    var _this = _super.call(this, props) || this;

    _this.selfRef = React__default.createRef();
    return _this;
  }

  ScrollIntoView.prototype.componentDidMount = function () {
    this.scrollIntoView();
  };

  ScrollIntoView.prototype.componentDidUpdate = function (oldProps) {
    var _a = this.props,
        scroll = _a.scroll,
        traceProp = _a.traceProp; // if new props are different, trigger scrollInto view again

    if (oldProps.traceProp !== traceProp || oldProps.scroll !== scroll) {
      this.scrollIntoView();
    }
  };

  ScrollIntoView.prototype.render = function () {
    var _a = this.props,
        style = _a.style,
        className = _a.className,
        children = _a.children;
    return React__default.createElement("div", {
      ref: this.selfRef,
      style: style,
      className: className + " w-100"
    }, children);
  };

  ScrollIntoView.prototype.scrollIntoView = function () {
    var _a = this.props,
        scroll = _a.scroll,
        scrollOpts = _a.scrollOpts;
    var self = this.selfRef.current;
    scroll && self && self.scrollIntoView(__assign({}, defaultScrollOpts, scrollOpts));
  };

  ScrollIntoView.defaultProps = {
    scroll: true,
    scrollOpts: {},
    className: ""
  };
  return ScrollIntoView;
}(React.Component);

/////////////// LOW LEVEL TRANSITION WRAPPER ////////////////////

var defaultDuration = 300;

var defaultTransition = function (ms) {
  return {
    transition: "all " + ms + "ms ease-in-out"
  };
}; // The Transition component is used to pass transition styles into it's children cmpts and control the state of those transitions.
// Any children passed MUST ACCEPT A STYLE PROP
// This component expects a start OR entering Style, an entered Style, and a show prop. All others props are optional and will generate sensible defaults
// Set the appear prop to false if you DON'T want the transition to play on initial render / page load
// You can see examples of the Cmpt being used lower in this file for reference.
// If you need more granular control please see the docs for react-transition-group Transition cmpt here -> https://reactcommunity.org/react-transition-group/transition


var Transition = function (_a) {
  var _b = _a.show,
      show = _b === void 0 ? true : _b,
      start = _a.start,
      transition = _a.transition,
      _c = _a.transitionProperty,
      transitionProperty = _c === void 0 ? "all" : _c,
      entering = _a.entering,
      entered = _a.entered,
      exiting = _a.exiting,
      exited = _a.exited,
      _d = _a.duration,
      duration = _d === void 0 ? defaultDuration : _d,
      _e = _a.appear,
      appear = _e === void 0 ? true : _e,
      children = _a.children;
  var initialStyle = start || entering || {};
  var transitionStyles = {
    entering: entering,
    entered: entered,
    exiting: exiting || initialStyle,
    exited: exited || initialStyle
  };
  var transitionStyle = transition ? {
    transition: transition
  } : defaultTransition(duration);

  var generateStyles = function (state) {
    return __assign({}, initialStyle, transitionStyle, transitionStyles[state] || {}, {
      transitionProperty: transitionProperty
    });
  };

  return React__default.createElement(ReactTransition, {
    in: show,
    timeout: duration,
    appear: appear,
    mountOnEnter: true,
    unmountOnExit: true
  }, function (state) {
    return React.Children.map(children, function (child, i) {
      var _a = child.props,
          style = _a.style,
          key = _a.key;
      return React.cloneElement(child, {
        style: __assign({}, style || {}, generateStyles(state)),
        key: key || i
      });
    });
  });
};
var Fade = function (_a) {
  var _b = _a.show,
      show = _b === void 0 ? true : _b,
      children = _a.children,
      _c = _a.start,
      start = _c === void 0 ? {} : _c,
      duration = _a.duration,
      appear = _a.appear,
      _d = _a.transitionProperty,
      transitionProperty = _d === void 0 ? "opacity" : _d;
  return React__default.createElement(Transition, _extends({
    start: __assign({
      opacity: 0
    }, start),
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1
    }
  }, {
    transitionProperty: transitionProperty,
    appear: appear,
    duration: duration,
    show: show
  }), children);
};
var Expand = function (_a) {
  var _b = _a.show,
      show = _b === void 0 ? true : _b,
      children = _a.children,
      duration = _a.duration,
      appear = _a.appear,
      _c = _a.width,
      width = _c === void 0 ? "100%" : _c;
  return React__default.createElement(Transition, {
    show: show,
    duration: duration,
    start: {
      width: 0,
      opacity: 1,
      overflow: "hidden"
    },
    entered: {
      width: width,
      opacity: 1
    },
    appear: appear
  }, children);
};
var Scale = function (_a) {
  var _b = _a.show,
      show = _b === void 0 ? true : _b,
      children = _a.children,
      duration = _a.duration,
      appear = _a.appear;
  return React__default.createElement(Transition, {
    show: show,
    duration: duration,
    start: {
      transform: "scale(0)"
    },
    entered: {
      transform: "scale(1)"
    },
    appear: appear
  }, children);
};
var Grow = function (_a) {
  var _b = _a.show,
      show = _b === void 0 ? true : _b,
      children = _a.children,
      _c = _a.height,
      height = _c === void 0 ? "100%" : _c,
      duration = _a.duration,
      appear = _a.appear;
  return React__default.createElement(Transition, {
    show: show,
    duration: duration,
    start: {
      height: 0,
      overflow: "hidden",
      opacity: 0
    },
    entered: {
      height: height,
      opacity: "inherit",
      overflow: "inherit"
    },
    appear: appear
  }, children);
};
var Toggle = function (_a) {
  var size = _a.size,
      showFirstChild = _a.showFirstChild,
      height = _a.height,
      width = _a.width,
      appear = _a.appear,
      children = _a.children;

  var _b = React__default.Children.toArray(children),
      firstChild = _b[0],
      secondChild = _b[1],
      rest = _b.slice(2);

  if (!firstChild || !secondChild || rest.length > 0) {
    throw new Error("You can only pass two children to the Toggle component");
  }

  if (!(size || width && height)) {
    throw new Error("You really should pass size or width and height to the Toggle component");
  }

  return React__default.createElement("div", {
    className: "flex items-center",
    style: {
      position: "relative",
      height: height || size,
      width: width || size
    }
  }, React__default.createElement(Fade, {
    start: {
      position: "absolute",
      zIndex: showFirstChild ? 2 : 1
    },
    show: showFirstChild,
    appear: appear
  }, firstChild), React__default.createElement(Fade, {
    start: {
      position: "absolute",
      zIndex: showFirstChild ? 1 : 2
    },
    show: !showFirstChild,
    appear: appear
  }, secondChild));
}; /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

var Font;

(function (Font) {
  Font["defaultFontFamily"] = "Inter";
  Font["defaultFontSize"] = "14px";
})(Font || (Font = {}));

var Font$1 = Font;

var _a;

var BaseColor;

(function (BaseColor) {
  // Greens
  BaseColor["green900"] = "hsl(114, 35%, 20%)";
  BaseColor["green800"] = "hsl(114, 35%, 30%)";
  BaseColor["green700"] = "hsl(114, 35%, 40%)";
  BaseColor["green600"] = "hsl(114, 35%, 47%)";
  BaseColor["green500"] = "hsl(114, 35%, 52%)";
  BaseColor["green400"] = "hsl(114, 35%, 65%)";
  BaseColor["green300"] = "hsl(114, 35%, 75%)";
  BaseColor["green200"] = "hsl(114, 35%, 85%)";
  BaseColor["green100"] = "hsl(114, 35%, 95%)"; // Greys

  BaseColor["grey800"] = "hsl(212, 14%, 35%)";
  BaseColor["grey700"] = "hsl(356, 3%, 59%)";
  BaseColor["grey600"] = "hsl(0, 0%, 77%)";
  BaseColor["grey500"] = "hsl(0, 2%, 88%)";
  BaseColor["grey400"] = "hsl(0, 0%, 92%)";
  BaseColor["grey300"] = "hsl(0, 0%, 96%)";
  BaseColor["grey200"] = "hsl(0, 0%, 98%)";
  BaseColor["grey100"] = "hsla(0, 11%, 98%)"; // Blacks

  BaseColor["black200"] = "hsl(0, 2%, 22%)";
  BaseColor["black500"] = "hsl(0, 2%, 12%)";
  BaseColor["black800"] = "hsl(0, 3%, 7%)"; // Whites

  BaseColor["white500"] = "hsl(0, 0%, 100%)";
  BaseColor["white300"] = "#F2F2F2"; // Reds

  BaseColor["red900"] = "hsl(353, 66%, 20%)";
  BaseColor["red800"] = "hsl(353, 66%, 30%)";
  BaseColor["red700"] = "hsl(353, 66%, 40%)";
  BaseColor["red600"] = "hsl(353, 56%, 49%)";
  BaseColor["red500"] = "hsl(353, 66%, 55%)";
  BaseColor["red400"] = "hsl(353, 66%, 65%)";
  BaseColor["red300"] = "hsl(353, 66%, 75%)";
  BaseColor["red200"] = "hsl(353, 60%, 85%)";
  BaseColor["red100"] = "hsl(353, 60%, 95%)"; // Blues

  BaseColor["blue900"] = "hsl(200, 61%, 18%)";
  BaseColor["blue800"] = "hsl(200, 61%, 28%)";
  BaseColor["blue700"] = "hsl(200, 61%, 37%)";
  BaseColor["blue600"] = "hsl(200, 61%, 45%)";
  BaseColor["blue500"] = "hsl(200, 61%, 50%)";
  BaseColor["blue400"] = "hsl(200, 61%, 72%)";
  BaseColor["blue300"] = "hsl(200, 61%, 82%)";
  BaseColor["blue200"] = "hsl(200, 61%, 90%)";
  BaseColor["blue100"] = "hsl(200, 61%, 95%)"; // Yellows

  BaseColor["yellow900"] = "hsl(21, 70%, 21%)";
  BaseColor["yellow800"] = "hsl(22, 94%, 45%)";
  BaseColor["yellow700"] = "hsl(32, 94%, 59%)";
  BaseColor["yellow600"] = "hsl(45, 86%, 62%)";
  BaseColor["yellow500"] = "hsl(50, 90%, 70%)";
  BaseColor["yellow400"] = "hsl(54, 94%, 75%)";
  BaseColor["yellow300"] = "hsl(54, 90%, 80%)";
  BaseColor["yellow200"] = "hsl(51, 88%, 90%)";
  BaseColor["yellow100"] = "hsl(49, 85%, 95%)"; // Purples

  BaseColor["purple200"] = "hsl(256, 80%, 90%)";
  BaseColor["purple500"] = "hsl(256, 80%, 70%)";
  BaseColor["purple800"] = "hsl(256, 80%, 50%)"; // Teals

  BaseColor["teal200"] = "hsl(188, 80%, 93%)";
  BaseColor["teal500"] = "hsl(188, 80%, 70%)";
  BaseColor["teal800"] = "hsl(188, 80%, 50%)"; // Pinks

  BaseColor["pink200"] = "hsl(344, 80%, 94%)";
  BaseColor["pink500"] = "hsl(344, 80%, 70%)";
  BaseColor["pink800"] = "hsl(344, 80%, 50%)"; // Oranges

  BaseColor["orange200"] = "hsl(28, 80%, 90%)";
  BaseColor["orange500"] = "hsl(28, 80%, 70%)";
  BaseColor["orange800"] = "hsl(28, 80%, 50%)"; // Transparent

  BaseColor["transparent"] = "hsla(0, 0%, 0%, 0%)";
  BaseColor["darkOverlay"] = "rgba(0, 0, 0, 0.75)";
})(BaseColor || (BaseColor = {}));

var Color;

(function (Color) {
  // Greens
  Color["green900"] = "hsl(114, 35%, 20%)";
  Color["green800"] = "hsl(114, 35%, 30%)";
  Color["green700"] = "hsl(114, 35%, 40%)";
  Color["green600"] = "hsl(114, 35%, 47%)";
  Color["green500"] = "hsl(114, 35%, 52%)";
  Color["green400"] = "hsl(114, 35%, 65%)";
  Color["green300"] = "hsl(114, 35%, 75%)";
  Color["green200"] = "hsl(114, 35%, 85%)";
  Color["green100"] = "hsl(114, 35%, 95%)"; // Greys

  Color["grey800"] = "hsl(212, 14%, 35%)";
  Color["grey700"] = "hsl(356, 3%, 59%)";
  Color["grey600"] = "hsl(0, 0%, 77%)";
  Color["grey500"] = "hsl(0, 2%, 88%)";
  Color["grey400"] = "hsl(0, 0%, 92%)";
  Color["grey300"] = "hsl(0, 0%, 96%)";
  Color["grey200"] = "hsl(0, 0%, 98%)";
  Color["grey100"] = "hsla(0, 11%, 98%)"; // Blacks

  Color["black200"] = "hsl(0, 2%, 22%)";
  Color["black500"] = "hsl(0, 2%, 12%)";
  Color["black800"] = "hsl(0, 3%, 7%)"; // Whites

  Color["white500"] = "hsl(0, 0%, 100%)";
  Color["white300"] = "#F2F2F2"; // Reds

  Color["red900"] = "hsl(353, 66%, 20%)";
  Color["red800"] = "hsl(353, 66%, 30%)";
  Color["red700"] = "hsl(353, 66%, 40%)";
  Color["red600"] = "hsl(353, 56%, 49%)";
  Color["red500"] = "hsl(353, 66%, 55%)";
  Color["red400"] = "hsl(353, 66%, 65%)";
  Color["red300"] = "hsl(353, 66%, 75%)";
  Color["red200"] = "hsl(353, 60%, 85%)";
  Color["red100"] = "hsl(353, 60%, 95%)"; // Blues

  Color["blue900"] = "hsl(200, 61%, 18%)";
  Color["blue800"] = "hsl(200, 61%, 28%)";
  Color["blue700"] = "hsl(200, 61%, 37%)";
  Color["blue600"] = "hsl(200, 61%, 45%)";
  Color["blue500"] = "hsl(200, 61%, 50%)";
  Color["blue400"] = "hsl(200, 61%, 72%)";
  Color["blue300"] = "hsl(200, 61%, 82%)";
  Color["blue200"] = "hsl(200, 61%, 90%)";
  Color["blue100"] = "hsl(200, 61%, 95%)"; // Yellows

  Color["yellow900"] = "hsl(21, 70%, 21%)";
  Color["yellow800"] = "hsl(22, 94%, 45%)";
  Color["yellow700"] = "hsl(32, 94%, 59%)";
  Color["yellow600"] = "hsl(45, 86%, 62%)";
  Color["yellow500"] = "hsl(50, 90%, 70%)";
  Color["yellow400"] = "hsl(54, 94%, 75%)";
  Color["yellow300"] = "hsl(54, 90%, 80%)";
  Color["yellow200"] = "hsl(51, 88%, 90%)";
  Color["yellow100"] = "hsl(49, 85%, 95%)"; // Purples

  Color["purple200"] = "hsl(256, 80%, 90%)";
  Color["purple500"] = "hsl(256, 80%, 70%)";
  Color["purple800"] = "hsl(256, 80%, 50%)"; // Teals

  Color["teal200"] = "hsl(188, 80%, 93%)";
  Color["teal500"] = "hsl(188, 80%, 70%)";
  Color["teal800"] = "hsl(188, 80%, 50%)"; // Pinks

  Color["pink200"] = "hsl(344, 80%, 94%)";
  Color["pink500"] = "hsl(344, 80%, 70%)";
  Color["pink800"] = "hsl(344, 80%, 50%)"; // Oranges

  Color["orange200"] = "hsl(28, 80%, 90%)";
  Color["orange500"] = "hsl(28, 80%, 70%)";
  Color["orange800"] = "hsl(28, 80%, 50%)"; // Primaries

  Color["primaryGreen"] = "hsl(114, 35%, 52%)";
  Color["primaryBlue"] = "hsl(200, 61%, 50%)";
  Color["primaryRed"] = "hsl(353, 66%, 55%)";
  Color["primaryYellow"] = "hsl(50, 90%, 70%)"; ///////// DEFAULT COLOR //////////

  Color["primary"] = "hsl(114, 35%, 52%)";
  Color["trueWhite"] = "hsl(0, 0%, 100%)";
  Color["background"] = "hsl(0, 0%, 98%)";
  Color["text"] = "hsl(0, 2%, 22%)";
  Color["lightText"] = "hsl(356, 3%, 59%)";
  Color["invertedText"] = "hsl(0, 0%, 98%)";
  Color["invertedBackground"] = "hsl(0, 2%, 12%)";
  Color["link"] = "hsl(200, 61%, 50%)";
  Color["lightBlack"] = "hsl(0, 2%, 22%)";
  Color["black"] = "hsl(0, 2%, 12%)";
  Color["darkBlack"] = "hsl(0, 3%, 7%)";
  Color["border"] = "hsl(0, 2%, 88%)";
  Color["iconGrey"] = "hsl(212, 14%, 35%)";
  Color["darkGrey"] = "hsl(356, 3%, 59%)";
  Color["grey"] = "hsl(0, 0%, 77%)";
  Color["lightGrey"] = "hsl(0, 2%, 88%)";
  Color["dividerGrey"] = "hsl(0, 0%, 92%)";
  Color["outlineGrey"] = "hsl(0, 0%, 96%)";
  Color["highlightGrey"] = "hsl(0, 0%, 98%)";
  Color["transparent"] = "hsla(0, 0%, 0%, 0%)";
  Color["darkOverlay"] = "rgba(0, 0, 0, 0.75)";
})(Color || (Color = {}));

var ContrastColor = (_a = {}, // Greens
_a[BaseColor.green100] = BaseColor.green900, _a[BaseColor.green200] = BaseColor.green900, _a[BaseColor.green300] = BaseColor.green900, _a[BaseColor.green400] = BaseColor.green900, _a[BaseColor.green500] = BaseColor.green100, _a[BaseColor.green600] = BaseColor.green100, _a[BaseColor.green700] = BaseColor.green100, _a[BaseColor.green800] = BaseColor.green100, _a[BaseColor.green900] = BaseColor.green100, // Reds
_a[BaseColor.red100] = BaseColor.red900, _a[BaseColor.red200] = BaseColor.red900, _a[BaseColor.red300] = BaseColor.red900, _a[BaseColor.red400] = BaseColor.red900, _a[BaseColor.red500] = BaseColor.red100, _a[BaseColor.red600] = BaseColor.red100, _a[BaseColor.red700] = BaseColor.red100, _a[BaseColor.red800] = BaseColor.red100, _a[BaseColor.red900] = BaseColor.red100, // Blues
_a[BaseColor.blue100] = BaseColor.blue900, _a[BaseColor.blue200] = BaseColor.blue900, _a[BaseColor.blue300] = BaseColor.blue900, _a[BaseColor.blue400] = BaseColor.blue900, _a[BaseColor.blue500] = BaseColor.blue100, _a[BaseColor.blue600] = BaseColor.blue100, _a[BaseColor.blue700] = BaseColor.blue100, _a[BaseColor.blue800] = BaseColor.blue100, _a[BaseColor.blue900] = BaseColor.blue100, // Yellows
_a[BaseColor.yellow100] = BaseColor.yellow900, _a[BaseColor.yellow200] = BaseColor.yellow900, _a[BaseColor.yellow300] = BaseColor.yellow900, _a[BaseColor.yellow400] = BaseColor.yellow900, _a[BaseColor.yellow500] = BaseColor.yellow100, _a[BaseColor.yellow600] = BaseColor.yellow100, _a[BaseColor.yellow700] = BaseColor.yellow100, _a[BaseColor.yellow800] = BaseColor.yellow100, _a[BaseColor.yellow900] = BaseColor.yellow100, // Purples
_a[BaseColor.purple200] = BaseColor.purple800, _a[BaseColor.purple500] = BaseColor.purple200, _a[BaseColor.purple800] = BaseColor.purple200, // Teals
_a[BaseColor.teal200] = BaseColor.teal800, _a[BaseColor.teal500] = BaseColor.teal200, _a[BaseColor.teal800] = BaseColor.teal200, // Pinks
_a[BaseColor.pink200] = BaseColor.pink800, _a[BaseColor.pink500] = BaseColor.pink200, _a[BaseColor.pink800] = BaseColor.pink200, // Oranges
_a[BaseColor.orange200] = BaseColor.orange800, _a[BaseColor.orange500] = BaseColor.orange200, _a[BaseColor.orange800] = BaseColor.orange200, // Greys
_a[BaseColor.grey200] = BaseColor.grey800, _a[BaseColor.grey300] = BaseColor.grey800, _a[BaseColor.grey400] = BaseColor.grey800, _a[BaseColor.grey500] = BaseColor.grey800, _a[BaseColor.grey600] = BaseColor.grey200, _a[BaseColor.grey700] = BaseColor.grey200, _a[BaseColor.grey800] = BaseColor.grey200, _a[BaseColor.grey800] = BaseColor.grey100, // Black
_a[BaseColor.black200] = BaseColor.grey300, _a[BaseColor.black500] = BaseColor.grey300, _a[BaseColor.black800] = BaseColor.grey300, _a);
var Color$1 = Color;

function typographyFactory(defaultProps) {
  return function (props) {
    var factoryStyle = defaultProps.style;
    var children = props.children,
        style = props.style;
    if (children === undefined || React__default.Children.count(children) === 0) return null;

    var mergedProperties = __assign({}, defaultProps, props);

    var fontFamily = mergedProperties.fontFamily,
        p = mergedProperties.p,
        muted = mergedProperties.muted,
        light = mergedProperties.light,
        block = mergedProperties.block,
        error = mergedProperties.error,
        _a = mergedProperties.className,
        className = _a === void 0 ? "" : _a,
        inverted = mergedProperties.inverted,
        _b = mergedProperties.color,
        color = _b === void 0 ? Color$1.text : _b,
        uppercase = mergedProperties.uppercase,
        alignment = mergedProperties.alignment,
        weight = mergedProperties.weight,
        kerning = mergedProperties.kerning,
        bold = mergedProperties.bold,
        italicize = mergedProperties.italicize,
        _c = mergedProperties["data-qa"],
        dataQa = _c === void 0 ? "text" : _c;
    var fontFamilyStyle = fontFamily ? {
      fontFamily: fontFamily
    } : {
      fontFamily: "Inter"
    };
    var fontWeightStyle = {
      fontWeight: weight || 400
    };
    var boldStyles = bold ? {
      fontWeight: 600
    } : {};
    var mutedStyle = muted ? {
      color: Color$1.lightText
    } : {};
    var kerningStyle = kerning ? {
      letterSpacing: kerning + "rem"
    } : {};
    var blockStyle = block ? {
      display: "block"
    } : {};
    var lightStyle = light ? {
      color: Color$1.trueWhite
    } : {};
    var invertedStyle = inverted ? {
      color: Color$1.invertedText
    } : {};
    var errorStyle = error ? {
      color: Color$1.primaryRed
    } : {};
    var italicStyle = italicize ? {
      fontStyle: "italic"
    } : {};
    var styleDefaults = {
      color: color,
      textTransform: uppercase ? "uppercase" : "initial",
      textAlign: alignment ? alignment : "initial"
    };

    var mergedStyles = __assign({}, factoryStyle, style);

    var styleProp = __assign({}, styleDefaults, fontFamilyStyle, fontWeightStyle, boldStyles, italicStyle, kerningStyle, mutedStyle, blockStyle, lightStyle, invertedStyle, errorStyle, mergedStyles);

    var properties = {
      children: children,
      className: className,
      style: styleProp,
      "data-qa": dataQa
    };
    return p ? React__default.createElement("p", properties) : React__default.createElement("span", properties);
  };
}

var SuperTitle = typographyFactory({
  "data-qa": "page-supertitle",
  style: {
    fontSize: 48,
    lineHeight: "normal",
    display: "block"
  }
});
var Title = typographyFactory({
  "data-qa": "page-title",
  style: {
    fontSize: 36,
    lineHeight: "normal",
    display: "block"
  }
});
var Subtitle = typographyFactory({
  "data-qa": "page-subtitle",
  style: {
    fontSize: 30,
    display: "block"
  }
});
var HeadingLarge = typographyFactory({
  "data-qa": "heading-large",
  style: {
    fontSize: 24,
    display: "block"
  }
});
var HeadingSmall = typographyFactory({
  "data-qa": "heading-small",
  style: {
    fontSize: 20,
    display: "block"
  }
});
var HeadingTiny = typographyFactory({
  "data-qa": "heading-tiny",
  style: {
    fontSize: 18,
    display: "block"
  }
});
var Large = typographyFactory({
  style: {
    fontSize: 16
  }
});
var Regular = typographyFactory({
  style: {
    fontSize: Font$1.defaultFontSize
  }
});
var Small = typographyFactory({
  style: {
    fontSize: 12
  }
});
var Tiny = typographyFactory({
  style: {
    fontSize: 10.2
  }
});

var Typography =
/** @class */
function (_super) {
  __extends(Typography, _super);

  function Typography() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Typography.prototype.render = function () {
    return React__default.createElement(Regular, this.props);
  };

  Typography.SuperTitle = SuperTitle;
  Typography.Title = Title;
  Typography.Subtitle = Subtitle;
  Typography.HeadingLarge = HeadingLarge;
  Typography.HeadingSmall = HeadingSmall;
  Typography.HeadingTiny = HeadingTiny;
  Typography.Large = Large;
  Typography.Small = Small;
  Typography.Tiny = Tiny;
  return Typography;
}(React.Component);

var Alert =
/** @class */
function (_super) {
  __extends(Alert, _super);

  function Alert() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Alert.prototype.render = function () {
    var _a = this.props,
        style = _a.style,
        error = _a.error,
        children = _a.children,
        traceProp = _a.traceProp,
        success = _a.success,
        info = _a.info,
        centerAlign = _a.centerAlign,
        rest = __rest(_a, ["style", "error", "children", "traceProp", "success", "info", "centerAlign"]);

    var backgroundColor = "#f8f8f9";
    var color = "rgba(0,0,0,.87)";

    if (error) {
      color = Color$1.red800;
      backgroundColor = Color$1.red100;
    } else if (success) {
      color = Color$1.green900;
      backgroundColor = Color$1.green100;
    } else if (info) {
      color = Color$1.blue800;
      backgroundColor = Color$1.blue100;
    }

    var classes = centerAlign ? "flex justify-center align-items-center" : "";
    return React__default.createElement(ScrollIntoView, {
      traceProp: traceProp || children
    }, React__default.createElement(Fade, {
      duration: 150
    }, React__default.createElement("div", _extends({
      style: __assign({
        boxShadow: "inherit",
        padding: "16px 20px",
        border: "none",
        borderRadius: 4,
        fontSize: "12px",
        backgroundColor: backgroundColor
      }, style)
    }, __assign({
      error: error
    }, rest)), React__default.createElement("div", {
      className: classes
    }, React__default.createElement(Typography.Small, {
      style: {
        color: color
      }
    }, children)))));
  };

  return Alert;
}(React.PureComponent);

var AnimatedCheckmark = function (_a) {
  var _b = _a.size,
      size = _b === void 0 ? '100%' : _b;
  return React__default.createElement("div", {
    style: {
      height: size,
      width: size,
      borderRadius: '50%'
    }
  }, React__default.createElement("svg", {
    className: "AnimatedCheckmark",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 52 52"
  }, React__default.createElement("circle", {
    className: "checkmark__circle",
    cx: "52",
    cy: "52",
    r: "1000",
    fill: "none"
  }), React__default.createElement("path", {
    className: "checkmark__check",
    fill: "none",
    d: "M14.1 27.2l7.1 7.2 16.7-16.8"
  })));
};

var BoxShadow;

(function (BoxShadow) {
  BoxShadow["dp0"] = "";
  BoxShadow["dp1"] = "0px -1px 1px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.14)";
  BoxShadow["dp2"] = "0px 1px 2px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.12)";
  BoxShadow["dp3"] = "0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14)";
  BoxShadow["dp8"] = "0px 5px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12)";
  BoxShadow["dp16"] = "0px 8px 10px rgba(0, 0, 0, 0.2), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12)";
  BoxShadow["dp24"] = "0px 11px 15px rgba(0, 0, 0, 0.2), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 24px 38px rgba(0, 0, 0, 0.14)";
})(BoxShadow || (BoxShadow = {}));

var BoxShadow$1 = BoxShadow;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Segment-module_CohubSegment__3MMwJ {\n  background-color: var(--true-white);\n  border-radius: var(--default-border-radius);\n  transition: 100ms ease-in; }\n\n.Segment-module_padded__39Fvk {\n  padding: 1rem; }\n";
var styles = {"CohubSegment":"Segment-module_CohubSegment__3MMwJ","padded":"Segment-module_padded__39Fvk"};
styleInject(css);

var Segment =
/** @class */
function (_super) {
  __extends(Segment, _super);

  function Segment() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Segment.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        elevation = _a.elevation,
        style = _a.style,
        children = _a.children,
        padded = _a.padded,
        contrast = _a.contrast,
        bordered = _a.bordered,
        rest = __rest(_a, ["className", "elevation", "style", "children", "padded", "contrast", "bordered"]);

    var dpLevel = contrast || bordered ? "dp0" : "dp" + elevation;
    var classes = styles.CohubSegment + " " + (padded ? styles.padded : "") + " " + className;
    return React__default.createElement("div", _extends({}, rest, {
      className: classes,
      style: __assign({
        boxShadow: BoxShadow$1[dpLevel],
        border: bordered ? "1px solid var(--border)" : "",
        backgroundColor: contrast ? Color$1.grey200 : Color$1.trueWhite
      }, style)
    }), children);
  };

  Segment.defaultProps = {
    elevation: 1,
    padded: true,
    className: "",
    bordered: false
  };
  return Segment;
}(React.PureComponent);

var FormatMoney =
/** @class */
function (_super) {
  __extends(FormatMoney, _super);

  function FormatMoney() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FormatMoney.prototype.render = function () {
    var _a = this.props,
        value = _a.value,
        extendedPrecision = _a.extendedPrecision,
        dataQa = _a["data-qa"];
    var decimals = ("" + value).split(".")[1];
    return React__default.createElement("span", {
      "data-qa": dataQa
    }, React__default.createElement(NumberFormat, {
      value: value,
      displayType: "text",
      prefix: "$",
      thousandSeparator: true,
      fixedDecimalScale: true,
      decimalScale: extendedPrecision && decimals && decimals.length > 2 ? decimals.length : 2
    }));
  };

  FormatMoney.defaultProps = {
    extendedPrecision: true
  };
  return FormatMoney;
}(React.PureComponent);

var FormatNumber =
/** @class */
function (_super) {
  __extends(FormatNumber, _super);

  function FormatNumber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FormatNumber.prototype.render = function () {
    var _a = this.props,
        value = _a.value,
        rest = __rest(_a, ["value"]);

    return React__default.createElement(NumberFormat, _extends({
      value: value,
      displayType: "text"
    }, rest));
  };

  FormatNumber.defaultProps = {
    thousandSeparator: true
  };
  return FormatNumber;
}(React__default.Component);

var FormatPercent =
/** @class */
function (_super) {
  __extends(FormatPercent, _super);

  function FormatPercent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FormatPercent.prototype.render = function () {
    var value = this.props.value;
    var percentValue = value * 100;
    return React__default.createElement(NumberFormat, {
      value: percentValue,
      displayType: "text",
      thousandSeparator: true,
      decimalScale: 2,
      suffix: "%"
    });
  };

  FormatPercent.defaultProps = {
    thousandSeparator: false
  };
  return FormatPercent;
}(React__default.Component);

var AttributeList =
/** @class */
function (_super) {
  __extends(AttributeList, _super);

  function AttributeList() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.formattedValue = function (value, format) {
      switch (format) {
        case "money":
          return React__default.createElement(FormatMoney, {
            value: value
          });

        case "number":
          return React__default.createElement(FormatNumber, {
            value: value
          });

        case "percentage":
          return React__default.createElement(FormatPercent, {
            value: value
          });

        case "text":
          return value;

        default:
          return React__default.createElement(FormatNumber, {
            value: value
          });
      }
    };

    return _this;
  }

  AttributeList.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        header = _a.header,
        items = _a.items,
        contrast = _a.contrast,
        className = _a.className;
    var attributes = items.map(function (i) {
      return React__default.createElement("div", {
        className: "flex justify-between items-center mb-1 " + className,
        key: i.attribute
      }, React__default.createElement(Typography, null, i.attribute), React__default.createElement(Typography, null, _this.formattedValue(i.value, i.format)));
    });
    return React__default.createElement(Segment, {
      className: "flex flex-column",
      contrast: contrast,
      padded: contrast ? true : false
    }, React__default.createElement(Typography.Small, {
      muted: true,
      weight: 500,
      uppercase: true,
      className: "mb-1"
    }, header), attributes);
  };

  return AttributeList;
}(React.PureComponent);

function logError(message) {

  console.error(message);
}

var IconWrapper =
/** @class */
function (_super) {
  __extends(IconWrapper, _super);

  function IconWrapper() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  IconWrapper.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        color = _a.color,
        _b = _a.defaultColor,
        defaultColor = _b === void 0 ? Color$1.grey500 : _b,
        _c = _a.size,
        size = _c === void 0 ? 24 : _c,
        _d = _a.className,
        className = _d === void 0 ? "" : _d,
        style = _a.style,
        name = _a.name,
        onClick = _a.onClick,
        disabled = _a.disabled;
    var clickable = onClick && !disabled ? "cursor-pointer" : "";
    return React__default.createElement("div", {
      className: "CohubIcon " + name + "Icon " + className + " " + clickable,
      style: __assign({
        width: size,
        height: size,
        transition: "opacity 300ms ease-in 200ms",
        opacity: disabled ? 0.3 : undefined
      }, style),
      onClick: disabled ? undefined : onClick
    }, React__default.createElement("div", {
      className: "flex justify-center items-center"
    }, children({
      color: color || defaultColor,
      size: size
    })));
  };

  return IconWrapper;
}(React.PureComponent);

var Add = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M0.0769043 6.99998H13.9231M6.99998 13.9231V0.0769043",
      stroke: color,
      strokeWidth: "0.75"
    }));
  });
};

var ArrowDown = function (props) {
  return React__default.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primaryRed
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 8 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M3.86366 9.63634L3.51805 9.99766L3.86366 10.3282L4.20927 9.99766L3.86366 9.63634ZM0.381684 6.99766L3.51805 9.99766L4.20927 9.27502L1.07291 6.27502L0.381684 6.99766ZM4.20927 9.99766L7.34563 6.99766L6.65441 6.27502L3.51805 9.27502L4.20927 9.99766ZM4.36366 9.49998V0.772705H3.36366V9.49998H4.36366Z",
      fill: color
    }));
  });
};

var ArrowUp = function (props) {
  return React__default.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primaryGreen
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 8 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M4.13636 1.27271L4.48198 0.911384L4.13636 0.580799L3.79075 0.911384L4.13636 1.27271ZM7.61834 3.91138L4.48198 0.911384L3.79075 1.63403L6.92712 4.63403L7.61834 3.91138ZM3.79075 0.911384L0.654389 3.91138L1.34561 4.63403L4.48198 1.63403L3.79075 0.911384ZM3.63636 1.40907V10.1363H4.63636V1.40907H3.63636Z",
      fill: color
    }));
  });
};

var Back = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",
      fill: color
    }));
  });
};

var Bell = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      version: "1.1",
      viewBox: "0 0 24 24"
    }, React__default.createElement("path", {
      d: "M12,22c1.1,0 2,-0.9 2,-2h-4c0,1.1 0.89,2 2,2Zm6,-6v-5c0,-3.07 -1.64,-5.64 -4.5,-6.32v-0.68c0,-0.83 -0.67,-1.5 -1.5,-1.5c-0.83,0 -1.5,0.67 -1.5,1.5v0.68c-2.87,0.68 -4.5,3.24 -4.5,6.32v5l-2,2v1h16v-1l-2,-2Z",
      fill: color
    }));
  });
};

var BoxAdd = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      version: "1.1",
      viewBox: "0 0 24 24",
      width: size,
      height: size
    }, React__default.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React__default.createElement("path", {
      fill: color,
      d: "M2,8.006h16v5.994h2v-6.994c0,-0.008 -0.004,-0.012 -0.004,-0.019c-0.002,-0.116 -0.026,-0.229 -0.068,-0.339c-0.011,-0.028 -0.025,-0.053 -0.039,-0.08c-0.019,-0.038 -0.031,-0.08 -0.057,-0.117l-4,-6c-0.186,-0.278 -0.498,-0.445 -0.832,-0.445h-10c-0.334,-5.20417e-18 -0.646,0.167 -0.832,0.445l-4,6c-0.025,0.037 -0.038,0.08 -0.057,0.117c-0.013,0.028 -0.028,0.052 -0.039,0.08c-0.042,0.11 -0.066,0.223 -0.068,0.339c-3.46945e-18,0.007 -0.004,0.012 -0.004,0.019v12c0,0.552 0.447,1 1,1h13v-2h-12v-10Zm15.131,-2h-6.131v-4h3.465l2.666,4Zm-11.596,-4h3.465v4h-6.131l2.666,-4Z"
    }), React__default.createElement("path", {
      d: "M24,19h-3v-3h-2v3h-3v2h3v3h2v-3h3Z",
      fill: color
    }));
  });
};

var Calculator = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M21.2498 2.50002H8.74976C7.37101 2.50002 6.24976 3.62252 6.24976 5.00002V25C6.24976 26.3788 7.37101 27.5 8.74976 27.5H21.2498C22.6298 27.5 23.7498 26.3788 23.7498 25V5.00002C23.7498 3.62252 22.6298 2.50002 21.2498 2.50002ZM21.2498 5.00002L21.2485 10H8.74976V5.00002H21.2498ZM8.74976 25V12.5H21.2485L21.246 25H8.74976Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M11.2498 16.2501C11.9401 16.2501 12.4998 15.6904 12.4998 15.0001C12.4998 14.3097 11.9401 13.7501 11.2498 13.7501C10.5594 13.7501 9.99976 14.3097 9.99976 15.0001C9.99976 15.6904 10.5594 16.2501 11.2498 16.2501Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M14.9998 16.2501C15.6901 16.2501 16.2498 15.6904 16.2498 15.0001C16.2498 14.3097 15.6901 13.7501 14.9998 13.7501C14.3094 13.7501 13.7498 14.3097 13.7498 15.0001C13.7498 15.6904 14.3094 16.2501 14.9998 16.2501Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M18.7498 16.2501C19.4401 16.2501 19.9998 15.6904 19.9998 15.0001C19.9998 14.3097 19.4401 13.7501 18.7498 13.7501C18.0594 13.7501 17.4998 14.3097 17.4998 15.0001C17.4998 15.6904 18.0594 16.2501 18.7498 16.2501Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M19.9998 6.25009H17.4998V8.75009H19.9998V6.25009Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M11.2498 20.0001C11.9401 20.0001 12.4998 19.4404 12.4998 18.7501C12.4998 18.0597 11.9401 17.5001 11.2498 17.5001C10.5594 17.5001 9.99976 18.0597 9.99976 18.7501C9.99976 19.4404 10.5594 20.0001 11.2498 20.0001Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M14.9998 20.0001C15.6901 20.0001 16.2498 19.4404 16.2498 18.7501C16.2498 18.0597 15.6901 17.5001 14.9998 17.5001C14.3094 17.5001 13.7498 18.0597 13.7498 18.7501C13.7498 19.4404 14.3094 20.0001 14.9998 20.0001Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M18.7498 20.0001C19.4401 20.0001 19.9998 19.4404 19.9998 18.7501C19.9998 18.0597 19.4401 17.5001 18.7498 17.5001C18.0594 17.5001 17.4998 18.0597 17.4998 18.7501C17.4998 19.4404 18.0594 20.0001 18.7498 20.0001Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M11.2498 23.7501C11.9401 23.7501 12.4998 23.1904 12.4998 22.5001C12.4998 21.8097 11.9401 21.2501 11.2498 21.2501C10.5594 21.2501 9.99976 21.8097 9.99976 22.5001C9.99976 23.1904 10.5594 23.7501 11.2498 23.7501Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M14.9998 23.7501C15.6901 23.7501 16.2498 23.1904 16.2498 22.5001C16.2498 21.8097 15.6901 21.2501 14.9998 21.2501C14.3094 21.2501 13.7498 21.8097 13.7498 22.5001C13.7498 23.1904 14.3094 23.7501 14.9998 23.7501Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M18.7498 23.7501C19.4401 23.7501 19.9998 23.1904 19.9998 22.5001C19.9998 21.8097 19.4401 21.2501 18.7498 21.2501C18.0594 21.2501 17.4998 21.8097 17.4998 22.5001C17.4998 23.1904 18.0594 23.7501 18.7498 23.7501Z",
      fill: color
    }));
  });
};

var Calendar = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      width: size,
      height: size
    }, React__default.createElement("path", {
      fill: color,
      d: "M368.005 272h-96v96h96v-96zm-32-208v32h-160V64h-48v32h-24.01c-22.002 0-40 17.998-40 40v272c0 22.002 17.998 40 40 40h304.01c22.002 0 40-17.998 40-40V136c0-22.002-17.998-40-40-40h-24V64h-48zm72 344h-304.01V196h304.01v212z"
    }));
  });
};

var CaretDown = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M7.41,7.84l4.59,4.58l4.59,-4.58l1.41,1.41l-6,6l-6,-6Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,-0.75h24v24h-24Z"
    }));
  });
};

var Checkmark = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z",
      fill: color
    }));
  });
};

var ChevronDown = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M7,10l5,5l5,-5Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

var ChevronLeft = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M13 1L2 12.5L13 24",
      stroke: color,
      strokeWidth: "2"
    }));
  });
};

var ChevronRight = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M1 24L12 12.5L1 1",
      stroke: color,
      strokeWidth: "2"
    }));
  });
};

var Circle = function (props) {
  return React__default.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primaryGreen
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("circle", {
      cx: "12.5",
      cy: "12.5",
      r: "11.5",
      fill: "none",
      style: {
        stroke: color,
        transition: "stroke 300ms ease-in"
      },
      strokeWidth: "2"
    }));
  });
};

var CircleCheck = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 6 6",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("rect", {
      width: "6",
      height: "6",
      fill: "black",
      fillOpacity: "0"
    }), React__default.createElement("circle", {
      cx: "3",
      cy: "3",
      r: "2.875",
      stroke: color,
      strokeWidth: "0.25"
    }), React__default.createElement("rect", {
      width: "3",
      height: "2.04523",
      fill: color,
      fillOpacity: "0",
      transform: "translate(1.5 1.875)"
    }), React__default.createElement("path", {
      d: "M1.5 2.89243L2.52262 3.91504L4.5 1.875",
      stroke: color,
      strokeWidth: "0.25"
    }));
  });
};

var CirclePlus = function (props) {
  return React__default.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primary
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "9",
      fill: color
    }), React__default.createElement("path", {
      d: "M2.76904 9.00006H15.2306M8.99981 15.2308V2.76929",
      stroke: ContrastColor[color],
      strokeWidth: "0.5"
    }));
  });
};

var CirclePlusInverted = function (props) {
  return React__default.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primaryGreen
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "8.75",
      stroke: color,
      strokeWidth: "0.5"
    }), React__default.createElement("path", {
      d: "M2.76904 9.00006H15.2306M8.99981 15.2308V2.76929",
      stroke: color,
      strokeWidth: "0.5"
    }));
  });
};

var CircleRemove = function (props) {
  return React__default.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.black
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 6 6",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("rect", {
      width: "6",
      height: "6",
      fill: color,
      fillOpacity: "0"
    }), React__default.createElement("circle", {
      cx: "3",
      cy: "3",
      r: "2.875",
      stroke: color,
      strokeWidth: "0.25"
    }), React__default.createElement("path", {
      d: "M1.5314 4.46859L4.46862 1.53138M4.46862 4.46858L1.5314 1.53137",
      stroke: color,
      strokeWidth: "0.25"
    }));
  });
};

var Close = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M19,6.41l-1.41,-1.41l-5.59,5.59l-5.59,-5.59l-1.41,1.41l5.59,5.59l-5.59,5.59l1.41,1.41l5.59,-5.59l5.59,5.59l1.41,-1.41l-5.59,-5.59Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

var Columns = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      version: "1.1",
      viewBox: "0 0 24 24"
    }, React__default.createElement("path", {
      d: "M10,18h5v-13h-5v13Zm-6,0h5v-13h-5v13Zm12,-13v13h5v-13h-5Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

var ControlPanel = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M15 2L15 22M4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22Z",
      stroke: color,
      strokeWidth: "2"
    }));
  });
};

var Dashboard = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24"
    }, React__default.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React__default.createElement("path", {
      fill: color,
      d: "M3,13h8v-10h-8v10Zm0,8h8v-6h-8v6Zm10,0h8v-10h-8v10Zm0,-18v6h8v-6h-8Z"
    }));
  });
};

var Eye = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24"
    }, React__default.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React__default.createElement("path", {
      fill: color,
      d: "M12,4.5c-5,0 -9.27,3.11 -11,7.5c1.73,4.39 6,7.5 11,7.5c5,0 9.27,-3.11 11,-7.5c-1.73,-4.39 -6,-7.5 -11,-7.5Zm0,12.5c-2.76,0 -5,-2.24 -5,-5c0,-2.76 2.24,-5 5,-5c2.76,0 5,2.24 5,5c0,2.76 -2.24,5 -5,5Zm0,-8c-1.66,0 -3,1.34 -3,3c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3c0,-1.66 -1.34,-3 -3,-3Z"
    }));
  });
};

var Filter = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24"
    }, React__default.createElement("path", {
      d: "M10,18h4v-2h-4v2Zm-7,-12v2h18v-2h-18Zm3,7h12v-2h-12v2Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

var Back$1 = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z",
      fill: color
    }));
  });
};

var Laptop = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24"
    }, React__default.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React__default.createElement("path", {
      fill: color,
      d: "M20,18c1.1,0 1.99,-0.9 1.99,-2l0.01,-11c0,-1.1 -0.9,-2 -2,-2h-16c-1.1,0 -2,0.9 -2,2v11c0,1.1 0.9,2 2,2h-4c0,1.1 0.9,2 2,2h20c1.1,0 2,-0.9 2,-2h-4Zm-16,-13h16v11h-16v-11Zm8,14c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1Z"
    }));
  });
};

var List = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      version: "1.1",
      viewBox: "0 0 24 24",
      width: size,
      height: size
    }, React__default.createElement("path", {
      d: "M3,13h2v-2h-2v2Zm0,4h2v-2h-2v2Zm0,-8h2v-2h-2v2Zm4,4h14v-2h-14v2Zm0,4h14v-2h-14v2Zm0,-10v2h14v-2h-14Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

var Print = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      version: "1.1",
      viewBox: "0 0 24 24",
      width: size,
      height: size
    }, React__default.createElement("path", {
      d: "M19,8h-14c-1.66,0 -3,1.34 -3,3v6h4v4h12v-4h4v-6c0,-1.66 -1.34,-3 -3,-3Zm-3,11h-8v-5h8v5Zm3,-7c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1Zm-1,-9h-12v4h12v-4Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

var Report = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M6.25 23.75V3.75H3.75V25C3.75 25.69 4.31 26.25 5 26.25H26.25V23.75H6.25Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M13.75 15.5175L16.6162 18.3825C17.105 18.8712 17.895 18.8712 18.3837 18.3825L25.8837 10.8825L24.1162 9.11499L17.5 15.7325L14.6337 12.8662C14.145 12.3775 13.355 12.3775 12.8662 12.8662L7.86621 17.8662L9.63371 19.6337L13.75 15.5175Z",
      fill: color
    }));
  });
};

var Rows = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      version: "1.1",
      viewBox: "0 0 24 24",
      width: size,
      height: size
    }, React__default.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React__default.createElement("path", {
      fill: color,
      d: "M3,15h18v-2h-18v2Zm0,4h18v-2h-18v2Zm0,-8h18v-2h-18v2Zm0,-6v2h18v-2h-18Z"
    }));
  });
};

var Sales = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M11.8,10.9c-2.27,-0.59 -3,-1.2 -3,-2.15c0,-1.09 1.01,-1.85 2.7,-1.85c1.78,0 2.44,0.85 2.5,2.1h2.21c-0.07,-1.72 -1.12,-3.3 -3.21,-3.81v-2.19h-3v2.16c-1.94,0.42 -3.5,1.68 -3.5,3.61c0,2.31 1.91,3.46 4.7,4.13c2.5,0.6 3,1.48 3,2.41c0,0.69 -0.49,1.79 -2.7,1.79c-2.06,0 -2.87,-0.92 -2.98,-2.1h-2.2c0.12,2.19 1.76,3.42 3.68,3.83v2.17h3v-2.15c1.95,-0.37 3.5,-1.5 3.5,-3.55c0,-2.84 -2.43,-3.81 -4.7,-4.4Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

var Trash = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React__default.createElement("path", {
      fill: color,
      d: "M17,3h-12c-1.11,0 -2,0.9 -2,2v14c0,1.1 0.89,2 2,2h14c1.1,0 2,-0.9 2,-2v-12l-4,-4Zm-5,16c-1.66,0 -3,-1.34 -3,-3c0,-1.66 1.34,-3 3,-3c1.66,0 3,1.34 3,3c0,1.66 -1.34,3 -3,3Zm3,-10h-10v-4h10v4Z"
    }));
  });
};

var Scales = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M29.8563 15.6975L29.8688 15.6913L25.7725 7.5H27.5V5H16.25V2.5H13.75V5H2.5V7.5H4.2275L0.1325 15.6913L0.145 15.6975C0.05875 15.865 0 16.0487 0 16.25C0 19.6963 2.80375 22.5 6.25 22.5C9.69625 22.5 12.5 19.6963 12.5 16.25C12.5 16.0487 12.4412 15.865 12.3563 15.6975L12.3688 15.6913L8.2725 7.5H13.75V25H10V27.5H20V25H16.25V7.5H21.7275L17.6325 15.6913L17.645 15.6975C17.5588 15.865 17.5 16.0487 17.5 16.25C17.5 19.6963 20.3037 22.5 23.75 22.5C27.1963 22.5 30 19.6963 30 16.25C30 16.0487 29.9412 15.865 29.8563 15.6975ZM6.25 9.045L9.2275 15H3.2725L6.25 9.045ZM6.25 20C4.62 20 3.23 18.955 2.715 17.5H9.785C9.27 18.955 7.88 20 6.25 20ZM26.7275 15H20.7725L23.75 9.045L26.7275 15ZM23.75 20C22.12 20 20.73 18.955 20.215 17.5H27.285C26.77 18.955 25.38 20 23.75 20Z",
      fill: color
    }));
  });
};

var Search = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M15.5,14h-0.79l-0.28,-0.27c0.98,-1.14 1.57,-2.62 1.57,-4.23c0,-3.59 -2.91,-6.5 -6.5,-6.5c-3.59,0 -6.5,2.91 -6.5,6.5c0,3.59 2.91,6.5 6.5,6.5c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99l1.49,-1.49l-4.99,-5Zm-6,0c-2.49,0 -4.5,-2.01 -4.5,-4.5c0,-2.49 2.01,-4.5 4.5,-4.5c2.49,0 4.5,2.01 4.5,4.5c0,2.49 -2.01,4.5 -4.5,4.5Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

var Shipping = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M2.5 10H22.5V15H25V8.75C25 8.74125 24.995 8.735 24.995 8.7275C24.9925 8.58125 24.9625 8.44 24.91 8.30375C24.8962 8.26875 24.8787 8.2375 24.8612 8.20375C24.8375 8.15625 24.8225 8.10375 24.79 8.0575L19.79 0.5575C19.5575 0.20875 19.1675 0 18.75 0H6.25C5.8325 0 5.4425 0.20875 5.21 0.55625L0.21 8.05625C0.17875 8.1025 0.1625 8.155 0.13875 8.20375C0.1225 8.2375 0.10375 8.26875 0.09 8.30375C0.0375 8.44 0.0075 8.58125 0.005 8.7275C0.005 8.735 0 8.74125 0 8.75V23.75C0 24.44 0.55875 25 1.25 25H10V22.5H2.5V10ZM21.4137 7.5H13.75V2.5H18.0812L21.4137 7.5ZM6.91875 2.5H11.25V7.5H3.58625L6.91875 2.5Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M29.6335 22.8663L27.1335 20.3663C26.8998 20.1325 26.5823 20 26.2498 20H24.9998V18.75C24.9998 18.06 24.441 17.5 23.7498 17.5H13.7498C13.0585 17.5 12.4998 18.06 12.4998 18.75V27.5C12.4998 28.19 13.0585 28.75 13.7498 28.75H15.346C15.7798 29.4938 16.576 30 17.4998 30C18.4235 30 19.2198 29.4938 19.6535 28.75H22.8473C23.281 29.4938 24.0773 30 25.001 30C25.9248 30 26.721 29.4938 27.1548 28.75H28.7498C29.441 28.75 29.9998 28.19 29.9998 27.5V23.75C29.9998 23.4188 29.8685 23.1 29.6335 22.8663ZM14.9998 20H22.4998V26.25H19.6535C19.221 25.505 18.4235 25 17.4998 25C16.576 25 15.7785 25.505 15.346 26.25H14.9998V20ZM27.4998 26.25H27.1535C26.721 25.505 25.9235 25 24.9998 25V22.5H25.7323L27.4998 24.2675V26.25Z",
      fill: color
    }));
  });
};

var TagDollar = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M25.0001 10V1.25C25.0001 0.55875 24.4414 0 23.7501 0H15.0002C14.6677 0 14.3502 0.13125 14.1165 0.36625L0.36656 14.1162C-0.122187 14.605 -0.122187 15.395 0.36656 15.8837L9.1165 24.6337C9.36025 24.8775 9.68024 25 10.0002 25C10.3202 25 10.6402 24.8775 10.884 24.6337L24.6339 10.8837C24.8689 10.65 25.0001 10.3325 25.0001 10ZM22.5002 9.4825L10.0002 21.9825L3.01779 15L15.5177 2.5H22.5002V9.4825Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M20.5177 4.48223C21.494 5.45854 21.494 7.04146 20.5177 8.01777C19.5414 8.99408 17.9585 8.99408 16.9822 8.01777C16.0059 7.04146 16.0059 5.45855 16.9822 4.48223C17.9585 3.50592 19.5414 3.50592 20.5177 4.48223Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M26.25 21.25H23.75C23.0612 21.25 22.5 20.6887 22.5 20C22.5 19.3113 23.0612 18.75 23.75 18.75H28.7499V16.25H26.25V15H23.75V16.25C21.6825 16.25 20 17.9325 20 20C20 22.0675 21.6825 23.75 23.75 23.75H26.25C26.9387 23.75 27.4999 24.3112 27.4999 25C27.4999 25.6888 26.9387 26.25 26.25 26.25H21.25V28.75H23.75V30H26.25V28.75C28.3174 28.75 29.9999 27.0675 29.9999 25C29.9999 22.9325 28.3174 21.25 26.25 21.25Z",
      fill: color
    }));
  });
};

var Trash$1 = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2v-12h-12v12Zm13,-15h-3.5l-1,-1h-5l-1,1h-3.5v2h14v-2Z",
      fill: color
    }), React__default.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

var Triangle = function (props) {
  return React__default.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.black
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 10 8",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M5 0L9.33013 7.5H0.669873L5 0Z",
      fill: color
    }));
  });
};

var TripleDotsVertical = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React__default.createElement("path", {
      fill: color,
      d: "M12,8c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2Zm0,2c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2Zm0,6c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2Z"
    }));
  });
};

var UserGroup = function (props) {
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("path", {
      d: "M25.4652 23.8238C26.3277 23.0225 26.8765 21.8913 26.8765 20.625C26.8765 18.2125 24.914 16.25 22.5015 16.25C20.089 16.25 18.1265 18.2125 18.1265 20.625C18.1265 21.8913 18.6752 23.0225 19.5377 23.8238C17.6902 24.4913 16.2515 25.7763 16.2515 27.5H18.7515C18.7515 26.7525 20.5177 25.8038 22.5015 25.8038C24.4852 25.8038 26.2515 26.7538 26.2515 27.5H28.7515C28.7515 25.775 27.3127 24.4913 25.4652 23.8238ZM22.5015 18.75C23.5352 18.75 24.3765 19.5913 24.3765 20.625C24.3765 21.6588 23.5352 22.5 22.5015 22.5C21.4677 22.5 20.6265 21.6588 20.6265 20.625C20.6265 19.5913 21.4677 18.75 22.5015 18.75Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M10.4652 23.8238C11.3277 23.0225 11.8765 21.8913 11.8765 20.625C11.8765 18.2125 9.91397 16.25 7.50146 16.25C5.08896 16.25 3.12646 18.2125 3.12646 20.625C3.12646 21.8913 3.67522 23.0225 4.53771 23.8238C2.69021 24.4913 1.25146 25.775 1.25146 27.5H3.75146C3.75146 26.7525 5.51771 25.8038 7.50146 25.8038C9.48522 25.8038 11.2515 26.7538 11.2515 27.5H13.7515C13.7515 25.775 12.3127 24.4913 10.4652 23.8238ZM7.50146 18.75C8.53521 18.75 9.37646 19.5913 9.37646 20.625C9.37646 21.6588 8.53521 22.5 7.50146 22.5C6.46771 22.5 5.62646 21.6588 5.62646 20.625C5.62646 19.5913 6.46771 18.75 7.50146 18.75Z",
      fill: color
    }), React__default.createElement("path", {
      d: "M18.7512 13.75H21.2512C21.2512 12.025 19.8124 10.7413 17.9649 10.0738C18.8274 9.27252 19.3762 8.14127 19.3762 6.87502C19.3762 4.46252 17.4137 2.50002 15.0012 2.50002C12.5887 2.50002 10.6262 4.46252 10.6262 6.87502C10.6262 8.14127 11.1749 9.27252 12.0374 10.0738C10.1899 10.7413 8.75116 12.025 8.75116 13.75H11.2512C11.2512 13.0025 13.0174 12.0538 15.0012 12.0538C16.9849 12.0538 18.7512 13.0025 18.7512 13.75ZM15.0012 5.00002C16.0349 5.00002 16.8762 5.84127 16.8762 6.87502C16.8762 7.90877 16.0349 8.75002 15.0012 8.75002C13.9674 8.75002 13.1262 7.90877 13.1262 6.87502C13.1262 5.84127 13.9674 5.00002 15.0012 5.00002Z",
      fill: color
    }));
  });
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}

var User = function (props) {
  var uniqueId = guid();
  return React__default.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 " + size + " " + size
    }, React__default.createElement("mask", {
      id: uniqueId,
      "mask-type": "alpha",
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: size,
      height: size
    }, React__default.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: size / 2,
      fill: "#F2F2F2"
    })), React__default.createElement("g", {
      mask: "url(#" + uniqueId + ")"
    }, React__default.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: size / 2,
      fill: "#F2F2F2"
    }), React__default.createElement("circle", {
      cx: size / 2,
      cy: size / 1.0909090909,
      r: size / 3,
      fill: "#C4C4C4"
    }), React__default.createElement("circle", {
      cx: size / 2,
      cy: size / 2.6666666667,
      r: size / 6,
      fill: "#C4C4C4"
    })));
  });
};

var icons = {
  add: Add,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  bell: Bell,
  back: Back,
  boxAdd: BoxAdd,
  calculator: Calculator,
  calendar: Calendar,
  caretDown: CaretDown,
  checkmark: Checkmark,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  circle: Circle,
  circleCheck: CircleCheck,
  circlePlus: CirclePlus,
  circlePlusInverted: CirclePlusInverted,
  circleRemove: CircleRemove,
  close: Close,
  columns: Columns,
  controlPanel: ControlPanel,
  dashboard: Dashboard,
  eye: Eye,
  filter: Filter,
  forward: Back$1,
  laptop: Laptop,
  list: List,
  print: Print,
  report: Report,
  rows: Rows,
  sales: Sales,
  save: Trash,
  scales: Scales,
  search: Search,
  shipping: Shipping,
  tagDollar: TagDollar,
  trash: Trash$1,
  triangle: Triangle,
  tripleDotsVertical: TripleDotsVertical,
  userGroup: UserGroup,
  user: User
};

var iconNames = Object.keys(icons);

var DefaultIcon = function (props) {
  var Ico = icons[props.name];

  if (!Ico) {
    logError(props.name + " Icon does not exist");
    return null;
  }

  return React__default.createElement(Ico, props);
};

var buildIcon = function (name) {
  return function (props) {
    return React__default.createElement(DefaultIcon, _extends({
      name: name
    }, props));
  };
};

var Icon =
/** @class */
function (_super) {
  __extends(Icon, _super);

  function Icon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Icon.prototype.render = function () {
    return React__default.createElement(DefaultIcon, this.props);
  };

  Icon.Add = buildIcon("add");
  Icon.ArrowDown = buildIcon("arrowDown");
  Icon.ArrowUp = buildIcon("arrowUp");
  Icon.Back = buildIcon("back");
  Icon.Bell = buildIcon("bell");
  Icon.BoxAdd = buildIcon("boxAdd");
  Icon.Calculator = buildIcon("calculator");
  Icon.Calendar = buildIcon("calendar");
  Icon.CaretDown = buildIcon("caretDown");
  Icon.Checkmark = buildIcon("checkmark");
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
  Icon.Filter = buildIcon("filter");
  Icon.Laptop = buildIcon("laptop");
  Icon.List = buildIcon("list");
  Icon.Print = buildIcon("print");
  Icon.Report = buildIcon("report");
  Icon.Rows = buildIcon("rows");
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
}(React.PureComponent);

var css$1 = ".Avatar-module_Avatar__Irl8C {\n  border-radius: 50%;\n  position: relative; }\n\n.Avatar-module_Avatar__Irl8C::after {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  content: '';\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0; }\n";
var styles$1 = {"Avatar":"Avatar-module_Avatar__Irl8C"};
styleInject(css$1);

var Avatar =
/** @class */
function (_super) {
  __extends(Avatar, _super);

  function Avatar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Avatar.prototype.render = function () {
    var _a = this.props,
        src = _a.src,
        name = _a.name,
        size = _a.size,
        className = _a.className;
    var avatarStyle = {
      borderRadius: "50%",
      backgroundColor: "var(--bf-green)",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    if (src) {
      return React__default.createElement("div", {
        className: styles$1.Avatar + " " + className,
        style: {
          width: size,
          height: size
        }
      }, React__default.createElement("img", {
        src: src,
        style: avatarStyle
      }));
    } else if (name) {
      var firstInitial = void 0;
      var lastInital = void 0;

      var _b = name.split(" "),
          firstName = _b[0],
          lastName = _b[1];

      if (firstName) {
        firstInitial = firstName.substring(0, 1);
      }

      if (lastName) {
        lastInital = lastName.substring(0, 1);
      }

      var style = __assign({}, avatarStyle, {
        fontWeight: 400
      });

      return React__default.createElement("div", {
        className: className,
        style: style
      }, React__default.createElement("div", null, firstInitial, lastInital));
    } else {
      return React__default.createElement("div", {
        className: className
      }, React__default.createElement(Icon.User, {
        size: size
      }));
    }
  };

  Avatar.defaultProps = {
    size: 50
  };
  return Avatar;
}(React.PureComponent);

var css$2 = ".CohubBackdrop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n  .CohubBackdrop .modal {\n    background-color: transparent;\n    padding: 0;\n    box-shadow: none; }\n  .CohubBackdrop .closeButton {\n    top: -25px;\n    right: -37px;\n    cursor: pointer; }\n";
styleInject(css$2);

var Backdrop =
/** @class */
function (_super) {
  __extends(Backdrop, _super);

  function Backdrop() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.appRoot = document.getElementById("root");

    _this.setBlurState = function () {
      var open = _this.props.open;
      open ? _this.addBlurClass() : _this.removeBlurClass();
    };

    _this.addBlurClass = function () {
      _this.appRoot && _this.appRoot.classList.add("blurred");
    };

    _this.removeBlurClass = function () {
      _this.appRoot && _this.appRoot.classList.remove("blurred");
    };

    return _this;
  }

  Backdrop.prototype.componentDidMount = function () {
    this.setBlurState();
  };

  Backdrop.prototype.componentDidUpdate = function () {
    this.setBlurState();
  };

  Backdrop.prototype.componentWillUnmount = function () {
    this.removeBlurClass();
  };

  Backdrop.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        onClose = _a.onClose,
        showCloseIcon = _a.showCloseIcon,
        _b = _a.containerClass,
        containerClass = _b === void 0 ? "" : _b,
        style = _a.style,
        rest = __rest(_a, ["children", "onClose", "showCloseIcon", "containerClass", "style"]);

    return React__default.createElement(ReactResponsiveModal, _extends({
      closeOnEsc: true,
      closeOnOverlayClick: true
    }, rest, {
      classNames: {
        overlay: "CohubBackdrop " + containerClass,
        modal: "modal",
        closeButton: "closeButton"
      },
      showCloseIcon: showCloseIcon,
      onClose: onClose,
      onOverlayClick: onClose,
      onEscKeyDown: onClose,
      closeIconSvgPath: CloseIcon,
      styles: {
        overlay: style
      }
    }), children);
  };

  Backdrop.defaultProps = {
    showCloseIcon: false,
    containerClass: "",
    onClose: function () {
      return undefined;
    },
    focusTrapped: true,
    open: true
  };
  return Backdrop;
}(React.PureComponent);
var iconSize = 44;
var CloseIcon = React__default.createElement("svg", {
  width: iconSize,
  height: iconSize,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, React__default.createElement("path", {
  d: "M12 0.974332L11.025 0L6.00034 5.02532L0.975021 0L0 0.974332L5.02532 5.99966L0 11.025L0.975021 11.9993L6.00034 6.97399L11.025 11.9993L12 11.025L6.97468 5.99966L12 0.974332Z",
  fill: Color$1.trueWhite
}));

function getInsetColor(backgroundColor) {
  try {
    var color = findKey(Color$1, function (value) {
      return backgroundColor === value;
    });
    var colorLevel = color.replace(/^\D+/g, "");
    var colorName = lowerFirst(color.split(colorLevel).filter(function (n) {
      return n;
    })[0]);
    var insetColorLevel = parseInt(colorLevel) - 200;
    var insetColorName = "" + colorName + insetColorLevel;
    var insetColorValue = Color$1[insetColorName];

    if (!insetColorValue) {
      logError("Couldn't find an inset color. Please add " + insetColorName + " to Color Enum");
    }

    return insetColorValue;
  } catch (err) {
    logError(err.message);
    return "transparent";
  }
}

var css$3 = ".CohubButton {\n  font-weight: lighter;\n  border: none;\n  border-radius: var(--default-border-radius);\n  padding: 6px 12px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: var(--white);\n  transition: all 50ms ease-in-out;\n  letter-spacing: 0.05rem; }\n  .CohubButton .content-container {\n    transition: all 50ms ease-in-out; }\n  .CohubButton:active {\n    box-shadow: none !important;\n    -webkit-filter: brightness(97%);\n            filter: brightness(97%); }\n    .CohubButton:active .button-text {\n      transform: translateY(-1px); }\n  .CohubButton:disabled {\n    cursor: default;\n    opacity: 0.4; }\n    .CohubButton:disabled:hover {\n      -webkit-filter: inherit;\n              filter: inherit; }\n";
styleInject(css$3);

function Base(props) {
  var style = props.style,
      _a = props.className,
      className = _a === void 0 ? "" : _a,
      children = props.children,
      success = props.success,
      _b = props.raised,
      raised = _b === void 0 ? true : _b,
      _c = props.backgroundColor,
      backgroundColor = _c === void 0 ? Color$1.grey600 : _c,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      iconPosition = props.iconPosition,
      iconSize = props.iconSize,
      restOfProps = __rest(props, ["style", "className", "children", "success", "raised", "backgroundColor", "disabled", "error", "icon", "iconPosition", "iconSize"]);

  backgroundColor = error ? Color$1.red500 : backgroundColor;
  var insetColor = raised && getInsetColor(backgroundColor);
  var color = style && style.color || "#EFF7EE";
  var flexDirection = iconPosition === "right" ? "row-reverse" : "row";
  return React__default.createElement("button", _extends({
    className: "CohubButton " + className,
    style: __assign({
      backgroundColor: backgroundColor,
      boxShadow: raised ? "0 1px 3px hsla(0, 0%, 0%, 0.1), inset 0px 1px 0px " + insetColor : undefined
    }, style),
    disabled: disabled
  }, restOfProps), React__default.createElement("div", {
    className: "button-text relative flex items-center"
  }, success && React__default.createElement("div", {
    className: "flex justify-center items-center absolute w-100",
    style: {
      zIndex: 2,
      bottom: -0.5
    }
  }, React__default.createElement(AnimatedCheckmark, {
    size: "1.25rem"
  })), React__default.createElement(Typography.Small, {
    uppercase: true,
    color: color,
    style: {
      opacity: success ? 0 : 1,
      transition: "opacity 150ms ease-in"
    }
  }, React__default.createElement("div", {
    className: "flex items-center",
    style: {
      flexDirection: flexDirection
    }
  }, icon && React__default.createElement(Icon, {
    name: icon,
    color: color,
    size: iconSize,
    style: {
      marginTop: 1
    }
  }), React__default.createElement("span", {
    style: {
      marginLeft: icon && iconPosition === "left" ? "0.5rem" : "",
      marginRight: icon && iconPosition === "right" ? "0.5rem" : ""
    }
  }, children)))));
}

var css$4 = ".Blank-module_ButtonBlank__2u_7K {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n  text-align: inherit;\n  border-radius: 0; }\n";
var styles$2 = {"ButtonBlank":"Blank-module_ButtonBlank__2u_7K"};
styleInject(css$4);

var Blank = function (_a) {
  var _b = _a.className,
      className = _b === void 0 ? "" : _b,
      children = _a.children,
      style = _a.style,
      nativeElRef = _a.nativeElRef,
      rest = __rest(_a, ["className", "children", "style", "nativeElRef"]);

  return React__default.createElement("button", _extends({
    style: style,
    className: styles$2.ButtonBlank + " " + className,
    ref: nativeElRef
  }, rest), React__default.createElement(Typography, {
    style: pick(style, "color", "fontSize")
  }, children));
};

var OutlineButtonBase = function (_a) {
  var style = _a.style,
      _b = _a.color,
      color = _b === void 0 ? Color$1.darkBlack : _b,
      rest = __rest(_a, ["style", "color"]);

  return React__default.createElement(Base, _extends({
    raised: false,
    backgroundColor: Color$1.trueWhite,
    style: __assign({
      color: color,
      border: ".75px solid " + color
    }, style)
  }, rest));
};

var Outline = function (_a) {
  var light = _a.light,
      color = _a.color,
      props = __rest(_a, ["light", "color"]);

  if (light) {
    color = Color$1.grey700;
  }

  return React__default.createElement(OutlineButtonBase, _extends({
    color: color
  }, props));
};

var Ghost = function (_a) {
  var _b = _a.color,
      color = _b === void 0 ? Color$1.invertedText : _b,
      props = __rest(_a, ["color"]);

  return React__default.createElement(Outline, _extends({
    backgroundColor: Color$1.black500,
    color: color
  }, props));
};
var PrimaryGhostButton = function (props) {
  return React__default.createElement(Ghost, _extends({
    color: Color$1.primary
  }, props));
};
var CancelGhostButton = function (props) {
  return React__default.createElement(Ghost, _extends({
    color: Color$1.red500
  }, props));
};

var Text =
/** @class */
function (_super) {
  __extends(Text, _super);

  function Text() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Text.prototype.render = function () {
    var _a = this.props,
        color = _a.color,
        fontSize = _a.fontSize,
        children = _a.children,
        textStyle = _a.textStyle,
        block = _a.block,
        style = _a.style,
        _b = _a.className,
        className = _b === void 0 ? "" : _b,
        rest = __rest(_a, ["color", "fontSize", "children", "textStyle", "block", "style", "className"]);

    return React__default.createElement(Blank, _extends({}, rest, {
      className: className + " p-05",
      style: __assign({
        display: block ? "block" : undefined
      }, style)
    }), React__default.createElement(Typography, {
      uppercase: true,
      color: color,
      weight: 500,
      style: __assign({
        fontSize: fontSize
      }, textStyle),
      kerning: 0.07
    }, children));
  };

  Text.defaultProps = {
    color: Color$1.iconGrey,
    fontSize: "12px"
  };
  return Text;
}(React.PureComponent);

var Primary = function (_a) {
  var _b = _a.style,
      style = _b === void 0 ? {} : _b,
      rest = __rest(_a, ["style"]);

  return React__default.createElement(Base, _extends({
    backgroundColor: Color$1.primary,
    style: style
  }, rest));
};

var Secondary = function (_a) {
  var _b = _a.style,
      style = _b === void 0 ? {} : _b,
      rest = __rest(_a, ["style"]);

  return React__default.createElement(Base, _extends({
    backgroundColor: Color$1.white500,
    style: __assign({
      color: Color$1.grey800
    }, style)
  }, rest));
};

var Info = function (_a) {
  var backgroundColor = _a.backgroundColor,
      rest = __rest(_a, ["backgroundColor"]);

  return React__default.createElement(Base, _extends({
    backgroundColor: backgroundColor || Color$1.blue500
  }, rest));
};

var Cancel = function (_a) {
  var backgroundColor = _a.backgroundColor,
      rest = __rest(_a, ["backgroundColor"]);

  return React__default.createElement(Base, _extends({
    backgroundColor: backgroundColor || Color$1.red500
  }, rest));
};

var css$5 = ".Tooltip,\n.tippy-tooltip {\n  box-shadow: var(--dp-3); }\n  .Tooltip.dark-theme,\n  .tippy-tooltip.dark-theme {\n    background-color: var(--black-500);\n    color: var(--grey-200); }\n    .Tooltip.dark-theme[data-animatefill],\n    .tippy-tooltip.dark-theme[data-animatefill] {\n      background-color: transparent; }\n    .Tooltip.dark-theme .tippy-backdrop,\n    .tippy-tooltip.dark-theme .tippy-backdrop {\n      background-color: var(--black-500); }\n  .Tooltip.light-theme,\n  .tippy-tooltip.light-theme {\n    background-color: var(--true-white);\n    color: var(--black-500); }\n    .Tooltip.light-theme[data-animatefill],\n    .tippy-tooltip.light-theme[data-animatefill] {\n      background-color: transparent; }\n    .Tooltip.light-theme .tippy-backdrop,\n    .tippy-tooltip.light-theme .tippy-backdrop {\n      background-color: var(--true-white); }\n\n.tippy-popper[x-placement^=right] .tippy-tooltip.light-theme .tippy-arrow {\n  border-right: 7px solid var(--true-white); }\n\n.tippy-popper[x-placement^=left] .tippy-tooltip.light-theme .tippy-arrow {\n  border-left: 7px solid var(--true-white); }\n\n.tippy-popper[x-placement^=top] .tippy-tooltip.light-theme .tippy-arrow {\n  border-top: 7px solid var(--true-white); }\n\n.tippy-popper[x-placement^=bottom] .tippy-tooltip.light-theme .tippy-arrow {\n  border-bottom: 7px solid var(--true-white); }\n\n.tippy-popper[x-placement^=right] .tippy-tooltip.dark-theme .tippy-arrow {\n  border-right: 7px solid var(--black-500); }\n\n.tippy-popper[x-placement^=left] .tippy-tooltip.dark-theme .tippy-arrow {\n  border-left: 7px solid var(--black-500); }\n\n.tippy-popper[x-placement^=top] .tippy-tooltip.dark-theme .tippy-arrow {\n  border-top: 7px solid var(--black-500); }\n\n.tippy-popper[x-placement^=bottom] .tippy-tooltip.dark-theme .tippy-arrow {\n  border-bottom: 7px solid var(--black-500); }\n";
styleInject(css$5);

var Tooltip =
/** @class */
function (_super) {
  __extends(Tooltip, _super);

  function Tooltip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Tooltip.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        content = _a.content,
        className = _a.className,
        rest = __rest(_a, ["children", "content", "className"]);

    return React__default.createElement(Tippy, _extends({
      content: content,
      className: className,
      animateFill: false,
      popperOptions: {
        modifiers: {
          preventOverflow: {
            boundariesElement: "window"
          }
        }
      }
    }, rest), React__default.createElement("span", null, children));
  };

  Tooltip.defaultProps = {
    placement: "top",
    arrow: true,
    duration: 250,
    delay: [100, 50],
    trigger: "mouseenter",
    interactive: false,
    theme: "dark"
  };
  return Tooltip;
}(React__default.Component);

var getButton = function (type) {
  return Buttons[type];
};

var css$6 = ".Dropdown-module_CohubDropdownOption__1oF92:focus, .Dropdown-module_CohubDropdownOption__1oF92:hover {\n  background-color: #f2f2f2; }\n";
var styles$3 = {"CohubDropdownOption":"Dropdown-module_CohubDropdownOption__1oF92"};
styleInject(css$6);

function Dropdown(props) {
  var options = props.options,
      style = props.style,
      className = props.className,
      disabled = props.disabled,
      _a = props.buttonType,
      buttonType = _a === void 0 ? "Secondary" : _a;

  var _b = React.useState(false),
      expanded = _b[0],
      setExpanded = _b[1];

  var _c = React.useState(props.options[0]),
      selectedOption = _c[0],
      setSelectedOption = _c[1];

  var cursor = disabled ? "default" : "pointer";
  var Button = getButton(buttonType);
  return React__default.createElement("div", {
    className: "CohubDropdownButton relative " + className,
    style: style
  }, React__default.createElement("div", {
    className: "flex bd-radius"
  }, React__default.createElement(Button, {
    onClick: selectedOption.onClick,
    disabled: disabled,
    style: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  }, selectedOption.label), React__default.createElement(Tooltip, {
    content: React__default.createElement("ul", {
      className: "p-0 m-0 text-left",
      style: {
        maxHeight: "50vh",
        listStyle: "none",
        overflowY: "auto"
      }
    }, options.filter(function (option) {
      return option.label !== selectedOption.label;
    }).map(function (option) {
      return React__default.createElement("li", {
        key: option.label,
        className: styles$3.CohubDropdownOption + " cursor-pointer p-05",
        onClick: function () {
          setSelectedOption(option);
          setExpanded(false);
        }
      }, option.label);
    })),
    className: "p-0",
    placement: "bottom-end",
    theme: "light",
    interactive: true,
    trigger: "click",
    arrow: true,
    delay: [100, 300],
    visible: expanded
  }, React__default.createElement(Button, {
    icon: "chevronDown",
    iconSize: 16,
    className: "flex justify-center items-center",
    style: {
      width: 35,
      borderLeft: "1px solid " + Color$1.trueWhite,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      cursor: cursor
    },
    onClick: function () {
      return setExpanded(!expanded);
    }
  }))));
}

function FloatingActionButton(_a) {
  var icon = _a.icon,
      iconColor = _a.iconColor,
      backgroundColor = _a.backgroundColor,
      _b = _a.size,
      size = _b === void 0 ? 24 : _b,
      _c = _a.elevation,
      elevation = _c === void 0 ? 0 : _c,
      rest = __rest(_a, ["icon", "iconColor", "backgroundColor", "size", "elevation"]);

  var dpLevel = "dp" + elevation;
  return React__default.createElement(Buttons.Blank, _extends({
    className: "flex items-center justify-center",
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: backgroundColor,
      boxShadow: BoxShadow$1[dpLevel],
      cursor: "pointer",
      border: "none"
    }
  }, rest), React__default.createElement(Icon, {
    name: icon,
    size: size / 1.5,
    color: iconColor
  }));
}

var css$7 = ".Segment-module_SplitButtonSegment__ArSv1:hover, .Segment-module_SplitButtonSegment__ArSv1:focus {\n  -webkit-filter: brightness(90%);\n          filter: brightness(90%); }\n\n.Segment-module_SplitButtonSegment__ArSv1:first-of-type {\n  border-top-left-radius: var(--default-border-radius);\n  border-bottom-left-radius: var(--default-border-radius); }\n\n.Segment-module_SplitButtonSegment__ArSv1:last-of-type {\n  border-top-right-radius: var(--default-border-radius);\n  border-bottom-right-radius: var(--default-border-radius); }\n";
var styles$4 = {"SplitButtonSegment":"Segment-module_SplitButtonSegment__ArSv1"};
styleInject(css$7);

var Segment$1 =
/** @class */
function (_super) {
  __extends(Segment, _super);

  function Segment() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      hasFocus: false
    };
    return _this;
  }

  Segment.prototype.render = function () {
    var _a = this.props,
        style = _a.style,
        children = _a.children,
        selected = _a.selected,
        _b = _a.color,
        color = _b === void 0 ? Color$1.darkBlack : _b,
        small = _a.small,
        restOfProps = __rest(_a, ["style", "children", "selected", "color", "small"]);

    var hasFocus = this.state.hasFocus;
    var backgroundColor = Color$1.trueWhite;

    if (hasFocus && !selected) {
      backgroundColor = Color$1.grey300;
    } else if (selected) {
      backgroundColor = color;
    }

    var smallStyle = small ? {
      height: 24,
      padding: "3px 11px"
    } : {};
    return React__default.createElement("button", _extends({}, restOfProps, {
      className: styles$4.SplitButtonSegment,
      style: __assign({
        backgroundColor: backgroundColor,
        filter: hasFocus && selected ? "brightness(90%)" : "none",
        border: "1px solid " + color,
        transition: "all 65ms ease-in-out",
        cursor: "pointer",
        minWidth: 75,
        padding: "1em",
        fontFamily: "Akkurat-Mono",
        fontWeight: "lighter",
        outline: "none",
        overflow: "hidden"
      }, smallStyle, style)
    }), React__default.createElement(Typography, {
      color: selected ? Color$1.trueWhite : color
    }, children));
  };

  return Segment;
}(React.Component);

var DefaultSplitButtons = function (props) {
  var labels = props.labels,
      style = props.style,
      className = props.className,
      segmentStyle = props.segmentStyle,
      onChange = props.onChange,
      selectedIndex = props.selectedIndex,
      color = props.color;
  var numBtns = labels.length;
  return React__default.createElement("div", _extends({
    className: className,
    style: style
  }, {
    style: {
      display: "inline-grid",
      gridTemplateColumns: "repeat(" + numBtns + ", 1fr)"
    }
  }), labels.map(function (label, index) {
    return React__default.createElement(Segment$1, {
      key: label,
      color: color,
      style: segmentStyle,
      onClick: function () {
        return onChange(index);
      },
      selected: selectedIndex === index
    }, label);
  }));
};

var PrimarySplitButtons = function (_a) {
  var color = _a.color,
      rest = __rest(_a, ["color"]);

  return React__default.createElement(DefaultSplitButtons, _extends({
    color: color || Color$1.primary
  }, rest));
};

var Split =
/** @class */
function (_super) {
  __extends(Split, _super);

  function Split() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Split.prototype.render = function () {
    return React__default.createElement(DefaultSplitButtons, this.props);
  };

  Split.Primary = PrimarySplitButtons;
  return Split;
}(React.Component);

var Buttons =
/** @class */
function (_super) {
  __extends(Buttons, _super);

  function Buttons() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Buttons.prototype.render = function () {
    return React__default.createElement(Buttons.Secondary, this.props);
  };

  Buttons.Base = Base;
  Buttons.Primary = Primary;
  Buttons.Secondary = Secondary;
  Buttons.Info = Info;
  Buttons.Cancel = Cancel;
  Buttons.Outline = Outline;
  Buttons.Ghost = Ghost;
  Buttons.PrimaryGhost = PrimaryGhostButton;
  Buttons.CancelGhost = CancelGhostButton;
  Buttons.Dropdown = Dropdown;
  Buttons.Text = Text;
  Buttons.Blank = Blank;
  Buttons.FloatingAction = FloatingActionButton;
  Buttons.Split = Split;
  return Buttons;
}(React.Component);

var css$8 = ".Horizontal-module_CardHorizontal__2b_IU {\n  padding: 1rem;\n  background-color: var(--true-white);\n  width: 350px;\n  border-radius: var(--default-border-radius); }\n\n.Horizontal-module_CardHorizontalImage__3qOPi {\n  max-width: 150px;\n  max-height: 150px; }\n\n.Horizontal-module_CardAction__3GXRa {\n  transition: 100ms ease-in; }\n  .Horizontal-module_CardAction__3GXRa:hover {\n    color: var(--grey-800); }\n  .Horizontal-module_CardAction__3GXRa:not(:last-of-type) {\n    margin-right: 0.5rem; }\n";
var styles$5 = {"CardHorizontal":"Horizontal-module_CardHorizontal__2b_IU","CardHorizontalImage":"Horizontal-module_CardHorizontalImage__3qOPi","CardAction":"Horizontal-module_CardAction__3GXRa"};
styleInject(css$8);

var Horizontal =
/** @class */
function (_super) {
  __extends(Horizontal, _super);

  function Horizontal() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Horizontal.prototype.render = function () {
    var _a = this.props,
        title = _a.title,
        subtitle = _a.subtitle,
        meta = _a.meta,
        titleLink = _a.titleLink,
        imageUrl = _a.imageUrl,
        avatar = _a.avatar,
        actions = _a.actions,
        className = _a.className,
        style = _a.style,
        children = _a.children,
        elevation = _a.elevation;
    var dpLevel = "dp" + elevation;
    var actionList;

    if (actions) {
      actionList = actions.map(function (a) {
        return React__default.createElement(Buttons.Text, {
          className: styles$5.CardAction,
          key: a.name,
          onClick: function () {
            return a.action();
          },
          fontSize: 12,
          color: Color$1.iconGrey
        }, a.name);
      });
    }

    var titleLinkElement = function () {
      if (titleLink) {
        return React__default.createElement(reactRouterDom.Link, {
          to: titleLink
        }, React__default.createElement(Typography.HeadingTiny, {
          block: true
        }, title));
      } else {
        return React__default.createElement(Typography.HeadingTiny, {
          block: true
        }, title);
      }
    };

    var cardContent = React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
      className: "flex w-100"
    }, avatar && React__default.createElement(Avatar, {
      size: 50,
      src: imageUrl
    }), !avatar && imageUrl && React__default.createElement("div", null, React__default.createElement("img", {
      src: imageUrl,
      className: styles$5.CardHorizontalImage
    })), React__default.createElement("div", {
      className: "flex w-100 ml-1"
    }, React__default.createElement("div", {
      className: "ml-1 w-100"
    }, titleLinkElement(), React__default.createElement(Typography, {
      block: true
    }, subtitle), meta && React__default.createElement(Typography.Small, {
      muted: true
    }, meta), children && children))));
    return React__default.createElement("div", {
      className: styles$5.CardHorizontal + " " + className,
      style: __assign({}, style, {
        boxShadow: BoxShadow$1[dpLevel] || BoxShadow$1.dp1
      })
    }, cardContent, actions && React__default.createElement("div", {
      className: "flex justify-end items-center mt-05"
    }, actionList));
  };

  Horizontal.defaultProps = {
    elevation: 1
  };
  return Horizontal;
}(React.PureComponent);

var css$9 = ".Vertical-module_CardVertical__elna1 {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--true-white);\n  max-width: 250px;\n  width: 250px;\n  border-radius: var(--default-border-radius); }\n  .Vertical-module_CardVertical__elna1 img {\n    border-top-left-radius: var(--default-border-radius);\n    border-top-right-radius: var(--default-border-radius); }\n\n.Vertical-module_CardAction__1QIBH {\n  color: var(--grey-600);\n  text-transform: uppercase;\n  letter-spacing: 0.05rem;\n  font-weight: 400;\n  font-size: 12px;\n  cursor: pointer;\n  transition: 100ms ease-in; }\n  .Vertical-module_CardAction__1QIBH:hover {\n    color: var(--grey-800); }\n  .Vertical-module_VerticalCard__qsJ7L .Vertical-module_CardAction__1QIBH {\n    margin-right: 1rem; }\n";
var styles$6 = {"CardVertical":"Vertical-module_CardVertical__elna1","CardAction":"Vertical-module_CardAction__1QIBH","VerticalCard":"Vertical-module_VerticalCard__qsJ7L"};
styleInject(css$9);

var Vertical =
/** @class */
function (_super) {
  __extends(Vertical, _super);

  function Vertical() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Vertical.prototype.render = function () {
    var _a = this.props,
        title = _a.title,
        centered = _a.centered,
        titleLink = _a.titleLink,
        subtitle = _a.subtitle,
        meta = _a.meta,
        actions = _a.actions,
        imageUrl = _a.imageUrl,
        avatar = _a.avatar,
        className = _a.className,
        style = _a.style,
        children = _a.children,
        elevation = _a.elevation;
    var dpLevel = "dp" + elevation;
    var actionList;

    if (actions) {
      actionList = actions.map(function (a) {
        return React__default.createElement("div", {
          className: styles$6.CardAction,
          key: a.name,
          onClick: function () {
            return a.action();
          }
        }, a.name);
      });
    }

    var titleLinkElement = function () {
      if (titleLink) {
        return React__default.createElement(reactRouterDom.Link, {
          to: titleLink
        }, React__default.createElement(Typography.Large, {
          block: true,
          className: centered ? "text-center" : ""
        }, title));
      } else {
        return React__default.createElement(Typography.Large, {
          block: true,
          className: centered ? "text-center" : ""
        }, title);
      }
    };

    var cardContent = React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
      className: "m-auto block"
    }, avatar && React__default.createElement(Avatar, {
      size: 150,
      src: imageUrl,
      className: "mt-1"
    }), !avatar && imageUrl && React__default.createElement("div", null, React__default.createElement("img", {
      src: imageUrl,
      className: "p-1"
    }))), React__default.createElement("div", {
      className: "mx-1 mt-05"
    }, titleLinkElement(), React__default.createElement(Typography.Small, {
      block: true,
      className: (centered ? "text-center" : "") + " mt-025"
    }, subtitle), meta && React__default.createElement(Typography.Tiny, {
      muted: true,
      block: true,
      className: (centered ? "text-center" : "") + " mt-025"
    }, meta), children && React__default.createElement("div", {
      className: "mt-1"
    }, children), actions && React__default.createElement("div", {
      className: "flex justify-evenly mt-1"
    }, actionList)));
    return React__default.createElement("div", {
      className: styles$6.CardVertical + " " + className + " pb-1",
      style: __assign({}, style, {
        boxShadow: BoxShadow$1[dpLevel] || BoxShadow$1.dp1
      })
    }, cardContent);
  };

  Vertical.defaultProps = {
    elevation: 1
  };
  return Vertical;
}(React.PureComponent);

var Card = {
  Horizontal: Horizontal,
  Vertical: Vertical
};

var paddingVertical = function (top, bottom) {
  if (bottom === void 0) {
    bottom = top;
  }

  return {
    paddingTop: top,
    paddingBottom: bottom
  };
};
var paddingHorizontal = function (left, right) {
  if (right === void 0) {
    right = left;
  }

  return {
    paddingLeft: left,
    paddingRight: right
  };
};
var marginVertical = function (top, bottom) {
  if (bottom === void 0) {
    bottom = top;
  }

  return {
    marginTop: top,
    marginBottom: bottom
  };
};
var marginHorizontal = function (left, right) {
  if (right === void 0) {
    right = left;
  }

  return {
    marginLeft: left,
    marginRight: right
  };
};
var size = function (height, width) {
  if (width === void 0) {
    width = height;
  }

  return {
    height: width,
    width: height
  };
};

var transition = "0.2s ease-in-out";

var btnInputStyle = __assign({}, size(26), {
  outline: "none",
  borderRadius: "50%",
  padding: 10,
  transition: transition
});

var expandedInputStyles = {
  outline: "none",
  height: 28,
  width: 120,
  borderRadius: 32,
  padding: "3px 9px",
  transition: transition
};
var defaultState = {
  expanded: false
};

var AddChipInput =
/** @class */
function (_super) {
  __extends(AddChipInput, _super);

  function AddChipInput(props) {
    var _this = _super.call(this, props) || this;

    _this.state = defaultState;

    _this.toggleState = function () {
      _this.setState(function (_a) {
        var expanded = _a.expanded;
        return {
          expanded: !expanded
        };
      });
    };

    _this._input = React__default.createRef();
    return _this;
  }

  AddChipInput.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        className = _a.className,
        _b = _a.style,
        style = _b === void 0 ? {} : _b,
        restProps = __rest(_a, ["className", "style"]);

    var expanded = this.state.expanded;
    var defaultIconStyle = {
      position: "absolute",
      cursor: "pointer",
      height: 13,
      transition: transition
    };
    var iconStyles = expanded ? __assign({}, defaultIconStyle, {
      left: 49,
      top: 6,
      transform: "translate(50px, 0) rotate(45deg)"
    }) : __assign({}, defaultIconStyle, {
      left: 5.3,
      top: 5.4
    });
    var inputRef = this._input.current;

    if (inputRef) {
      expanded ? inputRef.focus() : inputRef.blur();
    }

    var onBlur = restProps.onBlur,
        onFocus = restProps.onFocus,
        inputProps = __rest(restProps, ["onBlur", "onFocus"]);

    return React__default.createElement("div", {
      style: __assign({}, style, {
        position: "relative"
      }),
      className: className
    }, React__default.createElement("input", _extends({}, inputProps, {
      className: "border",
      style: expanded ? expandedInputStyles : btnInputStyle,
      ref: this._input,
      onFocus: function (e) {
        onFocus && onFocus(e);

        _this.setState({
          expanded: true
        });
      },
      onBlur: function (e) {
        onBlur && onBlur(e);

        _this.setState({
          expanded: false
        });
      }
    })), React__default.createElement(Icon.Add, {
      size: 16.5,
      onClick: this.toggleState,
      style: iconStyles
    }));
  };

  return AddChipInput;
}(React__default.Component);

var css$a = ".CohubChip {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .CohubChip .clickable:hover, .CohubChip .clickable:focus {\n    transform: translate(0, -1px) !important; }\n  .CohubChip .clickable:focus {\n    background-color: inherit !important; }\n";
styleInject(css$a);

var Chip =
/** @class */
function (_super) {
  __extends(Chip, _super);

  function Chip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Chip.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        label = _a.label,
        onClick = _a.onClick,
        onDelete = _a.onDelete,
        checked = _a.checked,
        _b = _a.className,
        className = _b === void 0 ? "" : _b,
        backgroundColor = _a.backgroundColor,
        style = _a.style,
        size = _a.size;
    var name = label || children;
    var clickable = !!onClick;
    var clickableClass = clickable ? "clickable" : "";
    var iconName;

    if (checked) {
      iconName = "checkmark";
    } else if (onDelete) {
      iconName = "close";
    }

    var padding = size / 2.5 + "px " + size + "px";
    return React__default.createElement("div", {
      className: "CohubChip " + clickableClass + " " + className,
      style: __assign({
        backgroundColor: backgroundColor,
        borderRadius: "361px",
        display: "inline-block",
        padding: padding
      }, style),
      onClick: onClick,
      tabIndex: clickable ? 0 : undefined
    }, React__default.createElement("div", {
      className: "flex justify-center items-center h-100",
      style: {
        cursor: clickable ? "pointer" : "inherit"
      }
    }, React__default.createElement(Typography.Small, null, name), iconName && React__default.createElement(Icon, {
      onClick: function (e) {
        return onDelete && onDelete(e);
      },
      size: 16,
      name: iconName,
      className: "ml-05",
      color: Color$1.grey800
    })));
  };

  Chip.Add = AddChipInput;
  Chip.defaultProps = {
    size: 12,
    backgroundColor: Color$1.grey300
  };
  return Chip;
}(React.Component);

var css$b = "@import url(\"https://use.typekit.net/hpb8lqb.css\");\n@import url(\"https://rsms.me/inter/inter.css\");\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n/* TYPOGRAPHY */\n.small-body-text {\n  font-size: var(--small-body-text) !important; }\n\n.tiny-body-text {\n  font-size: var(--tiny-body-text) !important; }\n\n.uppercase {\n  text-transform: uppercase !important; }\n\n/* TEXT ALIGNMENT */\n.text-left {\n  text-align: left !important; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-right {\n  text-align: right !important; }\n\n/* CURSOR */\n.cursor-pointer {\n  cursor: pointer !important; }\n\n.block {\n  display: block !important; }\n\n/* FLEXBOX */\n.flex {\n  display: flex !important; }\n\n.inline-flex {\n  display: inline-flex !important; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.free-top {\n  margin-top: auto !important; }\n\n.free-left {\n  margin-left: auto !important; }\n\n.free-right {\n  margin-right: auto !important; }\n\n.free-bottom {\n  margin-bottom: auto !important; }\n\n.order-before {\n  order: -1 !important; }\n\n.order-after {\n  order: 1 !important; }\n\n.items-start {\n  align-items: flex-start !important; }\n\n.items-end {\n  align-items: flex-end !important; }\n\n.items-center {\n  align-items: center !important; }\n\n.items-baseline {\n  align-items: baseline !important; }\n\n.items-stretch {\n  align-items: stretch !important; }\n\n.self-center {\n  align-self: center !important; }\n\n.self-baseline {\n  align-self: baseline !important; }\n\n.self-stretch {\n  align-self: stretch !important; }\n\n.self-start {\n  align-self: flex-start !important; }\n\n.self-end {\n  align-self: flex-end !important; }\n\n.justify-start {\n  justify-content: flex-start !important; }\n\n.justify-end {\n  justify-content: flex-end !important; }\n\n.justify-center {\n  justify-content: center !important; }\n\n.justify-between {\n  justify-content: space-between !important; }\n\n.justify-around {\n  justify-content: space-around !important; }\n\n.justify-evenly {\n  justify-content: space-evenly !important; }\n\n.content-start {\n  align-content: flex-start !important; }\n\n.content-end {\n  align-content: flex-end !important; }\n\n.content-center {\n  align-content: center !important; }\n\n.content-between {\n  align-content: space-between !important; }\n\n.content-around {\n  align-content: space-around !important; }\n\n.content-stretch {\n  align-content: stretch !important; }\n\n.flex-min {\n  min-height: 0 !important;\n  min-width: 0 !important; }\n\n.flex-max {\n  max-height: 100% !important;\n  max-width: 100% !important; }\n\n.flex-golden {\n  flex: 0 1 61.803398875% !important; }\n\n.flex-initial {\n  flex: 0 1 auto !important; }\n\n.flex-auto {\n  flex: 1 1 auto !important; }\n\n.flex-none {\n  flex: 0 0 auto !important; }\n\n.flex-1 {\n  flex: 1 1 !important; }\n\n.flex-2 {\n  flex: 2 1 !important; }\n\n.flex-3 {\n  flex: 3 1 !important; }\n\n.flex-4 {\n  flex: 4 1 !important; }\n\n.flex-5 {\n  flex: 5 1 !important; }\n\n.flex-6 {\n  flex: 6 1 !important; }\n\n.flex-7 {\n  flex: 7 1 !important; }\n\n.flex-8 {\n  flex: 8 1 !important; }\n\n.flex-9 {\n  flex: 9 1 !important; }\n\n.flex-10 {\n  flex: 10 1 !important; }\n\n.flex-11 {\n  flex: 11 1 !important; }\n\n.flex-12 {\n  flex: 12 1 !important; }\n\n.grow-0 {\n  flex-grow: 0 !important; }\n\n.grow-1 {\n  flex-grow: 1 !important; }\n\n.grow-2 {\n  flex-grow: 2 !important; }\n\n.grow-3 {\n  flex-grow: 3 !important; }\n\n.grow-4 {\n  flex-grow: 4 !important; }\n\n.grow-5 {\n  flex-grow: 5 !important; }\n\n.grow-6 {\n  flex-grow: 6 !important; }\n\n.grow-7 {\n  flex-grow: 7 !important; }\n\n.grow-8 {\n  flex-grow: 8 !important; }\n\n.grow-9 {\n  flex-grow: 9 !important; }\n\n.grow-10 {\n  flex-grow: 10 !important; }\n\n.grow-11 {\n  flex-grow: 11 !important; }\n\n.grow-12 {\n  flex-grow: 12 !important; }\n\n.shrink-0 {\n  flex-shrink: 0 !important; }\n\n.shrink-1 {\n  flex-shrink: 1 !important; }\n\n.shrink-2 {\n  flex-shrink: 2 !important; }\n\n.shrink-3 {\n  flex-shrink: 3 !important; }\n\n.shrink-4 {\n  flex-shrink: 4 !important; }\n\n.shrink-5 {\n  flex-shrink: 5 !important; }\n\n.shrink-6 {\n  flex-shrink: 6 !important; }\n\n.shrink-7 {\n  flex-shrink: 7 !important; }\n\n.shrink-8 {\n  flex-shrink: 8 !important; }\n\n.shrink-9 {\n  flex-shrink: 9 !important; }\n\n.shrink-10 {\n  flex-shrink: 10 !important; }\n\n.shrink-11 {\n  flex-shrink: 11 !important; }\n\n.shrink-12 {\n  flex-shrink: 12 !important; }\n\n.basis-0 {\n  flex-basis: 0% !important; }\n\n.basis-1 {\n  flex-basis: 8.333333333% !important; }\n\n.basis-2 {\n  flex-basis: 16.6666666666% !important; }\n\n.basis-3 {\n  flex-basis: 25% !important; }\n\n.basis-4 {\n  flex-basis: 33.3333333333% !important; }\n\n.basis-5 {\n  flex-basis: 41.6666666666% !important; }\n\n.basis-6 {\n  flex-basis: 50% !important; }\n\n.basis-7 {\n  flex-basis: 58.333333333% !important; }\n\n.basis-8 {\n  flex-basis: 66.6666666666% !important; }\n\n.basis-9 {\n  flex-basis: 75% !important; }\n\n.basis-10 {\n  flex-basis: 83.3333333333% !important; }\n\n.basis-11 {\n  flex-basis: 91.6666666666% !important; }\n\n.basis-12 {\n  flex-basis: 100% !important; }\n\n.basis-100vw {\n  flex-basis: 100vw !important; }\n\n.basis-100vh {\n  flex-basis: 100vh !important; }\n\n.basis-100vmax {\n  flex-basis: 100vmax !important; }\n\n.basis-100vmin {\n  flex-basis: 100vmin !important; }\n\n.basis-golden {\n  flex-basis: 61.803398875% !important; }\n\n.basis-content {\n  flex-basis: content !important; }\n\n.basis-auto {\n  flex-basis: auto !important; }\n\n.inline-block {\n  display: inline-block; }\n\n.relative {\n  position: relative; }\n\n.absolute {\n  position: absolute; }\n\n@media (orientation: portrait) {\n  .flex\\@portrait {\n    display: flex !important; }\n  .inline-flex\\@portrait {\n    display: inline-flex !important; }\n  .flex-wrap\\@portrait {\n    flex-wrap: wrap !important; }\n  .flex-nowrap\\@portrait {\n    flex-wrap: nowrap !important; }\n  .flex-wrap-reverse\\@portrait {\n    flex-wrap: wrap-reverse !important; } }\n\n@media (orientation: landscape) {\n  .flex\\@landscape {\n    display: flex !important; }\n  .inline-flex\\@landscape {\n    display: inline-flex !important; }\n  .flex-wrap\\@landscape {\n    flex-wrap: wrap !important; }\n  .flex-nowrap\\@landscape {\n    flex-wrap: nowrap !important; }\n  .flex-wrap-reverse\\@landscape {\n    flex-wrap: wrap-reverse !important; } }\n\n.float-r {\n  float: right !important; }\n\n.float-l {\n  float: left !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.m-025 {\n  margin: 0.25rem !important; }\n\n.m-05 {\n  margin: 0.5rem !important; }\n\n.m-1 {\n  margin: 1rem !important; }\n\n.m-2 {\n  margin: 2rem !important; }\n\n.m-3 {\n  margin: 3rem !important; }\n\n.m-4 {\n  margin: 4rem !important; }\n\n.m-5 {\n  margin: 5rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important; }\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n\n.mx-025 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important; }\n\n.mx-05 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important; }\n\n.mx-075 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important; }\n\n.mx-1 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important; }\n\n.mx-2 {\n  margin-left: 2rem !important;\n  margin-right: 2rem !important; }\n\n.mx-3 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important; }\n\n.mx-4 {\n  margin-left: 4rem !important;\n  margin-right: 4rem !important; }\n\n.mx-5 {\n  margin-left: 5rem !important;\n  margin-right: 5rem !important; }\n\n.mx-6 {\n  margin-left: 6rem !important;\n  margin-right: 6rem !important; }\n\n.mx-7 {\n  margin-left: 7rem !important;\n  margin-right: 7rem !important; }\n\n.mx-8 {\n  margin-left: 8rem !important;\n  margin-right: 8rem !important; }\n\n.mx-9 {\n  margin-left: 9rem !important;\n  margin-right: 9rem !important; }\n\n.mx-10 {\n  margin-left: 10rem !important;\n  margin-right: 10rem !important; }\n\n.mx-11 {\n  margin-left: 11rem !important;\n  margin-right: 11rem !important; }\n\n.mx-12 {\n  margin-left: 12rem !important;\n  margin-right: 12rem !important; }\n\n.mx-13 {\n  margin-left: 13rem !important;\n  margin-right: 13rem !important; }\n\n.mx-14 {\n  margin-left: 14rem !important;\n  margin-right: 14rem !important; }\n\n.my-auto {\n  margin-bottom: auto !important;\n  margin-top: auto !important; }\n\n.my-0 {\n  margin-bottom: 0 !important;\n  margin-top: 0 !important; }\n\n.my-025 {\n  margin-bottom: 0.25rem !important;\n  margin-top: 0.25rem !important; }\n\n.my-05 {\n  margin-bottom: 0.5rem !important;\n  margin-top: 0.5rem !important; }\n\n.my-075 {\n  margin-bottom: 0.75rem !important;\n  margin-top: 0.75rem !important; }\n\n.my-1 {\n  margin-bottom: 1rem !important;\n  margin-top: 1rem !important; }\n\n.my-2 {\n  margin-bottom: 2rem !important;\n  margin-top: 2rem !important; }\n\n.my-3 {\n  margin-bottom: 3rem !important;\n  margin-top: 3rem !important; }\n\n.my-4 {\n  margin-bottom: 4rem !important;\n  margin-top: 4rem !important; }\n\n.my-5 {\n  margin-bottom: 5rem !important;\n  margin-top: 5rem !important; }\n\n.my-6 {\n  margin-bottom: 6rem !important;\n  margin-top: 6rem !important; }\n\n.my-6 {\n  margin-bottom: 6rem !important;\n  margin-top: 6rem !important; }\n\n.my-7 {\n  margin-bottom: 7rem !important;\n  margin-top: 7rem !important; }\n\n.my-8 {\n  margin-bottom: 8rem !important;\n  margin-top: 8rem !important; }\n\n.my-9 {\n  margin-bottom: 9rem !important;\n  margin-top: 9rem !important; }\n\n.my-10 {\n  margin-bottom: 10rem !important;\n  margin-top: 10rem !important; }\n\n.my-11 {\n  margin-bottom: 11rem !important;\n  margin-top: 11rem !important; }\n\n.my-12 {\n  margin-bottom: 12rem !important;\n  margin-top: 12rem !important; }\n\n.my-13 {\n  margin-bottom: 13rem !important;\n  margin-top: 13rem !important; }\n\n.my-14 {\n  margin-bottom: 14rem !important;\n  margin-top: 14rem !important; }\n\n.mt-auto {\n  margin-top: auto !important; }\n\n.mt-0 {\n  margin-top: 0 !important; }\n\n.mt-025 {\n  margin-top: 0.25rem !important; }\n\n.mt-05 {\n  margin-top: 0.5rem !important; }\n\n.mt-075 {\n  margin-top: 0.75rem !important; }\n\n.mt-1 {\n  margin-top: 1rem !important; }\n\n.mt-2 {\n  margin-top: 2rem !important; }\n\n.mt-3 {\n  margin-top: 3rem !important; }\n\n.mt-4 {\n  margin-top: 4rem !important; }\n\n.mt-5 {\n  margin-top: 5rem !important; }\n\n.mt-6 {\n  margin-top: 6rem !important; }\n\n.mt-7 {\n  margin-top: 7rem !important; }\n\n.mt-8 {\n  margin-top: 8rem !important; }\n\n.mt-9 {\n  margin-top: 9rem !important; }\n\n.mt-10 {\n  margin-top: 10rem !important; }\n\n.mt-11 {\n  margin-top: 11rem !important; }\n\n.mt-12 {\n  margin-top: 12rem !important; }\n\n.mt-13 {\n  margin-top: 13rem !important; }\n\n.mt-14 {\n  margin-top: 14rem !important; }\n\n.mb-auto {\n  margin-bottom: auto !important; }\n\n.mb-0 {\n  margin-bottom: 0 !important; }\n\n.mb-025 {\n  margin-bottom: 0.25rem !important; }\n\n.mb-05 {\n  margin-bottom: 0.5rem !important; }\n\n.mb-075 {\n  margin-bottom: 0.75rem !important; }\n\n.mb-1 {\n  margin-bottom: 1rem !important; }\n\n.mb-2 {\n  margin-bottom: 2rem !important; }\n\n.mb-3 {\n  margin-bottom: 3rem !important; }\n\n.mb-4 {\n  margin-bottom: 4rem !important; }\n\n.mb-5 {\n  margin-bottom: 5rem !important; }\n\n.mb-6 {\n  margin-bottom: 6rem !important; }\n\n.mb-7 {\n  margin-bottom: 7rem !important; }\n\n.mb-8 {\n  margin-bottom: 8rem !important; }\n\n.mb-9 {\n  margin-bottom: 9rem !important; }\n\n.mb-10 {\n  margin-bottom: 10rem !important; }\n\n.mb-11 {\n  margin-bottom: 11rem !important; }\n\n.mb-12 {\n  margin-bottom: 12rem !important; }\n\n.mb-13 {\n  margin-bottom: 13rem !important; }\n\n.mb-14 {\n  margin-bottom: 14rem !important; }\n\n.ml-auto {\n  margin-left: auto !important; }\n\n.ml-0 {\n  margin-left: 0 !important; }\n\n.ml-05 {\n  margin-left: 0.5rem !important; }\n\n.ml-1 {\n  margin-left: 1rem !important; }\n\n.ml-2 {\n  margin-left: 2rem !important; }\n\n.ml-3 {\n  margin-left: 3rem !important; }\n\n.ml-4 {\n  margin-left: 4rem !important; }\n\n.ml-5 {\n  margin-left: 5rem !important; }\n\n.ml-6 {\n  margin-left: 6rem !important; }\n\n.ml-7 {\n  margin-left: 7rem !important; }\n\n.ml-8 {\n  margin-left: 8rem !important; }\n\n.ml-9 {\n  margin-left: 9rem !important; }\n\n.ml-10 {\n  margin-left: 10rem !important; }\n\n.ml-11 {\n  margin-left: 11rem !important; }\n\n.ml-12 {\n  margin-left: 12rem !important; }\n\n.ml-13 {\n  margin-left: 13rem !important; }\n\n.ml-14 {\n  margin-left: 14rem !important; }\n\n.mr-auto {\n  margin-right: auto !important; }\n\n.mr-0 {\n  margin-right: 0 !important; }\n\n.mr-05 {\n  margin-right: 0.5rem !important; }\n\n.mr-1 {\n  margin-right: 1rem !important; }\n\n.mr-2 {\n  margin-right: 2rem !important; }\n\n.mr-3 {\n  margin-right: 3rem !important; }\n\n.mr-4 {\n  margin-right: 4rem !important; }\n\n.mr-5 {\n  margin-right: 5rem !important; }\n\n.mr-6 {\n  margin-right: 6rem !important; }\n\n.mr-7 {\n  margin-right: 7rem !important; }\n\n.mr-8 {\n  margin-right: 8rem !important; }\n\n.mr-9 {\n  margin-right: 9rem !important; }\n\n.mr-10 {\n  margin-right: 10rem !important; }\n\n.mr-11 {\n  margin-right: 11rem !important; }\n\n.mr-12 {\n  margin-right: 12rem !important; }\n\n.mr-13 {\n  margin-right: 13rem !important; }\n\n.mr-14 {\n  margin-right: 14rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.p-05 {\n  padding: 0.5rem !important; }\n\n.p-1 {\n  padding: 1rem !important; }\n\n.pt-0 {\n  padding-top: 0 !important; }\n\n.pt-1 {\n  padding-top: 1rem !important; }\n\n.pt-2 {\n  padding-top: 2rem !important; }\n\n.pt-3 {\n  padding-top: 3rem !important; }\n\n.pb-0 {\n  padding-bottom: 0 !important; }\n\n.pb-1 {\n  padding-bottom: 1rem !important; }\n\n.pb-2 {\n  padding-bottom: 2rem !important; }\n\n.pb-3 {\n  padding-bottom: 3rem !important; }\n\n.pl-0 {\n  padding-left: 0 !important; }\n\n.pl-1 {\n  padding-left: 1rem !important; }\n\n.pl-2 {\n  padding-left: 2rem !important; }\n\n.pl-3 {\n  padding-left: 3rem !important; }\n\n.pr-0 {\n  padding-right: 0 !important; }\n\n.pr-1 {\n  padding-right: 1rem !important; }\n\n.pr-2 {\n  padding-right: 2rem !important; }\n\n.pr-3 {\n  padding-right: 3rem !important; }\n\n.py-1 {\n  padding-bottom: 1rem !important;\n  padding-top: 1rem !important; }\n\n.py-2 {\n  padding-bottom: 2rem !important;\n  padding-top: 2rem !important; }\n\n.py-3 {\n  padding-bottom: 3rem !important;\n  padding-top: 3rem !important; }\n\n.py-4 {\n  padding-bottom: 4rem !important;\n  padding-top: 4rem !important; }\n\n.py-5 {\n  padding-bottom: 5rem !important;\n  padding-top: 5rem !important; }\n\n.py-6 {\n  padding-bottom: 6rem !important;\n  padding-top: 6rem !important; }\n\n.py-6 {\n  padding-bottom: 6rem !important;\n  padding-top: 6rem !important; }\n\n.py-7 {\n  padding-bottom: 7rem !important;\n  padding-top: 7rem !important; }\n\n.py-8 {\n  padding-bottom: 8rem !important;\n  padding-top: 8rem !important; }\n\n.py-9 {\n  padding-bottom: 9rem !important;\n  padding-top: 9rem !important; }\n\n.py-10 {\n  padding-bottom: 10rem !important;\n  padding-top: 10rem !important; }\n\n.py-11 {\n  padding-bottom: 11rem !important;\n  padding-top: 11rem !important; }\n\n.py-12 {\n  padding-bottom: 12rem !important;\n  padding-top: 12rem !important; }\n\n.py-13 {\n  padding-bottom: 13rem !important;\n  padding-top: 13rem !important; }\n\n.py-14 {\n  padding-bottom: 14rem !important;\n  padding-top: 14rem !important; }\n\n/* WIDTH AND HEIGHT */\n.w-100 {\n  width: 100% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.vw-100 {\n  width: 100vw !important; }\n\n.vh-100 {\n  height: 100vh !important; }\n\n.border {\n  border: 1px solid var(--border) !important; }\n\n.border-l {\n  border-left: 1px solid var(--border) !important; }\n\n.border-t {\n  border-top: 1px solid var(--border) !important; }\n\n.border-r {\n  border-right: 1px solid var(--border) !important; }\n\n.border-b {\n  border-bottom: 1px solid var(--border) !important; }\n\n.dash-border-b {\n  border-bottom: 1px dashed var(--grey-700) !important; }\n\n.bd-radius {\n  border-radius: var(--default-border-radius) !important; }\n\n/* debug helpers */\n.bd {\n  border: 1px solid lime !important; }\n\n.circular {\n  border-radius: 50%; }\n\n/* Uncomment below for x-ray vision */\n/* * {\n  border: 1px solid lime !important;\n} */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {\n  .not-mobile-mr {\n    margin-right: 0 !important; }\n  .not-mobile-ml {\n    margin-left: 0 !important; } }\n\n@font-face {\n  font-family: \"Akkurat-Mono\";\n  src: url(../assets/fonts/AkkuratMono/AkkMo___.ttf) format(\"truetype\"), url(../assets/fonts/AkkuratMono/AkkMoE__.ttf) format(\"truetype\"); }\n\nhtml,\ninput {\n  font-family: \"Inter\", sans-serif; }\n\n@supports (font-variation-settings: normal) {\n  html {\n    font-family: \"Inter var\", sans-serif; } }\n\nbody {\n  font-weight: 300;\n  font-size: var(--default-font-size);\n  color: #121111; }\n\n/* Override browser focus ring color */\n:focus {\n  outline: none !important; }\n\nul {\n  padding-left: 0; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\ninput {\n  font-weight: 300;\n  font-feature-settings: \"tnum\" 1; }\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none; }\n\ninput::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n";
styleInject(css$b);

var Miscellaneous;

(function (Miscellaneous) {
  Miscellaneous["defaultBorderRadius"] = "4px";
  Miscellaneous["disabledOpacity"] = "0.45";
  Miscellaneous["gutter"] = "16px";
})(Miscellaneous || (Miscellaneous = {}));

var variablesString = "\n  :root {\n    " + generateCssVariables(BoxShadow$1) + "\n    " + generateCssVariables(Color$1) + "\n    " + generateCssVariables(Font$1) + "\n    " + generateCssVariables(Miscellaneous) + "\n  }\n";

var CssVariables = function () {
  return React__default.createElement("style", null, variablesString);
};

function generateCssVariables(VariablesEnum) {
  var names = Object.keys(VariablesEnum).filter(function (name) {
    return name.indexOf("hsl(");
  });
  var cssVariables = names.reduce(function (accumulatedStyles, name) {
    var variableName = kebabCase(name);
    var value = VariablesEnum[name];
    return accumulatedStyles + "\n      --" + variableName + ": " + value + ";\n    ";
  }, "");
  return cssVariables;
} // generateCssVariables will return a string that looks something like whats below

function Divider(props) {
  var _a = props.marginSize,
      marginSize = _a === void 0 ? 2 : _a,
      _b = props.marginTop,
      marginTop = _b === void 0 ? marginSize : _b,
      _c = props.marginBottom,
      marginBottom = _c === void 0 ? marginSize : _c,
      _d = props.showDividerLine,
      showDividerLine = _d === void 0 ? true : _d,
      className = props.className,
      style = props.style;
  return React__default.createElement("div", {
    className: className,
    style: __assign({
      borderTop: showDividerLine ? "1px solid var(--border)" : undefined,
      marginTop: (marginTop || 0) + "rem",
      marginBottom: (marginBottom || 0) + "rem",
      width: "100%"
    }, style)
  });
}

var FormatWeight =
/** @class */
function (_super) {
  __extends(FormatWeight, _super);

  function FormatWeight() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FormatWeight.prototype.render = function () {
    var value = this.props.value;
    return React__default.createElement(NumberFormat, {
      value: value,
      displayType: "text",
      thousandSeparator: true,
      decimalScale: 2,
      suffix: " lbs."
    });
  };

  FormatWeight.defaultProps = {
    thousandSeparator: false
  };
  return FormatWeight;
}(React__default.Component);

var css$c = ".FormGroup-module_base__3hXvl, .FormGroup-module_horizontal__M22Uj, .FormGroup-module_vertical__3U51_ {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  width: 100%; }\n\n.FormGroup-module_horizontal__M22Uj > div {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem; }\n\n.FormGroup-module_horizontal__M22Uj > :first-child {\n  margin-left: 0; }\n\n.FormGroup-module_horizontal__M22Uj > :last-child {\n  margin-right: 0; }\n\n.FormGroup-module_vertical__3U51_ {\n  flex-direction: column; }\n  .FormGroup-module_vertical__3U51_ > div {\n    margin-bottom: 1rem; }\n  .FormGroup-module_vertical__3U51_ > :last-child {\n    margin-bottom: 0; }\n";
var styles$7 = {"base":"FormGroup-module_base__3hXvl","horizontal":"FormGroup-module_horizontal__M22Uj","vertical":"FormGroup-module_vertical__3U51_"};
styleInject(css$c);

var FormGroup =
/** @class */
function (_super) {
  __extends(FormGroup, _super);

  function FormGroup() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FormGroup.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        direction = _a.direction,
        restProps = __rest(_a, ["children", "direction"]);

    return React__default.createElement("div", _extends({
      className: direction === "horizontal" ? styles$7.horizontal : styles$7.vertical
    }, restProps), children);
  };

  FormGroup.defaultProps = {
    direction: "horizontal"
  };
  return FormGroup;
}(React__default.PureComponent);

var css$d = ".FloatingLabelWrapper input,\n.FloatingLabelWrapper textarea {\n  border: none;\n  font-size: var(--default-font-size); }\n\n.FloatingLabelWrapper input {\n  padding: 12px 10px; }\n\n.FloatingLabelWrapper label {\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  transition: 100ms ease all;\n  border-radius: none;\n  line-height: 100%; }\n\n.FloatingLabelWrapper.GenericInput .inputWrapper, .FloatingLabelWrapper.ContrastInput .inputWrapper {\n  min-height: 40px; }\n  .FloatingLabelWrapper.GenericInput .inputWrapper input:focus ~ .bar:before, .FloatingLabelWrapper.ContrastInput .inputWrapper input:focus ~ .bar:before {\n    width: 100%; }\n  .FloatingLabelWrapper.GenericInput .inputWrapper.error,\n  .FloatingLabelWrapper.GenericInput .inputWrapper.error input, .FloatingLabelWrapper.ContrastInput .inputWrapper.error,\n  .FloatingLabelWrapper.ContrastInput .inputWrapper.error input {\n    background-color: var(--red-200); }\n\n.FloatingLabelWrapper.GenericInput .bar, .FloatingLabelWrapper.ContrastInput .bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n  .FloatingLabelWrapper.GenericInput .bar:before, .FloatingLabelWrapper.ContrastInput .bar:before {\n    content: \"\";\n    height: 2px;\n    width: 0;\n    bottom: 0;\n    position: absolute;\n    background: var(--primary-green);\n    transition: 150ms ease all; }\n  .FloatingLabelWrapper.GenericInput .bar.focused:before, .FloatingLabelWrapper.ContrastInput .bar.focused:before {\n    width: 100%; }\n\n.FloatingLabelWrapper.GenericInput .inputWrapper {\n  position: relative;\n  width: 100%;\n  display: block;\n  border-radius: var(--default-border-radius);\n  border: 1px solid var(--divider-grey);\n  background-color: var(--true-white); }\n  .FloatingLabelWrapper.GenericInput .inputWrapper input {\n    background-color: var(--true-white);\n    width: 100%;\n    height: 100%;\n    border-radius: var(--default-border-radius); }\n\n.FloatingLabelWrapper.GenericInput.inverted .inputWrapper {\n  background-color: var(--dark-black); }\n  .FloatingLabelWrapper.GenericInput.inverted .inputWrapper input {\n    background-color: var(--dark-black); }\n\n.FloatingLabelWrapper.GenericInput input[type=\"text\"],\n.FloatingLabelWrapper.GenericInput input[type=\"email\"],\n.FloatingLabelWrapper.GenericInput input[type=\"password\"] {\n  -webkit-appearance: none; }\n\n.FloatingLabelWrapper.GenericInput input[type=\"password\"] {\n  letter-spacing: 0.2rem; }\n\n.FloatingLabelWrapper.GenericInput label {\n  color: var(--grey-600); }\n  .FloatingLabelWrapper.GenericInput label.FloatedLabel {\n    top: 0;\n    font-size: 12px;\n    color: var(--grey-600);\n    padding-left: 4px;\n    padding-right: 4px; }\n\n.FloatingLabelWrapper.ContrastInput .inputWrapper {\n  position: relative;\n  width: 100%;\n  display: block;\n  border-radius: var(--default-border-radius);\n  border: none;\n  background-color: var(--grey-300); }\n  .FloatingLabelWrapper.ContrastInput .inputWrapper input {\n    background-color: var(--grey-300);\n    width: 100%;\n    height: 100%;\n    border-radius: var(--default-border-radius);\n    padding: 16px 10px 4px 10px; }\n\n.FloatingLabelWrapper.ContrastInput input[type=\"text\"],\n.FloatingLabelWrapper.ContrastInput input[type=\"email\"],\n.FloatingLabelWrapper.ContrastInput input[type=\"password\"] {\n  -webkit-appearance: none; }\n\n.FloatingLabelWrapper.ContrastInput input[type=\"password\"] {\n  letter-spacing: 0.2rem; }\n\n.FloatingLabelWrapper.ContrastInput label {\n  background-color: transparent;\n  color: var(--grey-800);\n  top: 50%;\n  transform: translateY(-50%); }\n  .FloatingLabelWrapper.ContrastInput label.FloatedLabel {\n    top: 9px;\n    font-size: 12px; }\n";
styleInject(css$d);

var defaultStyle = {
  color: Color$1.black,
  cursor: "text"
};
function FloatingLabelWrapper(_a) {
  var _b;

  var _c = _a.className,
      className = _c === void 0 ? "" : _c,
      appearance = _a.appearance,
      _d = _a.type,
      _e = _a.autoComplete,
      _f = _a.autoFocus,
      _g = _a.onClick,
      onClick = _g === void 0 ? function () {
    return null;
  } : _g,
      _h = _a.style,
      style = _h === void 0 ? defaultStyle : _h,
      _j = _a["data-qa"],
      _k = _a["data-qa-label"],
      dataQaLabel = _k === void 0 ? "base-input-element-label" : _k,
      floatLabel = _a.floatLabel,
      onFocus = _a.onFocus,
      onBlur = _a.onBlur,
      htmlFor = _a.htmlFor,
      error = _a.error,
      onChange = _a.onChange,
      children = _a.children,
      label = _a.label,
      value = _a.value;

  var _l = React.useState({
    hasFocus: false
  }),
      state = _l[0],
      setState = _l[1];

  var cursor = style.cursor,
      textAlign = style.textAlign;
  var inputRef = React.useRef(null);
  var labelTextColor;
  var inputBackgroundColor;
  var inputClassName;

  if (appearance === "contrast") {
    labelTextColor = Color$1.grey700;
    inputClassName = "ContrastInput";
  } else if (appearance === "inverted") {
    labelTextColor = Color$1.trueWhite;
    inputClassName = "GenericInput inverted";
  } else {
    labelTextColor = Color$1.grey700;
    inputBackgroundColor = Color$1.trueWhite;
    inputClassName = "GenericInput";
  }

  var isValidString = value && typeof value === "string" && value.length > 0;
  var isValidNumber = value && typeof value === "number" && isNumber(value);
  var isValidOject = value && !isEmpty(value);
  var labelFloated = floatLabel || state.hasFocus || inputRef.current && inputRef.current.value || isValidString || isValidNumber || isValidOject;

  var setInputRef = function (element) {
    inputRef.current = element;
  };

  var componentProps = (_b = {
    onFocus: function (e) {
      onFocus && onFocus(e);
      setState({
        hasFocus: true
      });
    },
    onBlur: function (e) {
      onBlur && onBlur(e);
      setState({
        hasFocus: false
      });
    },
    style: __assign({}, defaultStyle, {
      cursor: cursor,
      textAlign: textAlign
    }),
    // So the label is associated with the input. Mostly for easier testing
    id: htmlFor
  }, _b["aria-invalid"] = error, _b.onClick = onClick, _b.onChange = onChange, _b.value = value, _b);
  return React__default.createElement("div", {
    className: "FloatingLabelWrapper " + inputClassName + " " + className,
    style: __assign({
      position: "relative"
    }, defaultStyle, style)
  }, React__default.createElement("div", {
    className: "inputWrapper " + (error ? "error" : "") + " bd-radius"
  }, children({
    componentProps: componentProps,
    setInputRef: setInputRef
  }), React__default.createElement("span", {
    className: "bar " + (state.hasFocus ? "focused" : "")
  })), label && React__default.createElement("label", {
    className: labelFloated ? "FloatedLabel" : "",
    style: {
      backgroundColor: error ? Color$1.red200 : inputBackgroundColor,
      color: error ? ContrastColor[Color$1.red200] : labelTextColor,
      cursor: cursor,
      width: labelFloated ? undefined : "80%"
    },
    onClick: function (e) {
      onClick && onClick(e);
      inputRef.current && inputRef.current.focus();
    },
    "data-qa": dataQaLabel,
    htmlFor: htmlFor
  }, label));
}

var Base$1 =
/** @class */
function (_super) {
  __extends(Base, _super);

  function Base() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Base.prototype.render = function () {
    var _a = this.props,
        style = _a.style,
        className = _a.className,
        appearance = _a.appearance,
        label = _a.label,
        onClick = _a.onClick,
        onFocus = _a.onFocus,
        onBlur = _a.onBlur,
        onChange = _a.onChange,
        value = _a.value,
        error = _a.error,
        restProps = __rest(_a, ["style", "className", "appearance", "label", "onClick", "onFocus", "onBlur", "onChange", "value", "error"]);

    return React__default.createElement(FloatingLabelWrapper, _extends({
      "data-qa-label": this.props["data-qa-label"]
    }, {
      style: style,
      className: className,
      appearance: appearance,
      label: label,
      onClick: onClick,
      onFocus: onFocus,
      onBlur: onBlur,
      onChange: onChange,
      value: value,
      error: error
    }), function (_a) {
      var componentProps = _a.componentProps;
      return React__default.createElement("input", _extends({}, componentProps, restProps));
    });
  };

  Base.defaultProps = {
    type: "text",
    autoComplete: "off",
    autoFocus: false,
    "data-qa": "base-input-element",
    "data-qa-label": "base-input-element-label"
  };
  return Base;
}(React__default.PureComponent);

var css$e = ".CheckboxField-Container label {\n  font-size: var(--default-font-size); }\n\n.CheckboxField {\n  width: 20px;\n  height: 20px;\n  background-color: var(--grey-400);\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .CheckboxField:focus {\n    outline-width: 0; }\n";
styleInject(css$e);

var Checkbox =
/** @class */
function (_super) {
  __extends(Checkbox, _super);

  function Checkbox() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Checkbox.prototype.render = function () {
    var _a = this.props,
        label = _a.label,
        input = _a.input;
    var checked = input.value === true || input.value === "true";

    var toggle = function () {
      input.onChange(!checked);
    };

    var keyDown = function (evt) {
      if (evt.keyCode && evt.keyCode === 32) {
        toggle();
      }
    };

    return React__default.createElement("div", {
      className: "CheckboxField-Container flex justify-start items-center"
    }, React__default.createElement("div", {
      className: "CheckboxField mr-05",
      role: "checkbox",
      tabIndex: 0,
      onKeyDown: keyDown,
      onClick: toggle
    }, checked && React__default.createElement(Icon.Checkmark, {
      color: Color$1.primary,
      size: 16
    })), React__default.createElement("label", null, label));
  };

  return Checkbox;
}(React__default.Component);

var css$f = ".styles-module_input__28syv input {\n  border: none; }\n";
var styles$8 = {"input":"styles-module_input__28syv"};
styleInject(css$f);

function DecimalInput(_a) {
  var input = _a.input,
      meta = _a.meta,
      label = _a.label,
      dataQa = _a["data-qa"],
      appearance = _a.appearance,
      _b = _a.extendedPrecision,
      extendedPrecision = _b === void 0 ? false : _b,
      _c = _a.integer,
      integer = _c === void 0 ? false : _c,
      spanProps = __rest(_a, ["input", "meta", "label", "data-qa", "appearance", "extendedPrecision", "integer"]);

  var showError = !!(meta && meta.touched && meta.error);
  return React__default.createElement("span", _extends({
    className: styles$8.input,
    "data-qa": dataQa
  }, spanProps), React__default.createElement(FloatingLabelWrapper, _extends({}, input, {
    label: label,
    error: showError,
    appearance: appearance,
    children: function (_a) {
      var _b = _a.componentProps,
          onChange = _b.onChange,
          value = _b.value,
          rest = __rest(_b, ["onChange", "value"]),
          setInputRef = _a.setInputRef;

      return React__default.createElement(NumberFormat, _extends({}, rest, {
        getInputRef: setInputRef,
        value: value,
        displayType: "input",
        decimalScale: integer ? 0 : extendedPrecision ? 5 : 2,
        onValueChange: function (_a) {
          var floatValue = _a.floatValue;
          onChange(floatValue);
        },
        thousandSeparator: true
      }));
    }
  })));
}

var renderDate = function (format) {
  return function (dateTime) {
    if (!dateTime) return "";
    return moment(dateTime).format(formatMap[format]);
  };
};
var formatMap = {
  monthDayYear: "MMM Do[,] YYYY",
  monthDayYearShort: "MMM D[,] YYYY",
  dateWithTime: "MMM Do[,] YYYY [at] h:mma",
  dateWithTimeShort: "MM/DD/YYYY [at] h:mma",
  monthShort: "MMM",
  dateShort: "MM/DD/YY",
  tabularDate: "MM/DD/YY",
  input: "MM-DD-YYYY"
}; // Needed to generate documentation

function composeValidators() {
  var validators = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    validators[_i] = arguments[_i];
  }

  return function (value) {
    return validators.reduce(function (error, validator) {
      return error || validator(value);
    }, undefined);
  };
}
function required(value) {
  if (typeof value === "undefined") {
    return "Required";
  }

  var valid = !isEmpty(value);

  if (valid && typeof value === "string") {
    valid = value.trim().length > 0;
  }

  return valid ? undefined : "Required";
}
function minLength(min) {
  return function (value) {
    return value && typeof value === "string" && value.length < min ? "Should be at least " + min + " characters long" : undefined;
  };
}
function minValue(min) {
  return function (value) {
    if (typeof value === "string") {
      return isNumber(value) ? undefined : "Not a number";
    }

    if (typeof value !== "number") {
      return "Not a number";
    }

    return value >= min ? undefined : "Should be greater than " + min;
  };
}
function length(valLength) {
  return function (value) {
    if (value && typeof value === "string") {
      return value.length === valLength ? undefined : "Should be " + valLength + " characters long";
    }

    return "Invalid length";
  };
}
var email = composeValidators(function (value) {
  if (value === void 0) {
    value = "";
  }

  return typeof value === "string" && charsArePresent(value, "@", ".") ? undefined : "Should be a valid email";
}, minLength(4));
function isInt(value) {
  if (!value) {
    return undefined;
  }

  if (isInteger(value)) {
    return undefined;
  }

  if (typeof value === "string") {
    var isNum = /^\d+$/.test(value);
    var parsedVal = isNum && Number.parseFloat(value);
    return parsedVal && Number.isInteger(parsedVal) ? undefined : "Not an integer";
  }

  return "Not an integer";
}

var charsArePresent = function (string) {
  var chars = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    chars[_i - 1] = arguments[_i];
  }

  return chars.every(function (char) {
    return string.includes(char);
  });
};

var InputValidationsToExport = /*#__PURE__*/Object.freeze({
  composeValidators: composeValidators,
  required: required,
  minLength: minLength,
  minValue: minValue,
  length: length,
  email: email,
  isInt: isInt
});

function calculateMonth(month, year) {
  var m = parseInt(month);
  var y = parseInt(year);
  var monthStart = getMonthStartingDay(m, y);
  var daysInMonth = numberOfDaysInMonth(m, y);
  return [monthStart, daysInMonth];
}

function numberOfDaysInMonth(month, year) {
  if (month === 2 && isLeapYear(year)) {
    return DAYS_IN_FEB_ON_LEAP_YEAR;
  }

  return DAYS_IN_MONTH[month];
}

function isLeapYear(year) {
  var regularLeapYear = false;
  var centuryLeapYear = false;

  if (year % 4 === 0 || year % 400 === 0) {
    regularLeapYear = true;
  }

  if (year % 100 === 0 && year % 400 !== 0) {
    centuryLeapYear = true;
  }

  return regularLeapYear && !centuryLeapYear;
}

var DAYS_IN_MONTH = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_FEB_ON_LEAP_YEAR = 29; // # formula based on Zeller's congruence.
// # https://en.wikipedia.org/wiki/Zeller%27s_congruence

function getMonthStartingDay(month, year) {
  var D = 1;

  if (month < 3) {
    month += 12;
    year--;
  }

  var J = Math.floor(year / 100);
  var K = year - 100 * J;
  var S = Math.floor(2.6 * month - 5.39) + Math.floor(K / 4) + Math.floor(J / 4) + D + K - 2 * J;
  return S - 7 * Math.floor(S / 7);
}

var steps = ["month", "day", "year"];
var optionTransitionTime = 200;
var showPickerTransitionTime = 250;
var switchPickerTransitionTime = 350;
var timeItTakesForAllTransitionsToComplete = optionTransitionTime + showPickerTransitionTime;
var transition$1 = "all " + optionTransitionTime + "ms ease-in-out";
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var css$g = ".shared-module_focusable__21z-_ {\n  border: 1px solid transparent; }\n  .shared-module_focusable__21z-_:focus {\n    border-color: var(--green-400); }\n\n.shared-module_selected__r6FXS:focus {\n  box-shadow: 0 0 0 1px var(--green-400); }\n";
var styles$9 = {"focusable":"shared-module_focusable__21z-_","selected":"shared-module_selected__r6FXS"};
styleInject(css$g);

function Option(_a) {
  var children = _a.children,
      selected = _a.selected,
      onClick = _a.onClick,
      onFocus = _a.onFocus,
      nativeElRef = _a.nativeElRef,
      rest = __rest(_a, ["children", "selected", "onClick", "onFocus", "nativeElRef"]);

  var style = {
    borderRadius: "361px",
    padding: "4px 12px",
    backgroundColor: Color$1.highlightGrey,
    transition: transition$1
  };
  var color;

  if (selected) {
    style = __assign({}, style, {
      backgroundColor: Color$1.green400
    });
    color = Color$1.trueWhite;
  }

  var refObj = React.useRef(null);

  function attachRefs(el) {
    refObj.current = el;

    if (nativeElRef) {
      nativeElRef.current = el;
    }
  }

  return React__default.createElement(Buttons.Blank, {
    className: styles$9.focusable + " " + (selected ? styles$9.selected : "") + " w-100 flex justify-center items-center",
    style: style,
    onClick: function (e) {
      refObj.current && refObj.current.blur();
      onClick(e);
    },
    onFocus: onFocus,
    nativeElRef: attachRefs,
    "data-testid": rest["data-testid"]
  }, React__default.createElement(Typography.Small, {
    color: color
  }, children));
}

function MonthPicker(_a) {
  var month = _a.month,
      onChange = _a.onChange,
      picker = _a.picker,
      goToSection = _a.goToSection;
  var selectedMonth = month && parseInt(month);
  var selectedOptionRef = React.useRef(null);
  React.useEffect(function () {
    // If input has focus and tab key is pressed apply focus to the selected month
    function handleKeydown(event) {
      var key = event.key;
      if (picker !== "month" || key !== "Tab") return;
      var activeEl = document.activeElement;
      var inputHasFocus = activeEl && activeEl.classList.contains("DatePickerInput");

      if (inputHasFocus && selectedOptionRef.current) {
        event.preventDefault();
        selectedOptionRef.current.focus();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return function () {
      return window.removeEventListener("keydown", handleKeydown);
    };
  }, [selectedOptionRef.current, picker]);
  return React__default.createElement("div", {
    className: "w-100 mt-1",
    style: {
      display: "grid",
      gridTemplateRows: "repeat(4, 1fr)",
      gridTemplateColumns: "repeat(3, 1fr)",
      rowGap: 36,
      columnGap: 10
    }
  }, months.map(function (name, i) {
    var thisMonthNumber = i + 1;
    var selected = selectedMonth === thisMonthNumber;
    var value = padStart(thisMonthNumber.toString(), 2, "0");
    return React__default.createElement("div", {
      className: "flex justify-center items-center",
      style: paddingHorizontal(1),
      key: name
    }, React__default.createElement(Option, {
      selected: selected,
      onClick: function () {
        return onChange(value);
      },
      onFocus: function () {
        picker !== "month" && goToSection("month");
      },
      nativeElRef: selected ? selectedOptionRef : undefined,
      "data-testid": "month-btn"
    }, name));
  }));
}

var padValue = function (value) {
  return value ? padStart(value.toString(), 2, "0") : "";
};

function DayPicker(props) {
  var dateTime = props.dateTime,
      onChange = props.onChange,
      picker = props.picker,
      goToSection = props.goToSection;
  var month = dateTime.month,
      day = dateTime.day;

  if (!month || month.length < 2) {
    month = padValue(new Date().getMonth().toString());
  }

  var year = dateTime.year && dateTime.year.length === 4 ? dateTime.year : new Date().getFullYear().toString();
  var gridRef = React.useRef(null);
  var selectedDayRef = React.useRef(null);
  var firstDayRef = React.useRef(null);
  React.useEffect(function () {
    // If tabbing from the input element apply focus to selected day
    function handleKeydown(event) {
      var key = event.key;
      if (picker !== "day" || key !== "Tab") return;
      var activeEl = document.activeElement;
      var inputHasFocus = activeEl && activeEl.classList.contains("DatePickerInput");

      if (inputHasFocus) {
        event.preventDefault();

        if (selectedDayRef.current) {
          selectedDayRef.current.focus();
          return;
        }

        firstDayRef.current && firstDayRef.current.focus();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return function () {
      return window.removeEventListener("keydown", handleKeydown);
    };
  }, [gridRef.current, selectedDayRef.current, picker]); // Focus on selected Day or container when section changes to "day" and input isn't focused

  React.useEffect(function () {
    var activeElement = document.activeElement;

    if (activeElement && activeElement.tagName === "BODY" && picker === "day") {
      setTimeout(function () {
        if (selectedDayRef.current) {
          selectedDayRef.current.focus();
          return;
        }

        gridRef.current && gridRef.current.focus();
      }, switchPickerTransitionTime);
    }
  }, [picker]);

  var _a = getMonthData(month, year),
      monthStart = _a.monthStart,
      daysInMonth = _a.daysInMonth,
      daysInPreviousMonth = _a.daysInPreviousMonth;

  var handleFocus = function () {
    return picker !== "day" && goToSection("day");
  };

  var body = times(daysInMonth).map(function (d) {
    return d + 1;
  }).map(function (monthDay) {
    return padValue(monthDay);
  }).map(function (monthDay) {
    var selected = monthDay === day;
    var maybeFistDayRef = monthDay === "01" ? firstDayRef : undefined;
    return React__default.createElement(Day, {
      key: monthDay,
      selected: selected,
      nativeElRef: selected ? selectedDayRef : maybeFistDayRef,
      onClick: function () {
        return onChange({
          month: month,
          day: padValue(monthDay)
        });
      },
      onFocus: handleFocus
    }, monthDay);
  });
  var previousMonthsDays = times(daysInPreviousMonth + 1); // If the month starts on the 5 day of the week take the last 5 days off of the previous month and reverse the array

  var endOfPreviousMonthCells = times(monthStart, function () {
    var previousMonthDay = padValue(previousMonthsDays.pop());
    var monthMinusOne = ~~month - 1;
    var previousMonth = monthMinusOne === 0 ? "12" : padValue(monthMinusOne);
    return React__default.createElement(Day, {
      muted: true,
      key: previousMonthDay + "-" + (~~month - 1),
      onClick: function () {
        onChange({
          month: previousMonth,
          day: previousMonthDay
        });
      },
      onFocus: handleFocus
    }, previousMonthDay);
  }).reverse();
  body.unshift.apply(body, endOfPreviousMonthCells);
  var cellsInFiveWeekMonth = 35;
  var shouldAddExtraRow = body.length > cellsInFiveWeekMonth;
  var daysInWeek = 7;
  var weeksInMonth = shouldAddExtraRow ? 6 : 5;
  var numberOfGridCells = weeksInMonth * daysInWeek;
  var tailLength = numberOfGridCells - body.length;
  var beginningOfNextMonthCells = times(tailLength).map(function (d) {
    return d + 1;
  }).map(function (d) {
    return padValue(d);
  }).map(function (nextMonthDay) {
    var monthPlusOne = (~~month + 1).toString();
    var nextMonth = padValue(monthPlusOne === "13" ? "1" : monthPlusOne);
    return React__default.createElement(Day, {
      muted: true,
      key: nextMonthDay + "-" + (~~month + 1),
      onClick: function () {
        return onChange({
          month: nextMonth,
          day: nextMonthDay
        });
      },
      onFocus: handleFocus
    }, nextMonthDay);
  });
  body.push.apply(body, beginningOfNextMonthCells);
  return React__default.createElement("div", {
    className: "w-100 h-100"
  }, React__default.createElement(DaysOfWeek, {
    style: {
      marginBottom: 10
    }
  }), React__default.createElement("div", {
    style: {
      height: "91%",
      width: "100%",
      display: "grid",
      gridTemplateRows: "repeat(" + weeksInMonth + ", 1fr)",
      gridTemplateColumns: "repeat(" + daysInWeek + ", 1fr)"
    },
    tabIndex: -1,
    ref: gridRef
  }, body));
}

function Day(_a) {
  var children = _a.children,
      muted = _a.muted,
      selected = _a.selected,
      onClick = _a.onClick,
      nativeElRef = _a.nativeElRef,
      onFocus = _a.onFocus;
  var buttonRef = React.useRef(null);

  var attachRefs = function (el) {
    buttonRef.current = el;

    if (nativeElRef) {
      nativeElRef.current = el;
    }
  };

  var classes = styles$9.focusable + " " + (selected ? styles$9.selected : "") + " flex justify-center items-center";
  return React__default.createElement("div", {
    className: "flex justify-center items-center"
  }, React__default.createElement(Buttons.Blank, {
    className: classes,
    style: __assign({}, size(25), {
      borderRadius: "50%",
      backgroundColor: selected ? Color$1.green400 : "transparent",
      transition: transition$1
    }),
    onClick: function () {
      buttonRef.current && buttonRef.current.blur();
      onClick && onClick();
    },
    nativeElRef: attachRefs,
    onFocus: onFocus
  }, React__default.createElement(Typography.Small, {
    muted: muted,
    color: selected ? Color$1.trueWhite : undefined
  }, children)));
}

var DaysOfWeek = function (_a) {
  var style = _a.style;
  return React__default.createElement("div", {
    className: "flex justify-between items-center",
    style: style
  }, ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(function (name) {
    return React__default.createElement("div", {
      key: name,
      className: "flex justify-center items-center flex-1"
    }, React__default.createElement(Typography.Small, {
      color: Color$1.darkGrey
    }, name));
  }));
};

var getMonthData = function (month, year) {
  var monthNumber = ~~month;

  var _a = calculateMonth(monthNumber, year),
      monthStart = _a[0],
      daysInMonth = _a[1];

  var previousMonthNumber = monthNumber ? 12 : monthNumber - 1;

  var _b = calculateMonth(previousMonthNumber, year),
      daysInPreviousMonth = _b[1];

  return {
    monthStart: monthStart,
    daysInMonth: daysInMonth,
    daysInPreviousMonth: daysInPreviousMonth
  };
};

function YearPicker(_a) {
  var onChange = _a.onChange,
      picker = _a.picker,
      goToSection = _a.goToSection,
      _b = _a.minDate,
      minMonth = _b.minMonth,
      minDay = _b.minDay,
      minYear = _b.minYear,
      dateTime = _a.dateTime;
  var containerRef = React.useRef(null);
  var selectedOptionRef = React.useRef(null);
  var firstYearRef = React.useRef(null);
  React.useEffect(function () {
    // If tabbing from the input element apply focus to selected year
    function handleKeydown(event) {
      var key = event.key;
      if (picker !== "year" || key !== "Tab") return;
      var activeEl = document.activeElement;
      var inputHasFocus = activeEl && activeEl.classList.contains("DatePickerInput");

      if (inputHasFocus) {
        event.preventDefault();

        if (selectedOptionRef.current) {
          selectedOptionRef.current.focus();
          return;
        }

        firstYearRef.current && firstYearRef.current.focus();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return function () {
      return window.removeEventListener("keydown", handleKeydown);
    };
  }, [selectedOptionRef.current, firstYearRef.current, picker]); // Focus on selected option or container when section changes to "year" if not already focused on datepicker input

  React.useEffect(function () {
    var focusHolderDiv = containerRef.current;
    var selectedOption = selectedOptionRef.current;
    var activeElement = document.activeElement;

    if (activeElement && activeElement.tagName === "BODY" && picker === "year") {
      setTimeout(function () {
        if (selectedOption) {
          selectedOption.focus();
          return;
        }

        focusHolderDiv && focusHolderDiv.focus();
      }, switchPickerTransitionTime);
    }
  }, [picker]);

  var _c = React.useState(false),
      shouldScrollToYear = _c[0],
      setShouldScrollToYear = _c[1]; // Scroll to selected year when section changes to year


  React.useEffect(function () {
    if (picker === "year") {
      setTimeout(function () {
        setShouldScrollToYear(true);
      }, switchPickerTransitionTime);
      return;
    }

    setShouldScrollToYear(false);
  }, [picker]);
  var years = generateListOfYears({
    minMonth: minMonth,
    minDay: minDay,
    minYear: minYear
  }, dateTime);
  return React__default.createElement("div", {
    className: "w-100 h-100",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(auto, 1fr)",
      rowGap: 36,
      columnGap: 10,
      overflowY: "auto"
    },
    ref: containerRef,
    tabIndex: -1
  }, years.map(function (yearName, i) {
    var selected = dateTime.year === yearName;
    var maybeFirstYearRef = i === 0 ? firstYearRef : undefined;
    return React__default.createElement("div", {
      className: "flex justify-center items-center",
      style: paddingHorizontal(1),
      key: yearName
    }, React__default.createElement(ScrollIntoView, {
      scroll: shouldScrollToYear && selected,
      traceProp: selected
    }, React__default.createElement(Option, {
      selected: selected,
      nativeElRef: selected ? selectedOptionRef : maybeFirstYearRef,
      onClick: function () {
        return onChange(yearName);
      },
      onFocus: function () {
        return picker !== "year" && goToSection("year");
      }
    }, yearName)));
  }));
}

function generateListOfYears(_a, _b) {
  var minMonth = _a.minMonth,
      minDay = _a.minDay,
      minYear = _a.minYear;
  var month = _b.month,
      day = _b.day;
  var currentYear = new Date().getFullYear();
  var startingYear = currentYear + 5;

  var buildYearList = function (endYear) {
    if (endYear === void 0) {
      endYear = minYear;
    }

    return rangeRight(endYear, startingYear, 1).map(function (y) {
      return y.toString();
    });
  };

  var monthInt = ~~month;
  var dayInt = ~~day;

  if (monthInt < minMonth || monthInt === minMonth && dayInt < minDay) {
    return buildYearList(minYear + 1);
  }

  return buildYearList();
}

var css$h = ".SectionNavigation-module_action__wr6E9 {\n  position: relative; }\n\n.SectionNavigation-module_action__wr6E9:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  bottom: -0.1em;\n  left: 0;\n  background-color: currentcolor;\n  visibility: hidden;\n  transform: scaleX(0);\n  transition: all 200ms ease-in-out 0s;\n  transition-duration: 200ms; }\n\n.SectionNavigation-module_active__3scI6:before {\n  visibility: visible;\n  height: 1px;\n  transform: scaleX(1); }\n";
var styles$a = {"action":"SectionNavigation-module_action__wr6E9","active":"SectionNavigation-module_active__3scI6"};
styleInject(css$h);

function DateHeader(_a) {
  var picker = _a.picker,
      day = _a.day,
      month = _a.month,
      year = _a.year,
      onClick = _a.onClick;
  var hasFullDate = !!(month && day && year);

  var _b = React.useState(hasFullDate),
      showActiveState = _b[0],
      setShowActiveState = _b[1];

  React.useEffect(function () {
    setTimeout(function () {
      setShowActiveState(hasFullDate);
    }, timeItTakesForAllTransitionsToComplete);
  }, [hasFullDate]);
  return React__default.createElement("div", {
    className: "flex"
  }, React__default.createElement(MonthUnit, {
    active: showActiveState && picker === "month",
    onClick: function () {
      onClick("month");
    }
  }, month), React__default.createElement(DayUnit, {
    active: showActiveState && picker === "day",
    onClick: function () {
      onClick("day");
    }
  }, day), React__default.createElement(YearUnit, {
    active: showActiveState && picker === "year",
    onClick: function () {
      onClick("year");
    }
  }, year));
}

var MonthUnit = function (_a) {
  // if (!children) return null;
  var active = _a.active,
      onClick = _a.onClick,
      children = _a.children;
  return React__default.createElement(AnimateHeight, {
    height: children ? "auto" : 0,
    style: {
      display: "inline-block"
    }
  }, React__default.createElement(DateUnitButton, {
    active: active,
    onClick: onClick
  }, children && months[~~children - 1]), "\xA0");
};

var DayUnit = function (_a) {
  var active = _a.active,
      onClick = _a.onClick,
      children = _a.children;
  return React__default.createElement(AnimateHeight, {
    height: children ? "auto" : 0,
    style: {
      display: "inline-block"
    }
  }, React__default.createElement(DateUnitButton, {
    active: active,
    onClick: onClick
  }, children));
};

var YearUnit = function (_a) {
  var active = _a.active,
      onClick = _a.onClick,
      children = _a.children;
  return React__default.createElement(AnimateHeight, {
    height: children ? "auto" : 0,
    style: {
      display: "inline-block"
    }
  }, ",", " ", React__default.createElement(DateUnitButton, {
    active: active,
    onClick: onClick
  }, children));
};

function DateUnitButton(_a) {
  var active = _a.active,
      children = _a.children,
      onClick = _a.onClick;
  return React__default.createElement(Buttons.Blank, {
    tabIndex: -1,
    onClick: onClick,
    className: styles$a.action + " " + (active ? styles$a.active : "")
  }, React__default.createElement(Typography, {
    bold: true
  }, children));
}

var sectionSize = 300;
function Picker(props) {
  var dateTime = props.dateTime,
      open = props.open,
      picker = props.picker,
      goToSection = props.goToSection,
      setMonth = props.setMonth,
      setMonthAndDay = props.setMonthAndDay,
      setYear = props.setYear,
      style = props.style,
      minDate = props.minDate;
  var height = open ? "auto" : 0;
  var marginLeft = getOffset(picker) * -1;
  return React__default.createElement(AnimateHeight, {
    style: __assign({
      zIndex: 2
    }, style),
    duration: showPickerTransitionTime,
    height: height,
    easing: "ease-in",
    "data-testid": "pickerContainer"
  }, React__default.createElement(Segment, {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, React__default.createElement("div", {
    className: "flex justify-center align-items-center mb-1"
  }, React__default.createElement(DateHeader, _extends({}, dateTime, {
    onClick: goToSection,
    picker: picker
  }))), React__default.createElement("div", {
    style: size(sectionSize)
  }, React__default.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    }
  }, React__default.createElement("div", {
    id: "section-row",
    style: {
      display: "flex",
      minHeight: "min-content"
    }
  }, React__default.createElement(Section, {
    open: open,
    style: {
      marginLeft: marginLeft,
      transition: "all " + switchPickerTransitionTime + "ms ease-in"
    }
  }, React__default.createElement(MonthPicker, _extends({
    month: dateTime.month,
    onChange: setMonth
  }, {
    picker: picker,
    goToSection: goToSection
  }))), React__default.createElement(Section, {
    open: open
  }, React__default.createElement(DayPicker, _extends({
    onChange: setMonthAndDay,
    dateTime: dateTime
  }, {
    picker: picker,
    goToSection: goToSection
  }))), React__default.createElement(Section, {
    open: open
  }, React__default.createElement(YearPicker, _extends({
    onChange: setYear
  }, {
    picker: picker,
    goToSection: goToSection,
    minDate: minDate,
    dateTime: dateTime
  }))))))));
}

var Section = function (_a) {
  var children = _a.children,
      style = _a.style,
      open = _a.open;
  if (!open) return null;
  return React__default.createElement("div", {
    style: __assign({}, size(sectionSize), style)
  }, children);
}; // On step one the offset is 0
// increment offset by Section size for every successive step


function getOffset(picker) {
  var stepIndex = steps.indexOf(picker);
  if (stepIndex === 0) return 0;
  return stepIndex * sectionSize;
}

var css$i = ".LowLevelDatePicker-module_input__JwcFZ {\n  border: none;\n  background-color: transparent; }\n";
var styles$b = {"input":"LowLevelDatePicker-module_input__JwcFZ"};
styleInject(css$i);

function useAttentionWithin(ref, lostAttention) {
  var _a = React.useState(false),
      attentionWithin = _a[0],
      setAttentionWithin = _a[1];

  function handleAttentionLeave(_a) {
    var target = _a.target;
    var targetIsWithin = !!(ref.current && ref.current.contains(target));
    setAttentionWithin(targetIsWithin);
    if (!targetIsWithin) lostAttention && lostAttention();
  }

  React.useEffect(function () {
    document.addEventListener("focusin", handleAttentionLeave);
    document.addEventListener("mouseup", handleAttentionLeave);
    return function () {
      document.removeEventListener("focusin", handleAttentionLeave);
      document.removeEventListener("mouseup", handleAttentionLeave);
    };
  }, []);
  return attentionWithin;
}

function LowLevelDatePicker(props) {
  var value = props.value,
      onChange = props.onChange,
      _a = props.className,
      className = _a === void 0 ? "" : _a,
      style = props.style,
      _b = props.setRangeError,
      setRangeError = _b === void 0 ? function (arg) {
    return arg;
  } : _b,
      setNativeElRef = props.setNativeElRef,
      setHasValue = props.setHasValue,
      inputStyle = props.inputStyle,
      rangeError = props.rangeError,
      minDate = props.minDate,
      onFocus = props.onFocus,
      _c = props["data-testid"],
      testId = _c === void 0 ? "LowLevelDatePickerInput" : _c,
      restProps = __rest(props, ["value", "onChange", "className", "style", "setRangeError", "setNativeElRef", "setHasValue", "inputStyle", "rangeError", "minDate", "onFocus", "data-testid"]);

  var humanizedDate = React.useMemo(function () {
    return humanizeDate(value) || "";
  }, [value]);

  var _d = minDate ? minDate.split("-").map(function (unit) {
    return ~~unit;
  }) : [],
      _e = _d[0],
      minYear = _e === void 0 ? 1980 : _e,
      _f = _d[1],
      minMonth = _f === void 0 ? 1 : _f,
      _g = _d[2],
      minDay = _g === void 0 ? 1 : _g;

  var _h = React.useState(""),
      formatedInputValue = _h[0],
      setFormatedInputValue = _h[1];

  var _j = React.useState("month"),
      picker = _j[0],
      setPicker = _j[1];

  var _k = React.useState(false),
      showPicker = _k[0],
      setShowPicker = _k[1];

  var _l = React.useState(""),
      month = _l[0],
      setMonth = _l[1];

  var _m = React.useState(""),
      day = _m[0],
      setDay = _m[1];

  var _o = React.useState(""),
      year = _o[0],
      setYear = _o[1];

  var _p = React.useState(false),
      pickerFocused = _p[0],
      setPickerFocused = _p[1];

  var dateTime = buildTimeMap({
    month: month,
    day: day,
    year: year
  }, humanizedDate);
  var inputRef = React.useRef(null);
  var thisRef = React.useRef(null);
  useAttentionWithin(thisRef, function () {
    return setShowPicker(false);
  });
  var hasValue = !!value;
  React.useEffect(function () {
    setHasValue && setHasValue(showPicker || hasValue);
  }, [showPicker, hasValue]); // On first render initialize local state with incoming value date

  React.useEffect(function () {
    var units = humanizedDate ? humanizedDate.split("-") : null;

    if (units) {
      // initialize our local date state
      setMonth(units[0]);
      setDay(units[1]);
      setYear(units[2]);
    }
  }, []);

  var stepForward = function () {
    return setPicker(function (prevPicker) {
      return getNextStep(prevPicker);
    });
  };

  function closePicker() {
    setTimeout(function () {
      setPickerFocused(false);
      setShowPicker(false);
      setPicker("month");
    }, optionTransitionTime);
  } // Give time for animation to play after new state is set


  function buildSetter(setFunc) {
    return function (payload) {
      var isFinalStep = steps.indexOf(picker) === steps.length - 1;
      setPickerFocused(true);
      setFunc(payload);
      setTimeout(function () {
        stepForward();
        isFinalStep && closePicker();
      }, isFinalStep ? timeItTakesForAllTransitionsToComplete : optionTransitionTime);
    };
  }

  function transitionToPicker(payload) {
    setTimeout(function () {
      setPicker(payload);
    }, optionTransitionTime * 2);
  }

  function clearLocallyStoredDates() {
    setMonth("");
    setDay("");
    setYear("");
    setFormatedInputValue("");
  }

  var monthDayYear = [month, day, year].filter(function (unit) {
    return !!unit;
  }).join("-");
  var derivedInputValue = !!monthDayYear.length ? "" + monthDayYear + "MM-DD-YYYY".slice(monthDayYear.length) : "";
  var inputValue = pickerFocused ? derivedInputValue || humanizedDate : formatedInputValue || humanizedDate;
  return React__default.createElement("div", {
    className: className,
    style: __assign({
      position: "relative"
    }, style),
    ref: thisRef
  }, React__default.createElement(NumberFormat, _extends({}, restProps, {
    value: inputValue,
    className: "LowLevelDatePickerInput " + styles$b.input,
    displayType: "input",
    format: "##-##-####",
    mask: ["M", "M", "D", "D", "Y", "Y", "Y", "Y"],
    getInputRef: function (el) {
      inputRef.current = el;
      setNativeElRef && setNativeElRef(el);
    },
    onFocus: function (e) {
      onFocus && onFocus(e);
      setShowPicker(true);
      setPickerFocused(false);
      inputRef.current && inputRef.current.select(); // Init local input state

      setFormatedInputValue(derivedInputValue);
    },
    onKeyDown: function (_a) {
      var key = _a.key;

      if (key === "Enter") {
        if (showPicker) {
          if ([month, day, year].every(function (unit) {
            return !!unit;
          })) {
            var newDate = dateTimeToISO({
              month: month,
              day: day,
              year: year
            });
            onChange(newDate);
          }

          setPickerFocused(false);
          clearLocallyStoredDates();
          closePicker();
        } else {
          setShowPicker(true);
        }
      }
    },
    onChange: function (_a) {
      var formattedValue = _a.target.value;
      setFormatedInputValue(formattedValue);
      !showPicker && setShowPicker(true);

      if (formattedValue === "") {
        value && onChange("");
      }

      var _b = parseFormatedValue(formattedValue),
          _c = _b[0],
          m = _c === void 0 ? "" : _c,
          _d = _b[1],
          d = _d === void 0 ? "" : _d,
          _e = _b[2],
          y = _e === void 0 ? "" : _e; // month validation logic


      var monthInt = ~~m;

      var checkMonth = function (min) {
        if (min === void 0) {
          min = 1;
        }

        return monthInt >= min && monthInt < 13;
      }; // day validation logic


      var yearString = y.length === 4 ? y : new Date().getFullYear().toString();

      var _f = calculateMonth(m, yearString),
          _g = _f[1],
          daysInMonth = _g === void 0 ? 31 : _g;

      var dayInt = ~~d;

      var checkDay = function (min) {
        if (min === void 0) {
          min = 1;
        }

        return dayInt >= min && dayInt < daysInMonth + 1;
      }; // year validation logic


      var yearInt = ~~y;
      var fiveYearsFromNow = new Date().getFullYear() + 5;
      var yearInRange = yearInt >= minYear && yearInt < fiveYearsFromNow;
      var yearIsMinYear = yearInt === minYear;

      if (y) {
        if (y.length === 4) {
          var monthInRange = yearIsMinYear ? checkMonth(minMonth) : checkMonth();
          var dayInRange = yearIsMinYear && monthInt === minMonth ? checkDay(minDay) : checkDay();

          if (yearInRange && monthInRange && dayInRange) {
            setRangeError(false);
            setYear(y);
            setTimeout(function () {
              onChange(dateTimeToISO({
                month: m,
                day: d,
                year: y
              }));
              clearLocallyStoredDates();
              closePicker();
            }, optionTransitionTime);
            return;
          } else {
            setRangeError(true);
            return;
          }
        } else {
          setRangeError(false);
          setShowPicker(true);
        }
      }

      if (m) {
        if (m.length === 2) {
          if (checkMonth()) {
            setMonth(m);
            transitionToPicker("day");
          } else {
            setRangeError(true);
            transitionToPicker("month");
            return;
          }
        } else {
          setMonth("");
          transitionToPicker("month");
          return;
        }
      } else {
        setMonth("");
        transitionToPicker("month");
        return;
      }

      if (d) {
        if (d.length === 2) {
          if (checkDay()) {
            setDay(d);
            setRangeError(false);
            transitionToPicker("year");
          } else {
            setRangeError(true);
            transitionToPicker("day");
          }
        } else {
          setRangeError(false);
        }
      } else {
        setDay("");
        setRangeError(false);
        transitionToPicker("day");
      }
    },
    "data-testid": testId,
    "aria-invalid": rangeError ? true : false,
    style: inputStyle
  })), React__default.createElement(Picker, _extends({
    style: {
      position: "absolute",
      top: 50
    },
    open: showPicker,
    minDate: {
      minMonth: minMonth,
      minDay: minDay,
      minYear: minYear
    }
  }, {
    picker: picker,
    dateTime: dateTime
  }, {
    setMonthAndDay: buildSetter(function (payload) {
      setMonth(payload.month);
      setDay(payload.day);
    }),
    setMonth: buildSetter(function (payload) {
      return setMonth(payload);
    }),
    setYear: function (payload) {
      setYear(payload);
      setTimeout(function () {
        var newDate = dateTimeToISO({
          month: month,
          day: day,
          year: payload
        });
        onChange(newDate);
        setPickerFocused(false);
        clearLocallyStoredDates();
      }, optionTransitionTime);
      closePicker();
    },
    goToSection: setPicker
  })));
}
var finalStep = steps.length - 1;

function getNextStep(picker) {
  var currentStep = steps.indexOf(picker);
  var nextStepIndex = currentStep === finalStep ? 0 : currentStep + 1;
  return steps[nextStepIndex];
}

var buildTimeMap = function (_a,
/** Formated date string: "09-09-1984" */
humanizedDate) {
  var month = _a.month,
      day = _a.day,
      year = _a.year;

  if (humanizedDate === void 0) {
    humanizedDate = "";
  }

  var _b = humanizedDate.split("-"),
      m = _b[0],
      d = _b[1],
      y = _b[2];

  return {
    month: month || m,
    day: day || d,
    year: year || y
  };
};

var dateTimeToISO = function (_a) {
  var month = _a.month,
      day = _a.day,
      year = _a.year;
  return moment(year + "-" + month + "-" + day, "Y-M-D").format("YYYY-MM-DD");
}; // formattedValue will look something like this -> "1M-DD-YYYY"


var parseFormatedValue = function (formattedValue) {
  return formattedValue.split("-").map(function (unit) {
    // get rid of those pesky letters
    if (isInt(unit)) {
      return unit;
    }

    var parsedUnit = parseInt(unit);
    if (parsedUnit === 0) return parsedUnit.toString();
    return (parsedUnit || "").toString();
  });
};

function humanizeDate(value) {
  if (!value) return "";

  if (value.length < 10) {
    return value.split("-").reverse().join("-");
  }

  return renderDate("input")(value);
}

function DatePickerBase(_a) {
  var onChange = _a.onChange,
      value = _a.value,
      error = _a.error,
      minDate = _a.minDate,
      restProps = __rest(_a, ["onChange", "value", "error", "minDate"]);

  var _b = React.useState(false),
      inputHasValue = _b[0],
      setInputHasValue = _b[1];

  var _c = React.useState(false),
      rangeError = _c[0],
      setRangeError = _c[1];

  return React__default.createElement(FloatingLabelWrapper, _extends({
    floatLabel: inputHasValue,
    error: rangeError || error
  }, restProps, {
    value: value
  }), function (_a) {
    var _b = _a.componentProps,
        _ = _b.onChange,
        _val = _b.value,
        cmptProps = __rest(_b, ["onChange", "value"]),
        setInputRef = _a.setInputRef;

    return React__default.createElement(LowLevelDatePicker, _extends({}, cmptProps, {
      value: value,
      onChange: onChange,
      rangeError: rangeError,
      setRangeError: setRangeError,
      minDate: minDate
    }, {
      setNativeElRef: setInputRef,
      setHasValue: setInputHasValue
    }));
  });
}

var Date$1 = function (_a) {
  var input = _a.input,
      _b = _a.meta,
      touched = _b.touched,
      error = _b.error,
      rest = __rest(_a, ["input", "meta"]);

  return React__default.createElement(DatePickerBase, _extends({}, input, rest, {
    error: touched && !!error
  }));
};

function DateRangeBase(_a) {
  var value = _a.value,
      onChange = _a.onChange,
      appearance = _a.appearance,
      error = _a.error,
      restProps = __rest(_a, ["value", "onChange", "appearance", "error"]);

  var _b = React.useState(false),
      startDateHasValue = _b[0],
      setStartDateHasValue = _b[1];

  var _c = React.useState(false),
      endDateHasValue = _c[0],
      setEndDateHasValue = _c[1];

  var _d = React.useState(false),
      startDateRangeError = _d[0],
      setStartDateRangeError = _d[1];

  var _e = React.useState(false),
      endDateRangeError = _e[0],
      setEndDateRangeError = _e[1];

  var endDateInputRef = React.useRef(null);
  var startDate = value && value[0] || "";
  var endDate = value && value[1] || "";
  return React__default.createElement(FloatingLabelWrapper, _extends({
    floatLabel: startDateHasValue || endDateHasValue,
    error: error || startDateRangeError || endDateRangeError,
    appearance: appearance,
    value: value
  }, restProps), function (_a) {
    var _b = _a.componentProps,
        _ = _b.onChange,
        _val = _b.value,
        cmptProps = __rest(_b, ["onChange", "value"]),
        setInputRef = _a.setInputRef;

    return React__default.createElement("div", {
      className: "flex"
    }, React__default.createElement(LowLevelDatePicker, _extends({}, cmptProps, {
      value: startDate,
      onChange: function (startD) {
        onChange([startDate, endDate], "startDate");
        endDateInputRef.current && endDateInputRef.current.focus();
      },
      rangeError: startDateRangeError,
      setRangeError: setStartDateRangeError,
      setNativeElRef: setInputRef,
      setHasValue: setStartDateHasValue,
      style: {
        width: 96
      },
      inputStyle: __assign({}, paddingHorizontal(0), {
        textAlign: "right"
      }),
      "data-testid": "startDateInput"
    })), startDate && React__default.createElement(Typography, {
      className: "flex items-center mx-025",
      style: {
        fontWeight: 600,
        paddingTop: appearance === "contrast" ? 7 : undefined
      }
    }, "to"), React__default.createElement(LowLevelDatePicker, _extends({}, cmptProps, {
      value: endDate,
      minDate: startDate,
      onChange: function (endD) {
        onChange([startDate, endD], "endDate");
      },
      rangeError: endDateRangeError,
      setRangeError: setEndDateRangeError,
      setHasValue: setEndDateHasValue,
      style: {
        width: "65%"
      },
      inputStyle: paddingHorizontal(0),
      setNativeElRef: function (el) {
        return endDateInputRef.current = el;
      },
      "data-testid": "endDateInput"
    })));
  });
}

var DateRange = function (_a) {
  var input = _a.input,
      _b = _a.meta,
      touched = _b.touched,
      error = _b.error,
      rest = __rest(_a, ["input", "meta"]);

  return React__default.createElement(DateRangeBase, _extends({}, input, rest, {
    error: touched && !!error
  }));
};

var css$j = ".CohubMoneyInput input {\n  border: none; }\n";
styleInject(css$j);

var MoneyInput =
/** @class */
function (_super) {
  __extends(MoneyInput, _super);

  function MoneyInput() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MoneyInput.prototype.render = function () {
    var _a = this.props,
        extendedPrecision = _a.extendedPrecision,
        input = _a.input,
        _b = _a.meta,
        meta = _b === void 0 ? {} : _b,
        label = _a.label,
        dataQa = _a["data-qa"],
        appearance = _a.appearance,
        spanProps = __rest(_a, ["extendedPrecision", "input", "meta", "label", "data-qa", "appearance"]);

    var showError = !!(meta.touched && meta.error);
    return React__default.createElement("span", _extends({
      className: "CohubMoneyInput",
      "data-qa": dataQa
    }, spanProps), React__default.createElement(FloatingLabelWrapper, _extends({}, input, {
      label: label,
      error: showError,
      appearance: appearance,
      children: function (_a) {
        var _b = _a.componentProps,
            onChange = _b.onChange,
            value = _b.value,
            rest = __rest(_b, ["onChange", "value"]),
            setInputRef = _a.setInputRef;

        return React__default.createElement(NumberFormat, _extends({}, rest, {
          getInputRef: setInputRef,
          value: value,
          displayType: "input",
          prefix: "$",
          decimalScale: extendedPrecision ? 5 : 2,
          onValueChange: function (_a) {
            var floatValue = _a.floatValue;
            onChange(floatValue);
          },
          thousandSeparator: true
        }));
      }
    })));
  };

  MoneyInput.defaultProps = {
    extendedPrecision: false
  };
  return MoneyInput;
}(React.PureComponent);

var css$k = ".MultiselectField {\n  position: relative;\n  width: 100%; }\n  .MultiselectField.GenericInput > div {\n    background: none;\n    color: var(--black-500);\n    display: block;\n    width: 100%;\n    border-radius: 4px;\n    border: 1px solid var(--grey-200);\n    height: 100%; }\n  .MultiselectField.ContrastInput > div {\n    background: none;\n    color: var(--black-500);\n    display: block;\n    width: 100%;\n    border-radius: 4px;\n    border: 1px solid var(--grey-200);\n    height: 100%; }\n";
styleInject(css$k);

function MultiSelect(_a) {
  var options = _a.options,
      label = _a.label,
      allowCreate = _a.allowCreate,
      loading = _a.loading,
      input = _a.input,
      appearance = _a.appearance;

  var onChange = function (selectedOption) {
    if (!selectedOption) {
      return;
    }

    if ("value" in selectedOption) {
      input.onChange(selectedOption.value);
    } else {
      input.onChange(selectedOption.map(function (opt) {
        return opt.value;
      }));
    }
  };

  var value = options.filter(function (o) {
    return input.value.includes(o.value);
  });

  if (allowCreate && input.value.length) {
    var inputValues = input.value.map(function (val) {
      var selectedOption = options.find(function (opt) {
        return opt.value === val;
      });
      return {
        value: val,
        label: selectedOption && selectedOption.label
      };
    });
    value = inputValues.concat(value);
    value = lodash.uniqBy(value, "value");
  }

  var contrastPadding = appearance === "contrast" ? {
    paddingTop: "0.5rem"
  } : {};
  var selectConfig = {
    options: options,
    isMulti: true,
    isLoading: loading,
    styles: getSelectStyles(contrastPadding),
    placeholder: ""
  };
  return React__default.createElement(FloatingLabelWrapper, {
    className: "MultiselectField",
    onBlur: input.onBlur,
    onFocus: input.onFocus,
    onChange: onChange,
    label: label,
    value: value,
    appearance: appearance
  }, function (_a) {
    var componentProps = _a.componentProps;
    return allowCreate ? React__default.createElement(Select$1, _extends({}, selectConfig, componentProps)) : React__default.createElement(Creatable, _extends({}, selectConfig, componentProps));
  });
}
var styles$c = {
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
    color: Color$1.black
  },
  menu: {
    backgroundColor: Color$1.background
  },
  dropdownIndicator: {
    display: "none"
  },
  indicatorSeparator: {
    display: "none"
  },
  multiValue: {
    backgroundColor: Color$1.grey200,
    borderRadius: "11px",
    paddingLeft: "6px",
    marginTop: "6px",
    marginBottom: "0"
  },
  multiValueLabel: {
    color: Color$1.black,
    padding: "1px",
    paddingLeft: "6px"
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
    control: function (style) {
      return __assign({}, style, styles$c.control, controlStyles);
    },
    container: function (style) {
      return __assign({}, style, styles$c.container);
    },
    input: function (style) {
      return __assign({}, style, styles$c.input);
    },
    menu: function (style) {
      return __assign({}, style, styles$c.menu);
    },
    option: function (style, _a) {
      var isFocused = _a.isFocused;
      return __assign({}, style, {
        backgroundColor: isFocused ? "var(--admin-grey)" : "var(--admin-bg)",
        ":hover": {
          backgroundColor: "var(--admin-grey)"
        }
      });
    },
    dropdownIndicator: function () {
      return styles$c.dropdownIndicator;
    },
    indicatorSeparator: function () {
      return styles$c.indicatorSeparator;
    },
    multiValue: function (style) {
      return __assign({}, style, styles$c.multiValue);
    },
    multiValueLabel: function (style) {
      return __assign({}, style, styles$c.multiValueLabel);
    },
    multiValueRemove: function (style) {
      return __assign({}, style, styles$c.multiValueRemove, {
        ":hover": {
          backgroundColor: "var(--admin-grey)",
          borderRadius: "11px"
        }
      });
    },
    clearIndicator: function (style) {
      return __assign({}, style, styles$c.clearIndicator);
    }
  };
};

function Password(props) {
  var input = props.input,
      meta = props.meta,
      style = props.style,
      className = props.className,
      _a = props.msgPosition,
      dataQa = props["data-qa"],
      restProps = __rest(props, ["input", "meta", "style", "className", "msgPosition", "data-qa"]);

  var _b = React.useState(false),
      visible = _b[0],
      setVisible = _b[1];

  var _c = meta || {},
      touched = _c.touched,
      error = _c.error;

  var showError = !!(touched && error);
  return React__default.createElement("div", {
    className: className,
    style: __assign({
      display: "flex",
      alignItems: "center"
    }, style)
  }, React__default.createElement(Base$1, _extends({}, input, restProps, {
    error: showError,
    "data-qa": dataQa,
    type: visible ? "text" : "password",
    style: {
      width: "100%"
    }
  })), React__default.createElement(Icon.Eye, {
    size: 24,
    color: Color$1.grey600,
    style: {
      position: "absolute",
      right: "36px"
    },
    className: "pointer",
    onClick: function () {
      return setVisible(!visible);
    }
  }));
}

var css$l = ".SelectField {\n  position: relative;\n  cursor: pointer;\n  width: 100%; }\n  .SelectField > div {\n    background: none;\n    color: var(--grey-800);\n    display: block;\n    width: 100%;\n    border-radius: 4px;\n    border: 1px solid var(--border); }\n";
styleInject(css$l);

var Select =
/** @class */
function (_super) {
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
      } else {
        input.onChange(selectedOption.map(function (opt) {
          return opt.value;
        }));
      }
    };

    return _this;
  }

  Select.prototype.render = function () {
    var _a = this.props,
        options = _a.options,
        input = _a.input,
        label = _a.label,
        allowCreate = _a.allowCreate,
        loading = _a.loading,
        appearance = _a.appearance;
    var value = options.filter(function (o) {
      return input.value === o.value;
    });

    if (allowCreate && input.value.length && typeof input.value !== "string") {
      var inputValues = input.value.map(function (v) {
        return {
          value: v,
          label: v
        };
      });
      value = inputValues.concat(value);
      value = lodash.uniqBy(value, "value");
    }

    return React__default.createElement(FloatingLabelWrapper, {
      className: "SelectField",
      onBlur: input.onBlur,
      onFocus: input.onFocus,
      onChange: this.onChange,
      label: label,
      value: value,
      appearance: appearance
    }, function (_a) {
      var componentProps = _a.componentProps;
      return React__default.createElement(Select$1, _extends({
        options: options,
        isLoading: loading,
        styles: selectStyles,
        placeholder: ""
      }, componentProps));
    });
  };

  return Select;
}(React__default.Component);
var styles$d = {
  singleValue: {
    color: Color$1.black
  },
  indicatorSeparator: {
    display: "none"
  },
  dropdownIndicator: {
    display: "none"
  },
  menu: {
    backgroundColor: Color$1.trueWhite
  },
  option: {
    marginTop: 0
  },
  menuList: {
    marginTop: 0
  },
  input: {
    color: Color$1.trueWhite,
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
  control: function (style) {
    return __assign({}, style, styles$d.control);
  },
  input: function (style) {
    return __assign({}, style, styles$d.input);
  },
  menu: function (style) {
    return __assign({}, style, styles$d.menu);
  },
  menuList: function (style) {
    return __assign({}, style, styles$d.menuList);
  },
  option: function (style, _a) {
    var isFocused = _a.isFocused;
    return __assign({}, style, styles$d.option, {
      backgroundColor: isFocused ? Color$1.grey300 : Color$1.trueWhite,
      color: isFocused ? Color$1.black : Color$1.black,
      ":hover": {
        backgroundColor: Color$1.grey300,
        color: Color$1.black
      }
    });
  },
  dropdownIndicator: function () {
    return styles$d.dropdownIndicator;
  },
  indicatorSeparator: function () {
    return styles$d.indicatorSeparator;
  },
  singleValue: function (style) {
    return __assign({}, style, styles$d.singleValue);
  }
};

function Text$1(props) {
  var input = props.input,
      meta = props.meta,
      style = props.style,
      className = props.className,
      _a = props.msgPosition,
      dataQa = props["data-qa"],
      restProps = __rest(props, ["input", "meta", "style", "className", "msgPosition", "data-qa"]);

  var _b = meta || {},
      touched = _b.touched,
      error = _b.error;

  var showError = !!(touched && error);
  return React__default.createElement("div", {
    className: className,
    style: __assign({
      width: "100%"
    }, style)
  }, React__default.createElement(Base$1, _extends({}, input, restProps, {
    error: showError,
    "data-qa": dataQa
  })));
}

var css$m = ".ui.form .GenericTextArea input,\n.GenericTextArea {\n  font-family: var(--default-font-family) !important;\n  font-size: var(--default-font-size);\n  font-weight: var(--default-font-weight);\n  transition: all 100ms ease; }\n";
styleInject(css$m);

var TextArea =
/** @class */
function (_super) {
  __extends(TextArea, _super);

  function TextArea(props) {
    var _this = _super.call(this, props) || this;

    _this.inputRef = React__default.createRef();
    return _this;
  }

  TextArea.prototype.render = function () {
    var _a = this.props,
        _b = _a.style,
        style = _b === void 0 ? {} : _b,
        className = _a.className,
        restOfProps = __rest(_a, ["style", "className"]);

    return React__default.createElement("textarea", _extends({
      ref: this.inputRef
    }, restOfProps, {
      className: "GenericTextArea border bd-radius " + className,
      style: __assign({}, styles$e.input, TextArea.defaultProps.style, style)
    }));
  };

  TextArea.defaultProps = {
    className: "",
    style: {
      width: "100%",
      cursor: "text"
    }
  };
  return TextArea;
}(React.Component);
var styles$e = {
  input: {
    padding: "10px 12px",
    outline: "none"
  }
};

var css$n = ".Toggle-module_labelContainer__6R_gw, .Toggle-module_labelContainerLeft__jyqAv, .Toggle-module_labelContainerRight__3t8zx, .Toggle-module_labelContainerTop__2824a, .Toggle-module_labelContainerBottom__1g9y_ {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n  .Toggle-module_labelContainer__6R_gw:focus, .Toggle-module_labelContainerLeft__jyqAv:focus, .Toggle-module_labelContainerRight__3t8zx:focus, .Toggle-module_labelContainerTop__2824a:focus, .Toggle-module_labelContainerBottom__1g9y_:focus {\n    -webkit-filter: brightness(90%);\n            filter: brightness(90%); }\n\n.Toggle-module_labelContainerLeft__jyqAv span {\n  margin-right: 0.5rem; }\n\n.Toggle-module_labelContainerRight__3t8zx {\n  flex-direction: row-reverse; }\n  .Toggle-module_labelContainerRight__3t8zx span {\n    margin-left: 0.5rem; }\n\n.Toggle-module_labelContainerTop__2824a {\n  flex-direction: column;\n  align-items: flex-start; }\n  .Toggle-module_labelContainerTop__2824a span {\n    margin-bottom: 0.5rem; }\n\n.Toggle-module_labelContainerBottom__1g9y_ {\n  flex-direction: column-reverse;\n  align-items: flex-start; }\n  .Toggle-module_labelContainerBottom__1g9y_ span {\n    margin-top: 0.5rem; }\n\n.Toggle-module_container__3DMtn, .Toggle-module_containerActive__1jtDw, .Toggle-module_containerInactive__3RAMH {\n  width: 40px;\n  height: 20px;\n  border-radius: 10px; }\n\n.Toggle-module_containerActive__1jtDw {\n  background-color: var(--green-300); }\n\n.Toggle-module_containerInactive__3RAMH {\n  background-color: var(--grey-300); }\n\n.Toggle-module_toggle__1BLbN, .Toggle-module_toggleActive__33s_R, .Toggle-module_toggleInactive__1lJfx {\n  position: -webkit-sticky;\n  position: sticky;\n  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: 20px;\n  height: 20px;\n  border-radius: 50%; }\n\n.Toggle-module_toggleActive__33s_R {\n  transform: translate(20px);\n  background-color: var(--green-500); }\n\n.Toggle-module_toggleInactive__1lJfx {\n  background-color: var(--grey-600); }\n";
var styles$f = {"labelContainer":"Toggle-module_labelContainer__6R_gw","labelContainerLeft":"Toggle-module_labelContainerLeft__jyqAv","labelContainerRight":"Toggle-module_labelContainerRight__3t8zx","labelContainerTop":"Toggle-module_labelContainerTop__2824a","labelContainerBottom":"Toggle-module_labelContainerBottom__1g9y_","container":"Toggle-module_container__3DMtn","containerActive":"Toggle-module_containerActive__1jtDw","containerInactive":"Toggle-module_containerInactive__3RAMH","toggle":"Toggle-module_toggle__1BLbN","toggleActive":"Toggle-module_toggleActive__33s_R","toggleInactive":"Toggle-module_toggleInactive__1lJfx"};
styleInject(css$n);

var Toggle$1 =
/** @class */
function (_super) {
  __extends(Toggle, _super);

  function Toggle() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Toggle.prototype.render = function () {
    var _a = this.props,
        label = _a.label,
        input = _a.input,
        labelPosition = _a.labelPosition,
        _b = _a.className,
        className = _b === void 0 ? "" : _b;
    var checked = input.value === true || input.value === "true";

    var toggle = function () {
      input.onChange(!checked);
    };

    var keyDown = function (evt) {
      if (evt.keyCode && evt.keyCode === 32) {
        toggle();
      }
    };

    var containerClass;

    switch (labelPosition) {
      case "left":
        containerClass = styles$f.labelContainerLeft;
        break;

      case "right":
        containerClass = styles$f.labelContainerRight;
        break;

      case "top":
        containerClass = styles$f.labelContainerTop;
        break;

      case "bottom":
        containerClass = styles$f.labelContainerBottom;
        break;

      default:
        containerClass = styles$f.labelContainerLeft;
    }

    return React__default.createElement("div", {
      className: className + " " + containerClass + " cursor-pointer ",
      onClick: toggle,
      tabIndex: 0,
      onKeyDown: keyDown
    }, label && React__default.createElement(Typography, {
      color: Color$1.grey700
    }, label), React__default.createElement("div", {
      className: checked ? styles$f.containerActive : styles$f.containerInactive
    }, React__default.createElement("div", {
      className: checked ? styles$f.toggleActive : styles$f.toggleInactive
    })));
  };

  Toggle.defaultProps = {
    labelPosition: "right"
  };
  return Toggle;
}(React__default.Component);

var Inputs = {
  Base: Base$1,
  Checkbox: Checkbox,
  Decimal: DecimalInput,
  Date: Date$1,
  DateRange: DateRange,
  Money: MoneyInput,
  MultiSelect: MultiSelect,
  Password: Password,
  Select: Select,
  Text: Text$1,
  TextArea: TextArea,
  Toggle: Toggle$1
};

var Base$2 =
/** @class */
function (_super) {
  __extends(Base, _super);

  function Base() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Base.prototype.render = function () {
    var _a = this.props,
        href = _a.href,
        styled = _a.styled,
        animated = _a.animated,
        className = _a.className,
        style = _a.style,
        to = _a.to,
        onClick = _a.onClick,
        restProps = __rest(_a, ["href", "styled", "animated", "className", "style", "to", "onClick"]);

    var classes = styled && animated ? "cohub-link " + (className || "") : className;

    var linkStyle = __assign({
      color: styled ? Color$1.link : "inherit",
      fontSize: "inherit",
      cursor: "pointer"
    }, style);

    if (href || onClick || !to) {
      return React__default.createElement("a", _extends({
        className: classes,
        style: linkStyle,
        href: href,
        onClick: onClick
      }, restProps));
    }

    return React__default.createElement(reactRouterDom.Link, _extends({
      to: to,
      className: classes,
      style: linkStyle,
      onClick: onClick
    }, restProps));
  };

  return Base;
}(React__default.PureComponent);

var Muted = (function (_a) {
  var children = _a.children,
      rest = __rest(_a, ["children"]);

  return React__default.createElement(Base$2, _extends({
    styled: false
  }, rest), React__default.createElement(Typography, {
    muted: true
  }, children));
});

var css$o = "a.cohub-link {\n  position: relative;\n  text-decoration: none; }\n  a.cohub-link:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    bottom: -0.1em;\n    left: 0;\n    background-color: currentcolor;\n    visibility: hidden;\n    transform: scaleX(0);\n    transition: all 0.2s ease-in-out 0s;\n    transition-delay: 0.2s; }\n  a.cohub-link:hover:before {\n    visibility: visible;\n    height: 1px;\n    transform: scaleX(1); }\n";
styleInject(css$o);

var Link =
/** @class */
function (_super) {
  __extends(Link, _super);

  function Link() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Link.prototype.render = function () {
    return React__default.createElement(Base$2, this.props);
  };

  Link.Muted = Muted;
  Link.defaultProps = {
    styled: true,
    animated: true
  };
  return Link;
}(React__default.Component);

var css$p = "@-webkit-keyframes hop-lock-and-drop {\n  40% {\n    transform: translateY(-6px); }\n  90% {\n    transform: none;\n    transform: initial; } }\n@keyframes hop-lock-and-drop {\n  40% {\n    transform: translateY(-6px); }\n  90% {\n    transform: none;\n    transform: initial; } }\n";
styleInject(css$p);

var Loader =
/** @class */
function (_super) {
  __extends(Loader, _super);

  function Loader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Loader.prototype.render = function () {
    var _a = this.props,
        fullScreen = _a.fullScreen,
        show = _a.show,
        asOverlay = _a.asOverlay,
        style = _a.style;

    if (fullScreen) {
      return React__default.createElement(Backdrop, {
        style: style,
        open: show,
        focusTrapped: false
      }, React__default.createElement(HopDropsLoader, null));
    }

    if (asOverlay) {
      return React__default.createElement(Fade, {
        show: show
      }, React__default.createElement("div", {
        className: "absolute flex justify-center items-center w-100 h-100",
        style: __assign({
          background: Color$1.darkOverlay
        }, style)
      }, React__default.createElement(HopDropsLoader, null)));
    }

    return React__default.createElement(Fade, {
      show: show
    }, React__default.createElement(HopDropsLoader, {
      style: style
    }));
  };

  Loader.defaultProps = {
    show: true
  };
  return Loader;
}(React.PureComponent);

var HopDropsLoader = function (_a) {
  var style = _a.style;
  return React__default.createElement("div", {
    style: __assign({
      height: "2em",
      width: "6em"
    }, style),
    className: "flex justify-center items-center"
  }, React__default.createElement(GreenDot, null), React__default.createElement(GreenDot, {
    style: __assign({
      animationDelay: "0.1s"
    }, marginHorizontal(5))
  }), React__default.createElement(GreenDot, {
    style: {
      animationDelay: "0.2s"
    }
  }));
};

var GreenDot = function (_a) {
  var _b = _a.style,
      style = _b === void 0 ? {} : _b;
  return React__default.createElement("span", {
    style: __assign({}, size(12), {
      backgroundColor: Color$1.primary,
      borderRadius: "50%",
      animation: "hop-lock-and-drop 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite"
    }, style)
  });
};

var css$q = ".CohubModal .modalBody {\n  padding: 1rem; }\n";
styleInject(css$q);

var Modal =
/** @class */
function (_super) {
  __extends(Modal, _super);

  function Modal() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Modal.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        className = _a.className,
        size = _a.size,
        rest = __rest(_a, ["children", "className", "size"]);

    var modalSize;

    if (typeof size === "number") {
      modalSize = size;
    } else {
      switch (size) {
        case "xsmall":
          modalSize = 240;
          break;

        case "small":
          modalSize = 300;
          break;

        case "medium":
          modalSize = 360;
          break;

        case "large":
          modalSize = 480;
          break;

        case "xlarge":
          modalSize = 600;
          break;

        default:
          modalSize = 360;
      }
    }

    return React__default.createElement(Backdrop, _extends({
      showCloseIcon: true,
      containerClass: "CohubModal"
    }, rest), React__default.createElement(Segment, {
      className: "modalBody " + className,
      elevation: 24,
      style: {
        width: modalSize + "px"
      }
    }, children));
  };

  Modal.defaultProps = {
    className: "",
    open: true,
    size: "medium"
  };
  return Modal;
}(React.PureComponent);

var css$r = ".ProgressBar-module_Bar__357tf {\n  width: 100%;\n  border-radius: 361px; }\n\n.ProgressBar-module_Progress__FcFUX {\n  position: relative;\n  top: 0;\n  height: 100%;\n  border-radius: 361px;\n  max-width: 100%;\n  transition: width 250ms ease-out; }\n";
var styles$g = {"Bar":"ProgressBar-module_Bar__357tf","Progress":"ProgressBar-module_Progress__FcFUX"};
styleInject(css$r);

var ProgressBar =
/** @class */
function (_super) {
  __extends(ProgressBar, _super);

  function ProgressBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ProgressBar.prototype.render = function () {
    var _a = this.props,
        barHeight = _a.barHeight,
        barColor = _a.barColor,
        progressColor = _a.progressColor,
        progress = _a.progress;
    return React__default.createElement("div", {
      className: styles$g.Bar,
      style: {
        backgroundColor: barColor,
        height: barHeight + "px"
      }
    }, React__default.createElement("div", {
      className: styles$g.Progress,
      style: {
        backgroundColor: progressColor,
        width: progress + "%"
      }
    }));
  };

  ProgressBar.defaultProps = {
    barHeight: 8,
    barColor: Color$1.green200,
    progressColor: Color$1.primaryGreen
  };
  return ProgressBar;
}(React__default.PureComponent);

var RenderBoolean = function (_a) {
  var value = _a.value;
  return React__default.createElement("span", null, value ? "Yes" : "No");
};

var Statistic =
/** @class */
function (_super) {
  __extends(Statistic, _super);

  function Statistic() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.formattedValue = function (value, format) {
      switch (format) {
        case "money":
          return React__default.createElement(FormatMoney, {
            value: value
          });

        case "number":
          return React__default.createElement(FormatNumber, {
            value: value
          });

        case "percentage":
          return React__default.createElement(FormatPercent, {
            value: value
          });

        case "text":
          return value;

        default:
          return React__default.createElement(FormatNumber, {
            value: value
          });
      }
    };

    return _this;
  }

  Statistic.prototype.render = function () {
    var _a = this.props,
        label = _a.label,
        size = _a.size,
        value = _a.value,
        format = _a.format;

    switch (size) {
      case "tiny":
        return React__default.createElement("div", {
          className: "flex flex-column justify-center items-center"
        }, React__default.createElement(Typography.Small, null, this.formattedValue(value, format)), React__default.createElement(Typography.Tiny, {
          uppercase: true,
          muted: true
        }, label));

      case "small":
        return React__default.createElement("div", {
          className: "flex flex-column justify-center items-center"
        }, React__default.createElement(Typography.Small, null, this.formattedValue(value, format)), React__default.createElement(Typography.Small, {
          uppercase: true,
          muted: true
        }, label));

      case "regular":
        return React__default.createElement("div", {
          className: "flex flex-column justify-center items-center"
        }, React__default.createElement(Typography, null, this.formattedValue(value, format)), React__default.createElement(Typography.Small, {
          uppercase: true,
          muted: true
        }, label));

      case "large":
        return React__default.createElement("div", {
          className: "flex flex-column justify-center items-center"
        }, React__default.createElement(Typography.Large, null, this.formattedValue(value, format)), React__default.createElement(Typography.Small, {
          uppercase: true,
          muted: true
        }, label));

      case "xlarge":
        return React__default.createElement("div", {
          className: "flex flex-column justify-center items-center"
        }, React__default.createElement(Typography.HeadingSmall, {
          weight: 600
        }, this.formattedValue(value, format)), React__default.createElement(Typography, {
          uppercase: true,
          muted: true
        }, label));

      case "huge":
        return React__default.createElement("div", {
          className: "flex flex-column justify-center items-center"
        }, React__default.createElement(Typography.HeadingLarge, {
          weight: 600
        }, this.formattedValue(value, format)), React__default.createElement(Typography, {
          uppercase: true,
          muted: true
        }, label));

      default:
        return React__default.createElement("div", {
          className: "flex flex-column justify-center items-center"
        }, React__default.createElement(Typography, {
          weight: 600
        }, this.formattedValue(value, format)), React__default.createElement(Typography.Small, {
          uppercase: true,
          muted: true
        }, label));
    }
  };

  Statistic.defaultProps = {
    size: "regular"
  };
  return Statistic;
}(React.PureComponent);

var css$s = ".Tabs {\n  overflow-x: scroll; }\n  .Tabs div {\n    padding-left: 1rem;\n    padding-right: 1rem; }\n";
styleInject(css$s);

var css$t = ".Tab-module_Tab__3boJB {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 1rem;\n  cursor: pointer;\n  border-bottom: 1px solid var(--grey-500);\n  transition: 200ms ease-in-out;\n  color: var(--grey-800);\n  letter-spacing: 0.03rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  font-size: 12px; }\n\n.Tab-module_Tab__3boJB:hover {\n  border-bottom: 1px solid var(--primary-green);\n  color: var(--black-500); }\n\n.Tab-module_TabActive__3s4pt:hover {\n  border-bottom: 1px solid var(--primary-green); }\n\n.Tab-module_TabActive__3s4pt {\n  color: var(--primary-green);\n  border-bottom: 1px solid var(--primary-green); }\n";
var style = {"Tab":"Tab-module_Tab__3boJB","TabActive":"Tab-module_TabActive__3s4pt"};
styleInject(css$t);

function Tab(props) {
  var title = props.title,
      path = props.path,
      active = props.active,
      className = props.className,
      showCount = props.showCount,
      count = props.count,
      onClick = props.onClick,
      _a = props.useRedux,
      useRedux = _a === void 0 ? true : _a;
  var isActive = active || window.location.pathname === path;
  var dispatch = useRedux ? reactRedux.useDispatch() : null;

  var _clicked = function () {
    if (onClick) {
      onClick();
    } else if (path) {
      useRedux && dispatch(connectedReactRouter.push(path));
    }
  };

  return React__default.createElement("div", {
    className: style.Tab + " " + (isActive && style.TabActive) + " " + className,
    onClick: _clicked
  }, title, showCount && React__default.createElement("span", null, "\xA0", React__default.createElement(NumberFormat, {
    prefix: "(",
    suffix: ")",
    displayType: "text",
    value: count
  })));
}

var Tabs =
/** @class */
function (_super) {
  __extends(Tabs, _super);

  function Tabs() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Tabs.prototype.render = function () {
    var children = this.props.children;
    var activeChild = children.find(function (child) {
      if (!child || !child.props) {
        return false;
      }

      return child.props.active || window.location.pathname === child.props.path;
    });
    return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
      className: "Tabs flex"
    }, children), React__default.createElement("div", {
      className: "Tabs-Content"
    }, activeChild && activeChild.props.component));
  };

  Tabs.Tab = Tab;
  return Tabs;
}(React.Component);

var truncateString = function (length, separator) {
  if (separator === void 0) {
    separator = "...";
  }

  return function (string) {
    return length < string.length ? string.slice(0, length).trimEnd() + separator : string;
  };
};
function childIsVisible(parent, child, offset) {
  if (offset === void 0) {
    offset = 120;
  }

  if (!parent || !child) return true;
  var parentRect = parent.getBoundingClientRect();
  var parentViewableArea = {
    height: parent.clientHeight,
    width: parent.clientWidth
  };
  var childRect = child.getBoundingClientRect(); // Is the child viewable?

  var childViewable = childRect.top >= parentRect.top && childRect.top <= parentRect.top + parentViewableArea.height - offset;
  return childViewable;
}
function stringifiedObjectValues(obj, separator) {
  if (separator === void 0) {
    separator = ", ";
  }

  return Object.values(JSON.parse(obj)).join(separator);
}

function Margin(props) {
  var _a = props.marginSize,
      marginSize = _a === void 0 ? 1.5 : _a,
      _b = props.showDividerLine,
      showDividerLine = _b === void 0 ? false : _b,
      rest = __rest(props, ["marginSize", "showDividerLine"]);

  return React__default.createElement(Divider, _extends({}, rest, {
    marginSize: marginSize,
    showDividerLine: showDividerLine
  }));
}

function StateContainer(_a) {
  var initialState = _a.initialState,
      children = _a.children;

  var _b = React.useState(initialState),
      state = _b[0],
      setState = _b[1];

  return children({
    state: state,
    setState: setState
  });
}

function StateCtrl(props) {
  var children = props.children,
      toggleInterval = props.toggleInterval,
      _a = props.label,
      label = _a === void 0 ? "" : _a,
      _b = props.defaultState,
      defaultState = _b === void 0 ? false : _b;

  var _c = React.useState(defaultState),
      on = _c[0],
      setOn = _c[1]; // If toggleInterval prop, toggle the state every X milliseconds


  React.useEffect(function () {
    if (!toggleInterval) return;
    var milliseconds = typeof toggleInterval === "number" ? toggleInterval : 2000;
    var intervalId = setInterval(function () {
      return setOn(function (onState) {
        return !onState;
      });
    }, milliseconds);
    return function () {
      return clearInterval(intervalId);
    };
  }, []);
  return React__default.createElement(React.Fragment, null, !toggleInterval && React__default.createElement("div", null, React__default.createElement(Toggle$1, {
    label: "Toggle " + label,
    input: {
      onChange: function () {
        return setOn(function (onState) {
          return !onState;
        });
      },
      name: "",
      value: on,
      onBlur: function () {
        return null;
      },
      onFocus: function () {
        return null;
      }
    },
    meta: {},
    className: "my-05"
  })), children({
    state: on,
    toggleOff: function () {
      return setOn(false);
    }
  }));
}

function Text$2(props) {
  var underlined = props.underlined,
      marginTop = props.marginTop,
      _a = props.marginBottom,
      marginBottom = _a === void 0 ? ".6rem" : _a;

  {
    marginTop = "1.5rem";
  }

  return React__default.createElement("div", null, React__default.createElement("span", {
    className: "" + " " + (underlined ? "border-b" : ""),
    style: {
      marginTop: marginTop,
      marginBottom: marginBottom,
      display: "inline-block"
    }
  }, props.children));
}



var StoryCmpts = /*#__PURE__*/Object.freeze({
  Margin: Margin,
  StateContainer: StateContainer,
  StateCtrl: StateCtrl,
  Text: Text$2
});

// Components
var InputValidations = InputValidationsToExport; // Storybook
var StoryHelpers = StoryCmpts;

exports.Alert = Alert;
exports.AnimatedCheckmark = AnimatedCheckmark;
exports.AttributeList = AttributeList;
exports.Avatar = Avatar;
exports.Backdrop = Backdrop;
exports.BoxShadow = BoxShadow$1;
exports.Buttons = Buttons;
exports.Card = Card;
exports.Chip = Chip;
exports.Color = Color$1;
exports.CssFramework = CssVariables;
exports.Divider = Divider;
exports.Expand = Expand;
exports.Fade = Fade;
exports.FormGroup = FormGroup;
exports.FormatMoney = FormatMoney;
exports.FormatNumber = FormatNumber;
exports.FormatPercent = FormatPercent;
exports.FormatWeight = FormatWeight;
exports.Grow = Grow;
exports.Icon = Icon;
exports.InputValidations = InputValidations;
exports.Inputs = Inputs;
exports.Link = Link;
exports.Loader = Loader;
exports.Modal = Modal;
exports.ProgressBar = ProgressBar;
exports.RenderBoolean = RenderBoolean;
exports.Scale = Scale;
exports.ScrollIntoView = ScrollIntoView;
exports.Segment = Segment;
exports.Statistic = Statistic;
exports.StoryHelpers = StoryHelpers;
exports.Tabs = Tabs;
exports.Toggle = Toggle;
exports.Tooltip = Tooltip;
exports.Transition = Transition;
exports.Typography = Typography;
exports.childIsVisible = childIsVisible;
exports.iconNames = iconNames;
exports.marginHorizontal = marginHorizontal;
exports.marginVertical = marginVertical;
exports.paddingHorizontal = paddingHorizontal;
exports.paddingVertical = paddingVertical;
exports.renderDate = renderDate;
exports.size = size;
exports.stringifiedObjectValues = stringifiedObjectValues;
exports.truncateString = truncateString;
//# sourceMappingURL=index.js.map
