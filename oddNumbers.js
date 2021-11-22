const main = (() => {
  const prompt = require("prompt-sync")();
  let startingNum = parseInt(prompt("Please enter a starting number "));
  const endingNum = parseInt(prompt("Please enter an ending number "));

  const isOdd = (number) => {
    if (number === 0) {
      return 0;
    } else {
      return number % 2 === 1 ? 1 : 2;
    }
  };

  const allOddNumbers = (start, end) => {
    while (start <= end) {
      if (isOdd(start) === 1) {
        console.log(start);
      } else {
        start += 1;
        continue;
      }
      start += 2;
    }
  };

  console.log(allOddNumbers(startingNum, endingNum));
})();
