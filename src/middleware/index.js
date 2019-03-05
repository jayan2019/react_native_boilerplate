import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import requestMiddleware from "./requestMiddleware";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(
  applyMiddleware(
    thunk,
    requestMiddleware,
    createReactNavigationReduxMiddleware("root", state => state.navigation)
  )
);

export default middleware;
