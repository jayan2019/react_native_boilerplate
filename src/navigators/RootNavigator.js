import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { BackHandler } from "react-native";
import { NavigationActions } from "react-navigation";
import AppNavigator from "./AppNavigator";

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

createReactNavigationReduxMiddleware("root", state => state.navigation);

const AppWithNavigationState = reduxifyNavigator(AppNavigator, "root");

class ReduxNavigation extends PureComponent {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, navigationState } = this.props;
    const index = navigationState.stateForLoggedIn.index;
    const nav = navigationState.stateForLoggedIn;
    const childIndex = nav.routes[index].index;
    const childNav = nav.routes[index];
    if (
      index === 0 ||
      index === 1 ||
      (index === 2 && childNav.routes[childIndex].index === 0)
    ) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };
  render() {
    const { navigationState, dispatch, accessToken } = this.props;
    const state = accessToken.data.token
      ? navigationState.stateForLoggedIn
      : navigationState.stateForLoggedOut;
    return <AppWithNavigationState state={state} dispatch={dispatch} />;
  }
}

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken,
  navigationState: state.navigation
});

export default connect(mapStateToProps)(ReduxNavigation);
