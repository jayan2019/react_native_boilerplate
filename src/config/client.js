import Config from "react-native-config";
import { HTTPClient } from "../services";

export default new HTTPClient({
  baseUrl: Config.API_URL,
  headers: {
    Accept: "text/json"
  }
});
