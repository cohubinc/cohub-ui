import React from "react";
import { mount } from "enzyme";
import Button from "../index";

describe("Buttons", () => {
  it("renders", () => {
    const wrapper = mount(<Button>push me</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  describe("Buttons can render other button component via static methods on the class", () => {
    it("renders Primary", () => {
      const wrapper = mount(<Button.Primary>push me</Button.Primary>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Info", () => {
      const wrapper = mount(<Button.Info>push me</Button.Info>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Cancel", () => {
      const wrapper = mount(<Button.Cancel>push me</Button.Cancel>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Outline", () => {
      const wrapper = mount(<Button.Outline>push me</Button.Outline>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Ghost", () => {
      const wrapper = mount(<Button.Ghost>push me</Button.Ghost>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders PrimaryGhost ", () => {
      const wrapper = mount(<Button.PrimaryGhost>push me</Button.PrimaryGhost>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders CancelGhost", () => {
      const wrapper = mount(<Button.CancelGhost>push me</Button.CancelGhost>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Blank", () => {
      const wrapper = mount(<Button.Blank>push me</Button.Blank>);
      expect(wrapper.exists()).toBe(true);
    });
  });
});
