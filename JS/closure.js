const Counter = (function () {
  let num = 0;

  function Counter() {}

  Counter.prototype.increase = function () {
    return ++num;
  };
  Counter.prototype.decrease = function () {
    return --num;
  };

  return Counter;
})();

const counter = new Counter();

console.log(counter.increase());
console.log(counter.decrease());
