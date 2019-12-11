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
  margin-bottom: 1rem;
`;

const Horizontal = styled(Base)<Required<Pick<IProps, "inGroupsOf">>>`
  justify-content: flex-start;

  --calculated-flex: ${props => {
    return 100 / props.inGroupsOf;
  }}%;

  & > * {
    flex-basis: calc(var(--calculated-flex) - 1rem);
  }

  & > :first-child {
    margin-right: 0.5rem;
  }

  & > :not(:first-child):not(:last-child) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  & > :last-child {
    margin-left: 0.5rem;
  }
`;

const Vertical = styled(Base)`
  flex-direction: column;
  justify-content: space-between;
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
        <Horizontal
          key={idx}
          inGroupsOf={inGroupsOf}
          {...restProps}
          // Don't put bottom margin on the last group of fields
          style={
            idx + 1 === childFields.length
              ? { marginBottom: 0 }
              : { marginBottom: "2rem" }
          }
        >
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
