import React from "react";
import { mount } from "enzyme";
import { Buttons } from "dist";

describe("Buttons", () => {
  it("renders", () => {
    const wrapper = mount(<Buttons>push me</Buttons>);
    expect(wrapper).toMatchSnapshot();
  });

  describe("Buttons can render other button component via static methods on the class", () => {
    it("renders Primary", () => {
      const wrapper = mount(<Buttons.Primary>push me</Buttons.Primary>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Info", () => {
      const wrapper = mount(<Buttons.Info>push me</Buttons.Info>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Cancel", () => {
      const wrapper = mount(<Buttons.Cancel>push me</Buttons.Cancel>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Outline", () => {
      const wrapper = mount(<Buttons.Outline>push me</Buttons.Outline>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Ghost", () => {
      const wrapper = mount(<Buttons.Ghost>push me</Buttons.Ghost>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders PrimaryGhost ", () => {
      const wrapper = mount(
        <Buttons.PrimaryGhost>push me</Buttons.PrimaryGhost>
      );
      expect(wrapper.exists()).toBe(true);
    });

    it("renders CancelGhost", () => {
      const wrapper = mount(<Buttons.CancelGhost>push me</Buttons.CancelGhost>);
      expect(wrapper.exists()).toBe(true);
    });

    it("renders Blank", () => {
      const wrapper = mount(<Buttons.Blank>push me</Buttons.Blank>);
      expect(wrapper.exists()).toBe(true);
    });
  });
});
