import React, { Component } from "react";
import { Text, View } from "../../components";

class Home extends Component {
  state = { loaded: false };
  render() {
    return (
      <View>
        <Text>Home screen</Text>
      </View>
    );
  }
}

export default Home;
