import React from "react";
import styles from "./FormGroup.module.scss";

interface IProps {
  children: any;
  direction: "horizontal" | "vertical";
}

export type TFormGroupProps = IProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default class FormGroup extends React.PureComponent<TFormGroupProps> {
  static defaultProps: Partial<TFormGroupProps> = {
    direction: "horizontal"
  };

  render() {
    const { children, direction, ...restProps } = this.props;

    return (
      <div
        className={
          direction === "horizontal" ? styles.horizontal : styles.vertical
        }
        {...restProps}
      >
        {children}
      </div>
    );
  }
}
