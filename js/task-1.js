let makeTransaction = (quantity, pricePerDroid, customerCredits) => {
  const totalPrice = quantity * pricePerDroid;
  return totalPrice <= customerCredits
    ? `You ordered ${quantity} droids worth ${totalPrice} credits!`
    : 'Insufficient funds!';
};
console.log(makeTransaction(10, 500, 5000));
