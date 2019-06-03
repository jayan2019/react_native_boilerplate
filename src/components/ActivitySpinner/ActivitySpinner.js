import React from "react";
import { ActivityIndicator as BaseActivityIndicator } from "react-native";

const ActivitySpinner = ({ size, color }) => (
  <BaseActivityIndicator
    size={size ? size : "large"}
    color={color ? color : "#035C63"}
  />
);

export default ActivitySpinner;
