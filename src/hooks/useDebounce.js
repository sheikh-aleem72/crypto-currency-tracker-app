import React, { useEffect, useState } from "react";

export default function useDebounce(value, delay = 1000) {
  const [debounceSearch, setDebounceSearch] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearch(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceSearch;
}
