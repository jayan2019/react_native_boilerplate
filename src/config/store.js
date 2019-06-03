import { createStore } from "redux";
import rootReducers from "../reducers";
import middleware from "../middleware";
import * as subscriptions from "../subscriptions";
import { configureStorage } from "../config";

// make configureStore using redux createStore
export default async () => {
  // get preload data from storage
  let preloadState = await configureStorage.getItem();
  if (preloadState) {
    preloadState = {
      auth: preloadState.auth,
      backgroundLocation: preloadState.backgroundLocation
    };
  } else {
    preloadState = undefined;
  }

  // create store
  const store = createStore(rootReducers, preloadState, middleware);

  // create subscription
  store.subscribe(() => {
    Object.values(subscriptions).forEach(subscription => {
      subscription(store);
    });
  });

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(
        require("../reducers") /*.default if you use Babel 6+ */
      )
    );
  }

  return store;
};
