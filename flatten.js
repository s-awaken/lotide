const flatten = function(array) {
  return array.reduce((acc, x) => acc.concat(x), []);
};

module.exports = flatten;
