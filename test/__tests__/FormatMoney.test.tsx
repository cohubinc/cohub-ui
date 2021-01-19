import React from "react";
import { mount } from "enzyme";

import { FormatMoney } from "dist";

describe("FormatMoney", () => {
  it("renders FormatMoney without crashing", async () => {
    const wrapper = mount(<FormatMoney value={0} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("if formats the default string correctly", async () => {
    const wrapper = mount(<FormatMoney value={1987.99} />);

    expect(wrapper.text()).toContain("$1,987.99");
  });

  it("if formats the a templated string correctly", async () => {
    const wrapper = mount(
      <FormatMoney
        value={987.99}
        shopCurrencyFormat="<span class=money>€{{amount}}</span>"
      />
    );

    expect(wrapper.text()).toContain("€987.99");
  });

  it("if strips markup and formats templated string correctly", async () => {
    const wrapper = mount(
      <FormatMoney
        value={987.99}
        shopCurrencyFormat="<span class=money>€{{amount}}</span>"
      />
    );

    expect(wrapper.text()).not.toContain("<span class=money>987.99</span>");
  });

  it("It handles html entities correctly", async () => {
    const wrapper = mount(
      <FormatMoney value={577.2} shopCurrencyFormat="&euro;{{amount}}" />
    );

    expect(wrapper.text()).toContain("€577.20");
  });
});
