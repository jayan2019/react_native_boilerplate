import React, { Component } from "react";
import CoreImagePicker from "react-native-image-picker";
import PropTypes from "./propTypes";
import DefaultProps from "./defaultProps";
import { Avatar } from "react-native-elements";
import { Platform } from "react-native";

class ChangeImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: props.libraryTitle,
        storageOptions: {
          skipBackup: true,
          path: props.storageName,
          cameraRoll: Platform.OS === "ios",
          waitUntilSaved: true
        }
      }
    };
  }

  onSuccess(value) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  openBoth() {
    return CoreImagePicker.showImagePicker(this.state.options, response => {
      this.onResponse(response);
    });
  }

  onResponse(response) {
    if (!response.didCancel && !response.error && !response.customButton) {
      this.onSuccess({
        ...response
      });
    }
  }

  openModePicker() {
    this.openBoth();
  }

  render() {
    return (
      <Avatar
        rounded
        medium
        icon={{ name: "ios-camera", type: "ionicon", color: "#FFF" }}
        onPress={this.openModePicker.bind(this)}
        containerStyle={this.props.containerStyle}
      />
    );
  }
}

ChangeImage.propTypes = PropTypes;
ChangeImage.defaultProps = DefaultProps;

export default ChangeImage;
