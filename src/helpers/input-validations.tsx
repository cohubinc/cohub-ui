import isNumber from "lodash/isNumber";

type TValidator<T> = (value?: T) => string | undefined;

export function composeValidators<T = any>(
  ...validators: Array<TValidator<T>>
) {
  return (value?: T) => {
    validators.reduce<string | undefined>(
      (error, validator) => error || validator(value),
      undefined
    );
  };
}

export const required = (value?: string | null) =>
  value && value.trim() ? undefined : "Required";

export const requiredNumber = (value?: number | null) =>
  value && isNumber(value) ? undefined : "Required";

export const minLength = (min: number) => (
  value: string | number | object = ""
) =>
  typeof value === "string" && value.length < min
    ? `Should be at least ${min} characters long`
    : undefined;

export const minValue = (min: number) => (value?: string | number | null) =>
  typeof value !== "string" && value && (isNaN(value) || value >= min)
    ? undefined
    : `Should be greater than ${min}`;

export const length = (valLength: number) => (value = "") => {
  return value.length === valLength
    ? undefined
    : `Should be ${valLength} characters long`;
};

export const email = composeValidators(
  (value = "") =>
    typeof value === "string" && charsArePresent(value, "@", ".")
      ? undefined
      : "Should be a valid email",
  minLength(4)
);

export const lengthRange = (min: number, max: number) => (v = "") => {
  if (v.length >= min && v.length <= max) {
    return undefined;
  }

  return `Should be between ${min} and ${max} characters long`;
};

export const isInt = (value?: string | null) => {
  if (!value) {
    return false;
  }

  const isNum = /^\d+$/.test(value);
  const parsedVal = isNum && Number.parseFloat(value);

  return parsedVal && Number.isInteger(parsedVal);
};

const charsArePresent = (string: string, ...chars: string[]) =>
  chars.every(char => string.includes(char));
