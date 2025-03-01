//PRACTICE 1

//write a for loop that prints numbers 1-10 in terminal.  This approach allows for more control over the loop and is more concise than a while loop.

// Array of numbers 1-10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For loop to iterate through the 'numbers' array and log each number
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

//Write a while loop that prints numbers 1-10 in terminal.  This approach only works if the condition is true and requires less code than a for loop.
let number = 0;

// While loop that continues as long as 'number' is less than 10
while (number < 10) {
	number++;
	// Increment the 'number' variable by 1
	console.log(number);
}

//PRACTICE 2

//Write a for loop that has 5 characters from "Step Brothers".  Use an array to store the characters and print them to the terminal, numbered 1-5.

//Array of characters from "Step Brothers" movie
const stepBrothers = [
	"Brennan Huff",
	"Dale Doback",
	"Nancy Huff",
	"Robert Doback",
	"Alice",
];

//Loop through the array of characters to display each character
for (let i = 0; i < stepBrothers.length; i++) {
	//Display each character with a number
	console.log(`Character ${i + 1}:  ${stepBrothers[i]}`);
}

//PRACTICE 3

//Write an array of 3 player objects with the following properties:  name, name, kills, and deaths.  Use a loop to output each player's information, calculate and display the kill/death ratio for each player, and determine and display which player has the best K/D ratio

//Array of player objects
const players = [
	{ name: "Bandit", kills: 33, deaths: 5 },
	{ name: "Brandee", kills: 45, deaths: 40 },
	{ name: "Candice", kills: 27, deaths: 1 },
];

//Loop through the players array to display each player's information and calculate their K/D ratio
for (let i = 0; i < players.length; i++) {
	const player = players[i];

	//Calculate K/D ratio
	const kdr = player.kills / player.deaths;
	//Display player's information and K/D ratio
	console.log(`${player.name} has a K/D ratio of ${kdr}`);
}

//Variable to track the best K/D ratio
let bestKdr = 0;
let bestPlayer = " ";

//Loop again to find the player with the best K/D ratio
for (let i = 0; i < players.length; i++) {
	const player = players[i];

	//Calculate K/D ratio
	const kdr = player.kills / player.deaths;
	//Determine if the current player has the best K/D ratio
	if (kdr > bestKdr) {
		bestKdr = kdr;
		bestPlayer = player.name;
	}
}
//Display the player with the best K/D ratio
console.log(`${bestPlayer} has the best K/D ratio of ${bestKdr}`);
