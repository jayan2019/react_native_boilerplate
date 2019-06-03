import { ClientStorage } from "../services";
import Config from "react-native-config";

export default new ClientStorage(Config.STORAGE_NAME || "ProMis-Storage");
