"use strict";
var User = (function () {
    function User(f, l) {
        this.firstName = f;
        this.lastName = l;
    }
    User.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var userEd = new User('Edward', 'Chakim');
console.log(userEd.fullName());
var userEdCopy = { fullName: userEd.fullName };
var userEdCopyFull = { firstName: 'Ed', lastName: 'ward', fullName: userEd.fullName };
console.log(userEdCopyFull.fullName());
//# sourceMappingURL=class.js.map