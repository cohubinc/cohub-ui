import React, { ReactNode, ReactElement, ElementType } from "react";
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
}

export interface IHiddenProps extends ITabProps {
  showActiveStyles: boolean;
  useRedux?: boolean;
}

function Tab(props: IHiddenProps) {
  const {
    title,
    path,
    active,
    className,
    showCount,
    count,
    onClick,
    useRedux = true,
    showActiveStyles
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
