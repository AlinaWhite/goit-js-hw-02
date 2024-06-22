function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = (quantity * pricePerDroid);
    if (totalPrice > customerCredits) {
        console.log('Insufficient funds!');
    } else {
        console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
    }
}

makeTransaction(5, 3000, 23000);
makeTransaction(10, 5000, 8000);