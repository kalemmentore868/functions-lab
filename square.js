const main = (() => {
  const prompt = require("prompt-sync")();
  const num = parseInt(prompt("Please enter a number "));

  const square = (number) => {
    return number ** 2;
  };

  console.log(square(num));
})();
