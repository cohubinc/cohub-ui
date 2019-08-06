import React from "react";
import { mount } from "enzyme";

import FloatingLabelWrapper from "../index";
it("matches snapshot", async () => {
  const wrapper = mount(
    <FloatingLabelWrapper>
      {({ componentProps, setInputRef }) => (
        <input {...componentProps} ref={setInputRef} />
      )}
    </FloatingLabelWrapper>
  );

  expect(wrapper).toMatchSnapshot();
});
