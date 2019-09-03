import React, { CSSProperties } from "react";
import SelectField from "react-select";
import "./Select.scss";
import { FieldRenderProps } from "react-final-form";
import { IStyleContainer } from "src/definitions/interfaces/IStyleContainer";
import Color from "src/definitions/enums/Color";

import FloatingLabelWrapper from "../FloatingLabelWrapper";
import { StylesConfig } from "react-select/src/styles";
import { OptionsType } from "react-select/src/types";

interface IOption {
  label: string;
  value: string;
}

interface ISelectProps {
  label: string;
  options: OptionsType<IOption>;
  loading?: boolean;
  appearance?: "contrast" | "inverted";
  error?: boolean;
  clearable?: boolean;
  style?: CSSProperties;
}

export type TSelectProps = ISelectProps &
  FieldRenderProps<IOption["value"] | Array<IOption["value"]>, HTMLElement>;

export default function Select({
  options,
  input,
  label,
  loading,
  appearance,
  clearable = false,
  style,
  meta
}: TSelectProps) {
  let value = options.filter(o => input.value === o.value);

  const { touched, error } = meta || ({} as any);

  const showError = !!(touched && error);

  const styles: IStyleContainer = {
    singleValue: {
      color: Color.black as any,
      top: "50%"
    },
    dropdownIndicator: {
      marginRight: "8px",
      display: showError ? "none" : "flex"
    },
    menu: {
      backgroundColor: Color.trueWhite as any
    },
    option: {
      marginTop: 0
    },
    menuList: {
      marginTop: 0
    },
    input: {
      color: Color.black as any,
      margin: 0
    },
    control: {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      boxShadow: "none",
      minHeight: "32px"
    }
  };

  const selectStyles: StylesConfig = {
    control: styling => ({ ...styling, ...styles.control }),
    input: styling => ({ ...styling, ...styles.input }),
    menu: styling => ({ ...styling, ...styles.menu }),
    menuList: styling => ({ ...styling, ...styles.menuList }),
    option: (styling, { isFocused }) =>
      ({
        ...styling,
        ...styles.option,
        backgroundColor: isFocused ? Color.grey300 : Color.trueWhite,
        color: isFocused ? Color.black : Color.black,
        ":hover": {
          backgroundColor: Color.grey300,
          color: Color.black
        }
      } as any),
    dropdownIndicator: () => styles.dropdownIndicator,
    indicatorSeparator: () => styles.indicatorSeparator,
    singleValue: styling => ({ ...styling, ...styles.singleValue })
  };

  return (
    <FloatingLabelWrapper
      className="SelectField"
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      label={label}
      value={value}
      appearance={appearance}
      error={showError}
      style={style}
    >
      {({ componentProps: { onChange, ...componentProps } }) => (
        <SelectField
          classNamePrefix="react-select"
          options={options}
          isClearable={clearable}
          isLoading={loading}
          styles={selectStyles}
          onChange={(arg1: any, { action }: any) => {
            if (action === "select-option") {
              input.onChange(arg1.value);
            } else if (action === "clear") {
              input.onChange(null);
            }
          }}
          placeholder=""
          {...componentProps}
        />
      )}
    </FloatingLabelWrapper>
  );
}
