import React, { CSSProperties } from "react";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { OptionsType, ValueType } from "react-select/src/types";
import { SelectComponentsProps } from "react-select/src/Select";
import { StylesConfig } from "react-select/src/styles";
import { uniqBy } from "lodash";
import { FieldRenderProps } from "react-final-form";

import DropdownIndicator, {
  indicatorsContainer
} from "src/components/Inputs/SelectDropdownIndicator";
import { IStyleContainer } from "src/definitions/interfaces/IStyleContainer";
import Color from "src/definitions/enums/Color";
import FloatingLabelWrapper from "../FloatingLabelWrapper";

import "./Multiselect.scss";

interface IOption {
  label: string;
  value: string;
}

type FieldProps = FieldRenderProps<string[], HTMLElement>;
type Input = FieldProps["input"];

interface IProps {
  label?: string;
  options?: OptionsType<IOption>;
  allowCreate?: boolean;
  loading?: boolean;
  appearance?: "contrast" | "inverted";
  clearable?: boolean;
  style?: CSSProperties;
  input?: Partial<Input>;
  meta?: FieldProps["meta"];
  disabled?: boolean;
  required?: boolean;
}

export type TMultiSelectProps = IProps;

export default function MultiSelect({
  options = [],
  input = {} as Input,
  label,
  allowCreate,
  loading,
  appearance,
  clearable = false,
  style,
  meta,
  disabled,
  required
}: TMultiSelectProps) {
  const { touched, error } = meta || ({} as any);

  const showError = !!(touched && error);

  const { value: inputValues = [], onChange } = input;

  let value = options.filter(o => inputValues.includes(o.value));

  if (allowCreate && inputValues) {
    const createdOptions = inputValues.map((v: string) => {
      return {
        value: v,
        label: v
      } as IOption;
    });

    value = [...createdOptions, ...value];
    value = uniqBy(value, "value");
  }

  const contrastPadding = appearance === "contrast" ? { paddingTop: 0 } : {};

  const selectConfig: SelectComponentsProps = {
    options,
    isMulti: true,
    isLoading: loading,
    styles: getSelectStyles(contrastPadding),
    placeholder: "",
    isClearable: clearable,
    classNamePrefix: "react-select"
  };

  return (
    <FloatingLabelWrapper
      className="MultiselectField"
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      onChange={(selectedOption: ValueType<IOption>, { action }: any) => {
        if (!onChange) return;

        if (!selectedOption && action === "remove-value") {
          onChange([]);
          return;
        }

        if (!selectedOption) {
          return;
        }

        if ("value" in selectedOption) {
          onChange(selectedOption.value);
        } else {
          onChange(selectedOption.map(opt => opt.value) as any);
        }
      }}
      {...{ value, label, appearance, style, required }}
      error={showError}
    >
      {({ componentProps }) => {
        const props = {
          ...selectConfig,
          ...componentProps,
          components: { DropdownIndicator }
        };

        if (allowCreate) {
          return (
            <Creatable
              noOptionsMessage={() => "Type to add an option"}
              formatCreateLabel={val => `Press Enter to add "${val}"`}
              isDisabled={disabled}
              {...props}
            />
          );
        }

        return <Select isDisabled={disabled} {...props} />;
      }}
    </FloatingLabelWrapper>
  );
}

const styles: IStyleContainer = {
  control: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    boxShadow: "none",
    height: "100%",
    minHeight: "32px"
  },
  input: {
    color: Color.black as any
  },
  menu: {
    backgroundColor: Color.trueWhite as any
  },
  indicatorSeparator: {
    display: "none"
  },
  dropdownIndicator: {
    marginRight: "8px",
    display: "flex"
  },
  multiValue: {
    backgroundColor: Color.white500 as any,
    borderRadius: "11px",
    paddingLeft: "6px",
    marginTop: "3px",
    marginBottom: "3px"
  },
  multiValueLabel: {
    color: Color.black as any,
    padding: "1px",
    paddingLeft: "6px"
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
    option: (style, { isFocused }) =>
      ({
        ...style,
        backgroundColor: isFocused ? Color.grey300 : Color.trueWhite,
        ":hover": {
          backgroundColor: Color.grey300,
          color: Color.black
        }
      } as any),
    dropdownIndicator: () => styles.dropdownIndicator,
    indicatorSeparator: () => styles.indicatorSeparator,
    multiValue: style => ({ ...style, ...styles.multiValue }),
    multiValueLabel: style => ({ ...style, ...styles.multiValueLabel }),
    multiValueRemove: style => ({
      ...style,
      ...styles.multiValueRemove,
      ":hover": {
        backgroundColor: Color.red100,
        color: Color.red400,
        borderTopRightRadius: "11px",
        borderBottomRightRadius: "11px"
      }
    }),
    clearIndicator: style => ({ ...style, ...styles.clearIndicator }),
    indicatorsContainer
  };
};
