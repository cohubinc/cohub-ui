import Font from "../../../definitions/enums/Font";
import { typographyFactory } from "./typographyFactory";

export const SuperTitle = typographyFactory({
  "data-qa": "page-supertitle",
  style: { fontSize: 48, lineHeight: "normal", display: "block" }
});

export const Title = typographyFactory({
  "data-qa": "page-title",
  style: { fontSize: 36, lineHeight: "normal", display: "block" }
});

export const Subtitle = typographyFactory({
  "data-qa": "page-subtitle",
  style: { fontSize: 30, display: "block" }
});

export const HeadingLarge = typographyFactory({
  "data-qa": "heading-large",
  style: { fontSize: 24, display: "block" }
});

export const HeadingSmall = typographyFactory({
  "data-qa": "heading-small",
  style: { fontSize: 20, display: "block" }
});

export const HeadingTiny = typographyFactory({
  "data-qa": "heading-tiny",
  style: { fontSize: 18, display: "block" }
});

export const Large = typographyFactory({ style: { fontSize: 16 } });

export const Regular = typographyFactory({
  style: { fontSize: Font.defaultFontSize }
});

export const Small = typographyFactory({ style: { fontSize: 12 } });

export const Tiny = typographyFactory({ style: { fontSize: 10.2 } });
