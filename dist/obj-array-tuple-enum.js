"use strict";
var MAIN_COURSE = 1;
var SNACK = 2;
var Type;
(function (Type) {
    Type[Type["MAIN_COURSE"] = 0] = "MAIN_COURSE";
    Type[Type["SNACK"] = 1] = "SNACK";
})(Type || (Type = {}));
;
var burger = {
    name: 'Burger',
    price: 80000,
    ingredients: ['buns', 'cheese', 'burger meat', 'tomatoes', 'onions'],
    level: [1, 'hot'],
    type: Type.SNACK
};
var burgerIngredients = burger.ingredients.join(', ');
console.log(burgerIngredients);
//# sourceMappingURL=obj-array-tuple-enum.js.map