"use strict";
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["male"] = "male";
    GenderEnum["female"] = "female";
})(GenderEnum || (GenderEnum = {}));
;
var person1;
person1 = {
    name: 'Edward',
    age: 22,
    gender: GenderEnum.male,
    greet: function (phrase) { return phrase; }
};
var PersonClass = (function () {
    function PersonClass(name, age, gender, greet, job) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.greet = greet;
        if (job) {
            this.job = job;
        }
    }
    PersonClass.prototype.greetPerson = function (prefix) {
        return prefix + " " + this.greet(this.name);
    };
    return PersonClass;
}());
var person1Class = new PersonClass('Edward', 22, GenderEnum.male, function (phrase) { return phrase; });
console.log(person1Class.greetPerson('Hello'));
var greetMe;
greetMe = function (prhase, name) {
    return prhase + " " + name;
};
//# sourceMappingURL=interface.js.map