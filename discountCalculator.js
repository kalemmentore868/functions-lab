const main = (() => {
  const prompt = require("prompt-sync")();

  const memberNumber = parseInt(prompt("Please enter member number "));
  const userDiscount = parseInt(prompt("Please enter discount % "));
  const billAmount = parseInt(prompt("Please enter bill amount "));
  const name = prompt("Please enter name ");

  const totalBillPlusVat = (totalAmt) => {
    const VAT = 0.15;
    return totalAmt + totalAmt * VAT;
  };

  const billAfterDiscount = (totalAmt, discount) => {
    const billPlusVat = totalBillPlusVat(totalAmt);
    return billPlusVat - (billPlusVat * discount) / 100;
  };

  console.log(`
    Memeber name: ${name}
    Member Number: ${memberNumber}
    total: ${billAmount}
    Total + VAT: ${totalBillPlusVat(billAmount)}
    Total after discount: ${billAfterDiscount(billAmount, userDiscount)}`);
})();
