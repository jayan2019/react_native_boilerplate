import Drawer from "./Drawer";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { changeScreen } from "../../actions/navigation";
import { signOut } from "../../actions/auth";
import {
  getAuthUserName,
  getAuthUserEmail,
  getHomeMenuItems,
  getAuthUserAvatar
} from "../../selectors";

const mapStateToProps = state => ({
  name: getAuthUserName(state),
  email: getAuthUserEmail(state),
  items: getHomeMenuItems(state),
  avatar: getAuthUserAvatar(state)
});

const mapDispatchToProps = {
  navigate: NavigationActions.navigate,
  changeScreen,
  signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
