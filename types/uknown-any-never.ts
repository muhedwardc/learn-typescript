let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Edward';

// userName should be string, `unknown` cannot make sure it is string
// userName = userInput; --> error

if (typeof userInput === 'string') {
    userName = userInput; // valid, because this always be a string
}

let userInputAny: any;
userName = userInputAny; // typescript will give up on any :D

// use `never` instead of `void` because function will never return, void expect function return "undefined"
function generateError(message: string, errorCode: number): never {
    throw { message, errorCode }
}

generateError('Error!!!', 500)