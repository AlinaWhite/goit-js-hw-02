function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = (quantity * pricePerDroid);
    if (totalPrice > customerCredits) {
        return 'Insufficient funds!';
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
    return;
}
console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(10, 5000, 8000));