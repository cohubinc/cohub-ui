import React, { ReactNode } from "react";
import { mount } from "enzyme";

import { Inputs, CssFramework, size } from "dist";
import { sleep, getScreenshot } from "../utils";

describe("Base Input", () => {
  describe("image snapshots look correct", async () => {
    it("looks good with no value", async () => {
      const img = await getInputScreenshot(
        <Inputs.Text label="name" input={{ value: "", onChange: () => null }} />
      );

      expect(img).toMatchImageSnapshot();
    });

    it("looks good with a value", async () => {
      const img = await getInputScreenshot(
        <Inputs.Text
          label="name"
          input={{ value: "Brandon", onChange: () => null }}
        />
      );

      expect(img).toMatchImageSnapshot();
    });
  });

  it("renders with value without crashing", async () => {
    const wrapper = mount(<Inputs.Base value="test" onChange={() => null} />);

    expect(wrapper).toMatchSnapshot();
  });
});

async function getInputScreenshot(jsx: ReactNode) {
  return await getScreenshot(jsx, { width: 300, height: 30 });
}
