Set.prototype.intersection = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};

Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

Set.prototype.isSuperset = function (subset) {
  const supersetArr = [...this];
  return [...subset].every((v) => supersetArr.includes(v));
};

const A = new Set([1, 2, 3, 4]);
const B = new Set([2, 4]);

console.log(A.intersection(B));
console.log(A.union(B));
console.log(A.difference(B));
console.log(A.isSuperset(B));
