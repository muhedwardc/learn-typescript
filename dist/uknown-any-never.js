"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Edward';
if (typeof userInput === 'string') {
    userName = userInput;
}
var userInputAny;
userName = userInputAny;
function generateError(message, errorCode) {
    throw { message: message, errorCode: errorCode };
}
generateError('Error!!!', 500);
//# sourceMappingURL=uknown-any-never.js.map