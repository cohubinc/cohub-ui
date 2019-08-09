import React from "react";
import { DatePicker } from "dist";

import "jest-dom/extend-expect";
import { mount } from "enzyme";
import { render, fireEvent, cleanup } from "@testing-library/react";

describe("DatePicker", () => {
  it("matches snapshot", async () => {
    const wrapper = mount(
      <DatePicker
        label="Date"
        appearance="contrast"
        value="1984-09-09"
        onChange={() => null}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("Typing an out of range month triggers the error state", async () => {
    const onChangeFn = jest.fn(isoDateTime => isoDateTime);
    const { getByTestId } = render(
      <DatePicker value="" onChange={onChangeFn} />
    );
    const input = getByTestId("LowLevelDatePickerInput") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "22011999" } });

    expect(input).toBeInvalid();
  });

  it("Typing an out of range day triggers the error state", async () => {
    const onChangeFn = jest.fn(isoDateTime => isoDateTime);
    const { getByTestId } = render(
      <DatePicker value="" onChange={onChangeFn} />
    );
    const input = getByTestId("LowLevelDatePickerInput") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "04761999" } });

    expect(input).toBeInvalid();
  });

  it("Typing an out of range year triggers the error state", async () => {
    const onChangeFn = jest.fn(isoDateTime => isoDateTime);
    const { getByTestId } = render(
      <DatePicker value="" onChange={onChangeFn} />
    );
    const input = getByTestId("LowLevelDatePickerInput") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "04761900" } });

    expect(input).toBeInvalid();
  });
});

afterEach(cleanup);
