export type TValidatorResponse = string | undefined;

function isValid(validatorResp: TValidatorResponse) {
  return validatorResp === undefined;
}

declare global {
  namespace jest {
    // tslint:disable-next-line
    interface Matchers<R> {
      toBeValid(expected: TValidatorResponse): R;
      toNotBeValid(expected: TValidatorResponse): R;
    }
  }
}

// EXTENDING JESTS EXPECT - DOCS https://jest-bot.github.io/jest/docs/expect.html#expectextendmatchers
// Matchers should return an object with two keys. pass indicates whether there was a match or not,
// and message provides a function with no arguments that returns an error message in case of failure.
// Thus, when pass is false, message should return the error message for when
// expect(x).yourMatcher() fails. And when pass is true, message should return the error message
// for when expect(x).not.yourMatcher() fails.

expect.extend({
  toBeValid(received) {
    if (isValid(received)) {
      return {
        pass: true,
        message: () => `expected ${received} to NOT be invalid`
      };
    }

    return {
      pass: false,
      message: () => `expected ${received} to be valid, aka: undefined`
    };
  }
});
