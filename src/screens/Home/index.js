import Home from "./Home";
import { connect } from "react-redux";
import { DrawerActions, NavigationActions } from "react-navigation";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  navigate: NavigationActions.navigate,
  closeDrawer: DrawerActions.closeDrawer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
