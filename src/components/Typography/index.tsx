import React, { Component } from "react";

import IProps from "./definitions/IProps";
import {
  SuperTitle,
  Title,
  Subtitle,
  HeadingLarge,
  HeadingSmall,
  HeadingTiny,
  Large,
  Small,
  Tiny,
  Regular
} from "./TypeFaces";

export type TTypographyProps = IProps;

export default class Typography extends Component<TTypographyProps> {
  static SuperTitle = SuperTitle;
  static Title = Title;
  static Subtitle = Subtitle;
  static HeadingLarge = HeadingLarge;
  static HeadingSmall = HeadingSmall;
  static HeadingTiny = HeadingTiny;
  static Large = Large;
  static Small = Small;
  static Tiny = Tiny;

  render() {
    return <Regular {...this.props} />;
  }
}
