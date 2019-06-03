import { createStackNavigator } from "react-navigation";
import DownloadScreen from "../screens/Download";

const DownloadNavigator = createStackNavigator(
  {
    DownloadScreen: { screen: DownloadScreen }
  },
  {
    initialRouteName: "DownloadScreen",
    headerMode: "none"
  }
);

export default DownloadNavigator;
