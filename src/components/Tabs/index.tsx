import React, { ReactElement } from "react";
import sortBy from "lodash/sortBy";
import { guid } from "@cohubinc/cohub-utils";

import matchStrength from "./match-strength";

import Tab, { ITabProps, IHiddenProps } from "./Tab";

import "./Tabs.scss";

type TChild<T = ITabProps> = ReactElement<T>;

type TTab = ReactElement<ITabProps>;
export interface ITabsProps {
  children: Array<TChild | null | false>;
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

  type TKid = TChild<IHiddenProps>;

  // Remove any falsey tabs
  const tabs = children.filter(Boolean) as TKid[];

  // Find any tabs where the active prop is set to true
  const activeTab = tabs.find(child => child && child.props.active);

  // Find the tab with the strongest path match
  const tabWithBestPathMatch = sortBy(tabs, ({ props: { path } }: TTab) =>
    matchStrength(pathname, path || "")
  ).pop()! as TKid;

  // Get the selected tab
  const selectedTab: TKid = activeTab ? activeTab : tabWithBestPathMatch;

  return (
    <React.Fragment>
      <div className="Tabs flex">
        {tabs.map(tab => {
          const isTheActiveTab = tab.props.title === selectedTab.props.title;

          return React.cloneElement(tab, {
            useRedux,
            showActiveStyles: !!isTheActiveTab,
            key: guid()
          });
        })}
      </div>

      <div className="Tabs-Content">{selectedTab.props.component}</div>
    </React.Fragment>
  );
}

Tabs.Tab = Tab;
