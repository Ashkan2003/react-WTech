import { useState, useEffect } from "react";

// this is a reuseble custom-hook for storing data(like darkmode) in the localstorage

export function useLocalStorageState(initialState, key) {
  console.log(initialState,key)
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key); // get the value by its key from localStorage
    return storedValue ? JSON.parse(storedValue) : initialState;
    
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
