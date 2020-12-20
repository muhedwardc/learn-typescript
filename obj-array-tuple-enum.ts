const MAIN_COURSE = 1;
const SNACK = 2;

enum Type { MAIN_COURSE, SNACK };

const burger: {
    name: string,
    price: number,
    ingredients: string[],
    level: [number, string],
    type: Type
} = {
    name: 'Burger',
    price: 80000,
    ingredients: ['buns', 'cheese', 'burger meat', 'tomatoes', 'onions'],
    level: [1, 'hot'],
    type: Type.SNACK
}

const burgerIngredients = burger.ingredients.join(', ');
console.log(burgerIngredients)