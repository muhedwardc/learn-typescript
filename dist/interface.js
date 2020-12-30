"use strict";
var person1;
person1 = {
    name: 'Edward',
    age: 22,
    greet: function (phrase) { return phrase; }
};
var PersonClass = (function () {
    function PersonClass(name, age, greet) {
        this.name = name;
        this.age = age;
        this.greet = greet;
    }
    PersonClass.prototype.greetPerson = function (prefix) {
        return prefix + " " + this.greet(this.name);
    };
    return PersonClass;
}());
var person1Class = new PersonClass('Edward', 22, function (phrase) { return phrase; });
console.log(person1Class.greetPerson('Hello'));
//# sourceMappingURL=interface.js.map