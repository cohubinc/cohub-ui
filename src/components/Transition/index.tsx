import React, {
  cloneElement,
  Children,
  ReactElement,
  CSSProperties
} from "react";
import ReactTransition, {
  TransitionStatus
} from "react-transition-group/Transition";

/////////////////////////////////////////////////////////////////
/////////////// LOW LEVEL TRANSITION WRAPPER ////////////////////
const defaultDuration = 300;
const defaultTransition = (ms: any) => ({
  transition: `all ${ms}ms ease-in-out`
});

export interface ITransitionProps {
  show: boolean;
  entered?: CSSProperties;
  start?: CSSProperties;
  entering?: CSSProperties;
  exiting?: CSSProperties;
  exited?: CSSProperties;
  transition?: string;
  transitionProperty?: string;
  duration?: number;
  /**
   * Weather or not the animation should play on the initial render
   */
  appear?: boolean;
  children: any;
}
// The Transition component is used to pass transition styles into it's children cmpts and control the state of those transitions.
// Any children passed MUST ACCEPT A STYLE PROP
// This component expects a start OR entering Style, an entered Style, and a show prop. All others props are optional and will generate sensible defaults
// Set the appear prop to false if you DON'T want the transition to play on initial render / page load
// You can see examples of the Cmpt being used lower in this file for reference.
// If you need more granular control please see the docs for react-transition-group Transition cmpt here -> https://reactcommunity.org/react-transition-group/transition
const Transition = ({
  show = true,
  start,
  transition,
  transitionProperty = "all",
  entering,
  entered,
  exiting,
  exited,
  duration = defaultDuration,
  appear = true,
  children
}: ITransitionProps) => {
  const initialStyle = start || entering || {};
  const transitionStyles = {
    entering,
    entered,
    exiting: exiting || initialStyle,
    exited: exited || initialStyle
  };
  const transitionStyle = transition
    ? { transition }
    : defaultTransition(duration);

  const generateStyles = (state: TransitionStatus) => ({
    ...initialStyle,
    ...transitionStyle,
    ...((transitionStyles as any)[state] || {}),
    transitionProperty
  });

  return (
    <ReactTransition
      in={show}
      timeout={duration}
      appear={appear}
      mountOnEnter
      unmountOnExit
    >
      {state => {
        return Children.map(children, (child: ReactElement<any>, i) => {
          const { style, key } = child.props;

          return cloneElement(child as ReactElement<any>, {
            style: { ...(style || {}), ...generateStyles(state) },
            key: key || i
          });
        });
      }}
    </ReactTransition>
  );
};

export default Transition;
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////// HIGH LEVEL TRANSITION CMPTS /////////////////////
interface ITransProps {
  show?: boolean | undefined;
  children: JSX.Element[] | JSX.Element | any;
  duration?: number;
  start?: CSSProperties;
  appear?: boolean;
  transitionProperty?: string;
}
export const Fade = ({
  show = true,
  children,
  start = {},
  duration,
  appear,
  transitionProperty = "opacity"
}: ITransProps) => (
  <Transition
    start={{ opacity: 0, ...start }}
    entering={{ opacity: 0 }}
    entered={{ opacity: 1 }}
    {...{ transitionProperty, appear, duration, show }}
  >
    {children}
  </Transition>
);

export const Expand = ({
  show = true,
  children,
  duration,
  appear,
  width = "100%"
}: ITransProps & { width?: string | number }) => (
  <Transition
    show={show}
    duration={duration}
    start={{ width: 0, opacity: 1, overflow: "hidden" }}
    entered={{ width, opacity: 1 }}
    appear={appear}
  >
    {children}
  </Transition>
);

export const Scale = ({
  show = true,
  children,
  duration,
  appear
}: ITransProps & { width?: string | number }) => (
  <Transition
    show={show}
    duration={duration}
    start={{ transform: "scale(0)" }}
    entered={{ transform: "scale(1)" }}
    appear={appear}
  >
    {children}
  </Transition>
);

export const Grow = ({
  show = true,
  children,
  height = "100%",
  duration,
  appear
}: ITransProps & { height?: string | number }) => (
  <Transition
    show={show}
    duration={duration}
    start={{
      height: 0,
      overflow: "hidden",
      opacity: 0
    }}
    entered={{ height, opacity: "inherit", overflow: "inherit" }}
    appear={appear}
  >
    {children}
  </Transition>
);

interface IToggleProps {
  size?: string | number;
  showFirstChild: boolean;
  children: any;
  height?: string | number;
  width?: string | number;
  appear?: boolean;
}
export const Toggle = ({
  size,
  showFirstChild,
  height,
  width,
  appear,
  children
}: IToggleProps) => {
  const [firstChild, secondChild, ...rest] = React.Children.toArray(children);
  if (!firstChild || !secondChild || rest.length > 0) {
    throw new Error("You can only pass two children to the Toggle component");
  }
  if (!(size || (width && height))) {
    throw new Error(
      "You really should pass size or width and height to the Toggle component"
    );
  }

  return (
    <div
      className="flex items-center"
      style={{
        position: "relative",
        height: height || size,
        width: width || size
      }}
    >
      <Fade
        start={{
          position: "absolute",
          zIndex: showFirstChild ? 2 : 1
        }}
        show={showFirstChild}
        appear={appear}
      >
        {firstChild}
      </Fade>

      <Fade
        start={{
          position: "absolute",
          zIndex: showFirstChild ? 1 : 2
        }}
        show={!showFirstChild}
        appear={appear}
      >
        {secondChild}
      </Fade>
    </div>
  );
};
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
