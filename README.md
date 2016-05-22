# delay-then
A better setTimeout.

# About
In browsers that support Promises, `delay(x)` returns a Promise that resolves after `x` ms. In other browsers (looking at you IE!), `delay(x, args)` returns `then(callback)` that calls `callback` after x ms with `args` as a parameter.

# Usage
    var delay = require('delay-then');

    // logs "Hello world!" to console after 200 ms
    delay(200).then(function () {
        console.log("Hello world!");
    });

    // logs "Hello world!" after 50 ms
    delay(50, "Hello world!").then(function (text) {
        console.log(text);
    });
