import React, { CSSProperties } from "react";
import SelectField from "react-select";
import { StylesConfig } from "react-select/src/styles";
import { OptionsType } from "react-select/src/types";
import { FieldRenderProps } from "react-final-form";

import { IStyleContainer } from "src/definitions/interfaces/IStyleContainer";
import Color from "src/definitions/enums/Color";
import DropdownIndicator, {
  indicatorsContainer
} from "src/components/Inputs/SelectDropdownIndicator";

import FloatingLabelWrapper from "../FloatingLabelWrapper";

import "./Select.scss";

interface IOption {
  label: string;
  value: string;
}

type FieldProps = FieldRenderProps<
  IOption["value"] | Array<IOption["value"]>,
  HTMLElement
>;

interface ISelectProps {
  label?: string;
  options?: OptionsType<IOption>;
  loading?: boolean;
  appearance?: "contrast" | "inverted";
  error?: boolean;
  clearable?: boolean;
  style?: CSSProperties;
  input?: Partial<FieldProps["input"]>;
  meta?: FieldProps["meta"];
  required?: boolean;
}

export type TSelectProps = ISelectProps;

export default function Select(props: TSelectProps) {
  const {
    options = [],
    input = {},
    label,
    loading,
    appearance,
    clearable = false,
    style,
    meta,
    required
  } = props;

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
    singleValue: styling => ({ ...styling, ...styles.singleValue }),
    indicatorsContainer
  };

  return (
    <FloatingLabelWrapper
      className="SelectField"
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      {...{ label, value, appearance, style, required }}
    >
      {({
        componentProps: { onChange: _, onBlur, onFocus, ...componentProps }
      }) => (
        <SelectField
          components={{
            DropdownIndicator
          }}
          classNamePrefix="react-select"
          options={options}
          isClearable={clearable}
          isLoading={loading}
          styles={selectStyles}
          placeholder=""
          onChange={(arg1: any, { action }: any) => {
            const { onChange } = input;
            if (!onChange) return;

            switch (action) {
              case "select-option":
                onChange(arg1!.value);
                break;
              case "clear":
                onChange(null);
            }
          }}
          onBlur={e => {
            onBlur && onBlur(e);
          }}
          onFocus={e => {
            onFocus && onFocus(e);
          }}
          {...componentProps}
        />
      )}
    </FloatingLabelWrapper>
  );
}
