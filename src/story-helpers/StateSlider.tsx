import React, { Fragment, useState } from "react";

interface IRenderProps {
  rangeLevel: number;
}

interface IProps {
  label?: string;
  children: (props: IRenderProps) => JSX.Element;
  defaultState?: number;
}

export default function StateSlider(props: IProps) {
  const { children, label = "", defaultState = 0 } = props;
  const [rangeLevel, setState] = useState(defaultState);

  return (
    <Fragment>
      <div>
        <label>
          {`Adjust ${label}`}
          <div className="mt-05">
            <input
              type="range"
              className="my-05"
              min="0"
              max="100"
              value={rangeLevel}
              onChange={({ target }) => setState(parseInt(target.value))}
            />
          </div>
        </label>
      </div>
      {children({ rangeLevel })}
    </Fragment>
  );
}
