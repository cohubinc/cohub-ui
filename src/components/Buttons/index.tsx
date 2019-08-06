import React, { Component } from "react";

import Button, { IBaseButtonProps } from "./Base";
import Blank from "./Blank";
import OutlineButton from "./Outline";
import { Ghost, PrimaryGhostButton, CancelGhostButton } from "./Ghost";
import Text from "./Text";
import Primary from "./Primary";
import Secondary from "./Secondary";
import Info from "./Info";
import Cancel from "./Cancel";
import Dropdown from "./Dropdown/index";
import FloatingActionButton from "./FloatingActionButton";

export default class Buttons extends Component<IBaseButtonProps> {
  static Primary = Primary;
  static Secondary = Secondary;
  static Info = Info;
  static Cancel = Cancel;
  static Base = Button;

  static Outline = OutlineButton;

  static Ghost = Ghost;
  static PrimaryGhost = PrimaryGhostButton;
  static CancelGhost = CancelGhostButton;
  static Dropdown = Dropdown;

  static Text = Text;

  static Blank = Blank;

  static FloatingAction = FloatingActionButton;

  render() {
    return <Buttons.Secondary {...this.props} />;
  }
}
