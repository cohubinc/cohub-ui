import React from "react";
import DateRange from "../index";

import { mount } from "enzyme";
import { render, fireEvent, cleanup } from "@testing-library/react";

import "jest-dom/extend-expect";

describe("DateRange", () => {
  it("matches snapshot", async () => {
    const wrapper = mount(
      <DateRange
        label="Date"
        appearance="contrast"
        value={["1984-09-09", "2019-09-09"]}
        onChange={() => null}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("You can't enter an end date that comes before the start date, duh", async () => {
    const onChangeFn = jest.fn(([start, end]) => [start, end]);

    const { getByTestId } = render(
      <DateRange value={["1991-09-09", ""]} onChange={onChangeFn} />
    );

    const endDateInput = getByTestId("endDateInput") as HTMLInputElement;

    expect(endDateInput).toBeValid();

    fireEvent.change(endDateInput, { target: { value: "04121985" } });

    expect(endDateInput).toBeInvalid();
  });
});

afterEach(cleanup);
