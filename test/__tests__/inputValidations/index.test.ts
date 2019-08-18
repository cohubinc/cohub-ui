import { inputValidations } from "dist";

import "./expect-extensions";

const { required } = inputValidations;

describe("Input validators", () => {
  ///// REQUIRED /////
  describe("required validator", () => {
    it("required returns an error when value is undefined", async () => {
      expect(required(undefined)).not.toBeValid();
    });
    it("required returns an error when its called with no args", async () => {
      expect(required()).not.toBeValid();
    });
    it("required is NOT valid when value is an empty string", async () => {
      expect(required("")).not.toBeValid();
    });
    it("required is valid when value is NOT an empty string", async () => {
      expect(required("s")).toBeValid();
    });
    it("required is valid when value is a number", async () => {
      expect(required(5)).toBeValid();
    });
    it("required is valid when value is zero", async () => {
      expect(required(0)).toBeValid();
    });
    it("required is valid when value is true", async () => {
      expect(required(true)).toBeValid();
    });
    it("required is valid when value is false", async () => {
      expect(required(false)).toBeValid();
    });
    it("required is NOT valid when value is an empty array", async () => {
      expect(required([])).not.toBeValid();
    });
    it("required is valid when value is NOT an empty array", async () => {
      expect(required([0])).toBeValid();
    });
    it("required is NOT valid when value is an empty object literal", async () => {
      expect(required({})).not.toBeValid();
    });
    it("required is valid when value is NOT an empty object literal", async () => {
      expect(required({ foo: "bar" })).toBeValid();
    });
  });
});
