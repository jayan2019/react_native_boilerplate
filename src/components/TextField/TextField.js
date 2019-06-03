import React from "react";
import { TextField as BaseTextField } from "react-native-material-textfield";

const TextField = ({ reference, ...otherProps }) => (
  <BaseTextField ref={reference} {...otherProps} />
);

export default TextField;
