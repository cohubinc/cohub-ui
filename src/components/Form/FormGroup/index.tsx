import React, { ReactNode, CSSProperties } from "react";
import chunk from "lodash/chunk";
import styled from "styled-components";
import { Typography } from "src";

interface IProps {
  /**
   * Child elements of the FormGroup
   */
  children: ReactNode[];
  /**
   * Direction the FormGroup should flow represented as a string. Can be "horizontal" or "vertical"
   * @defaultValue "horizontal"
   */
  direction?: "horizontal" | "vertical";
  /**
   * Additional classes can be applied to this component
   * @defaultValue ""
   */
  className?: string;
  /**
   * Width represented as a percentage
   * @defaultValue 100
   */
  width?: number;

  style?: CSSProperties;

  inGroupsOf?: number;
}

export type TFormGroupProps = IProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Base = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Horizontal = styled(Base)<Required<Pick<IProps, "inGroupsOf">>>`
  margin-bottom: 2rem;

  --calculated-flex: ${props => {
    return 100 / props.inGroupsOf;
  }}%;

  & > * {
    flex-basis: calc(var(--calculated-flex) - 1rem);
  }
`;

const Vertical = styled(Base)`
  flex-direction: column;
  margin-bottom: 0;

  & > * {
    margin-bottom: 2rem;
  }
`;

export default function FormGroup({
  children,
  direction = "horizontal",
  className = "",
  width = 100,
  inGroupsOf = 1,
  style,
  ...restProps
}: IProps) {
  const childFields = children ? chunk(children, inGroupsOf) : [];

  const groupedChildren = childFields.map((cf, idx) => {
    if (direction === "horizontal") {
      return (
        <Horizontal key={idx} inGroupsOf={inGroupsOf} {...restProps}>
          {cf.map(c => c)}
        </Horizontal>
      );
    } else {
      return (
        <Vertical key={idx} {...restProps}>
          {cf.map(c => c)}
        </Vertical>
      );
    }
  });

  return <React.Fragment>{groupedChildren}</React.Fragment>;
}
