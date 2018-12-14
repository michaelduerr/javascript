//**********************************************
// Objects and methods (Section 2, Lecture 27)
//**********************************************

var john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBmi: function(mass, height) {
		return this.bmi = this.mass / (2 * this.height);
	}
};

var mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBmi: function(mass, height) {
		return this.bmi = this.mass / (2 * this.height);
	}
};

/*
var bmiJohn = john.calcBmi();
var bmiMark = mark.calcBmi();

if (bmiJohn > bmiMark) {
	console.log(john.fullName + ' has a higher BMI of ' + bmiJohn);
}
else if (bmiMark > bmiJohn){
    console.log(mark.fullName + 'has a higher BMI of' + bmiMark);
} else {
	console.log('They have the same BMI.');
}
*/

console.log(john, mark);

if (john.calcBmi() > mark.calcBmi()) {
	console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
}
else if (mark.bmi > jon.bmi){
    console.log(mark.fullName + 'has a higher BMI of' + mark.bmi);
} else {
	console.log('They have the same BMI.');
}