import React, { CSSProperties, useState } from "react";

import Color from "src/definitions/enums/Color";

import Tooltip from "src/components/Tooltip";
import ButtonType from "./definitions/ButtonType";
import { getButton } from "./getButton";

import styles from "./Dropdown.module.scss";

interface IOption {
  onClick: () => void;
  label: string;
}
interface IProps {
  options: IOption[];
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  buttonType?: ButtonType;
}

export default function Dropdown(props: IProps) {
  const {
    options,
    style,
    className,
    disabled,
    buttonType = "Secondary"
  } = props;

  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  const cursor = disabled ? "default" : "pointer";

  const Button = getButton(buttonType);

  return (
    <div className={`CohubDropdownButton relative ${className}`} style={style}>
      <div className="flex bd-radius">
        <Button
          onClick={selectedOption.onClick}
          disabled={disabled}
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        >
          {selectedOption.label}
        </Button>

        <Tooltip
          content={
            <ul
              className="p-0 m-0 text-left"
              style={{
                maxHeight: "50vh",
                listStyle: "none",
                overflowY: "auto"
              }}
            >
              {options
                .filter(option => option.label !== selectedOption.label)
                .map(option => (
                  <li
                    key={option.label}
                    className={`${styles.CohubDropdownOption} cursor-pointer p-05`}
                    onClick={() => {
                      setSelectedOption(option);
                      setExpanded(false);
                    }}
                  >
                    {option.label}
                  </li>
                ))}
            </ul>
          }
          className="p-0"
          placement="bottom-end"
          theme="light"
          interactive={true}
          trigger="click"
          arrow={true}
          delay={[100, 300]}
          visible={expanded}
        >
          <Button
            icon="chevronDown"
            iconSize={16}
            className="flex justify-center items-center"
            style={{
              width: 35,
              borderLeft: `1px solid ${Color.trueWhite}`,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              cursor
            }}
            onClick={() => setExpanded(!expanded)}
          />
        </Tooltip>
      </div>
    </div>
  );
}
