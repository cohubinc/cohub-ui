import React from "react";
import { mount } from "enzyme";

import Text from "src/components/Typography";

describe("Typography", () => {
  it("renders Regular Text without crashing", async () => {
    const wrapper = mount(<Text>Some Text</Text>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.SuperTitle without crashing", async () => {
    const wrapper = mount(<Text.SuperTitle>Some Text</Text.SuperTitle>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Title without crashing", async () => {
    const wrapper = mount(<Text.Title>Some Text</Text.Title>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Subtitle without crashing", async () => {
    const wrapper = mount(<Text.Subtitle>Some Text</Text.Subtitle>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.HeadingLarge without crashing", async () => {
    const wrapper = mount(<Text.HeadingLarge>Some Text</Text.HeadingLarge>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.HeadingSmall without crashing", async () => {
    const wrapper = mount(<Text.HeadingSmall>Some Text</Text.HeadingSmall>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.HeadingTiny without crashing", async () => {
    const wrapper = mount(<Text.HeadingTiny>Some Text</Text.HeadingTiny>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Large without crashing", async () => {
    const wrapper = mount(<Text.Large>Some Text</Text.Large>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Small without crashing", async () => {
    const wrapper = mount(<Text.Small>Some Text</Text.Small>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Tiny without crashing", async () => {
    const wrapper = mount(<Text.Tiny>Some Text</Text.Tiny>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders bold Text without crashing", async () => {
    const wrapper = mount(<Text weight={500}>Some Text</Text>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders muted Text without crashing", async () => {
    const wrapper = mount(<Text muted>Some Text</Text>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders inverted Text without crashing", async () => {
    const wrapper = mount(<Text inverted>Some Text</Text>);

    expect(wrapper).toMatchSnapshot();
  });
});
