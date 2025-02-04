const createCounter = () => {
  let count = 0;
  return {
    increment: function () {
      return count++;
    },
    getCount: function () {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
