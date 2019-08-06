import React from "react";
import { mount } from "enzyme";

import DateRange from "../index";

describe("DateRange", () => {
  it("matches snapshot", async () => {
    const wrapper = mount(
      <DateRange
        label="Date"
        appearance="contrast"
        input={{
          name: "nunyah",
          value: ["1984-09-09", "2019-09-09"],
          onChange: () => null,
          onFocus: () => null,
          onBlur: () => null
        }}
        meta={{}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
