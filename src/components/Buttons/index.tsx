import React, { Component } from "react";

import Button, { IBaseButtonProps } from "./Base";
import Blank from "./Blank";
import OutlineButton from "./Outline";
import {
  Ghost,
  PrimaryGhostButton,
  CancelGhostButton
} from "src/components/Buttons/Ghost";
import Text from "./Text";
import Primary from "./Primary";
import Info from "./Info";
import Cancel from "./Cancel";

export default class Buttons extends Component<IBaseButtonProps> {
  static Primary = Primary;
  static Info = Info;
  static Cancel = Cancel;
  static Default = Button;

  static Outline = OutlineButton;

  static Ghost = Ghost;
  static PrimaryGhost = PrimaryGhostButton;
  static CancelGhost = CancelGhostButton;

  static Text = Text;

  static Blank = Blank;

  render() {
    return <Buttons.Default {...this.props} />;
  }
}
