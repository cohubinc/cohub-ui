import React, { CSSProperties } from "react";
import Select from "@cohubinc/react-select";
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
import FloatingLabelWrapper, {
  IFloatingLabelWrapperProps
} from "../FloatingLabelWrapper";

import "./Multiselect.scss";
import TInheritedFloatingLabelProps from "../definitions/TInheritedFloatingLabelProps";

interface IOption {
  label: string;
  value: string;
}

type FieldProps = FieldRenderProps<string[], HTMLElement>;
type Input = FieldProps["input"];

export interface IMultiSelectProps extends TInheritedFloatingLabelProps {
  options?: OptionsType<IOption>;
  allowCreate?: boolean;
  loading?: boolean;
  clearable?: boolean;
  style?: CSSProperties;
  input?: Partial<Input>;
  meta?: FieldProps["meta"];
  disabled?: boolean;
}

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
  required,
  placeholder = ""
}: IMultiSelectProps) {
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
  const selectStyles: StylesConfig = {
    control: s => ({ ...s, ...styles.control, paddingTop: 0 }),
    container: s => ({ ...s, ...styles.container }),
    input: s => ({ ...s, ...styles.input }),
    menu: s => ({ ...s, ...styles.menu }),
    option: (s, { isFocused }) =>
      ({
        ...s,
        backgroundColor: isFocused ? Color.grey300 : Color.trueWhite,
        ":hover": {
          backgroundColor: Color.grey300,
          color: Color.black
        }
      } as any),
    dropdownIndicator: () => styles.dropdownIndicator,
    indicatorSeparator: () => styles.indicatorSeparator,
    multiValue: s => ({
      ...s,
      backgroundColor:
        appearance === "contrast" ? Color.trueWhite : (Color.grey100 as any),
      borderRadius: "11px",
      paddingLeft: "6px",
      marginTop: "3px",
      marginBottom: "3px"
    }),
    multiValueLabel: s => ({ ...s, ...styles.multiValueLabel }),
    multiValueRemove: s => ({
      ...s,
      ...styles.multiValueRemove,
      ":hover": {
        backgroundColor: Color.red100,
        color: Color.red400,
        borderTopRightRadius: "11px",
        borderBottomRightRadius: "11px"
      }
    }),
    clearIndicator: s => ({ ...s, ...styles.clearIndicator }),
    indicatorsContainer
  };

  const selectConfig: SelectComponentsProps = {
    options,
    isMulti: true,
    isLoading: loading,
    styles: selectStyles,
    placeholder,
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
