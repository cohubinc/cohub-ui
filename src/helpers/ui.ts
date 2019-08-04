export const truncateString = (length: number, separator: string = "...") => (
  string: string
) =>
  length < string.length
    ? (string.slice(0, length) as any).trimEnd() + separator
    : string;

export function childIsVisible(parent: Element, child: Element, offset = 120) {
  if (!parent || !child) return true;

  const parentRect = parent.getBoundingClientRect();

  const parentViewableArea = {
    height: parent.clientHeight,
    width: parent.clientWidth
  };

  const childRect = child.getBoundingClientRect();

  // Is the child viewable?
  const childViewable =
    childRect.top >= parentRect.top &&
    childRect.top <= parentRect.top + parentViewableArea.height - offset;

  return childViewable;
}

export function stringifiedObjectValues(obj: string, separator: string = ", ") {
  return Object.values(JSON.parse(obj)).join(separator);
}
