import React from "react";
import { Button as BaseButton } from "react-native-elements";

const Button = ({
  onPress,
  style,
  title,
  color,
  backgroundColor,
  icon,
  disabled,
  ...otherProps
}) => (
  <BaseButton
    {...otherProps}
    raised
    icon={icon ? icon : null}
    title={title}
    disabled={disabled}
    backgroundColor={backgroundColor}
    color={color}
    containerViewStyle={style}
    onPress={onPress}
  />
);

export default Button;
