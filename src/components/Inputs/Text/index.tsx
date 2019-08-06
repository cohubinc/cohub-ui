import React from "react";
import { FieldRenderProps } from "react-final-form";
import { Fade } from "src/components/Transition";
import Typography from "src/components/Typography";
import HTMLElementProps from "src/definitions/types/HtmlElementProps";
import Base from "../Base";

interface IProps {
  label?: string;
  appearance?: "contrast" | "inverted";
  msgPosition?: {
    bottom: number;
  };
  "data-qa"?: string;
}

type TProps = IProps &
  FieldRenderProps<string, HTMLInputElement> &
  HTMLElementProps<HTMLInputElement>;

export default class Text extends React.Component<TProps> {
  static defaultProps: Partial<TProps> = {
    type: "text",
    meta: {},
    style: {
      width: "100%"
    }
  };

  render() {
    const {
      input,
      meta: { touched, error, active },
      style,
      className,
      msgPosition = {},
      "data-qa": dataQa,
      ...restProps
    } = this.props;

    const showError = !!(touched && error);

    return (
      <div {...{ className, style: { ...Text.defaultProps.style, ...style } }}>
        <Base {...input} {...restProps} error={showError} data-qa={dataQa} />

        <Fade show={active && showError}>
          <Typography.Tiny
            error
            style={{
              position: "absolute",
              left: 1,
              bottom: -15,
              ...msgPosition
            }}
          >
            {error}
          </Typography.Tiny>
        </Fade>
      </div>
    );
  }
}
