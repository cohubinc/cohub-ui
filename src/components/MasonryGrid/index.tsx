import React, {
  useState,
  useEffect,
  ReactNode,
  useRef,
  Children,
  cloneElement
} from "react";
import { useTransition, animated } from "react-spring";
import shuffle from "lodash/shuffle";
import "./MasonryGrid.scss";
import useMeasure from "src/hooks/useMeasure";
import { useMediaQuery } from "react-responsive";

export interface IMasonryGridProps {
  items: any[];
  columnCount: number;
}

export default function MasonryGrid({ items, columnCount }: IMasonryGridProps) {
  // Measure the width of the container element
  const {
    ref,
    bounds: { width }
  } = useMeasure();

  const refs = [...Array(4).keys()].map(i => {
    return useRef(null);
  });

  const children = Children.map(items, (child, index) =>
    cloneElement(child, { ref: refs[index] })
  );
  // Form a grid of stacked items
  // Each column gets a height starting with zero
  let heights = new Array(columnCount).fill(0);
  // console.log(heights);
  let gridItems = children.map((child: any, idx) => {
    // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const column = heights.indexOf(Math.min(...heights));
    console.log(child);
    const currentRef = refs[idx] as any;
    // tslint:disable-next-line
    const sHeight = currentRef.current ? currentRef.current.scrollHeight : 0;
    const y = (heights[column] += sHeight);
    // console.log({ y });

    // X = container width / number of columnCount * column index, Y = it's just the height of the current column
    const xy = [(width / columnCount) * column, y / 2 - sHeight / 2];
    // console.log({xy});

    return {
      ...child,
      xy,
      width: width / columnCount,
      height: sHeight
    };
  });
  // console.log(heights);

  // Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  });

  // Render the grid
  return (
    <div
      ref={ref}
      className="MasonryGrid"
      style={{ height: Math.max(...heights) }}
    >
      {transitions.map(({ item, props: { xy, ...rest }, key }, idx) => (
        <animated.div
          key={idx}
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
            ...rest
          }}
        >
          {item}
        </animated.div>
      ))}
    </div>
  );
}
