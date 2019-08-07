import React from "react";
import { Link } from "react-router-dom";
import { TLinkProps } from "./TLinkProps";
import Color from "src/definitions/enums/Color";

export default class Base extends React.PureComponent<TLinkProps> {
  render() {
    const {
      href,
      styled,
      animated,
      className,
      style,
      to,
      onClick,
      ...restProps
    } = this.props;

    const classes =
      styled && animated ? `cohub-link ${className || ""}` : className;

    const linkStyle = {
      color: (styled ? Color.link : "inherit") as any,
      fontSize: "inherit",
      cursor: "pointer",
      ...style
    };

    if (href || onClick || !to) {
      return (
        <a
          className={classes}
          style={linkStyle}
          href={href}
          onClick={onClick}
          {...restProps}
        />
      );
    }

    return (
      <Link
        to={to}
        className={classes}
        style={linkStyle}
        onClick={onClick}
        {...restProps}
      />
    );
  }
}
