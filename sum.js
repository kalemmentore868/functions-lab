const main = (() => {
  const prompt = require("prompt-sync")();
  const num1 = parseInt(prompt("Please enter a number "));
  const num2 = parseInt(prompt("Please enter a number "));

  const sum = (firstNum, secondNum) => {
    return firstNum + secondNum;
  };

  console.log(sum(num1, num2));
})();
