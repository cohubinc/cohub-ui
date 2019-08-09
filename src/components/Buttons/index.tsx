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
import Split from "./Split";

export default class Buttons extends Component<IBaseButtonProps> {
  static Base = Button;
  static Primary = Primary;
  static Secondary = Secondary;
  static Info = Info;
  static Cancel = Cancel;
  static Outline = OutlineButton;
  static Ghost = Ghost;
  static PrimaryGhost = PrimaryGhostButton;
  static CancelGhost = CancelGhostButton;

  static Dropdown = Dropdown;

  static Text = Text;

  static Blank = Blank;

  static FloatingAction = FloatingActionButton;

  static Split = Split;

  render() {
    return <Buttons.Secondary {...this.props} />;
  }
}
