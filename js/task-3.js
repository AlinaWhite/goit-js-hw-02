function checkForSpam(message) {
    if ( message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale"))
        {   
            console.log(true);
             } else {
                console.log(false);
             }
}

checkForSpam("Latest technology news");
checkForSpam("Get best sale offers now!");