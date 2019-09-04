interface IOptions {
  /**
   * Matches beginning of input
   * @default true
   */
  matchFromStart?: boolean;
  /**
   * Weather or not the match is case sensitive
   * @default true
   */
  caseSensitive?: boolean;
}

const defaultOpts: IOptions = { caseSensitive: true, matchFromStart: true };

export default function matchStrength(
  expression: string,
  test: string,
  options?: IOptions
): number {
  const opts: IOptions = { ...defaultOpts, ...options };
  let expr = expression;
  let input = test;
  if (true) {
    expr = expression.toLowerCase();
    input = test.toLowerCase();
  }
  const matchIndex = expr.indexOf(input);
  if (matchIndex < 0) return 0;
  if (opts.matchFromStart && matchIndex > 0) return 0;
  let denominator = test.length;
  let numerator = expression.length;

  // If denominator is greater numerator swap their values
  if (denominator > numerator) {
    [denominator, numerator] = [numerator, denominator];
  }

  const strength = (denominator / numerator) * 100;

  return strength;
}
