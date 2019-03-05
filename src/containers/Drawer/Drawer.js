import styles from "./styles";
import React, { Component } from "react";
import { Avatar, ListItem, Divider } from "react-native-elements";
import { View, Text, ScrollView } from "react-native";
import { Container, Footer, FooterTab, Button, Icon } from "native-base";

class Drawer extends Component {
  render() {
    const { name, email, items } = this.props;
    const userImage = require("../../assets/images/user_image.png");
    return (
      <Container>
        <View style={styles.header}>
          <Avatar large rounded source={userImage} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <ScrollView>
          {items.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
              leftIcon={{ name: item.icon, type: item.type }}
              onPress={() => this.props.changeScreen(item.route)}
            />
          ))}
        </ScrollView>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footerTab}>
            <Button
              vertical
              onPress={this.handelBackToDownloadPress.bind(this)}
              style={{ backgroundColor: "transparent" }}
            >
              <Icon name={"cloud-download"} style={{ color: "#035C63" }} />
              <Text style={{ color: "#035C63" }}>{"Download"}</Text>
            </Button>
            <Divider
              style={{ backgroundColor: "#035C63", height: 35, width: 2 }}
            />
            <Button
              vertical
              onPress={this.handelLogoutButtonPress.bind(this)}
              style={{ backgroundColor: "transparent" }}
            >
              <Icon
                name={"log-out"}
                type={"Entypo"}
                style={{ color: "#035C63" }}
              />
              <Text style={{ color: "#035C63" }}>{"Logout"}</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  handelBackToDownloadPress() {
    this.props.navigate({ routeName: "DownloadScreen" });
  }

  handelLogoutButtonPress() {
    this.props.signOut();
  }
}

export default Drawer;
