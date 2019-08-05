import React, { Component, PureComponent, useState, useEffect, Fragment } from 'react';
import lowerFirst from 'lodash/lowerFirst';
import findKey from 'lodash/findKey';
import pick from 'lodash/pick';
import Tippy from '@tippy.js/react';
import kebabCase from 'lodash/kebabCase';

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

  BaseColor["white500"] = "hsl(0, 0%, 100%)"; // Reds

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

  Color["white500"] = "hsl(0, 0%, 100%)"; // Reds

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

var AnimatedCheckmark = function (_a) {
  var _b = _a.size,
      size = _b === void 0 ? '100%' : _b;
  return React.createElement("div", {
    style: {
      height: size,
      width: size,
      borderRadius: '50%'
    }
  }, React.createElement("svg", {
    className: "AnimatedCheckmark",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 52 52"
  }, React.createElement("circle", {
    className: "checkmark__circle",
    cx: "52",
    cy: "52",
    r: "1000",
    fill: "none"
  }), React.createElement("path", {
    className: "checkmark__check",
    fill: "none",
    d: "M14.1 27.2l7.1 7.2 16.7-16.8"
  })));
};

try {
  AnimatedCheckmark.displayName = "AnimatedCheckmark";
  AnimatedCheckmark.__docgenInfo = {
    description: "",
    displayName: "AnimatedCheckmark",
    props: {
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "string | number"
        }
      }
    }
  };
} catch (e) {}

var Font;

(function (Font) {
  Font["defaultFontFamily"] = "Inter";
  Font["defaultFontSize"] = "14px";
})(Font || (Font = {}));

var Font$1 = Font;

function typographyFactory(defaultProps) {
  return function (props) {
    var factoryStyle = defaultProps.style;
    var children = props.children,
        style = props.style;
    if (children === undefined || React.Children.count(children) === 0) return null;

    var mergedProperties = __assign({}, defaultProps, props);

    var p = mergedProperties.p,
        muted = mergedProperties.muted,
        light = mergedProperties.light,
        block = mergedProperties.block,
        secondary = mergedProperties.secondary,
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
      fontFamily: secondary ? "Akkurat-Mono" : "Inter",
      color: color,
      textTransform: uppercase ? "uppercase" : "initial",
      textAlign: alignment ? alignment : "initial"
    };

    var mergedStyles = __assign({}, factoryStyle, style);

    var styleProp = __assign({}, styleDefaults, fontWeightStyle, boldStyles, italicStyle, kerningStyle, mutedStyle, blockStyle, lightStyle, invertedStyle, errorStyle, mergedStyles);

    var properties = {
      children: children,
      className: className,
      style: styleProp,
      "data-qa": dataQa
    };
    return p ? React.createElement("p", properties) : React.createElement("span", properties);
  };
}

try {
  typographyFactory.displayName = "typographyFactory";
  typographyFactory.__docgenInfo = {
    description: "",
    displayName: "typographyFactory",
    props: {
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

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

try {
  SuperTitle.displayName = "SuperTitle";
  SuperTitle.__docgenInfo = {
    description: "",
    displayName: "SuperTitle",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

try {
  Title.displayName = "Title";
  Title.__docgenInfo = {
    description: "",
    displayName: "Title",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

try {
  Subtitle.displayName = "Subtitle";
  Subtitle.__docgenInfo = {
    description: "",
    displayName: "Subtitle",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

try {
  HeadingLarge.displayName = "HeadingLarge";
  HeadingLarge.__docgenInfo = {
    description: "",
    displayName: "HeadingLarge",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

try {
  HeadingSmall.displayName = "HeadingSmall";
  HeadingSmall.__docgenInfo = {
    description: "",
    displayName: "HeadingSmall",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

try {
  HeadingTiny.displayName = "HeadingTiny";
  HeadingTiny.__docgenInfo = {
    description: "",
    displayName: "HeadingTiny",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

try {
  Large.displayName = "Large";
  Large.__docgenInfo = {
    description: "",
    displayName: "Large",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

try {
  Regular.displayName = "Regular";
  Regular.__docgenInfo = {
    description: "",
    displayName: "Regular",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

try {
  Small.displayName = "Small";
  Small.__docgenInfo = {
    description: "",
    displayName: "Small",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

try {
  Tiny.displayName = "Tiny";
  Tiny.__docgenInfo = {
    description: "",
    displayName: "Tiny",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

var Typography =
/** @class */
function (_super) {
  __extends(Typography, _super);

  function Typography() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Typography.prototype.render = function () {
    return React.createElement(Regular, this.props);
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
}(Component);

try {
  Typography.displayName = "Typography";
  Typography.__docgenInfo = {
    description: "",
    displayName: "Typography",
    props: {
      "children": {
        "defaultValue": null,
        "description": "React Children nodes are required",
        "name": "children",
        "required": true,
        "type": {
          "name": "ReactNode"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "Optionally pass className",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "Optionally pass style object",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "muted": {
        "defaultValue": null,
        "description": "Text can be the muted color",
        "name": "muted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "Text can be display: block",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "weight": {
        "defaultValue": null,
        "description": "Font weight",
        "name": "weight",
        "required": false,
        "type": {
          "name": "300 | 400 | 500 | 600 | 700"
        }
      },
      "bold": {
        "defaultValue": null,
        "description": "Text can be bold",
        "name": "bold",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "italicize": {
        "defaultValue": null,
        "description": "Text can be italic",
        "name": "italicize",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "p": {
        "defaultValue": null,
        "description": "Text can be a <p /> tag instead of a <span />",
        "name": "p",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "secondary": {
        "defaultValue": null,
        "description": "Text can use the secondary font",
        "name": "secondary",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "Easily make the text the default light color",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Use error styles",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "inverted": {
        "defaultValue": null,
        "description": "Text color for dark backgrounds",
        "name": "inverted",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "uppercase": {
        "defaultValue": null,
        "description": "",
        "name": "uppercase",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "alignment": {
        "defaultValue": null,
        "description": "",
        "name": "alignment",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "kerning": {
        "defaultValue": null,
        "description": "",
        "name": "kerning",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "data-qa": {
        "defaultValue": null,
        "description": "",
        "name": "data-qa",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

function logError(message) {

  console.error(message);
}

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
      logError("Please add " + insetColorName + " to Color Enum");
    }

    return insetColorValue;
  } catch (err) {
    logError(err.message);
    return "transparent";
  }
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
    return React.createElement("div", {
      className: "CohubIcon " + name + "Icon " + className + " " + clickable,
      style: __assign({
        width: size,
        height: size,
        transition: "opacity 300ms ease-in 200ms",
        opacity: disabled ? 0.3 : undefined
      }, style),
      onClick: disabled ? undefined : onClick
    }, React.createElement("div", {
      className: "flex justify-center items-center"
    }, children({
      color: color || defaultColor,
      size: size
    })));
  };

  return IconWrapper;
}(PureComponent);

try {
  IconWrapper.displayName = "IconWrapper";
  IconWrapper.__docgenInfo = {
    description: "",
    displayName: "IconWrapper",
    props: {
      "defaultColor": {
        "defaultValue": null,
        "description": "",
        "name": "defaultColor",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Add = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M0.0769043 6.99998H13.9231M6.99998 13.9231V0.0769043",
      stroke: color,
      strokeWidth: "0.75"
    }));
  });
};

try {
  Add.displayName = "Add";
  Add.__docgenInfo = {
    description: "",
    displayName: "Add",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var ArrowDown = function (props) {
  return React.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primaryRed
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 8 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M3.86366 9.63634L3.51805 9.99766L3.86366 10.3282L4.20927 9.99766L3.86366 9.63634ZM0.381684 6.99766L3.51805 9.99766L4.20927 9.27502L1.07291 6.27502L0.381684 6.99766ZM4.20927 9.99766L7.34563 6.99766L6.65441 6.27502L3.51805 9.27502L4.20927 9.99766ZM4.36366 9.49998V0.772705H3.36366V9.49998H4.36366Z",
      fill: color
    }));
  });
};

try {
  ArrowDown.displayName = "ArrowDown";
  ArrowDown.__docgenInfo = {
    description: "",
    displayName: "ArrowDown",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var ArrowUp = function (props) {
  return React.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primaryGreen
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 8 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M4.13636 1.27271L4.48198 0.911384L4.13636 0.580799L3.79075 0.911384L4.13636 1.27271ZM7.61834 3.91138L4.48198 0.911384L3.79075 1.63403L6.92712 4.63403L7.61834 3.91138ZM3.79075 0.911384L0.654389 3.91138L1.34561 4.63403L4.48198 1.63403L3.79075 0.911384ZM3.63636 1.40907V10.1363H4.63636V1.40907H3.63636Z",
      fill: color
    }));
  });
};

try {
  ArrowUp.displayName = "ArrowUp";
  ArrowUp.__docgenInfo = {
    description: "",
    displayName: "ArrowUp",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Back = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",
      fill: color
    }));
  });
};

try {
  Back.displayName = "Back";
  Back.__docgenInfo = {
    description: "",
    displayName: "Back",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Bell = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      version: "1.1",
      viewBox: "0 0 24 24"
    }, React.createElement("path", {
      d: "M12,22c1.1,0 2,-0.9 2,-2h-4c0,1.1 0.89,2 2,2Zm6,-6v-5c0,-3.07 -1.64,-5.64 -4.5,-6.32v-0.68c0,-0.83 -0.67,-1.5 -1.5,-1.5c-0.83,0 -1.5,0.67 -1.5,1.5v0.68c-2.87,0.68 -4.5,3.24 -4.5,6.32v5l-2,2v1h16v-1l-2,-2Z",
      fill: color
    }));
  });
};

try {
  Bell.displayName = "Bell";
  Bell.__docgenInfo = {
    description: "",
    displayName: "Bell",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Calculator = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M21.2498 2.50002H8.74976C7.37101 2.50002 6.24976 3.62252 6.24976 5.00002V25C6.24976 26.3788 7.37101 27.5 8.74976 27.5H21.2498C22.6298 27.5 23.7498 26.3788 23.7498 25V5.00002C23.7498 3.62252 22.6298 2.50002 21.2498 2.50002ZM21.2498 5.00002L21.2485 10H8.74976V5.00002H21.2498ZM8.74976 25V12.5H21.2485L21.246 25H8.74976Z",
      fill: color
    }), React.createElement("path", {
      d: "M11.2498 16.2501C11.9401 16.2501 12.4998 15.6904 12.4998 15.0001C12.4998 14.3097 11.9401 13.7501 11.2498 13.7501C10.5594 13.7501 9.99976 14.3097 9.99976 15.0001C9.99976 15.6904 10.5594 16.2501 11.2498 16.2501Z",
      fill: color
    }), React.createElement("path", {
      d: "M14.9998 16.2501C15.6901 16.2501 16.2498 15.6904 16.2498 15.0001C16.2498 14.3097 15.6901 13.7501 14.9998 13.7501C14.3094 13.7501 13.7498 14.3097 13.7498 15.0001C13.7498 15.6904 14.3094 16.2501 14.9998 16.2501Z",
      fill: color
    }), React.createElement("path", {
      d: "M18.7498 16.2501C19.4401 16.2501 19.9998 15.6904 19.9998 15.0001C19.9998 14.3097 19.4401 13.7501 18.7498 13.7501C18.0594 13.7501 17.4998 14.3097 17.4998 15.0001C17.4998 15.6904 18.0594 16.2501 18.7498 16.2501Z",
      fill: color
    }), React.createElement("path", {
      d: "M19.9998 6.25009H17.4998V8.75009H19.9998V6.25009Z",
      fill: color
    }), React.createElement("path", {
      d: "M11.2498 20.0001C11.9401 20.0001 12.4998 19.4404 12.4998 18.7501C12.4998 18.0597 11.9401 17.5001 11.2498 17.5001C10.5594 17.5001 9.99976 18.0597 9.99976 18.7501C9.99976 19.4404 10.5594 20.0001 11.2498 20.0001Z",
      fill: color
    }), React.createElement("path", {
      d: "M14.9998 20.0001C15.6901 20.0001 16.2498 19.4404 16.2498 18.7501C16.2498 18.0597 15.6901 17.5001 14.9998 17.5001C14.3094 17.5001 13.7498 18.0597 13.7498 18.7501C13.7498 19.4404 14.3094 20.0001 14.9998 20.0001Z",
      fill: color
    }), React.createElement("path", {
      d: "M18.7498 20.0001C19.4401 20.0001 19.9998 19.4404 19.9998 18.7501C19.9998 18.0597 19.4401 17.5001 18.7498 17.5001C18.0594 17.5001 17.4998 18.0597 17.4998 18.7501C17.4998 19.4404 18.0594 20.0001 18.7498 20.0001Z",
      fill: color
    }), React.createElement("path", {
      d: "M11.2498 23.7501C11.9401 23.7501 12.4998 23.1904 12.4998 22.5001C12.4998 21.8097 11.9401 21.2501 11.2498 21.2501C10.5594 21.2501 9.99976 21.8097 9.99976 22.5001C9.99976 23.1904 10.5594 23.7501 11.2498 23.7501Z",
      fill: color
    }), React.createElement("path", {
      d: "M14.9998 23.7501C15.6901 23.7501 16.2498 23.1904 16.2498 22.5001C16.2498 21.8097 15.6901 21.2501 14.9998 21.2501C14.3094 21.2501 13.7498 21.8097 13.7498 22.5001C13.7498 23.1904 14.3094 23.7501 14.9998 23.7501Z",
      fill: color
    }), React.createElement("path", {
      d: "M18.7498 23.7501C19.4401 23.7501 19.9998 23.1904 19.9998 22.5001C19.9998 21.8097 19.4401 21.2501 18.7498 21.2501C18.0594 21.2501 17.4998 21.8097 17.4998 22.5001C17.4998 23.1904 18.0594 23.7501 18.7498 23.7501Z",
      fill: color
    }));
  });
};

try {
  Calculator.displayName = "Calculator";
  Calculator.__docgenInfo = {
    description: "",
    displayName: "Calculator",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Calendar = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      width: size,
      height: size
    }, React.createElement("path", {
      fill: color,
      d: "M368.005 272h-96v96h96v-96zm-32-208v32h-160V64h-48v32h-24.01c-22.002 0-40 17.998-40 40v272c0 22.002 17.998 40 40 40h304.01c22.002 0 40-17.998 40-40V136c0-22.002-17.998-40-40-40h-24V64h-48zm72 344h-304.01V196h304.01v212z"
    }));
  });
};

try {
  Calendar.displayName = "Calendar";
  Calendar.__docgenInfo = {
    description: "",
    displayName: "Calendar",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var CaretDown = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M7.41,7.84l4.59,4.58l4.59,-4.58l1.41,1.41l-6,6l-6,-6Z",
      fill: color
    }), React.createElement("path", {
      fill: "none",
      d: "M0,-0.75h24v24h-24Z"
    }));
  });
};

try {
  CaretDown.displayName = "CaretDown";
  CaretDown.__docgenInfo = {
    description: "",
    displayName: "CaretDown",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Checkmark = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z",
      fill: color
    }));
  });
};

try {
  Checkmark.displayName = "Checkmark";
  Checkmark.__docgenInfo = {
    description: "",
    displayName: "Checkmark",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var ChevronDown = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M0.730415 1.00001L6.61014 6.07693L12.4899 1.00001",
      stroke: color
    }));
  });
};

