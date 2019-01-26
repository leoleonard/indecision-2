var nameVar = 'Tomek';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Kasia';
nameLet = 'Danuta';
console.log('nameLet', nameLet);

const nameConst = 'Franlik';
console.log('nameConst', nameConst);

// block scoping

var fullName = 'Ander Mead';

if (fullName) {
    var firstName = fullName.split(' ')
}