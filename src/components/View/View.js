import React from "react";
import { View as BaseView } from "react-native";

const View = ({ children, style }) => (
  <BaseView style={style}>{children}</BaseView>
);

export default View;
