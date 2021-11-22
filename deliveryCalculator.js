const main = (() => {
  const prompt = require("prompt-sync")();
  const parcelWeight = parseInt(prompt("Please enter parcel weight in Kgs "));

  const deliveryCalculator = (weight) => {
    let result;
    switch (true) {
      case weight < 2.5:
        result = 3.5 * weight;
        break;
      case weight > 2.5 && weight < 5:
        result = 2.85 * weight;
        break;
      case weight > 5 && weight < 7:
        result = 2.45 * weight;
        break;
      case weight > 7:
        result = 3.25 * weight;
        break;
    }

    return `Total Delivery Cost: $${result}`;
  };

  console.log(deliveryCalculator(parcelWeight));
})();
