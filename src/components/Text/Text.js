import React from "react";
import { Text as BaseText } from "react-native";

const Text = ({ children, style, numberOfLines }) => (
  <BaseText numberOfLines={numberOfLines ? numberOfLines : 1} style={style}>
    {children}
  </BaseText>
);

export default Text;
