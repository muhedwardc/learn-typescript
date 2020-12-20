"use strict";
function combine(a, b, resultType) {
    if (typeof a === 'number' && typeof b === 'number' || resultType === 'number') {
        return +a + +b;
    }
    return a.toString() + b.toString();
}
var n1 = 5, n2 = 2;
var resultNum = combine(1, 2, 'number');
var resultStr = combine('abc', 'def', 'string');
console.log({
    resultNum: resultNum,
    resultStr: resultStr
});
