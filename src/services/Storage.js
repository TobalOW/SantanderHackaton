import { AsyncStorage } from 'react-native';

class LocalStorage {
  async setItem(objectName, object) {
    try {
      return await AsyncStorage.setItem(`@localStorage:${objectName}`, JSON.stringify(object));
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getItem(objectName) {
    try {
      return JSON.parse(await AsyncStorage.getItem(`@localStorage:${objectName}`));
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async removeItem(objectName) {
    try {
      return AsyncStorage.removeItem(`@localStorage:${objectName}`);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export const storageServices = new LocalStorage();
