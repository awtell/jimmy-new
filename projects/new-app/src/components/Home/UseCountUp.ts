import { useState, useEffect } from 'react';

const useCountUp = (endValue: number, duration: number) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 10); // Increment based on duration

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setValue(Math.ceil(start)); // Ensure integer value
    }, 10);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return value;
};

export default useCountUp;
