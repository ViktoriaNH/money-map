export const countTotalAmountWallets = (wallets) => {
    let totalAmount = 0;

    for (let i = 0; i < wallets.length; i++) {
        totalAmount += Number(wallets[i].amount || 0)
    }

    return totalAmount;
}