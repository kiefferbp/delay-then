(function () {
    "use strict";

    var promiseSupport = (typeof "Promise" !== undefined && Promise.toString().indexOf("[native code]") !== -1);

    module.exports.wait = function (milliseconds, args) {
        if (promiseSupport) {
            // just return a promise instead of creating a "then" method
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(args);
                }, milliseconds);
            });
        }

        return {
            then: function (callback) {
                setTimeout(function () {
                    callback(args);
                }, milliseconds);
            }
        };
    };
}());
