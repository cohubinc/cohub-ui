import React, { Fragment, useState, useEffect } from "react";
import Toggle from "../components/Inputs/Toggle";

interface IRenderProps {
  state: boolean;
  toggleOff: () => void;
}

interface IProps {
  label?: string;
  children: (props: IRenderProps) => JSX.Element;
  toggleInterval?: number | boolean;
  defaultState?: boolean;
}

export default function StateCtrl(props: IProps) {
  const { children, toggleInterval, label = "", defaultState = false } = props;

  const [on, setOn] = useState(defaultState);

  useEffect(() => {
    const upHandler = ({ key }: any) => {
      if (key === "Escape") {
        setOn(false);
      }
    };
    window.addEventListener("keyup", upHandler);
    return () => window.removeEventListener("keyup", upHandler);
  }, []);

  // If toggleInterval prop, toggle the state every X milliseconds
  useEffect(() => {
    if (!toggleInterval) return;

    const milliseconds =
      typeof toggleInterval === "number" ? toggleInterval : 2000;

    const intervalId = setInterval(
      () => setOn(onState => !onState),
      milliseconds
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Fragment>
      {!toggleInterval && (
        <div>
          <Toggle
            label={`Toggle ${label}`}
            input={{
              onChange: () => setOn(onState => !onState),
              name: "",
              value: on,
              onBlur: () => null,
              onFocus: () => null
            }}
            meta={{}}
            className="my-05"
          />
        </div>
      )}

      {children({ state: on, toggleOff: () => setOn(false) })}
    </Fragment>
  );
}
