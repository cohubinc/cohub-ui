import React, { ReactNode } from "react";
import style from "./Tab.module.scss";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";

export interface ITabProps {
  title: string;
  active?: boolean;
  path?: string;
  onClick?: () => void;
  component?: any;
  className?: string;
  showCount?: boolean;
  count?: number;
  children?: ReactNode;
  useRedux?: boolean;
}

function Tab(props: ITabProps) {
  const {
    title,
    path,
    active,
    className,
    showCount,
    count,
    onClick,
    useRedux = true
  } = props;
  const isActive = active || window.location.pathname === path;

  const dispatch = useRedux ? useDispatch() : null;

  return (
    <div
      className={`${style.Tab} ${isActive && style.TabActive} ${className}`}
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

export default Tab;
