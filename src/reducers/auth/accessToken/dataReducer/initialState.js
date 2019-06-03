import Config from "react-native-config";

const initialState = {
  token: null,
  refreshToken: null,
  tokenType: null,
  expiresIn: null,
  formData: {
    username: null,
    password: null,
    client_id: Config.AUTH_CLIENT_ID,
    client_secret: Config.AUTH_CLIENT_SECRET,
    grant_type: Config.AUTH_RESPONSE_TYPE
  }
};

export default initialState;
