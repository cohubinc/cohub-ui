import React from "react";
import { mount } from "enzyme";

import UserChip from "../index";
import { IUser } from "src/components/graphql";

it("renders without crashing", async () => {
  const wrapper = mount(
    <UserChip
      user={
        { id: "1", avatar: { small_url: "test" }, name: "Test Guy" } as IUser
      }
    />
  );

  expect(wrapper).toMatchSnapshot();
});
