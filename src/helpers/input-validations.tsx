import isInteger from "lodash/isInteger";
import isEmpty from "lodash/isEmpty";
import isNumber from "lodash/isNumber";

type TValidator<T> = (value?: T) => string | undefined;

export function composeValidators<T = any>(
  ...validators: Array<TValidator<T>>
) {
  return (value?: T) => {
    return validators.reduce<string | undefined>(
      (error, validator) => error || validator(value),
      undefined
    );
  };
}

export function required<T = string>(value?: T) {
  if (typeof value === "undefined") {
    return "Required";
  }

  let valid = !isEmpty(value);

  if (valid && typeof value === "string") {
    valid = value.trim().length > 0;
  }

  return valid ? undefined : "Required";
}

export function minLength<T = number>(min: number) {
  return (value?: T) =>
    value && typeof value === "string" && value.length < min
      ? `Should be at least ${min} characters long`
      : undefined;
}

export function minValue<T = number>(min: number) {
  return (value?: T) => {
    if (typeof value === "string") {
      return isNumber(value) ? undefined : "Not a number";
    }

    if (typeof value !== "number") {
      return "Not a number";
    }

    return value >= min ? undefined : `Should be greater than ${min}`;
  };
}

export function length<T = string>(valLength: number) {
  return (value?: T) => {
    if (value && typeof value === "string") {
      return value.length === valLength
        ? undefined
        : `Should be ${valLength} characters long`;
    }

    return "Invalid length";
  };
}

export const email = composeValidators(
  (value: string | number | object | null = "") =>
    typeof value === "string" && charsArePresent(value, "@", ".")
      ? undefined
      : "Should be a valid email",
  minLength(4)
);

export function isInt<T>(value?: T) {
  if (!value) {
    return undefined;
  }

  if (isInteger(value)) {
    return undefined;
  }

  if (typeof value === "string") {
    const isNum = /^\d+$/.test(value);
    const parsedVal = isNum && Number.parseFloat(value);
    return parsedVal && Number.isInteger(parsedVal)
      ? undefined
      : "Not an integer";
  }

  return "Not an integer";
}

const charsArePresent = (string: string, ...chars: string[]) =>
  chars.every(char => string.includes(char));
