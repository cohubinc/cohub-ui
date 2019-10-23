export type TValidatorResponse = string | undefined;

function isValid(validatorResp: TValidatorResponse) {
  return validatorResp === undefined;
}

declare global {
  namespace jest {
    // tslint:disable-next-line
    interface Matchers<R> {
      toBeValid(expected: TValidatorResponse): R;
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
    // If received is undefined that means the validate function is valid and doesn't have any errors
    if (received === undefined) {
      return {
        pass: true,
        message: () =>
          `expected a validation error message but got - ${received}`
      };
    }

    return {
      pass: false,
      message: () => `expected undefined but got - ${received}`
    };
  }
});
