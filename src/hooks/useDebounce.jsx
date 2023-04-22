import { useEffect, useState } from "react";

function useDebounce(value, delay, minLen) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId =
      value.length > minLen &&
      setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, minLen, delay]);

  return value.length > minLen ? debouncedValue : null;
}

export default useDebounce;
