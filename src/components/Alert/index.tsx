import React, { PureComponent } from "react";
import ScrollIntoView from "../ScrollIntoView";
import { Fade } from "../Transition";
import HTMLElementProps from "src/definitions/types/HtmlElementProps";
import Typography from "../Typography";
import Color from "src/definitions/enums/Color";

interface IProps extends Omit<HTMLElementProps, "ref"> {
  traceProp?: any;
  centerAlign?: boolean;
  info?: boolean;
  success?: boolean;
  error?: boolean;
}
type Props = IProps;

export default class Alert extends PureComponent<Props> {
  render() {
    const {
      style,
      error,
      children,
      traceProp,
      success,
      info,
      centerAlign,
      ...rest
    } = this.props;
    let backgroundColor: any = "#f8f8f9";
    let color: any = "rgba(0,0,0,.87)";

    if (error) {
      color = Color.red800;
      backgroundColor = Color.red100;
    } else if (success) {
      color = Color.green900;
      backgroundColor = Color.green100;
    } else if (info) {
      color = Color.blue800;
      backgroundColor = Color.blue100;
    }

    const classes = centerAlign ? "flex justify-center align-items-center" : "";
    return (
      <ScrollIntoView traceProp={traceProp || children}>
        <Fade duration={150}>
          <div
            style={{
              boxShadow: "inherit",
              padding: "16px 20px",
              border: "none",
              borderRadius: 4,
              fontSize: "12px",
              backgroundColor,
              ...style
            }}
            {...{ error, ...rest }}
          >
            <div className={classes}>
              <Typography.Small style={{ color }}>{children}</Typography.Small>
            </div>
          </div>
        </Fade>
      </ScrollIntoView>
    );
  }
}
