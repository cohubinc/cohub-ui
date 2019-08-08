import isInteger from "lodash/isInteger";
import isEmpty from "lodash/isEmpty";

type TValidator<T> = (value?: T) => string | undefined;

export function composeValidators(...validators: Array<TValidator<any>>) {
  return (value?: any) => {
    validators.reduce<string | undefined>(
      (error, validator) => error || validator(value),
      undefined
    );
  };
}

export const required = (value?: string | number | object | null | boolean) => {
  if (typeof value === "undefined") {
    return "Required";
  }

  let valid = !isEmpty(value);

  if (valid && typeof value === "string") {
    valid = value.trim().length > 0;
  }

  return valid ? undefined : "Required";
};

export const minLength = (min: number) => (
  value: string | number | null | object = ""
) =>
  typeof value === "string" && value.length < min
    ? `Should be at least ${min} characters long`
    : undefined;

export const minValue = (min: number) => (
  value?: string | number | object | null
) =>
  typeof value !== "string" &&
  typeof value !== "object" &&
  value &&
  (isNaN(value) || value >= min)
    ? undefined
    : `Should be greater than ${min}`;

export const length = (valLength: number) => (
  value: string | number | object | null = ""
) => {
  if (value && typeof value === "string") {
    return value.length === valLength
      ? undefined
      : `Should be ${valLength} characters long`;
  }

  return "Invalid length";
};

export const email = composeValidators(
  (value: string | number | object | null = "") =>
    typeof value === "string" && charsArePresent(value, "@", ".")
      ? undefined
      : "Should be a valid email",
  minLength(4)
);

export const isInt = (value?: string | number | object | null) => {
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
};

const charsArePresent = (string: string, ...chars: string[]) =>
  chars.every(char => string.includes(char));
