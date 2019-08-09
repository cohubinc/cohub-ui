import React from "react";
import { mount } from "enzyme";

import { Modal } from "dist";

describe("Modal component", () => {
  it("renders", async () => {
    const wrapper = mount(
      <Modal open={true} onClose={() => undefined}>
        <span>Content</span>
      </Modal>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
