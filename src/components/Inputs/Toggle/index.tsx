import React from "react";
import Color from "../../../definitions/enums/Color";

const styles = {} as any;

interface IProps {
  label?: string;
  labelPosition: "top" | "bottom" | "left" | "right";
  className?: string;
}

type TProps = IProps & any;

const Typography = (props: any) => <span {...props} />;

export default class Toggle extends React.Component<TProps> {
  static defaultProps: Partial<IProps> = {
    labelPosition: "right"
  };

  render() {
    const { label, input, labelPosition, className = "" } = this.props;

    const checked = input.value === true || input.value === "true";

    const toggle = () => {
      input.onChange(!checked as any);
    };

    const keyDown = (evt: any) => {
      if (evt.keyCode && evt.keyCode === 32) {
        toggle();
      }
    };

    let containerClass: string;
    switch (labelPosition) {
      case "left":
        containerClass = styles.labelContainerLeft;
        break;
      case "right":
        containerClass = styles.labelContainerRight;
        break;
      case "top":
        containerClass = styles.labelContainerTop;
        break;
      case "bottom":
        containerClass = styles.labelContainerBottom;
        break;
      default:
        containerClass = styles.labelContainerLeft;
    }

    return (
      <div
        className={`${className} ${containerClass} cursor-pointer `}
        onClick={toggle}
        tabIndex={0}
        onKeyDown={keyDown}
      >
        {label && <Typography color={Color.grey700}>{label}</Typography>}
        <div
          className={
            checked ? styles.containerActive : styles.containerInactive
          }
        >
          <div
            className={checked ? styles.toggleActive : styles.toggleInactive}
          />
        </div>
      </div>
    );
  }
}
