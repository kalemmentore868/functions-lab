const main = (() => {
  const prompt = require("prompt-sync")();
  const radius = parseInt(prompt("Please enter circle radius "));

  const areaCirlce = (rad) => {
    const PI = 22 / 7;
    const area = PI * rad ** 2;
    return Number.parseFloat(area).toFixed(2);
  };

  console.log(areaCirlce(radius));
})();
