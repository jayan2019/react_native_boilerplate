import { omit } from "lodash";
import { configureClient } from "../config";
import { HTTP_REQUEST, RESET_STATE } from "../constants";
import { getAccessTokenData } from "../selectors";
import { HTTPClient } from "../services";

const authHeader = "Authorization";

let authTokenType = "Bearer";
let authTokenPathInState = getAccessTokenData;

const requestMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    let request = action[HTTP_REQUEST];

    // handel without request actions
    if (!request || typeof request !== "object") {
      return next(action);
    }

    // onError action
    const errorAction = request["onError"];
    if (!errorAction) {
      throw Error("Please supply onError method");
    }

    // onSuccess action
    const successAction = request["onSuccess"];
    if (!errorAction) {
      throw Error("Please supply onSuccess method");
    }

    // onSuccess action
    const progressAction = request["onProgress"];

    // request options
    const options = {
      method: request.method,
      url: request.route || "",
      data: request.payload,
      headers: request.headers
    };

    const respondWith = request.respondWith;

    // handel without authorized request actions
    configureClient.removeHeader(authHeader);
    if (request["authorized"] !== false) {
      let state = getState();
      let authToken = authTokenWithType(request, state);
      configureClient.setHeader(authHeader, authToken);
    }

    configureClient
      .request(options, request.fullURL, progress =>
        progressAction ? dispatch(progressAction(progress)) : {}
      )
      .then(response => {
        let responseData = response.data;

        if (!request.fullResponse) {
          responseData = HTTPClient.transformResult(responseData);
        }

        dispatch(successAction(responseData, respondWith));
      })
      .catch(errors => {
        let transformedError = HTTPClient.transformErrors(errors);
        dispatch(errorAction(transformedError, respondWith));
        if (transformedError.status === 401 && !request["disableStateClear"]) {
          dispatch({ type: RESET_STATE });
        }
      });
    return next(omit(action, HTTP_REQUEST));
  };
};

const authTokenWithType = (request, state) => {
  if (request["authTokenSelector"]) {
    authTokenPathInState = request["authTokenSelector"];
  }

  let accessToken = authTokenPathInState(state);

  return `${accessToken.tokenType || authTokenType} ${accessToken.token}`;
};

export default requestMiddleware;
