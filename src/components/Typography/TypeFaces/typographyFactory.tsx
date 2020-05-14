import React, { CSSProperties } from "react";
import { ITypographyProps } from "../definitions/ITypographyProps";
import Color from "../../../definitions/enums/Color";

type TFactoryArgs = Omit<ITypographyProps, "children">;
// Function that takes some typography props and returns a Typography component
export function typographyFactory(defaultProps: TFactoryArgs) {
  return (props: ITypographyProps) => {
    const { style: factoryStyle } = defaultProps;
    const { children, style } = props;

    if (children === undefined || React.Children.count(children) === 0)
      return null;

    const mergedProperties = { ...defaultProps, ...props };
    const {
      fontFamily,
      p,
      muted,
      light,
      block,
      error,
      className = "",
      inverted,
      color = Color.text,
      uppercase,
      alignment,
      weight,
      kerning,
      bold,
      mono,
      italicize,
      "data-qa": dataQa = "text",
    } = mergedProperties;

    let fontFamilyStyle = fontFamily ? { fontFamily } : { fontFamily: "Inter" };
    const fontWeightStyle = { fontWeight: weight || 400 };
    const boldStyles = bold ? { fontWeight: 600 } : {};
    const mutedStyle = muted ? { color: Color.lightText as any } : {};
    const kerningStyle = kerning ? { letterSpacing: `${kerning}rem` } : {};
    const blockStyle = block ? { display: "block" } : {};
    const lightStyle = light ? { color: Color.trueWhite as any } : {};
    const invertedStyle = inverted ? { color: Color.invertedText as any } : {};
    const errorStyle = error ? { color: Color.primaryRed as any } : {};
    const italicStyle = italicize ? { fontStyle: "italic" } : {};

    if (mono) {
      fontFamilyStyle = { fontFamily: "Roboto Mono" };
    }

    const styleDefaults = {
      color: color as any,
      textTransform: (uppercase ? "uppercase" : "initial") as any,
      textAlign: (alignment ? alignment : "initial") as any,
    };
    const mergedStyles = { ...factoryStyle, ...style };
    const styleProp: CSSProperties = {
      ...styleDefaults,
      ...fontFamilyStyle,
      ...fontWeightStyle,
      ...boldStyles,
      ...italicStyle,
      ...kerningStyle,
      ...mutedStyle,
      ...blockStyle,
      ...lightStyle,
      ...invertedStyle,
      ...errorStyle,
      ...mergedStyles,
    };

    const properties = {
      children,
      className,
      style: styleProp,
      "data-qa": dataQa,
    };

    return p ? <p {...properties} /> : <span {...properties} />;
  };
}
