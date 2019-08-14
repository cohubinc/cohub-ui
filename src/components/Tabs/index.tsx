import React, { Children, ReactElement } from "react";

import Tab, { ITabProps } from "./Tab";

import "./Tabs.scss";

export interface ITabsProps {
  children: Array<ReactElement<ITabProps>>;
  /**
   * If using this component in an app that doesnt use connected-react-router
   * this must be set to false
   * @defaultValue true
   */
  useRedux?: boolean;
}

export default class Tabs extends React.Component<ITabsProps> {
  static Tab = Tab;

  render() {
    const { children, useRedux = true } = this.props;

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
        <div className="Tabs flex">
          {Children.map(children, (tab: ReactElement<ITabProps>) => {
            return React.cloneElement(tab, { useRedux });
          })}
        </div>
        <div className="Tabs-Content">
          {activeChild && activeChild.props.component}
        </div>
      </React.Fragment>
    );
  }
}