try {
  ChevronDown.displayName = "ChevronDown";
  ChevronDown.__docgenInfo = {
    description: "",
    displayName: "ChevronDown",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var ChevronLeft = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M13 1L2 12.5L13 24",
      stroke: color,
      strokeWidth: "2"
    }));
  });
};

try {
  ChevronLeft.displayName = "ChevronLeft";
  ChevronLeft.__docgenInfo = {
    description: "",
    displayName: "ChevronLeft",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var ChevronRight = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M1 24L12 12.5L1 1",
      stroke: color,
      strokeWidth: "2"
    }));
  });
};

try {
  ChevronRight.displayName = "ChevronRight";
  ChevronRight.__docgenInfo = {
    description: "",
    displayName: "ChevronRight",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Circle = function (props) {
  return React.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primaryGreen
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("circle", {
      cx: "12.5",
      cy: "12.5",
      r: "11.5",
      fill: "none",
      style: {
        stroke: color,
        transition: 'stroke 300ms ease-in'
      },
      strokeWidth: "2"
    }));
  });
};

try {
  Circle.displayName = "Circle";
  Circle.__docgenInfo = {
    description: "",
    displayName: "Circle",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var CircleCheck = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 6 6",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("rect", {
      width: "6",
      height: "6",
      fill: "black",
      fillOpacity: "0"
    }), React.createElement("circle", {
      cx: "3",
      cy: "3",
      r: "2.875",
      stroke: color,
      strokeWidth: "0.25"
    }), React.createElement("rect", {
      width: "3",
      height: "2.04523",
      fill: color,
      fillOpacity: "0",
      transform: "translate(1.5 1.875)"
    }), React.createElement("path", {
      d: "M1.5 2.89243L2.52262 3.91504L4.5 1.875",
      stroke: color,
      strokeWidth: "0.25"
    }));
  });
};

try {
  CircleCheck.displayName = "CircleCheck";
  CircleCheck.__docgenInfo = {
    description: "",
    displayName: "CircleCheck",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var CirclePlus = function (props) {
  return React.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primary
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "9",
      fill: color
    }), React.createElement("path", {
      d: "M2.76904 9.00006H15.2306M8.99981 15.2308V2.76929",
      stroke: ContrastColor[color],
      strokeWidth: "0.5"
    }));
  });
};

try {
  CirclePlus.displayName = "CirclePlus";
  CirclePlus.__docgenInfo = {
    description: "",
    displayName: "CirclePlus",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var CirclePlusInverted = function (props) {
  return React.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.primaryGreen
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "8.75",
      stroke: color,
      strokeWidth: "0.5"
    }), React.createElement("path", {
      d: "M2.76904 9.00006H15.2306M8.99981 15.2308V2.76929",
      stroke: color,
      strokeWidth: "0.5"
    }));
  });
};

try {
  CirclePlusInverted.displayName = "CirclePlusInverted";
  CirclePlusInverted.__docgenInfo = {
    description: "",
    displayName: "CirclePlusInverted",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var CircleRemove = function (props) {
  return React.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.black
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 6 6",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("rect", {
      width: "6",
      height: "6",
      fill: color,
      fillOpacity: "0"
    }), React.createElement("circle", {
      cx: "3",
      cy: "3",
      r: "2.875",
      stroke: color,
      strokeWidth: "0.25"
    }), React.createElement("path", {
      d: "M1.5314 4.46859L4.46862 1.53138M4.46862 4.46858L1.5314 1.53137",
      stroke: color,
      strokeWidth: "0.25"
    }));
  });
};

try {
  CircleRemove.displayName = "CircleRemove";
  CircleRemove.__docgenInfo = {
    description: "",
    displayName: "CircleRemove",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Close = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M19,6.41l-1.41,-1.41l-5.59,5.59l-5.59,-5.59l-1.41,1.41l5.59,5.59l-5.59,5.59l1.41,1.41l5.59,-5.59l5.59,5.59l1.41,-1.41l-5.59,-5.59Z",
      fill: color
    }), React.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

try {
  Close.displayName = "Close";
  Close.__docgenInfo = {
    description: "",
    displayName: "Close",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Columns = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      version: "1.1",
      viewBox: "0 0 24 24"
    }, React.createElement("path", {
      d: "M10,18h5v-13h-5v13Zm-6,0h5v-13h-5v13Zm12,-13v13h5v-13h-5Z",
      fill: color
    }), React.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

try {
  Columns.displayName = "Columns";
  Columns.__docgenInfo = {
    description: "",
    displayName: "Columns",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var ControlPanel = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M15 2L15 22M4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22Z",
      stroke: color,
      strokeWidth: "2"
    }));
  });
};

try {
  ControlPanel.displayName = "ControlPanel";
  ControlPanel.__docgenInfo = {
    description: "",
    displayName: "ControlPanel",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Dashboard = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24"
    }, React.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React.createElement("path", {
      fill: color,
      d: "M3,13h8v-10h-8v10Zm0,8h8v-6h-8v6Zm10,0h8v-10h-8v10Zm0,-18v6h8v-6h-8Z"
    }));
  });
};

try {
  Dashboard.displayName = "Dashboard";
  Dashboard.__docgenInfo = {
    description: "",
    displayName: "Dashboard",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Eye = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M16.3627 4.81875C16.2248 4.6215 12.9165 0 8.25 0C3.5835 0 0.27525 4.6215 0.13725 4.81875C-0.04575 5.0775 -0.04575 5.42325 0.13725 5.682C0.27525 5.8785 3.5835 10.5 8.25 10.5C12.9165 10.5 16.2248 5.8785 16.3627 5.682C16.5457 5.4225 16.5457 5.0775 16.3627 4.81875ZM8.25 9C5.1255 9 2.58825 6.31875 1.70175 5.24925C2.586 4.17975 5.115 1.5 8.25 1.5C11.3745 1.5 13.9118 4.182 14.7983 5.25075C13.914 6.321 11.385 9 8.25 9Z",
      transform: "translate(0.75 6)",
      fill: color
    }), React.createElement("path", {
      d: "M3 0C1.3455 0 0 1.34625 0 3C0 4.6545 1.3455 6 3 6C4.6545 6 6 4.6545 6 3C6 1.34625 4.6545 0 3 0ZM3 4.5C2.17275 4.5 1.5 3.82725 1.5 3C1.5 2.1735 2.17275 1.5 3 1.5C3.82725 1.5 4.5 2.1735 4.5 3C4.5 3.82725 3.82725 4.5 3 4.5Z",
      transform: "translate(6 8.25)",
      fill: color
    }));
  });
};

try {
  Eye.displayName = "Eye";
  Eye.__docgenInfo = {
    description: "",
    displayName: "Eye",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Back$1 = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z",
      fill: color
    }));
  });
};

try {
  Forward.displayName = "Forward";
  Forward.__docgenInfo = {
    description: "",
    displayName: "Forward",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Laptop = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M29.5413 24.6675L27.5 18.5475V3.75C27.5 3.05875 26.9413 2.5 26.25 2.5H3.75002C3.06002 2.5 2.50002 3.05875 2.50002 3.75V18.5475L0.460018 24.6675C0.226268 25.365 0.322518 26.08 0.718768 26.6313C1.11752 27.185 1.76502 27.5 2.50002 27.5H27.5C28.235 27.5 28.8838 27.185 29.2813 26.6325C29.6788 26.0812 29.7725 25.365 29.5413 24.6675ZM25 5V17.5H5.00002V5H25ZM2.98502 25L4.65127 20H25.35L27.0163 25H2.98502Z",
      fill: color
    }), React.createElement("path", {
      d: "M10 13.75H11.25H17.5H18.75V8.75H12.5V7.5C12.5 6.80875 11.9412 6.25 11.25 6.25H8.75V8.75H10V13.75Z",
      fill: color
    }), React.createElement("path", {
      d: "M12.1339 14.1161C12.622 14.6043 12.622 15.3957 12.1339 15.8839C11.6457 16.372 10.8543 16.372 10.3661 15.8839C9.87796 15.3957 9.87796 14.6043 10.3661 14.1161C10.8543 13.628 11.6457 13.628 12.1339 14.1161Z",
      fill: color
    }), React.createElement("path", {
      d: "M18.3839 14.1161C18.872 14.6043 18.872 15.3957 18.3839 15.8839C17.8957 16.372 17.1043 16.372 16.6161 15.8839C16.128 15.3957 16.128 14.6043 16.6161 14.1161C17.1043 13.628 17.8957 13.628 18.3839 14.1161Z",
      fill: color
    }), React.createElement("path", {
      d: "M12.5 21.25H17.5V23.75H12.5V21.25Z",
      fill: color
    }));
  });
};

try {
  Laptop.displayName = "Laptop";
  Laptop.__docgenInfo = {
    description: "",
    displayName: "Laptop",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Report = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M6.25 23.75V3.75H3.75V25C3.75 25.69 4.31 26.25 5 26.25H26.25V23.75H6.25Z",
      fill: color
    }), React.createElement("path", {
      d: "M13.75 15.5175L16.6162 18.3825C17.105 18.8712 17.895 18.8712 18.3837 18.3825L25.8837 10.8825L24.1162 9.11499L17.5 15.7325L14.6337 12.8662C14.145 12.3775 13.355 12.3775 12.8662 12.8662L7.86621 17.8662L9.63371 19.6337L13.75 15.5175Z",
      fill: color
    }));
  });
};

try {
  Report.displayName = "Report";
  Report.__docgenInfo = {
    description: "",
    displayName: "Report",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Sales = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M24.4065 1.4375C24.0377 1.20875 23.579 1.18875 23.1902 1.3825L18.8402 3.5575L15.6927 1.46C15.2727 1.18 14.7265 1.18 14.3065 1.46L11.1602 3.5575L6.81024 1.3825C6.42274 1.18875 5.96274 1.20875 5.59399 1.4375C5.22524 1.665 5.00024 2.06625 5.00024 2.5V27.5C5.00024 27.9338 5.22524 28.335 5.59399 28.5638C5.95274 28.7888 6.41524 28.8163 6.81024 28.6188L11.1602 26.4438L14.3077 28.54C14.7277 28.8213 15.274 28.8213 15.694 28.54L18.8402 26.4438L23.1915 28.6188C23.5802 28.8125 24.039 28.7925 24.4077 28.5638C24.7752 28.335 25.0002 27.9338 25.0002 27.5V2.5C25.0002 2.06625 24.7752 1.665 24.4065 1.4375ZM22.5002 25.4775L19.309 23.8825C18.9065 23.6813 18.4277 23.7113 18.0565 23.96L15.0002 25.9975L11.944 23.96C11.7352 23.8213 11.4927 23.75 11.2502 23.75C11.0602 23.75 10.8665 23.7938 10.6915 23.8825L7.50024 25.4775V4.52375L10.6915 6.1175C11.0915 6.3175 11.5702 6.28875 11.944 6.03875L15.0002 4.0025L18.0565 6.03875C18.429 6.28875 18.9077 6.3175 19.309 6.1175L22.5002 4.52375V25.4775Z",
      fill: color
    }), React.createElement("path", {
      d: "M16.25 8.74994H13.75V10.0637C12.325 10.3537 11.25 11.6162 11.25 13.1249C11.25 14.8474 12.6513 16.2499 14.375 16.2499H15.625C15.9688 16.2499 16.25 16.5312 16.25 16.8749C16.25 17.2187 15.9688 17.4999 15.625 17.4999H11.25V19.9999H13.75V21.2499H16.25V19.9362C17.675 19.6462 18.75 18.3824 18.75 16.8749C18.75 15.1524 17.3488 13.7499 15.625 13.7499H14.375C14.0312 13.7499 13.75 13.4687 13.75 13.1249C13.75 12.7812 14.0312 12.4999 14.375 12.4999H18.75V9.99994H16.25V8.74994Z",
      fill: color
    }));
  });
};

try {
  Sales.displayName = "Sales";
  Sales.__docgenInfo = {
    description: "",
    displayName: "Sales",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Trash = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React.createElement("path", {
      fill: color,
      d: "M17,3h-12c-1.11,0 -2,0.9 -2,2v14c0,1.1 0.89,2 2,2h14c1.1,0 2,-0.9 2,-2v-12l-4,-4Zm-5,16c-1.66,0 -3,-1.34 -3,-3c0,-1.66 1.34,-3 3,-3c1.66,0 3,1.34 3,3c0,1.66 -1.34,3 -3,3Zm3,-10h-10v-4h10v4Z"
    }));
  });
};

try {
  Save.displayName = "Save";
  Save.__docgenInfo = {
    description: "",
    displayName: "Save",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Scales = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M29.8563 15.6975L29.8688 15.6913L25.7725 7.5H27.5V5H16.25V2.5H13.75V5H2.5V7.5H4.2275L0.1325 15.6913L0.145 15.6975C0.05875 15.865 0 16.0487 0 16.25C0 19.6963 2.80375 22.5 6.25 22.5C9.69625 22.5 12.5 19.6963 12.5 16.25C12.5 16.0487 12.4412 15.865 12.3563 15.6975L12.3688 15.6913L8.2725 7.5H13.75V25H10V27.5H20V25H16.25V7.5H21.7275L17.6325 15.6913L17.645 15.6975C17.5588 15.865 17.5 16.0487 17.5 16.25C17.5 19.6963 20.3037 22.5 23.75 22.5C27.1963 22.5 30 19.6963 30 16.25C30 16.0487 29.9412 15.865 29.8563 15.6975ZM6.25 9.045L9.2275 15H3.2725L6.25 9.045ZM6.25 20C4.62 20 3.23 18.955 2.715 17.5H9.785C9.27 18.955 7.88 20 6.25 20ZM26.7275 15H20.7725L23.75 9.045L26.7275 15ZM23.75 20C22.12 20 20.73 18.955 20.215 17.5H27.285C26.77 18.955 25.38 20 23.75 20Z",
      fill: color
    }));
  });
};

