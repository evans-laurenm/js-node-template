const student1 = {
	name: "Sarah",
	course: "JavaScript",
	grade: 95,
};
const student2 = {
	name: "John",
	course: "Python",
	grade: 88,
};
const student3 = {
	name: "Alice",
	course: "C++",
	grade: 92,
};

function displayStudentInfo(student) {
	return `${student.name} is taking ${student.course} and expects to earn ${student.grade}%`;
}

console.log(displayStudentInfo(student1));
console.log(displayStudentInfo(student2));
console.log(displayStudentInfo(student3));

function add2Nums(x, y) {
	return x + y;
}
const sum = add2Nums(200, 300);
console.log(sum);
