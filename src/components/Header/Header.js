import React from "react";
import {
  Header as BaseHeader,
  Body,
  Title,
  Left,
  Right,
  Button,
  Icon
} from "native-base";

const Header = ({
  headerTitle,
  leftButtonPress,
  rightButtonPress,
  disableLeft,
  enableRight,
  leftIconName
}) => (
  <BaseHeader
    androidStatusBarColor={"#035C63"}
    iosBarStyle={"light-content"}
    style={{ backgroundColor: "#035C63", borderBottomWidth: 0 }}
  >
    <Left style={{ flex: 1 }}>
      {!disableLeft ? (
        <Button transparent onPress={leftButtonPress}>
          <Icon
            name={leftIconName ? leftIconName : "menu"}
            style={{ color: "#FFF" }}
          />
        </Button>
      ) : null}
    </Left>
    <Body style={{ flex: 1, alignItems: "center" }}>
      <Title style={{ color: "#FFF" }}>{headerTitle}</Title>
    </Body>
    <Right>
      {enableRight ? (
        <Button transparent onPress={rightButtonPress}>
          <Icon name="ios-refresh" style={{ color: "#FFF" }} />
        </Button>
      ) : null}
    </Right>
  </BaseHeader>
);

export default Header;
