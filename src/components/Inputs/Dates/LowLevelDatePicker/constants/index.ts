import TPicker from "../definitions/types/TPicker";

export const steps: TPicker[] = ["month", "day", "year"];

export const optionTransitionTime = 200;

export const showPickerTransitionTime = 250;

export const switchPickerTransitionTime = 350;

export const timeItTakesForAllTransitionsToComplete =
  optionTransitionTime + showPickerTransitionTime;

export const transition = `all ${optionTransitionTime}ms ease-in-out`;

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
