const main = (() => {
  const prompt = require("prompt-sync")();

  const isOdd = (number) => {
    if (number === 0) {
      return 0;
    } else {
      return number % 2 === 1 ? true : false;
    }
  };

  const averageOddNumbers = () => {
    let numbersNeeded = 6;
    let sumOdd = 0;
    let oddCount = 0;

    while (numbersNeeded > 0) {
      const num = parseInt(prompt("Please enter a number "));
      if (isOdd(num)) {
        sumOdd += num;
        oddCount++;
      }

      numbersNeeded--;
    }

    return sumOdd / oddCount;
  };

  console.log(averageOddNumbers());
})();
