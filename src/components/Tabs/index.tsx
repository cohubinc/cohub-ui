import React, { Component } from "react";

import "./Tabs.scss";
import Tab from "./Tab";

export interface ITabsProps {
  children: Array<JSX.Element | false | null>;
}

export default class Tabs extends Component<ITabsProps> {
  static Tab = Tab;

  render() {
    const { children } = this.props;

    const activeChild = children.find(child => {
      if (!child || !child.props) {
        return false;
      }

      return (
        (child as any).props.active ||
        window.location.pathname === (child as any).props.path
      );
    }) as JSX.Element;

    return (
      <React.Fragment>
        <div className="Tabs flex">{children}</div>
        <div className="Tabs-Content">
          {activeChild && activeChild.props.component}
        </div>
      </React.Fragment>
    );
  }
}
