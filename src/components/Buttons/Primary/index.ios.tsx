import React from "react";

import { TouchableHighlight, Text } from "react-native";

export type TPrimaryButtonProps = string[];

const Primary = ({  }: TPrimaryButtonProps) => (
  <TouchableHighlight>
    <Text>hi</Text>
  </TouchableHighlight>
);

export default Primary;
