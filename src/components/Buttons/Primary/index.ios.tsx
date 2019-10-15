import React from "react";

import { TouchableHighlight, Text } from "react-native";
import { TPrimaryButtonProps } from "./TPrimaryButtonProps";

const Primary = ({  }: TPrimaryButtonProps<"ios">) => (
  <TouchableHighlight>
    <Text>hi</Text>
  </TouchableHighlight>
);

export default Primary;
