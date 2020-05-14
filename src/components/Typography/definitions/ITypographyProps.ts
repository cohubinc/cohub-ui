import { CSSProperties } from "react";
import Color from "../../../definitions/enums/Color";

export interface ITypographyProps {
  fontFamily?: "Akkurat-Mono" | "MillerDisplay" | "Inter" | "Roboto Mono";
  /** React Children nodes are required */
  children: React.ReactNode;
  /** Optionally pass className */
  className?: string;
  /** Optionally pass style object */
  style?: CSSProperties;
  /** Text can be the muted color */
  muted?: boolean;

  /** Text can be display: block */
  block?: boolean;

  /** Font weight */
  weight?: 300 | 400 | 500 | 600 | 700;

  /** Text can be bold */
  bold?: boolean;

  /** Text can be mono spaced */
  mono?: boolean;

  /** Text can be italic */
  italicize?: boolean;

  /** Text can be a <p /> tag instead of a <span /> */
  p?: boolean;

  /** Easily make the text the default light color */
  light?: boolean;

  /** Use error styles */
  error?: boolean;

  /** Text color for dark backgrounds */
  inverted?: boolean;

  color?: Color;

  uppercase?: boolean;

  alignment?: string;

  kerning?: number;

  "data-qa"?: string;
}
