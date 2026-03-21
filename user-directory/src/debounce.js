export const debounce = (func, delay) => {
  let timeoutId;

  return (...args) => {
    // Clear previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
