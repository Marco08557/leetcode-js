// Crea un contatore che parte da n e ad ogni chiamata restituisce il valore incrementato di 1
var createCounter = function (n) {
  let valore = n;
  return function () {
    let valoreSalvato = valore;
    valore++;
    return valoreSalvato;
  };
};
