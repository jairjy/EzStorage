/**
 * Javascript Storage tool to use Local and Session Storage on objects and other non-string data.
 */
export default class EzStorage {
  /**
   * Looks for the storage value on your localStorage, and if it finds it, it returns it, otherwhise it returns NULL.
   * @param {String} storage The name of the storage in localStorage that will be loaded.
   * @param {String} oldStorage (Optional) The name of the storage in localStorage that will be deleted.
   */

  static localLoad(storage: string, oldStorage: string = ''): object | null {
    if (oldStorage !== '' && localStorage.getItem(oldStorage)) localStorage.removeItem(oldStorage);
    const parsedData: string | null = localStorage.getItem(storage);
    return parsedData ? JSON.parse(parsedData) : null;
  }

  /**
   * Looks for the storage value on your sessionStorage, and if it finds it, it returns it, otherwhise it returns NULL.
   * @param {String} storage The name of the storage in sessionStorage that will be loaded.
   * @param {String} oldStorage (Optional) The name of the storage in sessionStorage that will be deleted.
   */
  static sessionLoad(storage: string, oldStorage: string = ''): object | null {
    if (oldStorage !== null && sessionStorage.getItem(oldStorage)) sessionStorage.removeItem(oldStorage);
    const parsedData: string | null = sessionStorage.getItem(storage);
    return parsedData ? JSON.parse(parsedData) : null;
  }

  /**
   * Checks if localStorage is available at the moment, and if does, saves the data into the selected storage.
   * @param {String} storage the name of the storage.
   * @param {Object} data the object that will be saved in the storage.
   */
  static localSave(storage: string, data: object): boolean {
    if (typeof (EzStorage) !== 'undefined') {
      localStorage.setItem(storage, JSON.stringify(data));
      return true;
    }
    console.log('ERROR: No web storage support. Using a temporal storage instead');
    return false;
  }

  /**
   * Checks if sessionStorage is available at the moment, and if does, saves the data into the selected storage.
   * @param {String} storage the name of the storage.
   * @param {Object} data the object that will be saved in the storage.
   */
  static sessionSave(storage: string, data: object): boolean {
    if (typeof (EzStorage) !== 'undefined') {
      sessionStorage.setItem(storage, JSON.stringify(data));
      return true;
    }
    console.log('ERROR: No web storage support. Using a temporal storage instead');
    return false;
  }
}
