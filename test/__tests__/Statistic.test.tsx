import React from "react";
import { mount } from "enzyme";

import { Statistic } from "dist";

describe("Statistic", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(
      <Statistic label="test stat" value={100} format="number" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("render shopify formatted money correctly", () => {
    const wrapper = mount(
      <Statistic
        label="test stat"
        value={2344.5}
        format="money"
        shopCurrencyFormat="<h1 class=money>€ {{amount}} EUR</h1>"
      />
    );

    expect(wrapper.text()).toContain("€ 2,344.50 EUR");
    expect(wrapper.text()).not.toContain("<h1 class=money>€ 2,344.50</h1>");
  });
});
