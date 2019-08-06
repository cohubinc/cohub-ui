export var truncateString = function (length, separator) {
    if (separator === void 0) { separator = "..."; }
    return function (string) {
        return length < string.length
            ? string.slice(0, length).trimEnd() + separator
            : string;
    };
};
export function childIsVisible(parent, child, offset) {
    if (offset === void 0) { offset = 120; }
    if (!parent || !child)
        return true;
    var parentRect = parent.getBoundingClientRect();
    var parentViewableArea = {
        height: parent.clientHeight,
        width: parent.clientWidth
    };
    var childRect = child.getBoundingClientRect();
    // Is the child viewable?
    var childViewable = childRect.top >= parentRect.top &&
        childRect.top <= parentRect.top + parentViewableArea.height - offset;
    return childViewable;
}
export function stringifiedObjectValues(obj, separator) {
    if (separator === void 0) { separator = ", "; }
    return Object.values(JSON.parse(obj)).join(separator);
}
//# sourceMappingURL=ui.js.map