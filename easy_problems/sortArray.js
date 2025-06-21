// Ordina gli array seguendo la regola della funzione

var sortBy = function (arr, fn) {
  arr = arr.sort((a, b) => fn(a) - fn(b));

  return arr;
};
