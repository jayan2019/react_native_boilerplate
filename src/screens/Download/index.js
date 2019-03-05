import Download from "./Download";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  navigate: NavigationActions.navigate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
