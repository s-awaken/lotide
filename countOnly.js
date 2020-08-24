const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};
module.exports = countOnly;