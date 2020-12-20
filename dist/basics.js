"use strict";
function basicAdd(a, b, isSquareResult, pre) {
    var result = a + b;
    if (isSquareResult) {
        result *= result;
    }
    return !!pre ? pre + " " + result : '' + result;
}
var basicN1 = 5, basicN2 = 2;
var result = basicAdd(basicN1, basicN2, true, 'Result is:');
console.log(result);
