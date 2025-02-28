//Test 1:

function multiply(a, b) {
	return a * b;
}
console.log(multiply(10, 2));

//Test 2:
const student5 = {
	first: John,
	last: Doe,
};
function getFullName(student5) {
	return `${student.last} , ${student.first}`;
}

console.log(getFullName(student3));

//Test 3:

const greeting = "Hello";
const reciever = "World";
function greet(greeting, reciever) {
	return `${greeting} , ${reciever}`;
}
console.log(greet(greeting, reciever));

//Test 4:

const cart = {
	price: 100,
	tax: 0.0,
};
function getTotal(cart) {
	return cart.price + cart.price * cart.tax;
}

console.log(getTotal(cart));

//Test 5:

const NameInfo = {
	firstName: John,
	lastName: Doe,
};
function FullNameInfo(NameInfo) {
	return `${NameInfo.firstName} , ${NameInfo.lastName}`;
}

console.log(FullNameInfo(NameInfo));

//Test 6:

const character = {
	name: "Hero",
	weapon: "Sword",
	level: 10,
};
function displayCharacterInfo(character) {
	return `${level} ${name} is weilding a ${weapon}`;
}

console.log(displayCharacterInfo(character));
