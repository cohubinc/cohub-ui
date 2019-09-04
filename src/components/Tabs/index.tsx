import React, { Children, ReactElement } from "react";
import sortBy from "lodash/sortBy";
import matchStrength from "./match-strength";

import Tab, { ITabProps, IHiddenProps } from "./Tab";

import "./Tabs.scss";

type TTab = ReactElement<ITabProps>;
export interface ITabsProps {
  children: Array<ReactElement<ITabProps>>;
  /**
   * If using this component in an app that doesnt use connected-react-router
   * this must be set to false
   * @defaultValue true
   */
  useRedux?: boolean;
}

export default function Tabs(props: ITabsProps) {
  const { children, useRedux = true } = props;
  const pathname = window.location.pathname;

  const activeTab = children.find(child => child.props.active);

  const tabWithBestPathMatch = sortBy(children, ({ props: { path } }: TTab) =>
    matchStrength(pathname, path || "")
  ).pop()!;

  const renderedTab = activeTab ? activeTab : tabWithBestPathMatch;

  return (
    <React.Fragment>
      <div className="Tabs flex">
        {Children.map(children as any, (tab: ReactElement<IHiddenProps>) => {
          const isTheActiveTab =
            tab.props.active || tab.props.path === renderedTab.props.path;

          return React.cloneElement(tab, {
            useRedux,
            showActiveStyles: !!isTheActiveTab
          });
        })}
      </div>

      <div className="Tabs-Content">{renderedTab.props.component}</div>
    </React.Fragment>
  );
}

Tabs.Tab = Tab;
