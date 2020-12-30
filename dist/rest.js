"use strict";
var addNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (res, val) { return res + val; }, 0);
};
var addedNumbers = addNumbers(1, 2, 3, 4, 5, 6, 7, 8);
console.log(addedNumbers);
//# sourceMappingURL=rest.js.map