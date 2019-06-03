import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/Home";

const ChildNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    header: null
  }
);

export default ChildNavigator;
