import axios from "axios";
import omit from "lodash/omit";

class HTTPClient {
  _baseUrl;
  _headers = {};

  static _defaultError = {
    title: "Something went wrong",
    status: 500,
    data: {}
  };

  constructor(config = { baseUrl: null, headers: {} }) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  setHeader(name, value) {
    this._headers = {
      ...this._headers,
      [name]: value
    };
  }

  removeHeader(name) {
    this._headers = omit(this._headers, name);
  }

  request(options, fullURL = false, progress) {
    options = {
      ...options,
      url: fullURL ? options.url : this._withBaseUrl(options.url),
      headers: this._withHeaders(options.headers),
      onUploadProgress: progressEvent => progress(progressEvent)
    };

    return axios.request(options);
  }

  static transformResult(result) {
    return result.data ? result.data : result;
  }

  static transformErrors(error) {
    const { response } = error;
    if (!response || !response.status) {
      return HTTPClient._defaultError;
    }

    switch (response.status) {
      case 400:
        return {
          status: response.status,
          title: "Bad Request",
          data: response.data
        };
      case 401:
        return {
          status: response.status,
          title: "Unauthorized",
          data: response.data
        };
      case 422:
        return {
          status: response.status,
          title: response.data.message,
          data: response.data.errors
        };
      default:
        return HTTPClient._defaultError;
    }
  }

  _withBaseUrl(url) {
    return `${this._baseUrl}/${url}`;
  }

  _withHeaders(headers = {}) {
    return {
      ...this._headers,
      ...headers
    };
  }
}

export default HTTPClient;
