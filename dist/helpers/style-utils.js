export var paddingVertical = function (top, bottom) {
    if (bottom === void 0) { bottom = top; }
    return ({
        paddingTop: top,
        paddingBottom: bottom
    });
};
export var paddingHorizontal = function (left, right) {
    if (right === void 0) { right = left; }
    return ({
        paddingLeft: left,
        paddingRight: right
    });
};
export var marginVertical = function (top, bottom) {
    if (bottom === void 0) { bottom = top; }
    return ({
        marginTop: top,
        marginBottom: bottom
    });
};
export var marginHorizontal = function (left, right) {
    if (right === void 0) { right = left; }
    return ({
        marginLeft: left,
        marginRight: right
    });
};
export var size = function (height, width) {
    if (width === void 0) { width = height; }
    return ({
        height: width,
        width: height
    });
};
//# sourceMappingURL=style-utils.js.map