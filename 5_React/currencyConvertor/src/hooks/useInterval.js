import { useState, useEffect } from "react";

function useInterval(n) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const expireTimerId = setInterval(() => {
      setCount(count + 1);
    }, n * 1000);

    return () => {
      clearInterval(expireTimerId);
    };
  }, [n, count]);

  return count;
}

export default useInterval;

/* 
== you can use this methdd too ==

const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
};

*/
