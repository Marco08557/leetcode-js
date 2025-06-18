// Funzione che verifica se un valore passato inizialmente è uguale o diverso a un altro valore
// Utilizzata per testare condizioni di uguaglianza con i metodi `toBe` e `notToBe`
// Se la condizione non è rispettata, lancia un errore con messaggio specifico

expect = function (val) {
  let valore = val;
  return {
    toBe: function (val2) {
      if (valore === val2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe: function (val2) {
      if (valore !== val2) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
