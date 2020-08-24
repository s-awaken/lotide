const countLetters = function(string) {
  const result = {};
  string = string.split(" ").join("");
  for (const char of string) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};
module.exports = countLetters;
