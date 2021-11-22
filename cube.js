const main = (() => {
  const prompt = require("prompt-sync")();
  const num = parseInt(prompt("Please enter a number "));

  const cube = (number) => {
    return number ** 3;
  };

  console.log(cube(num));
})();
