function convertArgsToArray() {
  console.log(arguments);

  const arr = Array.prototype.slice.call(arguments);

  console.log(arr);

  return arr;
}

convertArgsToArray(1, 2, 3);

function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding.bind(thisArg));
console.log(getThisBinding.bind(thisArg)());
