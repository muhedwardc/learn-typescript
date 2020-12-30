"use strict";
var Person = (function () {
    function Person(id, firsName, lastName) {
        this.id = id;
        this.firsName = firsName;
        this.lastName = lastName;
        this.hobbies = [];
    }
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    Person.prototype.getHobbiesStr = function () {
        return this.hobbies.join(', ');
    };
    Person.prototype.changeId = function (newId) {
    };
    return Person;
}());
var newPerson = new Person(0, 'Edward', 'Chakim');
newPerson.addHobby('running (i wish)');
newPerson.addHobby('eating');
newPerson.getHobbiesStr();
//# sourceMappingURL=class-mod-access.js.map