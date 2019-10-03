import React, { Component } from "react";
import { FieldRenderProps } from "react-final-form";
import { IStyleContainer } from "src/definitions/interfaces/IStyleContainer";
import "./TextArea.scss";

type FieldProps = FieldRenderProps<string, HTMLInputElement>;

interface ITextAreaProps {
  readOnly?: boolean;
  input?: Partial<FieldProps["input"]>;
  meta?: FieldProps["meta"];
}

export type TTextAreaProps = ITextAreaProps &
  Omit<
    React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    "ref" | "value" | "onChange" | "onBlur" | "onFocus"
  >;

export default class TextArea extends Component<TTextAreaProps> {
  static defaultProps: Partial<TTextAreaProps> = {
    className: "",
    style: {
      width: "100%",
      cursor: "text"
    }
  };

  inputRef: React.RefObject<HTMLTextAreaElement>;

  constructor(props: TTextAreaProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    const { style = {}, className, ...restOfProps } = this.props;

    return (
      <textarea
        ref={this.inputRef}
        {...restOfProps}
        className={`GenericTextArea border bd-radius ${className}`}
        style={{
          ...styles.input,
          ...TextArea.defaultProps.style,
          ...style
        }}
      />
    );
  }
}

const styles: IStyleContainer = {
  input: {
    padding: "10px 12px",
    outline: "none"
  }
};
