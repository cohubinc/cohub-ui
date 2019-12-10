import React from "react";
import styled, { keyframes } from "styled-components";
import Color from "src/definitions/enums/Color";

const gradientSwipe = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const LoadingRow = styled.div`
  background: linear-gradient(90deg, ${Color.grey100}, ${Color.grey400});
  background-size: 400% 400%;
  animation: ${gradientSwipe} 1.5s ease infinite;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export interface ILoaderRowProps {
  repeatCount: number;
}

export default function LoaderRow({ repeatCount }: ILoaderRowProps) {
  let count = 0;
  let rows = [];
  while (count < repeatCount) {
    rows.push(<LoadingRow key={count} />);
    count += 1;
  }
  return <React.Fragment>{rows}</React.Fragment>;
}
