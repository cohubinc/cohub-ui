import React, { ReactNode, ReactElement, ElementType } from "react";
import style from "./Tab.module.scss";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";

export interface ITabProps {
  /**
   * Tab title
   */
  title: string;
  /**
   * Weather or not the tab is active (selected)
   */
  active?: boolean;
  /**
   * Url string used to determine weather or not the tab should be active
   */
  path?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * The component that will be rendered when the tab is active
   */
  component?: any;
  /**
   * Classes that gets applied to the container
   */
  className?: string;
  /**
   * Weather or not to show the count
   */
  showCount?: boolean;
  count?: number;
}

export interface IHiddenProps extends ITabProps {
  showActiveStyles: boolean;
  useRedux?: boolean;
}

function Tab(props: IHiddenProps) {
  const {
    title,
    path,
    className,
    showCount,
    count,
    onClick,
    useRedux = true,
    showActiveStyles,
    active
  } = props;
  const dispatch = useRedux ? useDispatch() : null;

  return (
    <div
      className={`${style.Tab} ${
        showActiveStyles ? style.TabActive : ""
      } ${className}`}
      onClick={() => {
        onClick && onClick();
        if (!path || !useRedux) return;
        dispatch!(push(path));
      }}
    >
      {title}
      {showCount && (
        <span>
          &nbsp;
          {
            <NumberFormat
              prefix="("
              suffix=")"
              displayType="text"
              value={count}
            />
          }
        </span>
      )}
    </div>
  );
}

export default Tab as ElementType<ITabProps>;
