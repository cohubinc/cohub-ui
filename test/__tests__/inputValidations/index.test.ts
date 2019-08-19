import { inputValidations } from "dist";

import "./expect-extensions";

const {
  required,
  minLength,
  minValue,
  length,
  composeValidators
} = inputValidations;

describe("Input validators", () => {
  ///// REQUIRED /////
  describe("required validator", () => {
    it("returns an error when value is undefined", async () => {
      expect(required(undefined)).not.toBeValid();
    });
    it("returns an error when its called with no args", async () => {
      expect(required()).not.toBeValid();
    });
    it("is NOT valid when value is an empty string", async () => {
      expect(required("")).not.toBeValid();
    });
    it("is valid when value is NOT an empty string", async () => {
      expect(required("s")).toBeValid();
    });
    it("is valid when value is a number", async () => {
      expect(required(5)).toBeValid();
    });
    it("is valid when value is zero", async () => {
      expect(required(0)).toBeValid();
    });
    it("is valid when value is true", async () => {
      expect(required(true)).toBeValid();
    });
    it("is valid when value is false", async () => {
      expect(required(false)).toBeValid();
    });
    it("is NOT valid when value is an empty array", async () => {
      expect(required([])).not.toBeValid();
    });
    it("is valid when value is NOT an empty array", async () => {
      expect(required([0])).toBeValid();
    });
    it("is NOT valid when value is an empty object literal", async () => {
      expect(required({})).not.toBeValid();
    });
    it("is valid when value is NOT an empty object literal", async () => {
      expect(required({ foo: "bar" })).toBeValid();
    });
  });

  //// MIN_LENGTH ////
  describe("minLength validator", () => {
    const minLengthZero = minLength(0);
    const minLengthTwo = minLength(2);

    it("is valid when value is undefined", () => {
      expect(minLengthTwo(undefined)).toBeValid();
    });
    it("is valid when value is in range", () => {
      expect(minLengthTwo("ab")).toBeValid();
    });
    it("is NOT valid when value is below range", () => {
      expect(minLengthTwo("a")).not.toBeValid();
    });
    it("works when initialized with zero", () => {
      expect(minLengthZero("")).toBeValid();
    });
  });

  //// MIN_VALUE ////
  describe("minValue validator", () => {
    const minValueZero = minValue(0);
    const minValueTwo = minValue(2);

    describe("works with numbers", () => {
      it("is valid when value is undefined", () => {
        expect(minValueTwo(undefined)).toBeValid();
      });
      it("is valid when value is greater than two", () => {
        expect(minValueTwo(5)).toBeValid();
      });
      it("is NOT valid when value is less than two", () => {
        expect(minValueTwo(1)).not.toBeValid();
      });
      it("works with zero", () => {
        expect(minValueZero(0)).toBeValid();
        expect(minValueZero(3)).toBeValid();
      });
    });

    describe("works with strings", () => {
      it("empty string is valid", () => {
        expect(minValueZero("")).toBeValid();
      });
      it("is valid when value is undefined", () => {
        expect(minValueTwo(undefined)).toBeValid();
      });
      it("is valid when value is greater than 2", () => {
        expect(minValueTwo("5")).toBeValid();
      });
      it("is NOT valid when value is less than 2", () => {
        expect(minValueTwo("1")).not.toBeValid();
      });
      it("works with zero", () => {
        expect(minValueZero("0")).toBeValid();
        expect(minValueZero("3")).toBeValid();
      });

      it("non-numeric strings are NOT valid", () => {
        expect(minValueZero("noop")).not.toBeValid();
        expect(minValueZero("NaN")).not.toBeValid();
      });
    });
  });

  //// LENGTH ////
  describe("length validator", () => {
    const lengthZero = length(0);
    const lengthTwo = length(2);

    it("is valid when value is undefined", () => {
      expect(lengthTwo(undefined)).toBeValid();
    });
    it("is valid when value matches length", () => {
      expect(lengthTwo("ab")).toBeValid();
    });
    it("is NOT valid when value is greater than length", () => {
      expect(lengthTwo("more than two")).not.toBeValid();
    });
    it("is NOT valid when value is less than length", () => {
      expect(lengthTwo("a")).not.toBeValid();
    });
    it("works when length is zero", () => {
      expect(lengthZero("")).toBeValid();
    });
  });

  //// COMPOSE VALIDATORS ////
  describe("composeValidators function", () => {
    describe("composing minLength and required works", () => {
      const validator = composeValidators(required, minLength(5));

      test("a string longer than 5 chars is valid", () => {
        expect(validator("more than 5 chars long")).toBeValid();
      });
      test("a string with less than 5 chars is NOT valid", () => {
        expect(validator("noop")).not.toBeValid();
      });
      test("an empty string is NOT valid", () => {
        expect(validator("")).not.toBeValid();
      });
      test("still validates required", () => {
        expect(validator(undefined)).not.toBeValid();
        expect(validator()).not.toBeValid();
        expect(validator("")).not.toBeValid();
      });
    });

    describe("composing minValue and required works", () => {
      const validator = composeValidators(required, minValue(2));

      describe("works with strings", () => {
        it("is valid when value is greater than 2", () => {
          expect(validator("5")).toBeValid();
        });

        it("is valid when value is 2", () => {
          expect(validator("2")).toBeValid();
        });
        it("is NOT valid when value is less than 2", () => {
          expect(validator("1")).not.toBeValid();
        });
        it("works with zero", () => {
          expect(validator("0")).not.toBeValid();
        });

        it("non-numeric strings are NOT valid", () => {
          expect(validator("noop")).not.toBeValid();
          expect(validator("NaN")).not.toBeValid();
        });
      });

      describe("works with numbers", () => {
        it("is valid when value is greater than 2", () => {
          expect(validator(5)).toBeValid();
        });

        it("is valid when value is 2", () => {
          expect(validator(2)).toBeValid();
        });
        it("is NOT valid when value is less than 2", () => {
          expect(validator(1)).not.toBeValid();
        });
        it("works with zero", () => {
          expect(validator(0)).not.toBeValid();
        });
      });

      test("still validates required", () => {
        expect(validator(undefined)).not.toBeValid();
        expect(validator()).not.toBeValid();
        expect(validator("")).not.toBeValid();
      });
    });

    describe("composing minValue and minLength is stupid", () => {
      const minLength2AndMinVal20 = composeValidators(
        minLength(2),
        minValue(20)
      );

      it("but it works even though it doesn't make any damn sense", () => {
        expect(minLength2AndMinVal20("25")).toBeValid();
        expect(minLength2AndMinVal20("20")).toBeValid();
        expect(minLength2AndMinVal20("19")).not.toBeValid();
      });
    });
  });
});
