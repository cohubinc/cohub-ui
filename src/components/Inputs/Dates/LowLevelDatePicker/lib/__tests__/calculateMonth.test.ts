import calculateMonth from "../calculateMonth";

describe("calculateMonth function", () => {
  it("works as expected (Feb 2015)", async () => {
    expect(calculateMonth(2, 2015)).toEqual([0, 28]);
  });

  it("works as expected (March 2015)", async () => {
    expect(calculateMonth(3, 2015)).toEqual([0, 31]);
  });

  it("works as expected (Jan 2017)", async () => {
    expect(calculateMonth(1, 2017)).toEqual([0, 31]);
  });

  it("works as expected (March 2009)", async () => {
    expect(calculateMonth(3, 2009)).toEqual([0, 31]);
  });

  it("works as expected (September 2002)", async () => {
    expect(calculateMonth(9, 2002)).toEqual([0, 30]);
  });

  it("works as expected (February 2111)", async () => {
    expect(calculateMonth(2, 2111)).toEqual([0, 28]);
  });

  it("A month that starts on a monday (June 2015)", async () => {
    expect(calculateMonth(6, 2015)).toEqual([1, 30]);
  });

  it("A month that starts on a tuesday (July 2003)", async () => {
    expect(calculateMonth(7, 2003)).toEqual([2, 31]);
  });

  it("A month that starts on a wed (May 2002)", async () => {
    expect(calculateMonth(5, 2002)).toEqual([3, 31]);
  });

  it("A month that starts on a saturday (June 2002)", async () => {
    expect(calculateMonth(6, 2002)).toEqual([6, 30]);
  });

  it("A leap year (February 2016)", async () => {
    expect(calculateMonth(2, 2016)).toEqual([1, 29]);
  });

  it("A century leap year (February 2000)", async () => {
    expect(calculateMonth(2, 2000)).toEqual([2, 29]);
  });
});
