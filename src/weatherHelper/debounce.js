const debounce = (func, wait = 500) => {
  let timeout;

  return (...args) => {
    const later = () => {
      timeout = null;

      func(...args);
    };
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
};

export default debounce;
