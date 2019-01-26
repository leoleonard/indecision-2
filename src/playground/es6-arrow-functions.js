// const square = function(x) {
//     return x * x;
// }

function square(x) {
    return x * x;
}

const squareArrow = (x) => x * x;

console.log(square(5));
console.log(squareArrow(5));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Tomek Mead'));


 const user = {
     name: 'Tomek',
     cities: ['Melbourne', 'Sydney', 'Auckland'],
     printPlacesLived() {
        return this.cities.map((city) => 
        this.name + ' has lives in ' + city);
     }
 }
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 10, 100],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) =>
        this.multiplyBy * number);
    }
}
console.log(multiplier.multiply());