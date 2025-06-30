var reverseWords = function (s) {
  let words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  let string = words.join(" ");
  return string;
};
