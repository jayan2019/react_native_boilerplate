import React from "react";
import { TouchableOpacity as BaseTouchableOpacity } from "react-native";

const TouchableOpacity = ({ children, onPress, onLongPress, style }) => (
  <BaseTouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    underlayColor="transparent"
    style={style}
    activeOpacity={0.5}
  >
    {children}
  </BaseTouchableOpacity>
);

export default TouchableOpacity;
