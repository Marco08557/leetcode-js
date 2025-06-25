var isPalindrome = function (x) {
  let string = x.toString();
  let stringReversed = string.split("").reverse().join("");
  if (string == stringReversed) {
    return true;
  } else {
    return false;
  }
};
