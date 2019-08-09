import React, { ReactNode, Component } from "react";
import style from "./Tab.module.scss";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";

interface IProps {
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

export default function Tab(props: IProps) {
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

  const _clicked = () => {
    if (onClick) {
      onClick();
    } else if (path) {
      useRedux && dispatch!(push(path));
    }
  };

  return (
    <div
      className={`${style.Tab} ${isActive && style.TabActive} ${className}`}
      onClick={() => _clicked}
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
