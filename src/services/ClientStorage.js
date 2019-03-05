import { AsyncStorage } from "react-native";

class ClientStorage {
  _name = null;

  constructor(name) {
    this._name = name;
  }

  async getItem() {
    let item = await AsyncStorage.getItem(this._name);
    return this._parseJson(item);
  }

  async setItem(value) {
    AsyncStorage.setItem(this._name, this._stringify(value));
  }

  async removeItem() {
    AsyncStorage.removeItem(this._name);
  }

  _stringify(value) {
    try {
      return JSON.stringify(value);
    } catch (e) {
      return "";
    }
  }

  _parseJson(value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }
}

export default ClientStorage;
