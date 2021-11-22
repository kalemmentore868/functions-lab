const main = (() => {
  const prompt = require("prompt-sync")();
  const num = parseInt(prompt("Please enter a number "));

  const isEven = (number) => {
    return num % 2 == 0 ? true : false;
  };

  console.log(isEven(num));
})();
