"use strict";
function fnAdd(a, b) {
    return a + b;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(fnAdd(1, 2));
var combineVal;
combineVal = fnAdd;
printResult(combineVal(3, 4));
function addAndThen(a, b, cb) {
    var result = a + b;
    cb(result);
}
addAndThen(11, 2, function (res) {
    console.log(res);
});
var powerNumber = function (a, power) {
    if (power === void 0) { power = 2; }
    return Math.pow(a, power);
};
console.log(powerNumber(2));
//# sourceMappingURL=function.js.map