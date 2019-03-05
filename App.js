import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { configureStore } from "./src/config";
import WelcomeScreen from "./src/screens/Welcome";
import ErrorScreen from "./src/screens/Error";
import { RootNavigator } from "./src/navigators";

class App extends Component {
  state = {
    store: null,
    hasError: false,
    error: null
  };

  async componentDidMount() {
    const store = await configureStore();
    this.setState({ store });
  }

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorScreen error={this.state.error} />;
    }

    if (this.state.store) {
      return (
        <Provider store={this.state.store}>
          <Fragment>
            <RootNavigator />
          </Fragment>
        </Provider>
      );
    }

    return <WelcomeScreen />;
  }
}

export default App;
