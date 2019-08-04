export const paddingVertical = (top: string | number, bottom = top) => ({
  paddingTop: top,
  paddingBottom: bottom
});

export const paddingHorizontal = (left: string | number, right = left) => ({
  paddingLeft: left,
  paddingRight: right
});

export const marginVertical = (top: string | number, bottom = top) => ({
  marginTop: top,
  marginBottom: bottom
});

export const marginHorizontal = (left: string | number, right = left) => ({
  marginLeft: left,
  marginRight: right
});

export const size = (height: string | number, width = height) => ({
  height: width,
  width: height
});
