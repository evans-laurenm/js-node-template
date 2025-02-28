const fullName = "Lauren Evans";
const courseName = " Web Development I";
const expectedGrade = "92 %";

const student =
	fullName +
	" is taking" +
	courseName +
	" and expects to earn " +
	expectedGrade +
	".";
console.log(student);

const student2 = `${fullName} is taking ${courseName} and expects to earn ${expectedGrade}.`;
console.log(student2);
