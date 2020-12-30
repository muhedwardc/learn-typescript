"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var numbers = [1, 2, 3, 4, 5];
var nextNumbers = [6, 7, 8];
numbers.push.apply(numbers, nextNumbers);
var person = {
    name: 'Ed',
    age: 22,
};
var copiedPerson = __assign({}, person);
//# sourceMappingURL=spread.js.map