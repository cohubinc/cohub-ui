import React, { CSSProperties } from "react";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { OptionsType, ValueType } from "react-select/src/types";
import { SelectComponentsProps } from "react-select/src/Select";
import { StylesConfig } from "react-select/src/styles";
import { uniqBy } from "lodash";
import { FieldRenderProps } from "react-final-form";

import { IStyleContainer } from "src/definitions/interfaces/IStyleContainer";
import Color from "src/definitions/enums/Color";
import FloatingLabelWrapper from "../FloatingLabelWrapper";

import "./MultiSelect.scss";

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  label?: string;
  options: OptionsType<IOption>;
  allowCreate?: boolean;
  loading?: boolean;
  appearance?: "contrast" | "inverted";
}

export type MultiSelectProps = IProps &
  FieldRenderProps<Array<IOption["value"]>, HTMLElement>;

export default function MultiSelect({
  options,
  label,
  allowCreate,
  loading,
  input,
  appearance
}: MultiSelectProps) {
  const onChange = (selectedOption: ValueType<IOption>) => {
    if (!selectedOption) {
      return;
    }

    if ("value" in selectedOption) {
      input.onChange(selectedOption.value);
    } else {
      input.onChange(selectedOption.map(opt => opt.value) as any);
    }
  };

  let value = options.filter(o => input.value.includes(o.value));

  if (allowCreate && input.value.length) {
    const inputValues: IOption[] = input.value.map((val: string) => {
      const selectedOption = options.find(opt => opt.value === val);
      return {
        value: val,
        label: selectedOption && selectedOption.label
      } as IOption;
    });

    value = [...inputValues, ...value];
    value = uniqBy(value, "value");
  }

  const contrastPadding =
    appearance === "contrast" ? { paddingTop: "0.5rem" } : {};

  const selectConfig: SelectComponentsProps = {
    options,
    isMulti: true,
    isLoading: loading,
    styles: getSelectStyles(contrastPadding),
    placeholder: ""
  };

  return (
    <FloatingLabelWrapper
      className="MultiselectField"
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      onChange={onChange}
      label={label}
      value={value}
      appearance={appearance}
    >
      {({ componentProps }) => {
        return allowCreate ? (
          <Select {...selectConfig} {...componentProps} />
        ) : (
          <Creatable {...selectConfig} {...componentProps} />
        );
      }}
    </FloatingLabelWrapper>
  );
}

const styles: IStyleContainer = {
  container: {
    height: "100%"
  },
  control: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    boxShadow: "none",
    height: "100%"
  },
  input: {
    color: Color.black as any
  },
  menu: {
    backgroundColor: Color.background as any
  },
  dropdownIndicator: {
    display: "none"
  },
  indicatorSeparator: {
    display: "none"
  },
  multiValue: {
    backgroundColor: Color.grey200 as any,
    borderRadius: "11px",
    paddingLeft: "6px"
  },
  multiValueLabel: {
    color: Color.black as any
  },
  multiValueRemove: {
    cursor: "pointer",
    paddingRight: "4px"
  },
  clearIndicator: {
    paddingTop: "-1rem"
  }
};

const getSelectStyles = (controlStyles: CSSProperties): StylesConfig => {
  return {
    control: style => ({ ...style, ...styles.control, ...controlStyles }),
    container: style => ({ ...style, ...styles.container }),
    input: style => ({ ...style, ...styles.input }),
    menu: style => ({ ...style, ...styles.menu }),
    option: (style, { isFocused }) => ({
      ...style,
      backgroundColor: isFocused ? "var(--admin-grey)" : "var(--admin-bg)",
      ":hover": {
        backgroundColor: "var(--admin-grey)"
      }
    }),
    dropdownIndicator: () => styles.dropdownIndicator,
    indicatorSeparator: () => styles.indicatorSeparator,
    multiValue: style => ({ ...style, ...styles.multiValue }),
    multiValueLabel: style => ({ ...style, ...styles.multiValueLabel }),
    multiValueRemove: style => ({
      ...style,
      ...styles.multiValueRemove,
      ":hover": {
        backgroundColor: "var(--admin-grey)",
        borderRadius: "11px"
      }
    }),
    clearIndicator: style => ({ ...style, ...styles.clearIndicator })
  };
};
