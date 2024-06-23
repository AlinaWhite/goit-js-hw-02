function formatMessage(message, maxLength) {
    if (message.length > maxLength) {
        return message.slice(0, maxLength) + "...";
    } else {
        return message;

    }
}

console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));