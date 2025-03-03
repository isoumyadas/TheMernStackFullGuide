// moslty the custom hooks are in js extension.
// Best practice: use jsx that returns jsx and use js that return just js
// Their is standarized rule that whenever you create custom hooks always use =>  "use"

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => setData(data[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

// this is the way how we create custom hooks:
