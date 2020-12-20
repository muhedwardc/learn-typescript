"use strict";
function add(a, b, isSquareResult, pre) {
    var result = a + b;
    if (isSquareResult) {
        result *= result;
    }
    return !!pre ? pre + " " + result : '' + result;
}
var n1 = 5, n2 = 2;
var result = add(n1, n2, true, 'Result is:');
console.log(result);
