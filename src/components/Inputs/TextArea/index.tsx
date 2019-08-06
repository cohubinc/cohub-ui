import React, { Component } from "react";
import { IStyleContainer } from "src/definitions/interfaces/IStyleContainer";
import "./TextArea.scss";

interface IProps {
  readOnly?: boolean;
}

type TProps = IProps &
  Omit<
    React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    "ref"
  >;

export default class TextArea extends Component<TProps> {
  static defaultProps: Partial<TProps> = {
    className: "",
    style: {
      width: "100%",
      cursor: "text"
    }
  };

  inputRef: React.RefObject<HTMLTextAreaElement>;

  constructor(props: TProps) {
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
