function checkForSpam(message) {
    return message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
    
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best sale offers now!"));