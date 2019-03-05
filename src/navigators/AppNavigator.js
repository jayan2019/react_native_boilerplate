import { createSwitchNavigator } from "react-navigation";
import AuthStack from "./AuthNavigator";
import HomeStack from "./HomeNavigator";
import DownloadNavigator from "./DownloadNavigator";
import {
  AUTH_NAVIGATION,
  DOWNLOAD_NAVIGATION,
  HOME_NAVIGATION
} from "../constants";

const AppNavigator = createSwitchNavigator(
  {
    [AUTH_NAVIGATION]: AuthStack,
    [DOWNLOAD_NAVIGATION]: DownloadNavigator,
    [HOME_NAVIGATION]: HomeStack
  },
  {
    initialRouteName: AUTH_NAVIGATION
  }
);

export default AppNavigator;