try {
  Scales.displayName = "Scales";
  Scales.__docgenInfo = {
    description: "",
    displayName: "Scales",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Search = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M15.5,14h-0.79l-0.28,-0.27c0.98,-1.14 1.57,-2.62 1.57,-4.23c0,-3.59 -2.91,-6.5 -6.5,-6.5c-3.59,0 -6.5,2.91 -6.5,6.5c0,3.59 2.91,6.5 6.5,6.5c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99l1.49,-1.49l-4.99,-5Zm-6,0c-2.49,0 -4.5,-2.01 -4.5,-4.5c0,-2.49 2.01,-4.5 4.5,-4.5c2.49,0 4.5,2.01 4.5,4.5c0,2.49 -2.01,4.5 -4.5,4.5Z",
      fill: color
    }), React.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

try {
  Search.displayName = "Search";
  Search.__docgenInfo = {
    description: "",
    displayName: "Search",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Shipping = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M2.5 10H22.5V15H25V8.75C25 8.74125 24.995 8.735 24.995 8.7275C24.9925 8.58125 24.9625 8.44 24.91 8.30375C24.8962 8.26875 24.8787 8.2375 24.8612 8.20375C24.8375 8.15625 24.8225 8.10375 24.79 8.0575L19.79 0.5575C19.5575 0.20875 19.1675 0 18.75 0H6.25C5.8325 0 5.4425 0.20875 5.21 0.55625L0.21 8.05625C0.17875 8.1025 0.1625 8.155 0.13875 8.20375C0.1225 8.2375 0.10375 8.26875 0.09 8.30375C0.0375 8.44 0.0075 8.58125 0.005 8.7275C0.005 8.735 0 8.74125 0 8.75V23.75C0 24.44 0.55875 25 1.25 25H10V22.5H2.5V10ZM21.4137 7.5H13.75V2.5H18.0812L21.4137 7.5ZM6.91875 2.5H11.25V7.5H3.58625L6.91875 2.5Z",
      fill: color
    }), React.createElement("path", {
      d: "M29.6335 22.8663L27.1335 20.3663C26.8998 20.1325 26.5823 20 26.2498 20H24.9998V18.75C24.9998 18.06 24.441 17.5 23.7498 17.5H13.7498C13.0585 17.5 12.4998 18.06 12.4998 18.75V27.5C12.4998 28.19 13.0585 28.75 13.7498 28.75H15.346C15.7798 29.4938 16.576 30 17.4998 30C18.4235 30 19.2198 29.4938 19.6535 28.75H22.8473C23.281 29.4938 24.0773 30 25.001 30C25.9248 30 26.721 29.4938 27.1548 28.75H28.7498C29.441 28.75 29.9998 28.19 29.9998 27.5V23.75C29.9998 23.4188 29.8685 23.1 29.6335 22.8663ZM14.9998 20H22.4998V26.25H19.6535C19.221 25.505 18.4235 25 17.4998 25C16.576 25 15.7785 25.505 15.346 26.25H14.9998V20ZM27.4998 26.25H27.1535C26.721 25.505 25.9235 25 24.9998 25V22.5H25.7323L27.4998 24.2675V26.25Z",
      fill: color
    }));
  });
};

try {
  Shipping.displayName = "Shipping";
  Shipping.__docgenInfo = {
    description: "",
    displayName: "Shipping",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var TagDollar = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M25.0001 10V1.25C25.0001 0.55875 24.4414 0 23.7501 0H15.0002C14.6677 0 14.3502 0.13125 14.1165 0.36625L0.36656 14.1162C-0.122187 14.605 -0.122187 15.395 0.36656 15.8837L9.1165 24.6337C9.36025 24.8775 9.68024 25 10.0002 25C10.3202 25 10.6402 24.8775 10.884 24.6337L24.6339 10.8837C24.8689 10.65 25.0001 10.3325 25.0001 10ZM22.5002 9.4825L10.0002 21.9825L3.01779 15L15.5177 2.5H22.5002V9.4825Z",
      fill: color
    }), React.createElement("path", {
      d: "M20.5177 4.48223C21.494 5.45854 21.494 7.04146 20.5177 8.01777C19.5414 8.99408 17.9585 8.99408 16.9822 8.01777C16.0059 7.04146 16.0059 5.45855 16.9822 4.48223C17.9585 3.50592 19.5414 3.50592 20.5177 4.48223Z",
      fill: color
    }), React.createElement("path", {
      d: "M26.25 21.25H23.75C23.0612 21.25 22.5 20.6887 22.5 20C22.5 19.3113 23.0612 18.75 23.75 18.75H28.7499V16.25H26.25V15H23.75V16.25C21.6825 16.25 20 17.9325 20 20C20 22.0675 21.6825 23.75 23.75 23.75H26.25C26.9387 23.75 27.4999 24.3112 27.4999 25C27.4999 25.6888 26.9387 26.25 26.25 26.25H21.25V28.75H23.75V30H26.25V28.75C28.3174 28.75 29.9999 27.0675 29.9999 25C29.9999 22.9325 28.3174 21.25 26.25 21.25Z",
      fill: color
    }));
  });
};

try {
  TagDollar.displayName = "TagDollar";
  TagDollar.__docgenInfo = {
    description: "",
    displayName: "TagDollar",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Trash$1 = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2v-12h-12v12Zm13,-15h-3.5l-1,-1h-5l-1,1h-3.5v2h14v-2Z",
      fill: color
    }), React.createElement("path", {
      fill: "none",
      d: "M0,0h24v24h-24Z"
    }));
  });
};

try {
  Trash$1.displayName = "Trash";
  Trash$1.__docgenInfo = {
    description: "",
    displayName: "Trash",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Triangle = function (props) {
  return React.createElement(IconWrapper, _extends({}, props, {
    defaultColor: Color$1.black
  }), function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 10 8",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M5 0L9.33013 7.5H0.669873L5 0Z",
      fill: color
    }));
  });
};

try {
  Triangle.displayName = "Triangle";
  Triangle.__docgenInfo = {
    description: "",
    displayName: "Triangle",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var TripleDotsVertical = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M0,0h24v24h-24Z",
      fill: "none"
    }), React.createElement("path", {
      fill: color,
      d: "M12,8c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2Zm0,2c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2Zm0,6c-1.1,0 -2,0.9 -2,2c0,1.1 0.9,2 2,2c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2Z"
    }));
  });
};

try {
  TripleDotsVertical.displayName = "TripleDotsVertical";
  TripleDotsVertical.__docgenInfo = {
    description: "",
    displayName: "TripleDotsVertical",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var UserGroup = function (props) {
  return React.createElement(IconWrapper, props, function (_a) {
    var color = _a.color,
        size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 30 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M25.4652 23.8238C26.3277 23.0225 26.8765 21.8913 26.8765 20.625C26.8765 18.2125 24.914 16.25 22.5015 16.25C20.089 16.25 18.1265 18.2125 18.1265 20.625C18.1265 21.8913 18.6752 23.0225 19.5377 23.8238C17.6902 24.4913 16.2515 25.7763 16.2515 27.5H18.7515C18.7515 26.7525 20.5177 25.8038 22.5015 25.8038C24.4852 25.8038 26.2515 26.7538 26.2515 27.5H28.7515C28.7515 25.775 27.3127 24.4913 25.4652 23.8238ZM22.5015 18.75C23.5352 18.75 24.3765 19.5913 24.3765 20.625C24.3765 21.6588 23.5352 22.5 22.5015 22.5C21.4677 22.5 20.6265 21.6588 20.6265 20.625C20.6265 19.5913 21.4677 18.75 22.5015 18.75Z",
      fill: color
    }), React.createElement("path", {
      d: "M10.4652 23.8238C11.3277 23.0225 11.8765 21.8913 11.8765 20.625C11.8765 18.2125 9.91397 16.25 7.50146 16.25C5.08896 16.25 3.12646 18.2125 3.12646 20.625C3.12646 21.8913 3.67522 23.0225 4.53771 23.8238C2.69021 24.4913 1.25146 25.775 1.25146 27.5H3.75146C3.75146 26.7525 5.51771 25.8038 7.50146 25.8038C9.48522 25.8038 11.2515 26.7538 11.2515 27.5H13.7515C13.7515 25.775 12.3127 24.4913 10.4652 23.8238ZM7.50146 18.75C8.53521 18.75 9.37646 19.5913 9.37646 20.625C9.37646 21.6588 8.53521 22.5 7.50146 22.5C6.46771 22.5 5.62646 21.6588 5.62646 20.625C5.62646 19.5913 6.46771 18.75 7.50146 18.75Z",
      fill: color
    }), React.createElement("path", {
      d: "M18.7512 13.75H21.2512C21.2512 12.025 19.8124 10.7413 17.9649 10.0738C18.8274 9.27252 19.3762 8.14127 19.3762 6.87502C19.3762 4.46252 17.4137 2.50002 15.0012 2.50002C12.5887 2.50002 10.6262 4.46252 10.6262 6.87502C10.6262 8.14127 11.1749 9.27252 12.0374 10.0738C10.1899 10.7413 8.75116 12.025 8.75116 13.75H11.2512C11.2512 13.0025 13.0174 12.0538 15.0012 12.0538C16.9849 12.0538 18.7512 13.0025 18.7512 13.75ZM15.0012 5.00002C16.0349 5.00002 16.8762 5.84127 16.8762 6.87502C16.8762 7.90877 16.0349 8.75002 15.0012 8.75002C13.9674 8.75002 13.1262 7.90877 13.1262 6.87502C13.1262 5.84127 13.9674 5.00002 15.0012 5.00002Z",
      fill: color
    }));
  });
};

try {
  UserGroup.displayName = "UserGroup";
  UserGroup.__docgenInfo = {
    description: "",
    displayName: "UserGroup",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}

var User = function (props) {
  var uniqueId = guid();
  return React.createElement(IconWrapper, props, function (_a) {
    var size = _a.size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 " + size + " " + size
    }, React.createElement("mask", {
      id: uniqueId,
      "mask-type": "alpha",
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: size,
      height: size
    }, React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: size / 2,
      fill: "#F2F2F2"
    })), React.createElement("g", {
      mask: "url(#" + uniqueId + ")"
    }, React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: size / 2,
      fill: "#F2F2F2"
    }), React.createElement("circle", {
      cx: size / 2,
      cy: size / 1.0909090909,
      r: size / 3,
      fill: "#C4C4C4"
    }), React.createElement("circle", {
      cx: size / 2,
      cy: size / 2.6666666667,
      r: size / 6,
      fill: "#C4C4C4"
    })));
  });
};

