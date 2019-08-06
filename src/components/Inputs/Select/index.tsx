import React from "react";
import SelectField from "react-select";
import { uniqBy } from "lodash";
import "./Select.scss";
import { FieldRenderProps } from "react-final-form";
import { IStyleContainer } from "src/definitions/interfaces/IStyleContainer";
import Color from "src/definitions/enums/Color";

import FloatingLabelWrapper from "../FloatingLabelWrapper";
import { StylesConfig } from "react-select/src/styles";
import { OptionsType, ValueType } from "react-select/src/types";

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  label: string;
  options: OptionsType<IOption>;
  allowCreate?: boolean;
  loading?: boolean;
  appearance?: "contrast" | "inverted";
}

export type SelectProps = IProps &
  FieldRenderProps<IOption["value"] | Array<IOption["value"]>, HTMLElement>;

export default class Select extends React.Component<SelectProps> {
  onChange = (
    selectedOption: ValueType<{
      label: string;
      value: string;
    }>
  ) => {
    if (!selectedOption) {
      return;
    }

    const { input } = this.props;

    if ("value" in selectedOption) {
      input.onChange(selectedOption.value);
    } else {
      input.onChange(selectedOption.map(opt => opt.value) as any);
    }
  };

  render() {
    const {
      options,
      input,
      label,
      allowCreate,
      loading,
      appearance
    } = this.props;

    let value = options.filter(o => input.value === o.value);

    if (allowCreate && input.value.length && typeof input.value !== "string") {
      const inputValues = input.value.map((v: any) => ({
        value: v,
        label: v
      }));

      value = [...inputValues, ...value];
      value = uniqBy(value, "value");
    }

    return (
      <FloatingLabelWrapper
        className="SelectField"
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        onChange={this.onChange}
        label={label}
        value={value as any}
        appearance={appearance}
      >
        {({ componentProps }) => (
          <SelectField
            options={options}
            isLoading={loading}
            styles={selectStyles}
            placeholder=""
            {...componentProps}
          />
        )}
      </FloatingLabelWrapper>
    );
  }
}

const styles: IStyleContainer = {
  singleValue: {
    color: Color.black as any
  },
  indicatorSeparator: {
    display: "none"
  },
  dropdownIndicator: {
    display: "none"
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
    color: Color.trueWhite as any,
    padding: "8px",
    cursor: "pointer",
    borderRadius: 4
  },
  control: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    boxShadow: "none"
  }
};

const selectStyles: StylesConfig = {
  control: style => ({ ...style, ...styles.control }),
  input: style => ({ ...style, ...styles.input }),
  menu: style => ({ ...style, ...styles.menu }),
  menuList: style => ({ ...style, ...styles.menuList }),
  option: (style, { isFocused }) =>
    ({
      ...style,
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
  singleValue: style => ({ ...style, ...styles.singleValue })
};
