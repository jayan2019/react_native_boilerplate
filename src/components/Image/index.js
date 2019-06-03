import React, { Component } from "react";
import { Image as BaseImage } from "react-native";
import { ActivitySpinner , View} from "../index";
import PropTypes from "./propTypes";
import DefaultProps from "./defaultProps";

class Image extends Component {
  state = { isLoading: false };

  render() {
    const { isLoading } = this.state;
    const { style, source, containerStyle, spinnerColor } = this.props;
    return (
      <View style={containerStyle}>
        {isLoading ? (
          <View style={{ position: "absolute", zIndex: 100 }}>
            <ActivitySpinner color={spinnerColor} />
          </View>
        ) : null}
        <BaseImage
          style={style}
          source={source}
          onLoadStart={() => this.setState({ isLoading: true })}
          onLoadEnd={() => this.setState({ isLoading: false })}
        />
      </View>
    );
  }
}

Image.propTypes = PropTypes;
Image.defaultProps = DefaultProps;

export default Image;