try {
  User.displayName = "User";
  User.__docgenInfo = {
    description: "",
    displayName: "User",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var icons = {
  add: Add,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  bell: Bell,
  back: Back,
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
  forward: Back$1,
  laptop: Laptop,
  report: Report,
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

var css = "";
styleInject(css);

var DefaultIcon = function (props) {
  var Ico = icons[props.name];

  if (!Ico) {
    logError(props.name + " Icon does not exist");
    return null;
  }

  return React.createElement(Ico, props);
};

var buildIcon = function (name) {
  return function (props) {
    return React.createElement(DefaultIcon, _extends({
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
    return React.createElement(DefaultIcon, this.props);
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
}(PureComponent);

try {
  Icon.displayName = "Icon";
  Icon.__docgenInfo = {
    description: "",
    displayName: "Icon",
    props: {
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": true,
        "type": {
          "name": "IconName"
        }
      },
      "size": {
        "defaultValue": null,
        "description": "",
        "name": "size",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "Color"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(e?: MouseEvent<HTMLElement, MouseEvent>) => void"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var css$1 = ".CohubButton {\n  font-weight: lighter;\n  border: none;\n  border-radius: var(--default-border-radius);\n  padding: 6px 12px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: var(--white);\n  transition: all 50ms ease-in-out;\n  letter-spacing: 0.05rem; }\n  .CohubButton .content-container {\n    transition: all 50ms ease-in-out; }\n  .CohubButton:active {\n    box-shadow: none !important;\n    -webkit-filter: brightness(97%);\n            filter: brightness(97%); }\n    .CohubButton:active .button-text {\n      transform: translateY(-1px); }\n  .CohubButton:disabled {\n    cursor: default;\n    opacity: 0.4; }\n    .CohubButton:disabled:hover {\n      -webkit-filter: inherit;\n              filter: inherit; }\n";
styleInject(css$1);

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
  return React.createElement("button", _extends({
    className: "CohubButton " + className,
    style: __assign({
      backgroundColor: backgroundColor,
      boxShadow: raised ? "0 1px 3px hsla(0, 0%, 0%, 0.1), inset 0px 1px 0px " + insetColor : undefined
    }, style),
    disabled: disabled
  }, restOfProps), React.createElement("div", {
    className: "button-text relative flex items-center"
  }, success && React.createElement("div", {
    className: "flex justify-center items-center absolute w-100",
    style: {
      zIndex: 2,
      bottom: -0.5
    }
  }, React.createElement(AnimatedCheckmark, {
    size: "1.25rem"
  })), React.createElement(Typography.Small, {
    uppercase: true,
    color: color,
    style: {
      opacity: success ? 0 : 1,
      transition: "opacity 150ms ease-in"
    }
  }, React.createElement("div", {
    className: "flex items-center",
    style: {
      flexDirection: flexDirection
    }
  }, icon && React.createElement(Icon, {
    name: icon,
    color: color,
    size: iconSize,
    style: {
      marginTop: 1
    }
  }), React.createElement("span", {
    id: "CHILDREN",
    style: {
      marginLeft: icon && iconPosition === "left" ? "0.5rem" : "",
      marginRight: icon && iconPosition === "right" ? "0.5rem" : ""
    }
  }, children)))));
}

try {
  Base.displayName = "Base";
  Base.__docgenInfo = {
    description: "",
    displayName: "Base",
    props: {
      "success": {
        "defaultValue": null,
        "description": "Shows success checkmark animation",
        "name": "success",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Shows error color",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "raised": {
        "defaultValue": null,
        "description": "Shows button in raised state\n@defaultValue true",
        "name": "raised",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "backgroundColor": {
        "defaultValue": null,
        "description": "Background color of button",
        "name": "backgroundColor",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "icon": {
        "defaultValue": null,
        "description": "Name of Icon",
        "name": "icon",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "iconPosition": {
        "defaultValue": null,
        "description": "Position of Icon",
        "name": "iconPosition",
        "required": false,
        "type": {
          "name": "\"left\" | \"right\""
        }
      },
      "iconSize": {
        "defaultValue": null,
        "description": "Size of Icon",
        "name": "iconSize",
        "required": false,
        "type": {
          "name": "number"
        }
      }
    }
  };
} catch (e) {}

var css$2 = ".Blank-module_ButtonBlank__2u_7K {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n  text-align: inherit;\n  border-radius: 0; }\n";
var styles = {"ButtonBlank":"Blank-module_ButtonBlank__2u_7K"};
styleInject(css$2);

var Blank = function (_a) {
  var _b = _a.className,
      className = _b === void 0 ? "" : _b,
      children = _a.children,
      style = _a.style,
      nativeElRef = _a.nativeElRef,
      rest = __rest(_a, ["className", "children", "style", "nativeElRef"]);

  return React.createElement("button", _extends({
    style: style,
    className: styles.ButtonBlank + " " + className,
    ref: nativeElRef
  }, rest), React.createElement(Typography, {
    style: pick(style, "color", "fontSize")
  }, children));
};

try {
  Blank.displayName = "Blank";
  Blank.__docgenInfo = {
    description: "",
    displayName: "Blank",
    props: {
      "nativeElRef": {
        "defaultValue": null,
        "description": "",
        "name": "nativeElRef",
        "required": false,
        "type": {
          "name": "LegacyRef<HTMLButtonElement>"
        }
      },
      "ref": {
        "defaultValue": null,
        "description": "",
        "name": "ref",
        "required": false,
        "type": {
          "name": "LegacyRef<HTMLButtonElement>"
        }
      },
      "key": {
        "defaultValue": null,
        "description": "",
        "name": "key",
        "required": false,
        "type": {
          "name": "ReactText"
        }
      },
      "autoFocus": {
        "defaultValue": null,
        "description": "",
        "name": "autoFocus",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "form": {
        "defaultValue": null,
        "description": "",
        "name": "form",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "formAction": {
        "defaultValue": null,
        "description": "",
        "name": "formAction",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "formEncType": {
        "defaultValue": null,
        "description": "",
        "name": "formEncType",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "formMethod": {
        "defaultValue": null,
        "description": "",
        "name": "formMethod",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "formNoValidate": {
        "defaultValue": null,
        "description": "",
        "name": "formNoValidate",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "formTarget": {
        "defaultValue": null,
        "description": "",
        "name": "formTarget",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "name": {
        "defaultValue": null,
        "description": "",
        "name": "name",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "type": {
        "defaultValue": null,
        "description": "",
        "name": "type",
        "required": false,
        "type": {
          "name": "\"submit\" | \"reset\" | \"button\""
        }
      },
      "value": {
        "defaultValue": null,
        "description": "",
        "name": "value",
        "required": false,
        "type": {
          "name": "string | number | string[]"
        }
      },
      "defaultChecked": {
        "defaultValue": null,
        "description": "",
        "name": "defaultChecked",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "defaultValue": {
        "defaultValue": null,
        "description": "",
        "name": "defaultValue",
        "required": false,
        "type": {
          "name": "string | string[]"
        }
      },
      "suppressContentEditableWarning": {
        "defaultValue": null,
        "description": "",
        "name": "suppressContentEditableWarning",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "suppressHydrationWarning": {
        "defaultValue": null,
        "description": "",
        "name": "suppressHydrationWarning",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "accessKey": {
        "defaultValue": null,
        "description": "",
        "name": "accessKey",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "contentEditable": {
        "defaultValue": null,
        "description": "",
        "name": "contentEditable",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "contextMenu": {
        "defaultValue": null,
        "description": "",
        "name": "contextMenu",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "dir": {
        "defaultValue": null,
        "description": "",
        "name": "dir",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "draggable": {
        "defaultValue": null,
        "description": "",
        "name": "draggable",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "hidden": {
        "defaultValue": null,
        "description": "",
        "name": "hidden",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "id": {
        "defaultValue": null,
        "description": "",
        "name": "id",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "lang": {
        "defaultValue": null,
        "description": "",
        "name": "lang",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "placeholder": {
        "defaultValue": null,
        "description": "",
        "name": "placeholder",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "slot": {
        "defaultValue": null,
        "description": "",
        "name": "slot",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "spellCheck": {
        "defaultValue": null,
        "description": "",
        "name": "spellCheck",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "tabIndex": {
        "defaultValue": null,
        "description": "",
        "name": "tabIndex",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "title": {
        "defaultValue": null,
        "description": "",
        "name": "title",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "inputMode": {
        "defaultValue": null,
        "description": "",
        "name": "inputMode",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "is": {
        "defaultValue": null,
        "description": "",
        "name": "is",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "radioGroup": {
        "defaultValue": null,
        "description": "",
        "name": "radioGroup",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "role": {
        "defaultValue": null,
        "description": "",
        "name": "role",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "about": {
        "defaultValue": null,
        "description": "",
        "name": "about",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "datatype": {
        "defaultValue": null,
        "description": "",
        "name": "datatype",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "inlist": {
        "defaultValue": null,
        "description": "",
        "name": "inlist",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "prefix": {
        "defaultValue": null,
        "description": "",
        "name": "prefix",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "property": {
        "defaultValue": null,
        "description": "",
        "name": "property",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "resource": {
        "defaultValue": null,
        "description": "",
        "name": "resource",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "typeof": {
        "defaultValue": null,
        "description": "",
        "name": "typeof",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "vocab": {
        "defaultValue": null,
        "description": "",
        "name": "vocab",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "autoCapitalize": {
        "defaultValue": null,
        "description": "",
        "name": "autoCapitalize",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "autoCorrect": {
        "defaultValue": null,
        "description": "",
        "name": "autoCorrect",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "autoSave": {
        "defaultValue": null,
        "description": "",
        "name": "autoSave",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "itemProp": {
        "defaultValue": null,
        "description": "",
        "name": "itemProp",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "itemScope": {
        "defaultValue": null,
        "description": "",
        "name": "itemScope",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "itemType": {
        "defaultValue": null,
        "description": "",
        "name": "itemType",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "itemID": {
        "defaultValue": null,
        "description": "",
        "name": "itemID",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "itemRef": {
        "defaultValue": null,
        "description": "",
        "name": "itemRef",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "results": {
        "defaultValue": null,
        "description": "",
        "name": "results",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "security": {
        "defaultValue": null,
        "description": "",
        "name": "security",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "unselectable": {
        "defaultValue": null,
        "description": "",
        "name": "unselectable",
        "required": false,
        "type": {
          "name": "\"on\" | \"off\""
        }
      },
      "aria-activedescendant": {
        "defaultValue": null,
        "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",
        "name": "aria-activedescendant",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-atomic": {
        "defaultValue": null,
        "description": "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
        "name": "aria-atomic",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-autocomplete": {
        "defaultValue": null,
        "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
        "name": "aria-autocomplete",
        "required": false,
        "type": {
          "name": "\"none\" | \"inline\" | \"list\" | \"both\""
        }
      },
      "aria-busy": {
        "defaultValue": null,
        "description": "Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.",
        "name": "aria-busy",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-checked": {
        "defaultValue": null,
        "description": "Indicates the current \"checked\" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.",
        "name": "aria-checked",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\" | \"mixed\""
        }
      },
      "aria-colcount": {
        "defaultValue": null,
        "description": "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.",
        "name": "aria-colcount",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-colindex": {
        "defaultValue": null,
        "description": "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
        "name": "aria-colindex",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-colspan": {
        "defaultValue": null,
        "description": "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.",
        "name": "aria-colspan",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-controls": {
        "defaultValue": null,
        "description": "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.",
        "name": "aria-controls",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-current": {
        "defaultValue": null,
        "description": "Indicates the element that represents the current item within a container or set of related elements.",
        "name": "aria-current",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\" | \"page\" | \"step\" | \"location\" | \"date\" | \"time\""
        }
      },
      "aria-describedby": {
        "defaultValue": null,
        "description": "Identifies the element (or elements) that describes the object.\n@see aria-labelledby",
        "name": "aria-describedby",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-details": {
        "defaultValue": null,
        "description": "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.",
        "name": "aria-details",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-disabled": {
        "defaultValue": null,
        "description": "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.",
        "name": "aria-disabled",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-dropeffect": {
        "defaultValue": null,
        "description": "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1",
        "name": "aria-dropeffect",
        "required": false,
        "type": {
          "name": "\"none\" | \"copy\" | \"execute\" | \"link\" | \"move\" | \"popup\""
        }
      },
      "aria-errormessage": {
        "defaultValue": null,
        "description": "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.",
        "name": "aria-errormessage",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-expanded": {
        "defaultValue": null,
        "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",
        "name": "aria-expanded",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-flowto": {
        "defaultValue": null,
        "description": "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
        "name": "aria-flowto",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-grabbed": {
        "defaultValue": null,
        "description": "Indicates an element's \"grabbed\" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1",
        "name": "aria-grabbed",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-haspopup": {
        "defaultValue": null,
        "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",
        "name": "aria-haspopup",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\" | \"menu\" | \"listbox\" | \"tree\" | \"grid\" | \"dialog\""
        }
      },
      "aria-hidden": {
        "defaultValue": null,
        "description": "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.",
        "name": "aria-hidden",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-invalid": {
        "defaultValue": null,
        "description": "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.",
        "name": "aria-invalid",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\""
        }
      },
      "aria-keyshortcuts": {
        "defaultValue": null,
        "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
        "name": "aria-keyshortcuts",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-label": {
        "defaultValue": null,
        "description": "Defines a string value that labels the current element.\n@see aria-labelledby.",
        "name": "aria-label",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-labelledby": {
        "defaultValue": null,
        "description": "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.",
        "name": "aria-labelledby",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-level": {
        "defaultValue": null,
        "description": "Defines the hierarchical level of an element within a structure.",
        "name": "aria-level",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-live": {
        "defaultValue": null,
        "description": "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
        "name": "aria-live",
        "required": false,
        "type": {
          "name": "\"off\" | \"assertive\" | \"polite\""
        }
      },
      "aria-modal": {
        "defaultValue": null,
        "description": "Indicates whether an element is modal when displayed.",
        "name": "aria-modal",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-multiline": {
        "defaultValue": null,
        "description": "Indicates whether a text box accepts multiple lines of input or only a single line.",
        "name": "aria-multiline",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-multiselectable": {
        "defaultValue": null,
        "description": "Indicates that the user may select more than one item from the current selectable descendants.",
        "name": "aria-multiselectable",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-orientation": {
        "defaultValue": null,
        "description": "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
        "name": "aria-orientation",
        "required": false,
        "type": {
          "name": "\"horizontal\" | \"vertical\""
        }
      },
      "aria-owns": {
        "defaultValue": null,
        "description": "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.",
        "name": "aria-owns",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-placeholder": {
        "defaultValue": null,
        "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.",
        "name": "aria-placeholder",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-posinset": {
        "defaultValue": null,
        "description": "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
        "name": "aria-posinset",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-pressed": {
        "defaultValue": null,
        "description": "Indicates the current \"pressed\" state of toggle buttons.\n@see aria-checked\n@see aria-selected.",
        "name": "aria-pressed",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\" | \"mixed\""
        }
      },
      "aria-readonly": {
        "defaultValue": null,
        "description": "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.",
        "name": "aria-readonly",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-relevant": {
        "defaultValue": null,
        "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.",
        "name": "aria-relevant",
        "required": false,
        "type": {
          "name": "\"additions\" | \"additions text\" | \"all\" | \"removals\" | \"text\""
        }
      },
      "aria-required": {
        "defaultValue": null,
        "description": "Indicates that user input is required on the element before a form may be submitted.",
        "name": "aria-required",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-roledescription": {
        "defaultValue": null,
        "description": "Defines a human-readable, author-localized description for the role of an element.",
        "name": "aria-roledescription",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "aria-rowcount": {
        "defaultValue": null,
        "description": "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.",
        "name": "aria-rowcount",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-rowindex": {
        "defaultValue": null,
        "description": "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
        "name": "aria-rowindex",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-rowspan": {
        "defaultValue": null,
        "description": "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.",
        "name": "aria-rowspan",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-selected": {
        "defaultValue": null,
        "description": "Indicates the current \"selected\" state of various widgets.\n@see aria-checked\n@see aria-pressed.",
        "name": "aria-selected",
        "required": false,
        "type": {
          "name": "boolean | \"false\" | \"true\""
        }
      },
      "aria-setsize": {
        "defaultValue": null,
        "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.",
        "name": "aria-setsize",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-sort": {
        "defaultValue": null,
        "description": "Indicates if items in a table or grid are sorted in ascending or descending order.",
        "name": "aria-sort",
        "required": false,
        "type": {
          "name": "\"none\" | \"ascending\" | \"descending\" | \"other\""
        }
      },
      "aria-valuemax": {
        "defaultValue": null,
        "description": "Defines the maximum allowed value for a range widget.",
        "name": "aria-valuemax",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-valuemin": {
        "defaultValue": null,
        "description": "Defines the minimum allowed value for a range widget.",
        "name": "aria-valuemin",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-valuenow": {
        "defaultValue": null,
        "description": "Defines the current value for a range widget.\n@see aria-valuetext.",
        "name": "aria-valuenow",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "aria-valuetext": {
        "defaultValue": null,
        "description": "Defines the human readable text alternative of aria-valuenow for a range widget.",
        "name": "aria-valuetext",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "dangerouslySetInnerHTML": {
        "defaultValue": null,
        "description": "",
        "name": "dangerouslySetInnerHTML",
        "required": false,
        "type": {
          "name": "{ __html: string; }"
        }
      },
      "onCopy": {
        "defaultValue": null,
        "description": "",
        "name": "onCopy",
        "required": false,
        "type": {
          "name": "(event: ClipboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onCopyCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onCopyCapture",
        "required": false,
        "type": {
          "name": "(event: ClipboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onCut": {
        "defaultValue": null,
        "description": "",
        "name": "onCut",
        "required": false,
        "type": {
          "name": "(event: ClipboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onCutCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onCutCapture",
        "required": false,
        "type": {
          "name": "(event: ClipboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onPaste": {
        "defaultValue": null,
        "description": "",
        "name": "onPaste",
        "required": false,
        "type": {
          "name": "(event: ClipboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onPasteCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPasteCapture",
        "required": false,
        "type": {
          "name": "(event: ClipboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onCompositionEnd": {
        "defaultValue": null,
        "description": "",
        "name": "onCompositionEnd",
        "required": false,
        "type": {
          "name": "(event: CompositionEvent<HTMLButtonElement>) => void"
        }
      },
      "onCompositionEndCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onCompositionEndCapture",
        "required": false,
        "type": {
          "name": "(event: CompositionEvent<HTMLButtonElement>) => void"
        }
      },
      "onCompositionStart": {
        "defaultValue": null,
        "description": "",
        "name": "onCompositionStart",
        "required": false,
        "type": {
          "name": "(event: CompositionEvent<HTMLButtonElement>) => void"
        }
      },
      "onCompositionStartCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onCompositionStartCapture",
        "required": false,
        "type": {
          "name": "(event: CompositionEvent<HTMLButtonElement>) => void"
        }
      },
      "onCompositionUpdate": {
        "defaultValue": null,
        "description": "",
        "name": "onCompositionUpdate",
        "required": false,
        "type": {
          "name": "(event: CompositionEvent<HTMLButtonElement>) => void"
        }
      },
      "onCompositionUpdateCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onCompositionUpdateCapture",
        "required": false,
        "type": {
          "name": "(event: CompositionEvent<HTMLButtonElement>) => void"
        }
      },
      "onFocus": {
        "defaultValue": null,
        "description": "",
        "name": "onFocus",
        "required": false,
        "type": {
          "name": "(event: FocusEvent<HTMLButtonElement>) => void"
        }
      },
      "onFocusCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onFocusCapture",
        "required": false,
        "type": {
          "name": "(event: FocusEvent<HTMLButtonElement>) => void"
        }
      },
      "onBlur": {
        "defaultValue": null,
        "description": "",
        "name": "onBlur",
        "required": false,
        "type": {
          "name": "(event: FocusEvent<HTMLButtonElement>) => void"
        }
      },
      "onBlurCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onBlurCapture",
        "required": false,
        "type": {
          "name": "(event: FocusEvent<HTMLButtonElement>) => void"
        }
      },
      "onChange": {
        "defaultValue": null,
        "description": "",
        "name": "onChange",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onChangeCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onChangeCapture",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onBeforeInput": {
        "defaultValue": null,
        "description": "",
        "name": "onBeforeInput",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onBeforeInputCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onBeforeInputCapture",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onInput": {
        "defaultValue": null,
        "description": "",
        "name": "onInput",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onInputCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onInputCapture",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onReset": {
        "defaultValue": null,
        "description": "",
        "name": "onReset",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onResetCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onResetCapture",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onSubmit": {
        "defaultValue": null,
        "description": "",
        "name": "onSubmit",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onSubmitCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onSubmitCapture",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onInvalid": {
        "defaultValue": null,
        "description": "",
        "name": "onInvalid",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onInvalidCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onInvalidCapture",
        "required": false,
        "type": {
          "name": "(event: FormEvent<HTMLButtonElement>) => void"
        }
      },
      "onLoad": {
        "defaultValue": null,
        "description": "",
        "name": "onLoad",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onLoadCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onLoadCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onError": {
        "defaultValue": null,
        "description": "",
        "name": "onError",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onErrorCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onErrorCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onKeyDown": {
        "defaultValue": null,
        "description": "",
        "name": "onKeyDown",
        "required": false,
        "type": {
          "name": "(event: KeyboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onKeyDownCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onKeyDownCapture",
        "required": false,
        "type": {
          "name": "(event: KeyboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onKeyPress": {
        "defaultValue": null,
        "description": "",
        "name": "onKeyPress",
        "required": false,
        "type": {
          "name": "(event: KeyboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onKeyPressCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onKeyPressCapture",
        "required": false,
        "type": {
          "name": "(event: KeyboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onKeyUp": {
        "defaultValue": null,
        "description": "",
        "name": "onKeyUp",
        "required": false,
        "type": {
          "name": "(event: KeyboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onKeyUpCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onKeyUpCapture",
        "required": false,
        "type": {
          "name": "(event: KeyboardEvent<HTMLButtonElement>) => void"
        }
      },
      "onAbort": {
        "defaultValue": null,
        "description": "",
        "name": "onAbort",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onAbortCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onAbortCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onCanPlay": {
        "defaultValue": null,
        "description": "",
        "name": "onCanPlay",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onCanPlayCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onCanPlayCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onCanPlayThrough": {
        "defaultValue": null,
        "description": "",
        "name": "onCanPlayThrough",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onCanPlayThroughCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onCanPlayThroughCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onDurationChange": {
        "defaultValue": null,
        "description": "",
        "name": "onDurationChange",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onDurationChangeCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDurationChangeCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onEmptied": {
        "defaultValue": null,
        "description": "",
        "name": "onEmptied",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onEmptiedCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onEmptiedCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onEncrypted": {
        "defaultValue": null,
        "description": "",
        "name": "onEncrypted",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onEncryptedCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onEncryptedCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onEnded": {
        "defaultValue": null,
        "description": "",
        "name": "onEnded",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onEndedCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onEndedCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onLoadedData": {
        "defaultValue": null,
        "description": "",
        "name": "onLoadedData",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onLoadedDataCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onLoadedDataCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onLoadedMetadata": {
        "defaultValue": null,
        "description": "",
        "name": "onLoadedMetadata",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onLoadedMetadataCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onLoadedMetadataCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onLoadStart": {
        "defaultValue": null,
        "description": "",
        "name": "onLoadStart",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onLoadStartCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onLoadStartCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onPause": {
        "defaultValue": null,
        "description": "",
        "name": "onPause",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onPauseCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPauseCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onPlay": {
        "defaultValue": null,
        "description": "",
        "name": "onPlay",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onPlayCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPlayCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onPlaying": {
        "defaultValue": null,
        "description": "",
        "name": "onPlaying",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onPlayingCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPlayingCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onProgress": {
        "defaultValue": null,
        "description": "",
        "name": "onProgress",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onProgressCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onProgressCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onRateChange": {
        "defaultValue": null,
        "description": "",
        "name": "onRateChange",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onRateChangeCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onRateChangeCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onSeeked": {
        "defaultValue": null,
        "description": "",
        "name": "onSeeked",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onSeekedCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onSeekedCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onSeeking": {
        "defaultValue": null,
        "description": "",
        "name": "onSeeking",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onSeekingCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onSeekingCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onStalled": {
        "defaultValue": null,
        "description": "",
        "name": "onStalled",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onStalledCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onStalledCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onSuspend": {
        "defaultValue": null,
        "description": "",
        "name": "onSuspend",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onSuspendCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onSuspendCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onTimeUpdate": {
        "defaultValue": null,
        "description": "",
        "name": "onTimeUpdate",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onTimeUpdateCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onTimeUpdateCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onVolumeChange": {
        "defaultValue": null,
        "description": "",
        "name": "onVolumeChange",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onVolumeChangeCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onVolumeChangeCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onWaiting": {
        "defaultValue": null,
        "description": "",
        "name": "onWaiting",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onWaitingCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onWaitingCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onAuxClick": {
        "defaultValue": null,
        "description": "",
        "name": "onAuxClick",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onAuxClickCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onAuxClickCapture",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onClickCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onClickCapture",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onContextMenu": {
        "defaultValue": null,
        "description": "",
        "name": "onContextMenu",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onContextMenuCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onContextMenuCapture",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onDoubleClick": {
        "defaultValue": null,
        "description": "",
        "name": "onDoubleClick",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onDoubleClickCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDoubleClickCapture",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onDrag": {
        "defaultValue": null,
        "description": "",
        "name": "onDrag",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDragCapture",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragEnd": {
        "defaultValue": null,
        "description": "",
        "name": "onDragEnd",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragEndCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDragEndCapture",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragEnter": {
        "defaultValue": null,
        "description": "",
        "name": "onDragEnter",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragEnterCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDragEnterCapture",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragExit": {
        "defaultValue": null,
        "description": "",
        "name": "onDragExit",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragExitCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDragExitCapture",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragLeave": {
        "defaultValue": null,
        "description": "",
        "name": "onDragLeave",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragLeaveCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDragLeaveCapture",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragOver": {
        "defaultValue": null,
        "description": "",
        "name": "onDragOver",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragOverCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDragOverCapture",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragStart": {
        "defaultValue": null,
        "description": "",
        "name": "onDragStart",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDragStartCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDragStartCapture",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDrop": {
        "defaultValue": null,
        "description": "",
        "name": "onDrop",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onDropCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onDropCapture",
        "required": false,
        "type": {
          "name": "(event: DragEvent<HTMLButtonElement>) => void"
        }
      },
      "onMouseDown": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseDown",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseDownCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseDownCapture",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseEnter": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseEnter",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseLeave": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseLeave",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseMove": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseMove",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseMoveCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseMoveCapture",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseOut": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseOut",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseOutCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseOutCapture",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseOver": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseOver",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseOverCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseOverCapture",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseUp": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseUp",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onMouseUpCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onMouseUpCapture",
        "required": false,
        "type": {
          "name": "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"
        }
      },
      "onSelect": {
        "defaultValue": null,
        "description": "",
        "name": "onSelect",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onSelectCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onSelectCapture",
        "required": false,
        "type": {
          "name": "(event: SyntheticEvent<HTMLButtonElement, Event>) => void"
        }
      },
      "onTouchCancel": {
        "defaultValue": null,
        "description": "",
        "name": "onTouchCancel",
        "required": false,
        "type": {
          "name": "(event: TouchEvent<HTMLButtonElement>) => void"
        }
      },
      "onTouchCancelCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onTouchCancelCapture",
        "required": false,
        "type": {
          "name": "(event: TouchEvent<HTMLButtonElement>) => void"
        }
      },
      "onTouchEnd": {
        "defaultValue": null,
        "description": "",
        "name": "onTouchEnd",
        "required": false,
        "type": {
          "name": "(event: TouchEvent<HTMLButtonElement>) => void"
        }
      },
      "onTouchEndCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onTouchEndCapture",
        "required": false,
        "type": {
          "name": "(event: TouchEvent<HTMLButtonElement>) => void"
        }
      },
      "onTouchMove": {
        "defaultValue": null,
        "description": "",
        "name": "onTouchMove",
        "required": false,
        "type": {
          "name": "(event: TouchEvent<HTMLButtonElement>) => void"
        }
      },
      "onTouchMoveCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onTouchMoveCapture",
        "required": false,
        "type": {
          "name": "(event: TouchEvent<HTMLButtonElement>) => void"
        }
      },
      "onTouchStart": {
        "defaultValue": null,
        "description": "",
        "name": "onTouchStart",
        "required": false,
        "type": {
          "name": "(event: TouchEvent<HTMLButtonElement>) => void"
        }
      },
      "onTouchStartCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onTouchStartCapture",
        "required": false,
        "type": {
          "name": "(event: TouchEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerDown": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerDown",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerDownCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerDownCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerMove": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerMove",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerMoveCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerMoveCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerUp": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerUp",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerUpCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerUpCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerCancel": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerCancel",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerCancelCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerCancelCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerEnter": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerEnter",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerEnterCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerEnterCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerLeave": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerLeave",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerLeaveCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerLeaveCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerOver": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerOver",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerOverCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerOverCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerOut": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerOut",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onPointerOutCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onPointerOutCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onGotPointerCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onGotPointerCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onGotPointerCaptureCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onGotPointerCaptureCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onLostPointerCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onLostPointerCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onLostPointerCaptureCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onLostPointerCaptureCapture",
        "required": false,
        "type": {
          "name": "(event: PointerEvent<HTMLButtonElement>) => void"
        }
      },
      "onScroll": {
        "defaultValue": null,
        "description": "",
        "name": "onScroll",
        "required": false,
        "type": {
          "name": "(event: UIEvent<HTMLButtonElement>) => void"
        }
      },
      "onScrollCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onScrollCapture",
        "required": false,
        "type": {
          "name": "(event: UIEvent<HTMLButtonElement>) => void"
        }
      },
      "onWheel": {
        "defaultValue": null,
        "description": "",
        "name": "onWheel",
        "required": false,
        "type": {
          "name": "(event: WheelEvent<HTMLButtonElement>) => void"
        }
      },
      "onWheelCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onWheelCapture",
        "required": false,
        "type": {
          "name": "(event: WheelEvent<HTMLButtonElement>) => void"
        }
      },
      "onAnimationStart": {
        "defaultValue": null,
        "description": "",
        "name": "onAnimationStart",
        "required": false,
        "type": {
          "name": "(event: AnimationEvent<HTMLButtonElement>) => void"
        }
      },
      "onAnimationStartCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onAnimationStartCapture",
        "required": false,
        "type": {
          "name": "(event: AnimationEvent<HTMLButtonElement>) => void"
        }
      },
      "onAnimationEnd": {
        "defaultValue": null,
        "description": "",
        "name": "onAnimationEnd",
        "required": false,
        "type": {
          "name": "(event: AnimationEvent<HTMLButtonElement>) => void"
        }
      },
      "onAnimationEndCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onAnimationEndCapture",
        "required": false,
        "type": {
          "name": "(event: AnimationEvent<HTMLButtonElement>) => void"
        }
      },
      "onAnimationIteration": {
        "defaultValue": null,
        "description": "",
        "name": "onAnimationIteration",
        "required": false,
        "type": {
          "name": "(event: AnimationEvent<HTMLButtonElement>) => void"
        }
      },
      "onAnimationIterationCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onAnimationIterationCapture",
        "required": false,
        "type": {
          "name": "(event: AnimationEvent<HTMLButtonElement>) => void"
        }
      },
      "onTransitionEnd": {
        "defaultValue": null,
        "description": "",
        "name": "onTransitionEnd",
        "required": false,
        "type": {
          "name": "(event: TransitionEvent<HTMLButtonElement>) => void"
        }
      },
      "onTransitionEndCapture": {
        "defaultValue": null,
        "description": "",
        "name": "onTransitionEndCapture",
        "required": false,
        "type": {
          "name": "(event: TransitionEvent<HTMLButtonElement>) => void"
        }
      }
    }
  };
} catch (e) {}

var OutlineButtonBase = function (_a) {
  var style = _a.style,
      _b = _a.color,
      color = _b === void 0 ? Color$1.darkBlack : _b,
      rest = __rest(_a, ["style", "color"]);

  return React.createElement(Base, _extends({
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

  return React.createElement(OutlineButtonBase, _extends({
    color: color
  }, props));
};

try {
  Outline.displayName = "Outline";
  Outline.__docgenInfo = {
    description: "",
    displayName: "Outline",
    props: {
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "success": {
        "defaultValue": null,
        "description": "Shows success checkmark animation",
        "name": "success",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Shows error color",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "backgroundColor": {
        "defaultValue": null,
        "description": "Background color of button",
        "name": "backgroundColor",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "icon": {
        "defaultValue": null,
        "description": "Name of Icon",
        "name": "icon",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "iconPosition": {
        "defaultValue": null,
        "description": "Position of Icon",
        "name": "iconPosition",
        "required": false,
        "type": {
          "name": "\"left\" | \"right\""
        }
      },
      "iconSize": {
        "defaultValue": null,
        "description": "Size of Icon",
        "name": "iconSize",
        "required": false,
        "type": {
          "name": "number"
        }
      }
    }
  };
} catch (e) {}

var Ghost = function (_a) {
  var _b = _a.color,
      color = _b === void 0 ? Color$1.invertedText : _b,
      props = __rest(_a, ["color"]);

  return React.createElement(Outline, _extends({
    backgroundColor: Color$1.black500,
    color: color
  }, props));
};
var PrimaryGhostButton = function (props) {
  return React.createElement(Ghost, _extends({
    color: Color$1.primary
  }, props));
};
var CancelGhostButton = function (props) {
  return React.createElement(Ghost, _extends({
    color: Color$1.red500
  }, props));
};

try {
  PrimaryGhostButton.displayName = "PrimaryGhostButton";
  PrimaryGhostButton.__docgenInfo = {
    description: "",
    displayName: "PrimaryGhostButton",
    props: {
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "success": {
        "defaultValue": null,
        "description": "Shows success checkmark animation",
        "name": "success",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Shows error color",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "backgroundColor": {
        "defaultValue": null,
        "description": "Background color of button",
        "name": "backgroundColor",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "icon": {
        "defaultValue": null,
        "description": "Name of Icon",
        "name": "icon",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "iconPosition": {
        "defaultValue": null,
        "description": "Position of Icon",
        "name": "iconPosition",
        "required": false,
        "type": {
          "name": "\"left\" | \"right\""
        }
      },
      "iconSize": {
        "defaultValue": null,
        "description": "Size of Icon",
        "name": "iconSize",
        "required": false,
        "type": {
          "name": "number"
        }
      }
    }
  };
} catch (e) {}

try {
  CancelGhostButton.displayName = "CancelGhostButton";
  CancelGhostButton.__docgenInfo = {
    description: "",
    displayName: "CancelGhostButton",
    props: {
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "success": {
        "defaultValue": null,
        "description": "Shows success checkmark animation",
        "name": "success",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Shows error color",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "backgroundColor": {
        "defaultValue": null,
        "description": "Background color of button",
        "name": "backgroundColor",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "icon": {
        "defaultValue": null,
        "description": "Name of Icon",
        "name": "icon",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "iconPosition": {
        "defaultValue": null,
        "description": "Position of Icon",
        "name": "iconPosition",
        "required": false,
        "type": {
          "name": "\"left\" | \"right\""
        }
      },
      "iconSize": {
        "defaultValue": null,
        "description": "Size of Icon",
        "name": "iconSize",
        "required": false,
        "type": {
          "name": "number"
        }
      }
    }
  };
} catch (e) {}

try {
  Ghost.displayName = "Ghost";
  Ghost.__docgenInfo = {
    description: "",
    displayName: "Ghost",
    props: {
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "light": {
        "defaultValue": null,
        "description": "",
        "name": "light",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "success": {
        "defaultValue": null,
        "description": "Shows success checkmark animation",
        "name": "success",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Shows error color",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "backgroundColor": {
        "defaultValue": null,
        "description": "Background color of button",
        "name": "backgroundColor",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "icon": {
        "defaultValue": null,
        "description": "Name of Icon",
        "name": "icon",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "iconPosition": {
        "defaultValue": null,
        "description": "Position of Icon",
        "name": "iconPosition",
        "required": false,
        "type": {
          "name": "\"left\" | \"right\""
        }
      },
      "iconSize": {
        "defaultValue": null,
        "description": "Size of Icon",
        "name": "iconSize",
        "required": false,
        "type": {
          "name": "number"
        }
      }
    }
  };
} catch (e) {}

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

    return React.createElement(Blank, _extends({}, rest, {
      className: className + " p-05",
      style: __assign({
        display: block ? "block" : undefined
      }, style)
    }), React.createElement(Typography, {
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
}(PureComponent);

try {
  Text.displayName = "Text";
  Text.__docgenInfo = {
    description: "",
    displayName: "Text",
    props: {
      "color": {
        "defaultValue": {
          "value": "Color.iconGrey"
        },
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "fontSize": {
        "defaultValue": {
          "value": "12px"
        },
        "description": "",
        "name": "fontSize",
        "required": false,
        "type": {
          "name": "string | number"
        }
      },
      "textStyle": {
        "defaultValue": null,
        "description": "",
        "name": "textStyle",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "block": {
        "defaultValue": null,
        "description": "",
        "name": "block",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

var Primary = function (_a) {
  var _b = _a.style,
      style = _b === void 0 ? {} : _b,
      rest = __rest(_a, ["style"]);

  return React.createElement(Base, _extends({
    backgroundColor: Color$1.primary,
    style: style
  }, rest));
};

try {
  Primary.displayName = "Primary";
  Primary.__docgenInfo = {
    description: "",
    displayName: "Primary",
    props: {}
  };
} catch (e) {}

var Secondary = function (_a) {
  var _b = _a.style,
      style = _b === void 0 ? {} : _b,
      rest = __rest(_a, ["style"]);

  return React.createElement(Base, _extends({
    backgroundColor: Color$1.white500,
    style: __assign({
      color: Color$1.grey800
    }, style)
  }, rest));
};

try {
  Secondary.displayName = "Secondary";
  Secondary.__docgenInfo = {
    description: "",
    displayName: "Secondary",
    props: {}
  };
} catch (e) {}

var Info = function (_a) {
  var backgroundColor = _a.backgroundColor,
      rest = __rest(_a, ["backgroundColor"]);

  return React.createElement(Base, _extends({
    backgroundColor: backgroundColor || Color$1.blue500
  }, rest));
};

try {
  Info.displayName = "Info";
  Info.__docgenInfo = {
    description: "",
    displayName: "Info",
    props: {
      "success": {
        "defaultValue": null,
        "description": "Shows success checkmark animation",
        "name": "success",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Shows error color",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "raised": {
        "defaultValue": null,
        "description": "Shows button in raised state\n@defaultValue true",
        "name": "raised",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "backgroundColor": {
        "defaultValue": null,
        "description": "Background color of button",
        "name": "backgroundColor",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "icon": {
        "defaultValue": null,
        "description": "Name of Icon",
        "name": "icon",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "iconPosition": {
        "defaultValue": null,
        "description": "Position of Icon",
        "name": "iconPosition",
        "required": false,
        "type": {
          "name": "\"left\" | \"right\""
        }
      },
      "iconSize": {
        "defaultValue": null,
        "description": "Size of Icon",
        "name": "iconSize",
        "required": false,
        "type": {
          "name": "number"
        }
      }
    }
  };
} catch (e) {}

var Cancel = function (_a) {
  var backgroundColor = _a.backgroundColor,
      rest = __rest(_a, ["backgroundColor"]);

  return React.createElement(Base, _extends({
    backgroundColor: backgroundColor || Color$1.red500
  }, rest));
};

try {
  Cancel.displayName = "Cancel";
  Cancel.__docgenInfo = {
    description: "",
    displayName: "Cancel",
    props: {
      "raised": {
        "defaultValue": null,
        "description": "Shows button in raised state\n@defaultValue true",
        "name": "raised",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "backgroundColor": {
        "defaultValue": null,
        "description": "Background color of button",
        "name": "backgroundColor",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "icon": {
        "defaultValue": null,
        "description": "Name of Icon",
        "name": "icon",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "iconPosition": {
        "defaultValue": null,
        "description": "Position of Icon",
        "name": "iconPosition",
        "required": false,
        "type": {
          "name": "\"left\" | \"right\""
        }
      },
      "iconSize": {
        "defaultValue": null,
        "description": "Size of Icon",
        "name": "iconSize",
        "required": false,
        "type": {
          "name": "number"
        }
      }
    }
  };
} catch (e) {}

var css$3 = "li.CohubDropdownOption:focus, li.CohubDropdownOption:hover {\n  background-color: #f2f2f2; }\n";
styleInject(css$3);

var css$4 = ".Tooltip,\n.tippy-tooltip {\n  box-shadow: var(--dp-3); }\n  .Tooltip.dark-theme,\n  .tippy-tooltip.dark-theme {\n    background-color: var(--black-500);\n    color: var(--grey-200); }\n    .Tooltip.dark-theme[data-animatefill],\n    .tippy-tooltip.dark-theme[data-animatefill] {\n      background-color: transparent; }\n    .Tooltip.dark-theme .tippy-backdrop,\n    .tippy-tooltip.dark-theme .tippy-backdrop {\n      background-color: var(--black-500); }\n  .Tooltip.light-theme,\n  .tippy-tooltip.light-theme {\n    background-color: var(--true-white);\n    color: var(--black-500); }\n    .Tooltip.light-theme[data-animatefill],\n    .tippy-tooltip.light-theme[data-animatefill] {\n      background-color: transparent; }\n    .Tooltip.light-theme .tippy-backdrop,\n    .tippy-tooltip.light-theme .tippy-backdrop {\n      background-color: var(--true-white); }\n\n.tippy-popper[x-placement^=right] .tippy-tooltip.light-theme .tippy-arrow {\n  border-right: 7px solid var(--true-white); }\n\n.tippy-popper[x-placement^=left] .tippy-tooltip.light-theme .tippy-arrow {\n  border-left: 7px solid var(--true-white); }\n\n.tippy-popper[x-placement^=top] .tippy-tooltip.light-theme .tippy-arrow {\n  border-top: 7px solid var(--true-white); }\n\n.tippy-popper[x-placement^=bottom] .tippy-tooltip.light-theme .tippy-arrow {\n  border-bottom: 7px solid var(--true-white); }\n\n.tippy-popper[x-placement^=right] .tippy-tooltip.dark-theme .tippy-arrow {\n  border-right: 7px solid var(--black-500); }\n\n.tippy-popper[x-placement^=left] .tippy-tooltip.dark-theme .tippy-arrow {\n  border-left: 7px solid var(--black-500); }\n\n.tippy-popper[x-placement^=top] .tippy-tooltip.dark-theme .tippy-arrow {\n  border-top: 7px solid var(--black-500); }\n\n.tippy-popper[x-placement^=bottom] .tippy-tooltip.dark-theme .tippy-arrow {\n  border-bottom: 7px solid var(--black-500); }\n";
styleInject(css$4);

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

    return React.createElement(Tippy, _extends({
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
    }, rest), React.createElement("span", null, children));
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
}(React.Component);

function Dropdown(props) {
  var options = props.options,
      style = props.style,
      className = props.className,
      disabled = props.disabled,
      _a = props.buttonType,
      buttonType = _a === void 0 ? "Secondary" : _a;

  var _b = useState(false),
      expanded = _b[0],
      setExpanded = _b[1];

  var _c = useState(props.options[0]),
      selectedOption = _c[0],
      setSelectedOption = _c[1];

  var cursor = disabled ? "default" : "pointer";
  var Button = Buttons[buttonType];
  return React.createElement("div", {
    className: "CohubDropdownButton relative " + className,
    style: style
  }, React.createElement("div", {
    className: "flex bd-radius"
  }, React.createElement(Button, {
    onClick: selectedOption.onClick,
    disabled: disabled,
    style: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  }, selectedOption.label), React.createElement(Tooltip, {
    content: React.createElement("ul", {
      className: "p-0 m-0 text-left",
      style: {
        maxHeight: "50vh",
        listStyle: "none",
        overflowY: "auto"
      }
    }, options.filter(function (option) {
      return option.label !== selectedOption.label;
    }).map(function (option) {
      return React.createElement("li", {
        key: option.label,
        className: "cursor-pointer CohubDropdownOption p-05",
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
  }, React.createElement(Button, {
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

try {
  Dropdown.displayName = "Dropdown";
  Dropdown.__docgenInfo = {
    description: "",
    displayName: "Dropdown",
    props: {
      "options": {
        "defaultValue": null,
        "description": "",
        "name": "options",
        "required": true,
        "type": {
          "name": "IOption[]"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "disabled": {
        "defaultValue": null,
        "description": "",
        "name": "disabled",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "buttonType": {
        "defaultValue": null,
        "description": "",
        "name": "buttonType",
        "required": false,
        "type": {
          "name": "\"Primary\" | \"Secondary\" | \"Info\" | \"Cancel\""
        }
      }
    }
  };
} catch (e) {}

var Buttons =
/** @class */
function (_super) {
  __extends(Buttons, _super);

  function Buttons() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Buttons.prototype.render = function () {
    return React.createElement(Buttons.Secondary, this.props);
  };

  Buttons.Primary = Primary;
  Buttons.Secondary = Secondary;
  Buttons.Info = Info;
  Buttons.Cancel = Cancel;
  Buttons.Base = Base;
  Buttons.Outline = Outline;
  Buttons.Ghost = Ghost;
  Buttons.PrimaryGhost = PrimaryGhostButton;
  Buttons.CancelGhost = CancelGhostButton;
  Buttons.Dropdown = Dropdown;
  Buttons.Text = Text;
  Buttons.Blank = Blank;
  return Buttons;
}(Component);

try {
  Buttons.displayName = "Buttons";
  Buttons.__docgenInfo = {
    description: "",
    displayName: "Buttons",
    props: {
      "success": {
        "defaultValue": null,
        "description": "Shows success checkmark animation",
        "name": "success",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "error": {
        "defaultValue": null,
        "description": "Shows error color",
        "name": "error",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "raised": {
        "defaultValue": null,
        "description": "Shows button in raised state\n@defaultValue true",
        "name": "raised",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "backgroundColor": {
        "defaultValue": null,
        "description": "Background color of button",
        "name": "backgroundColor",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "icon": {
        "defaultValue": null,
        "description": "Name of Icon",
        "name": "icon",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "iconPosition": {
        "defaultValue": null,
        "description": "Position of Icon",
        "name": "iconPosition",
        "required": false,
        "type": {
          "name": "\"left\" | \"right\""
        }
      },
      "iconSize": {
        "defaultValue": null,
        "description": "Size of Icon",
        "name": "iconSize",
        "required": false,
        "type": {
          "name": "number"
        }
      }
    }
  };
} catch (e) {}

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

var css$5 = "@import url(\"https://rsms.me/inter/inter.css\");\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n/* TYPOGRAPHY */\n.small-body-text {\n  font-size: var(--small-body-text) !important; }\n\n.tiny-body-text {\n  font-size: var(--tiny-body-text) !important; }\n\n.uppercase {\n  text-transform: uppercase !important; }\n\n/* TEXT ALIGNMENT */\n.text-left {\n  text-align: left !important; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-right {\n  text-align: right !important; }\n\n/* CURSOR */\n.cursor-pointer {\n  cursor: pointer !important; }\n\n.block {\n  display: block !important; }\n\n/* FLEXBOX */\n.flex {\n  display: flex !important; }\n\n.inline-flex {\n  display: inline-flex !important; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.free-top {\n  margin-top: auto !important; }\n\n.free-left {\n  margin-left: auto !important; }\n\n.free-right {\n  margin-right: auto !important; }\n\n.free-bottom {\n  margin-bottom: auto !important; }\n\n.order-before {\n  order: -1 !important; }\n\n.order-after {\n  order: 1 !important; }\n\n.items-start {\n  align-items: flex-start !important; }\n\n.items-end {\n  align-items: flex-end !important; }\n\n.items-center {\n  align-items: center !important; }\n\n.items-baseline {\n  align-items: baseline !important; }\n\n.items-stretch {\n  align-items: stretch !important; }\n\n.self-center {\n  align-self: center !important; }\n\n.self-baseline {\n  align-self: baseline !important; }\n\n.self-stretch {\n  align-self: stretch !important; }\n\n.self-start {\n  align-self: flex-start !important; }\n\n.self-end {\n  align-self: flex-end !important; }\n\n.justify-start {\n  justify-content: flex-start !important; }\n\n.justify-end {\n  justify-content: flex-end !important; }\n\n.justify-center {\n  justify-content: center !important; }\n\n.justify-between {\n  justify-content: space-between !important; }\n\n.justify-around {\n  justify-content: space-around !important; }\n\n.justify-evenly {\n  justify-content: space-evenly !important; }\n\n.content-start {\n  align-content: flex-start !important; }\n\n.content-end {\n  align-content: flex-end !important; }\n\n.content-center {\n  align-content: center !important; }\n\n.content-between {\n  align-content: space-between !important; }\n\n.content-around {\n  align-content: space-around !important; }\n\n.content-stretch {\n  align-content: stretch !important; }\n\n.flex-min {\n  min-height: 0 !important;\n  min-width: 0 !important; }\n\n.flex-max {\n  max-height: 100% !important;\n  max-width: 100% !important; }\n\n.flex-golden {\n  flex: 0 1 61.803398875% !important; }\n\n.flex-initial {\n  flex: 0 1 auto !important; }\n\n.flex-auto {\n  flex: 1 1 auto !important; }\n\n.flex-none {\n  flex: 0 0 auto !important; }\n\n.flex-1 {\n  flex: 1 1 !important; }\n\n.flex-2 {\n  flex: 2 1 !important; }\n\n.flex-3 {\n  flex: 3 1 !important; }\n\n.flex-4 {\n  flex: 4 1 !important; }\n\n.flex-5 {\n  flex: 5 1 !important; }\n\n.flex-6 {\n  flex: 6 1 !important; }\n\n.flex-7 {\n  flex: 7 1 !important; }\n\n.flex-8 {\n  flex: 8 1 !important; }\n\n.flex-9 {\n  flex: 9 1 !important; }\n\n.flex-10 {\n  flex: 10 1 !important; }\n\n.flex-11 {\n  flex: 11 1 !important; }\n\n.flex-12 {\n  flex: 12 1 !important; }\n\n.grow-0 {\n  flex-grow: 0 !important; }\n\n.grow-1 {\n  flex-grow: 1 !important; }\n\n.grow-2 {\n  flex-grow: 2 !important; }\n\n.grow-3 {\n  flex-grow: 3 !important; }\n\n.grow-4 {\n  flex-grow: 4 !important; }\n\n.grow-5 {\n  flex-grow: 5 !important; }\n\n.grow-6 {\n  flex-grow: 6 !important; }\n\n.grow-7 {\n  flex-grow: 7 !important; }\n\n.grow-8 {\n  flex-grow: 8 !important; }\n\n.grow-9 {\n  flex-grow: 9 !important; }\n\n.grow-10 {\n  flex-grow: 10 !important; }\n\n.grow-11 {\n  flex-grow: 11 !important; }\n\n.grow-12 {\n  flex-grow: 12 !important; }\n\n.shrink-0 {\n  flex-shrink: 0 !important; }\n\n.shrink-1 {\n  flex-shrink: 1 !important; }\n\n.shrink-2 {\n  flex-shrink: 2 !important; }\n\n.shrink-3 {\n  flex-shrink: 3 !important; }\n\n.shrink-4 {\n  flex-shrink: 4 !important; }\n\n.shrink-5 {\n  flex-shrink: 5 !important; }\n\n.shrink-6 {\n  flex-shrink: 6 !important; }\n\n.shrink-7 {\n  flex-shrink: 7 !important; }\n\n.shrink-8 {\n  flex-shrink: 8 !important; }\n\n.shrink-9 {\n  flex-shrink: 9 !important; }\n\n.shrink-10 {\n  flex-shrink: 10 !important; }\n\n.shrink-11 {\n  flex-shrink: 11 !important; }\n\n.shrink-12 {\n  flex-shrink: 12 !important; }\n\n.basis-0 {\n  flex-basis: 0% !important; }\n\n.basis-1 {\n  flex-basis: 8.333333333% !important; }\n\n.basis-2 {\n  flex-basis: 16.6666666666% !important; }\n\n.basis-3 {\n  flex-basis: 25% !important; }\n\n.basis-4 {\n  flex-basis: 33.3333333333% !important; }\n\n.basis-5 {\n  flex-basis: 41.6666666666% !important; }\n\n.basis-6 {\n  flex-basis: 50% !important; }\n\n.basis-7 {\n  flex-basis: 58.333333333% !important; }\n\n.basis-8 {\n  flex-basis: 66.6666666666% !important; }\n\n.basis-9 {\n  flex-basis: 75% !important; }\n\n.basis-10 {\n  flex-basis: 83.3333333333% !important; }\n\n.basis-11 {\n  flex-basis: 91.6666666666% !important; }\n\n.basis-12 {\n  flex-basis: 100% !important; }\n\n.basis-100vw {\n  flex-basis: 100vw !important; }\n\n.basis-100vh {\n  flex-basis: 100vh !important; }\n\n.basis-100vmax {\n  flex-basis: 100vmax !important; }\n\n.basis-100vmin {\n  flex-basis: 100vmin !important; }\n\n.basis-golden {\n  flex-basis: 61.803398875% !important; }\n\n.basis-content {\n  flex-basis: content !important; }\n\n.basis-auto {\n  flex-basis: auto !important; }\n\n.inline-block {\n  display: inline-block; }\n\n.relative {\n  position: relative; }\n\n.absolute {\n  position: absolute; }\n\n@media (orientation: portrait) {\n  .flex\\@portrait {\n    display: flex !important; }\n  .inline-flex\\@portrait {\n    display: inline-flex !important; }\n  .flex-wrap\\@portrait {\n    flex-wrap: wrap !important; }\n  .flex-nowrap\\@portrait {\n    flex-wrap: nowrap !important; }\n  .flex-wrap-reverse\\@portrait {\n    flex-wrap: wrap-reverse !important; } }\n\n@media (orientation: landscape) {\n  .flex\\@landscape {\n    display: flex !important; }\n  .inline-flex\\@landscape {\n    display: inline-flex !important; }\n  .flex-wrap\\@landscape {\n    flex-wrap: wrap !important; }\n  .flex-nowrap\\@landscape {\n    flex-wrap: nowrap !important; }\n  .flex-wrap-reverse\\@landscape {\n    flex-wrap: wrap-reverse !important; } }\n\n.float-r {\n  float: right !important; }\n\n.float-l {\n  float: left !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.m-025 {\n  margin: 0.25rem !important; }\n\n.m-05 {\n  margin: 0.5rem !important; }\n\n.m-1 {\n  margin: 1rem !important; }\n\n.m-2 {\n  margin: 2rem !important; }\n\n.m-3 {\n  margin: 3rem !important; }\n\n.m-4 {\n  margin: 4rem !important; }\n\n.m-5 {\n  margin: 5rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important; }\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n\n.mx-025 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important; }\n\n.mx-05 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important; }\n\n.mx-075 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important; }\n\n.mx-1 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important; }\n\n.mx-2 {\n  margin-left: 2rem !important;\n  margin-right: 2rem !important; }\n\n.mx-3 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important; }\n\n.mx-4 {\n  margin-left: 4rem !important;\n  margin-right: 4rem !important; }\n\n.mx-5 {\n  margin-left: 5rem !important;\n  margin-right: 5rem !important; }\n\n.mx-6 {\n  margin-left: 6rem !important;\n  margin-right: 6rem !important; }\n\n.mx-7 {\n  margin-left: 7rem !important;\n  margin-right: 7rem !important; }\n\n.mx-8 {\n  margin-left: 8rem !important;\n  margin-right: 8rem !important; }\n\n.mx-9 {\n  margin-left: 9rem !important;\n  margin-right: 9rem !important; }\n\n.mx-10 {\n  margin-left: 10rem !important;\n  margin-right: 10rem !important; }\n\n.mx-11 {\n  margin-left: 11rem !important;\n  margin-right: 11rem !important; }\n\n.mx-12 {\n  margin-left: 12rem !important;\n  margin-right: 12rem !important; }\n\n.mx-13 {\n  margin-left: 13rem !important;\n  margin-right: 13rem !important; }\n\n.mx-14 {\n  margin-left: 14rem !important;\n  margin-right: 14rem !important; }\n\n.my-auto {\n  margin-bottom: auto !important;\n  margin-top: auto !important; }\n\n.my-0 {\n  margin-bottom: 0 !important;\n  margin-top: 0 !important; }\n\n.my-025 {\n  margin-bottom: 0.25rem !important;\n  margin-top: 0.25rem !important; }\n\n.my-05 {\n  margin-bottom: 0.5rem !important;\n  margin-top: 0.5rem !important; }\n\n.my-075 {\n  margin-bottom: 0.75rem !important;\n  margin-top: 0.75rem !important; }\n\n.my-1 {\n  margin-bottom: 1rem !important;\n  margin-top: 1rem !important; }\n\n.my-2 {\n  margin-bottom: 2rem !important;\n  margin-top: 2rem !important; }\n\n.my-3 {\n  margin-bottom: 3rem !important;\n  margin-top: 3rem !important; }\n\n.my-4 {\n  margin-bottom: 4rem !important;\n  margin-top: 4rem !important; }\n\n.my-5 {\n  margin-bottom: 5rem !important;\n  margin-top: 5rem !important; }\n\n.my-6 {\n  margin-bottom: 6rem !important;\n  margin-top: 6rem !important; }\n\n.my-6 {\n  margin-bottom: 6rem !important;\n  margin-top: 6rem !important; }\n\n.my-7 {\n  margin-bottom: 7rem !important;\n  margin-top: 7rem !important; }\n\n.my-8 {\n  margin-bottom: 8rem !important;\n  margin-top: 8rem !important; }\n\n.my-9 {\n  margin-bottom: 9rem !important;\n  margin-top: 9rem !important; }\n\n.my-10 {\n  margin-bottom: 10rem !important;\n  margin-top: 10rem !important; }\n\n.my-11 {\n  margin-bottom: 11rem !important;\n  margin-top: 11rem !important; }\n\n.my-12 {\n  margin-bottom: 12rem !important;\n  margin-top: 12rem !important; }\n\n.my-13 {\n  margin-bottom: 13rem !important;\n  margin-top: 13rem !important; }\n\n.my-14 {\n  margin-bottom: 14rem !important;\n  margin-top: 14rem !important; }\n\n.mt-auto {\n  margin-top: auto !important; }\n\n.mt-0 {\n  margin-top: 0 !important; }\n\n.mt-025 {\n  margin-top: 0.25rem !important; }\n\n.mt-05 {\n  margin-top: 0.5rem !important; }\n\n.mt-075 {\n  margin-top: 0.75rem !important; }\n\n.mt-1 {\n  margin-top: 1rem !important; }\n\n.mt-2 {\n  margin-top: 2rem !important; }\n\n.mt-3 {\n  margin-top: 3rem !important; }\n\n.mt-4 {\n  margin-top: 4rem !important; }\n\n.mt-5 {\n  margin-top: 5rem !important; }\n\n.mt-6 {\n  margin-top: 6rem !important; }\n\n.mt-7 {\n  margin-top: 7rem !important; }\n\n.mt-8 {\n  margin-top: 8rem !important; }\n\n.mt-9 {\n  margin-top: 9rem !important; }\n\n.mt-10 {\n  margin-top: 10rem !important; }\n\n.mt-11 {\n  margin-top: 11rem !important; }\n\n.mt-12 {\n  margin-top: 12rem !important; }\n\n.mt-13 {\n  margin-top: 13rem !important; }\n\n.mt-14 {\n  margin-top: 14rem !important; }\n\n.mb-auto {\n  margin-bottom: auto !important; }\n\n.mb-0 {\n  margin-bottom: 0 !important; }\n\n.mb-025 {\n  margin-bottom: 0.25rem !important; }\n\n.mb-05 {\n  margin-bottom: 0.5rem !important; }\n\n.mb-075 {\n  margin-bottom: 0.75rem !important; }\n\n.mb-1 {\n  margin-bottom: 1rem !important; }\n\n.mb-2 {\n  margin-bottom: 2rem !important; }\n\n.mb-3 {\n  margin-bottom: 3rem !important; }\n\n.mb-4 {\n  margin-bottom: 4rem !important; }\n\n.mb-5 {\n  margin-bottom: 5rem !important; }\n\n.mb-6 {\n  margin-bottom: 6rem !important; }\n\n.mb-7 {\n  margin-bottom: 7rem !important; }\n\n.mb-8 {\n  margin-bottom: 8rem !important; }\n\n.mb-9 {\n  margin-bottom: 9rem !important; }\n\n.mb-10 {\n  margin-bottom: 10rem !important; }\n\n.mb-11 {\n  margin-bottom: 11rem !important; }\n\n.mb-12 {\n  margin-bottom: 12rem !important; }\n\n.mb-13 {\n  margin-bottom: 13rem !important; }\n\n.mb-14 {\n  margin-bottom: 14rem !important; }\n\n.ml-auto {\n  margin-left: auto !important; }\n\n.ml-0 {\n  margin-left: 0 !important; }\n\n.ml-05 {\n  margin-left: 0.5rem !important; }\n\n.ml-1 {\n  margin-left: 1rem !important; }\n\n.ml-2 {\n  margin-left: 2rem !important; }\n\n.ml-3 {\n  margin-left: 3rem !important; }\n\n.ml-4 {\n  margin-left: 4rem !important; }\n\n.ml-5 {\n  margin-left: 5rem !important; }\n\n.ml-6 {\n  margin-left: 6rem !important; }\n\n.ml-7 {\n  margin-left: 7rem !important; }\n\n.ml-8 {\n  margin-left: 8rem !important; }\n\n.ml-9 {\n  margin-left: 9rem !important; }\n\n.ml-10 {\n  margin-left: 10rem !important; }\n\n.ml-11 {\n  margin-left: 11rem !important; }\n\n.ml-12 {\n  margin-left: 12rem !important; }\n\n.ml-13 {\n  margin-left: 13rem !important; }\n\n.ml-14 {\n  margin-left: 14rem !important; }\n\n.mr-auto {\n  margin-right: auto !important; }\n\n.mr-0 {\n  margin-right: 0 !important; }\n\n.mr-05 {\n  margin-right: 0.5rem !important; }\n\n.mr-1 {\n  margin-right: 1rem !important; }\n\n.mr-2 {\n  margin-right: 2rem !important; }\n\n.mr-3 {\n  margin-right: 3rem !important; }\n\n.mr-4 {\n  margin-right: 4rem !important; }\n\n.mr-5 {\n  margin-right: 5rem !important; }\n\n.mr-6 {\n  margin-right: 6rem !important; }\n\n.mr-7 {\n  margin-right: 7rem !important; }\n\n.mr-8 {\n  margin-right: 8rem !important; }\n\n.mr-9 {\n  margin-right: 9rem !important; }\n\n.mr-10 {\n  margin-right: 10rem !important; }\n\n.mr-11 {\n  margin-right: 11rem !important; }\n\n.mr-12 {\n  margin-right: 12rem !important; }\n\n.mr-13 {\n  margin-right: 13rem !important; }\n\n.mr-14 {\n  margin-right: 14rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.p-05 {\n  padding: 0.5rem !important; }\n\n.p-1 {\n  padding: 1rem !important; }\n\n.pt-0 {\n  padding-top: 0 !important; }\n\n.pt-1 {\n  padding-top: 1rem !important; }\n\n.pt-2 {\n  padding-top: 2rem !important; }\n\n.pt-3 {\n  padding-top: 3rem !important; }\n\n.pb-0 {\n  padding-bottom: 0 !important; }\n\n.pb-1 {\n  padding-bottom: 1rem !important; }\n\n.pb-2 {\n  padding-bottom: 2rem !important; }\n\n.pb-3 {\n  padding-bottom: 3rem !important; }\n\n.pl-0 {\n  padding-left: 0 !important; }\n\n.pl-1 {\n  padding-left: 1rem !important; }\n\n.pl-2 {\n  padding-left: 2rem !important; }\n\n.pl-3 {\n  padding-left: 3rem !important; }\n\n.pr-0 {\n  padding-right: 0 !important; }\n\n.pr-1 {\n  padding-right: 1rem !important; }\n\n.pr-2 {\n  padding-right: 2rem !important; }\n\n.pr-3 {\n  padding-right: 3rem !important; }\n\n.py-1 {\n  padding-bottom: 1rem !important;\n  padding-top: 1rem !important; }\n\n.py-2 {\n  padding-bottom: 2rem !important;\n  padding-top: 2rem !important; }\n\n.py-3 {\n  padding-bottom: 3rem !important;\n  padding-top: 3rem !important; }\n\n.py-4 {\n  padding-bottom: 4rem !important;\n  padding-top: 4rem !important; }\n\n.py-5 {\n  padding-bottom: 5rem !important;\n  padding-top: 5rem !important; }\n\n.py-6 {\n  padding-bottom: 6rem !important;\n  padding-top: 6rem !important; }\n\n.py-6 {\n  padding-bottom: 6rem !important;\n  padding-top: 6rem !important; }\n\n.py-7 {\n  padding-bottom: 7rem !important;\n  padding-top: 7rem !important; }\n\n.py-8 {\n  padding-bottom: 8rem !important;\n  padding-top: 8rem !important; }\n\n.py-9 {\n  padding-bottom: 9rem !important;\n  padding-top: 9rem !important; }\n\n.py-10 {\n  padding-bottom: 10rem !important;\n  padding-top: 10rem !important; }\n\n.py-11 {\n  padding-bottom: 11rem !important;\n  padding-top: 11rem !important; }\n\n.py-12 {\n  padding-bottom: 12rem !important;\n  padding-top: 12rem !important; }\n\n.py-13 {\n  padding-bottom: 13rem !important;\n  padding-top: 13rem !important; }\n\n.py-14 {\n  padding-bottom: 14rem !important;\n  padding-top: 14rem !important; }\n\n/* WIDTH AND HEIGHT */\n.w-100 {\n  width: 100% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.vw-100 {\n  width: 100vw !important; }\n\n.vh-100 {\n  height: 100vh !important; }\n\n.border {\n  border: 1px solid var(--border) !important; }\n\n.border-l {\n  border-left: 1px solid var(--border) !important; }\n\n.border-t {\n  border-top: 1px solid var(--border) !important; }\n\n.border-r {\n  border-right: 1px solid var(--border) !important; }\n\n.border-b {\n  border-bottom: 1px solid var(--border) !important; }\n\n.dash-border-b {\n  border-bottom: 1px dashed var(--grey-700) !important; }\n\n.bd-radius {\n  border-radius: var(--default-border-radius) !important; }\n\n/* debug helpers */\n.bd {\n  border: 1px solid lime !important; }\n\n.circular {\n  border-radius: 50%; }\n\n/* Uncomment below for x-ray vision */\n/* * {\n  border: 1px solid lime !important;\n} */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {\n  .not-mobile-mr {\n    margin-right: 0 !important; }\n  .not-mobile-ml {\n    margin-left: 0 !important; } }\n\n@font-face {\n  font-family: \"Akkurat-Mono\";\n  src: url(../assets/fonts/AkkuratMono/AkkMo___.ttf) format(\"truetype\"), url(../assets/fonts/AkkuratMono/AkkMoE__.ttf) format(\"truetype\"); }\n\nhtml,\ninput {\n  font-family: \"Inter\", sans-serif;\n  font-feature-settings: \"tnum\" 1; }\n\n@supports (font-variation-settings: normal) {\n  html {\n    font-family: \"Inter var\", sans-serif; } }\n\nbody {\n  font-weight: 300;\n  font-size: var(--default-font-size);\n  color: #121111; }\n\n/* Override browser focus ring color */\n:focus {\n  outline: none !important; }\n\nul {\n  padding-left: 0; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\ninput {\n  font-weight: 300; }\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none; }\n\ninput::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n";
styleInject(css$5);

var Miscellaneous;

(function (Miscellaneous) {
  Miscellaneous["defaultBorderRadius"] = "4px";
  Miscellaneous["disabledOpacity"] = "0.45";
  Miscellaneous["gutter"] = "16px";
})(Miscellaneous || (Miscellaneous = {}));

var variablesString = "\n  :root {\n    " + generateCssVariables(BoxShadow$1) + "\n    " + generateCssVariables(Color$1) + "\n    " + generateCssVariables(Font$1) + "\n    " + generateCssVariables(Miscellaneous) + "\n  }\n";

var CssVariables = function () {
  return React.createElement("style", null, variablesString);
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

var css$6 = ".Segment-module_SplitButtonSegment__ArSv1:hover, .Segment-module_SplitButtonSegment__ArSv1:focus {\n  -webkit-filter: brightness(90%);\n          filter: brightness(90%); }\n\n.Segment-module_SplitButtonSegment__ArSv1:first-of-type {\n  border-top-left-radius: var(--default-border-radius);\n  border-bottom-left-radius: var(--default-border-radius); }\n\n.Segment-module_SplitButtonSegment__ArSv1:last-of-type {\n  border-top-right-radius: var(--default-border-radius);\n  border-bottom-right-radius: var(--default-border-radius); }\n";
var styles$1 = {"SplitButtonSegment":"Segment-module_SplitButtonSegment__ArSv1"};
styleInject(css$6);

var Segment =
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
    return React.createElement("button", _extends({}, restOfProps, {
      className: styles$1.SplitButtonSegment,
      style: __assign({
        backgroundColor: backgroundColor,
        color: selected ? Color$1.trueWhite : color,
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
    }), children);
  };

  return Segment;
}(Component);

try {
  Segment.displayName = "Segment";
  Segment.__docgenInfo = {
    description: "",
    displayName: "Segment",
    props: {
      "selected": {
        "defaultValue": null,
        "description": "",
        "name": "selected",
        "required": true,
        "type": {
          "name": "boolean"
        }
      },
      "small": {
        "defaultValue": null,
        "description": "",
        "name": "small",
        "required": false,
        "type": {
          "name": "boolean"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "onClick": {
        "defaultValue": null,
        "description": "",
        "name": "onClick",
        "required": false,
        "type": {
          "name": "(event: any) => void"
        }
      }
    }
  };
} catch (e) {}

var DefaultSplitButtons = function (props) {
  var labels = props.labels,
      style = props.style,
      className = props.className,
      segmentStyle = props.segmentStyle,
      onChange = props.onChange,
      selectedIndex = props.selectedIndex,
      color = props.color;
  var numBtns = labels.length;
  return React.createElement("div", _extends({
    className: className,
    style: style
  }, {
    style: {
      display: "inline-grid",
      gridTemplateColumns: "repeat(" + numBtns + ", 1fr)"
    }
  }), labels.map(function (label, index) {
    return React.createElement(Segment, {
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

  return React.createElement(DefaultSplitButtons, _extends({
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
    return React.createElement(DefaultSplitButtons, this.props);
  };

  Split.Primary = PrimarySplitButtons;
  return Split;
}(Component);

try {
  Split.displayName = "Split";
  Split.__docgenInfo = {
    description: "",
    displayName: "Split",
    props: {
      "labels": {
        "defaultValue": null,
        "description": "",
        "name": "labels",
        "required": true,
        "type": {
          "name": "string[]"
        }
      },
      "selectedIndex": {
        "defaultValue": null,
        "description": "",
        "name": "selectedIndex",
        "required": false,
        "type": {
          "name": "number"
        }
      },
      "onChange": {
        "defaultValue": null,
        "description": "",
        "name": "onChange",
        "required": true,
        "type": {
          "name": "(index: number) => void"
        }
      },
      "segmentStyle": {
        "defaultValue": null,
        "description": "",
        "name": "segmentStyle",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "color": {
        "defaultValue": null,
        "description": "",
        "name": "color",
        "required": false,
        "type": {
          "name": "any"
        }
      },
      "style": {
        "defaultValue": null,
        "description": "",
        "name": "style",
        "required": false,
        "type": {
          "name": "CSSProperties"
        }
      },
      "className": {
        "defaultValue": null,
        "description": "",
        "name": "className",
        "required": false,
        "type": {
          "name": "string"
        }
      }
    }
  };
} catch (e) {}

//   /**
//    * Margin as rems used on Y axis of element
//    * @defaultValue 1.5
//    */
//   marginSize?: TMargin;
// }

function Margin(props) {
  var _a = props.marginSize,
      _b = props.showDividerLine,
      rest = __rest(props, ["marginSize", "showDividerLine"]);

  return React.createElement("span", null);
}

try {
  Margin.displayName = "Margin";
  Margin.__docgenInfo = {
    description: "",
    displayName: "Margin",
    props: {}
  };
} catch (e) {}

function StateContainer(_a) {
  var initialState = _a.initialState,
      children = _a.children;

  var _b = useState(initialState),
      state = _b[0],
      setState = _b[1];

  return children({
    state: state,
    setState: setState
  });
}

try {
  StateContainer.displayName = "StateContainer";
  StateContainer.__docgenInfo = {
    description: "",
    displayName: "StateContainer",
    props: {
      "initialState": {
        "defaultValue": null,
        "description": "",
        "name": "initialState",
        "required": true,
        "type": {
          "name": "T"
        }
      }
    }
  };
} catch (e) {}

var styles$2 = {};

var Typography$1 = function (props) {
  return React.createElement("span", props);
};

var Toggle =
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
        containerClass = styles$2.labelContainerLeft;
        break;

      case "right":
        containerClass = styles$2.labelContainerRight;
        break;

      case "top":
        containerClass = styles$2.labelContainerTop;
        break;

      case "bottom":
        containerClass = styles$2.labelContainerBottom;
        break;

      default:
        containerClass = styles$2.labelContainerLeft;
    }

    return React.createElement("div", {
      className: className + " " + containerClass + " cursor-pointer ",
      onClick: toggle,
      tabIndex: 0,
      onKeyDown: keyDown
    }, label && React.createElement(Typography$1, {
      color: Color$1.grey700
    }, label), React.createElement("div", {
      className: checked ? styles$2.containerActive : styles$2.containerInactive
    }, React.createElement("div", {
      className: checked ? styles$2.toggleActive : styles$2.toggleInactive
    })));
  };

  Toggle.defaultProps = {
    labelPosition: "right"
  };
  return Toggle;
}(React.Component);

function StateCtrl(props) {
  var children = props.children,
      toggleInterval = props.toggleInterval,
      _a = props.label,
      label = _a === void 0 ? "" : _a,
      _b = props.defaultState,
      defaultState = _b === void 0 ? false : _b;

  var _c = useState(defaultState),
      on = _c[0],
      setOn = _c[1]; // If toggleInterval prop, toggle the state every X milliseconds


  useEffect(function () {
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
  return React.createElement(Fragment, null, !toggleInterval && React.createElement("div", null, React.createElement(Toggle, {
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

try {
  StateCtrl.displayName = "StateCtrl";
  StateCtrl.__docgenInfo = {
    description: "",
    displayName: "StateCtrl",
    props: {
      "label": {
        "defaultValue": null,
        "description": "",
        "name": "label",
        "required": false,
        "type": {
          "name": "string"
        }
      },
      "toggleInterval": {
        "defaultValue": null,
        "description": "",
        "name": "toggleInterval",
        "required": false,
        "type": {
          "name": "number | boolean"
        }
      },
      "defaultState": {
        "defaultValue": null,
        "description": "",
        "name": "defaultState",
        "required": false,
        "type": {
          "name": "boolean"
        }
      }
    }
  };
} catch (e) {}

function Text$1(props) {
  var underlined = props.underlined,
      marginTop = props.marginTop,
      _a = props.marginBottom,
      marginBottom = _a === void 0 ? ".6rem" : _a;

  {
    marginTop = "1.5rem";
  }

  return React.createElement("div", null, React.createElement("span", {
    className: "" + " " + (underlined ? "border-b" : ""),
    style: {
      marginTop: marginTop,
      marginBottom: marginBottom,
      display: "inline-block"
    }
  }, props.children));
}

try {
  Text$1.displayName = "Text";
  Text$1.__docgenInfo = {
    description: "",
    displayName: "Text",
    props: {}
  };
} catch (e) {}



var StoryCmpts = /*#__PURE__*/Object.freeze({
    Margin: Margin,
    StateContainer: StateContainer,
    StateCtrl: StateCtrl,
    Text: Text$1
});

var StoryHelpers = StoryCmpts;

export { AnimatedCheckmark, Base, BoxShadow$1 as BoxShadow, Buttons, Color$1 as Color, CssVariables as CssFramework, Icon, Split as SplitButton, StoryHelpers, Typography };
//# sourceMappingURL=index.storybook.js.map
