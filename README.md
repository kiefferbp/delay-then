# delay-then
A better setTimeout.

# About
This module is similar to `wait-then` except that `delay-then` returns a `then` method to use in browsers that do not support Promises.

**For browsers that support Promises:**: `delay(x, args)` returns a Promise that resolves with the parameter `args` after `x` ms.

**For browsers that do not support Promises:** `delay(x, args)` returns a `then(callback)` methods that calls `callback` after `x` ms with `args` as a parameter.

# Usage
    window.Promise = "I am evil!!!";

    var delay = require('delay-then');

    // logs "Hello world!" to console after 200 ms
    delay(200).then(function () {
        console.log("Hello world!");
    });

    // logs "Hello world!" after 50 ms
    delay(50, "Hello world!").then(function (text) {
        console.log(text);
    });
