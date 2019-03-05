import React from "react";
import ChildNavigator from "./Childnavigator";
import { createDrawerNavigator } from "react-navigation";
import Drawer from "../containers/Drawer";

const HomeNavigator = createDrawerNavigator(
  {
    HomeIndex: { screen: ChildNavigator }
  },
  {
    contentComponent: props => <Drawer {...props} />,
    drawerPosition: "left",
    initialRouteName: "HomeIndex",
    drawerBackgroundColor: "#FFF"
  }
);

export default HomeNavigator;
