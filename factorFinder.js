const main = (() => {
  const prompt = require("prompt-sync")();
  const num1 = parseInt(prompt("Please enter a number "));
  const num2 = parseInt(prompt("Please enter a number "));
  const num3 = parseInt(prompt("Please enter a number "));

  const factorFinder = (num) => {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        console.log(i);
      }
    }
  };

  console.log(`Factors of ${num1}:`);
  factorFinder(num1);

  console.log(`Factors of ${num2}:`);
  factorFinder(num2);

  console.log(`Factors of ${num3}:`);
  factorFinder(num3);
})();
