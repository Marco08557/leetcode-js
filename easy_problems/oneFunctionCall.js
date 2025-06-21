//Effettua la funzione solo nel primo argomento

var once = function (fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      return (result = fn(...args));
    } else {
      return undefined;
    }
  };
};
