import React from "react";
import { mount } from "enzyme";

import { Typography } from "dist";

describe("Typography", () => {
  it("renders Regular Text without crashing", async () => {
    const wrapper = mount(<Typography>Some Text</Typography>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.SuperTitle without crashing", async () => {
    const wrapper = mount(
      <Typography.SuperTitle>Some Text</Typography.SuperTitle>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Title without crashing", async () => {
    const wrapper = mount(<Typography.Title>Some Text</Typography.Title>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Subtitle without crashing", async () => {
    const wrapper = mount(<Typography.Subtitle>Some Text</Typography.Subtitle>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.HeadingLarge without crashing", async () => {
    const wrapper = mount(
      <Typography.HeadingLarge>Some Text</Typography.HeadingLarge>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.HeadingSmall without crashing", async () => {
    const wrapper = mount(
      <Typography.HeadingSmall>Some Text</Typography.HeadingSmall>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.HeadingTiny without crashing", async () => {
    const wrapper = mount(
      <Typography.HeadingTiny>Some Text</Typography.HeadingTiny>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Large without crashing", async () => {
    const wrapper = mount(<Typography.Large>Some Text</Typography.Large>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Small without crashing", async () => {
    const wrapper = mount(<Typography.Small>Some Text</Typography.Small>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Text.Tiny without crashing", async () => {
    const wrapper = mount(<Typography.Tiny>Some Text</Typography.Tiny>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders bold Text without crashing", async () => {
    const wrapper = mount(<Typography bold>Some Text</Typography>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders muted Text without crashing", async () => {
    const wrapper = mount(<Typography muted>Some Text</Typography>);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders inverted Text without crashing", async () => {
    const wrapper = mount(<Typography inverted>Some Text</Typography>);

    expect(wrapper).toMatchSnapshot();
  });
});
