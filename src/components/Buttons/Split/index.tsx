import React, { CSSProperties, Component } from "react";
import Color from "../../../definitions/enums/Color";
import Segment from "./Segment";

interface IProps {
  labels: string[];
  selectedIndex?: number;
  onChange: (index: number) => void;
  segmentStyle?: CSSProperties;
  color?: Color;
  style?: CSSProperties;
  className?: string;
}
const DefaultSplitButtons = (props: IProps) => {
  const {
    labels,
    style,
    className,
    segmentStyle,
    onChange,
    selectedIndex,
    color
  } = props;

  const numBtns = labels.length;

  return (
    <div
      {...{ className, style }}
      style={{
        display: "inline-grid",
        gridTemplateColumns: `repeat(${numBtns}, 1fr)`
      }}
    >
      {labels.map((label, index) => (
        <Segment
          key={label}
          color={color}
          style={segmentStyle}
          onClick={() => onChange(index)}
          selected={selectedIndex === index}
        >
          {label}
        </Segment>
      ))}
    </div>
  );
};

const PrimarySplitButtons = ({ color, ...rest }: IProps) => (
  <DefaultSplitButtons color={color || Color.primary} {...rest} />
);

export default class Split extends Component<IProps> {
  static Primary = PrimarySplitButtons;

  render() {
    return <DefaultSplitButtons {...this.props} />;
  }
}
