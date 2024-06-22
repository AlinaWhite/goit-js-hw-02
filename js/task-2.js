function formatMessage(message, maxLength) {
    if (message.length > maxLength) {
        console.log(message.slice(0, maxLength) + "...");
    } else {
        console.log(message);

    }
}

formatMessage("Curabitur ligula sapien", 16);
formatMessage("Curabitur ligula sapien", 23);