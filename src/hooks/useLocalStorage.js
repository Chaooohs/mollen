import { useState, useEffect } from "react";

export const useLocalStorage = (initialValue, key) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };

  const [value, setValue] = useState(getValue);
  const res = value.reduce((o, i) => {
    if (!o.find(v => v.id === i.id)) {
      o.push(i);
    }
    return o;
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(res));
  }, [value]);

  return [res, setValue];
};
