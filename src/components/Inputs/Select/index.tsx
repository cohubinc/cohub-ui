import React, { CSSProperties } from "react";
import SelectField from "@cohubinc/react-select";
import { StylesConfig } from "react-select/src/styles";
import { OptionsType, InputActionMeta } from "react-select/src/types";
import { SelectComponents } from "react-select/src/components";
import { FieldRenderProps } from "react-final-form";

import { IStyleContainer } from "src/definitions/interfaces/IStyleContainer";
import Color from "src/definitions/enums/Color";
import DropdownIndicator, {
  indicatorsContainer
} from "src/components/Inputs/SelectDropdownIndicator";

import FloatingLabelWrapper from "../FloatingLabelWrapper";
import TInheritedFloatingLabelProps from "../definitions/TInheritedFloatingLabelProps";

import "./Select.scss";

interface IOption {
  label: string;
  value: string;
}

type FieldProps = FieldRenderProps<
  IOption["value"] | Array<IOption["value"]>,
  HTMLElement
>;
interface IInput extends Partial<Omit<FieldProps["input"], "onChange">> {
  onChange?: (value: string | null) => void;
}

export interface ISelectProps extends TInheritedFloatingLabelProps {
  options?: OptionsType<IOption>;
  loading?: boolean;
  clearable?: boolean;
  style?: CSSProperties;
  input?: IInput;
  meta?: FieldProps["meta"];
  onMenuScrollToBottom?: (
    event: React.SyntheticEvent<HTMLElement, Event>
  ) => void;
  onMenuScrollToBottomOffset?: number;
  handleScrolledToBottom?: () => void;
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  components?: Partial<SelectComponents<IOption>>;
  className?: string;
  searchable?: boolean;
}

export default function Select(props: ISelectProps) {
  const {
    options = [],
    input = {},
    label,
    placeholder = "",
    loading,
    appearance,
    clearable = false,
    style,
    meta,
    onMenuScrollToBottom,
    handleScrolledToBottom,
    onMenuScrollToBottomOffset,
    onInputChange,
    components,
    required,
    className,
    searchable
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
      margin: 0,
      fontSize: "14px"
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
      className={`SelectField ${className}`}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      {...{ label, value, appearance, style, required }}
    >
      {({
        componentProps: { onChange: _, onBlur, onFocus, ...componentProps }
      }) => (
        <SelectField
          components={{
            ...components,
            DropdownIndicator
          }}
          classNamePrefix="react-select"
          options={options}
          isClearable={clearable}
          isLoading={loading}
          styles={selectStyles}
          placeholder={placeholder}
          onMenuScrollToBottom={onMenuScrollToBottom}
          handleScrolledToBottom={handleScrolledToBottom}
          onMenuScrollToBottomOffset={onMenuScrollToBottomOffset}
          onInputChange={onInputChange}
          isSearchable={searchable}
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
          onBlur={onBlur}
          onFocus={onFocus}
          {...componentProps}
        />
      )}
    </FloatingLabelWrapper>
  );
}
