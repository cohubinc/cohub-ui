import React from "react";

import { TouchableHighlight, Text } from "react-native";
import { TPrimaryButtonProps } from "./TPrimaryButtonProps";

function Primary<T>({ style }: TPrimaryButtonProps<T>) {
  return (
    <TouchableHighlight>
      <Text>hi</Text>
    </TouchableHighlight>
  );
}

export default Primary;
