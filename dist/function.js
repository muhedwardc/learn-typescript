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
// function addAndThen(a: number, b: number, cb: Function) {
//     const result = a + b;
//     cb(result);
// }
function addAndThen(a, b, cb) {
    var result = a + b;
    cb(result);
}
addAndThen(11, 2, function (res) {
    console.log(res);
});
