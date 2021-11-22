const main = (() => {
  const prompt = require("prompt-sync")();
  const firstNum = parseInt(prompt("Please enter a number "));
  const secondNum = parseInt(prompt("Please enter another number "));
  const integerCode = parseInt(prompt("Please enter a number from 1-4 "));

  const computeNum = (num1, num2, intCode) => {
    let result;
    switch (intCode) {
      case 1:
        result = num1 + num2;
        break;
      case 2:
        result = num1 - num2;
        break;
      case 3:
        result = num1 * num2;
        break;
      case 4:
        if (num2 == 0) {
          return console.log("Second number can't be 0");
        } else {
          result = num1 / num2;
        }
        break;

      default:
        return console.log("Integer code must be 1, 2, 3 or 4");
        break;
    }

    return result;
  };

  console.log(computeNum(firstNum, secondNum, integerCode));
})();
