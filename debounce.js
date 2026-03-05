var debounce = function(fn, t) {
    let timer = null;

    return function(...args) {
        clearTimeout(timer);  // cancel previous call

        timer = setTimeout(() => {
            fn(...args);      // execute after t ms
        }, t);
    };
};
