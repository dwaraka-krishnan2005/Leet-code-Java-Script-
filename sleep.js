// Function to sleep for given milliseconds
function sleep(millis) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, millis);
    });
}

// Example usage
let start = Date.now();

sleep(100).then(function() {
    console.log(Date.now() - start); // around 100
});
