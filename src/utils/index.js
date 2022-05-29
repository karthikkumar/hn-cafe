const LocalStorageKey = {
  LastSessionLastVisited: "last_session_last_visited",
  CurrentSessionLastVisited: "current_session_last_visited",
  ReadList: "read-list",
};

const getLocalStorage = (key) => {
  const item = window.localStorage.getItem(key);
  if (item?.length) {
    return JSON.parse(item);
  }
};

const setLocalStorage = (key, value) => {
  let valueToStore;
  if (value instanceof Function) {
    const storedValue = getLocalStorage(key);
    valueToStore = value(storedValue);
  } else {
    valueToStore = value;
  }

  if (typeof window !== "undefined" && valueToStore) {
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  }
};

export { LocalStorageKey, getLocalStorage, setLocalStorage };
