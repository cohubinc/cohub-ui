import isInteger from "lodash/isInteger";
import isEmpty from "lodash/isEmpty";
import toNumber from "lodash/toNumber";

import logError from "src/helpers/logError";

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
  const errMsg = "Required";

  if (typeof value === "undefined") {
    return errMsg;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return;
  }
  if (typeof value === "string" && value.trim().length > 0) {
    return;
  }
  if (isEmpty(value)) {
    return errMsg;
  }
}

export function minLength(min: number) {
  return (value?: string) => {
    if (value === undefined) return;

    if (typeof value !== "string") {
      logError(`Type Error - ${value} is not a string`);
    }

    return value.length >= min
      ? undefined
      : `Should be at least ${min} characters long`;
  };
}

export function minValue(min: number) {
  return (value?: string | number) => {
    if (value === undefined) return;

    const errMsg = `Should be greater than ${min}`;

    const float: number = toNumber(value);

    if (isNaN(float)) return errMsg;

    return value >= min ? undefined : errMsg;
  };
}

export function length(valLength: number) {
  return (value?: string) => {
    if (value === undefined) return;

    return value.length === valLength
      ? undefined
      : `Should be ${valLength} characters long`;
  };
}

export const email = composeValidators(
  (value: string | number | object | null = "") =>
    typeof value === "string" && charsArePresent(value, "@", ".")
      ? undefined
      : "Should be a valid email",
  minLength(4)
);

/**
 * Ensures that number or string is an integer
 * isInt("22")   // true
 * isInt("0.33") // false
 * isInt(22)     // true
 * isInt(0.33)   // false
 */
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

/////////////////////// Private /////////////////////////////
/////////////////////////////////////////////////////////////

const charsArePresent = (string: string, ...chars: string[]) =>
  chars.every(char => string.includes(char));
