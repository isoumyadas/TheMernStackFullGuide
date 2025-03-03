import { useState, useEffect } from "react";

function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let expireTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      // this helps not to update for all the keystrokes
      clearTimeout(expireTimer);
    };
  }, [value]);
  return debouncedValue;
}

export default useDebounce;
