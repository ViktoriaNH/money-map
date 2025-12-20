export const countTotalAmountWallets = (wallets) => {
  let totalAmount = 0;

  for (let i = 0; i < wallets.length; i++) {
    const amountFromUser = wallets[i].amount || "0";
    const amountWithNumbers = amountFromUser.replace(/\D/g, "");

    totalAmount += Number(amountWithNumbers);
  }

  return totalAmount;
};
