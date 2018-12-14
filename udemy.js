/**********************************************
// Objects and methods (Section 2, Lecture 26)
/**********************************************

/*
var john = {
	firstname: 'John',
	lastname: 'Smith',
	birthyear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily' ],
	job: 'teacher',
	isMarried: false,
	calcAge: function(birthyear) {
		return 2018 - birthyear;
	}
};

console.log(john.calcAge(1969));
console.log(john.calcAge(john.birthyear));
*/

/*
var john = {
	firstname: 'John',
	lastname: 'Smith',
	birthyear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily' ],
	job: 'teacher',
	isMarried: false,
	calcAge: function(birthyear) {
		return 2018 - this.birthyear;	//this means the current object
	}
};

console.log(john.calcAge());
john.age = john.calcAge();		//Calculate age and store it in the john object
*/

/*
var john = {
	firstname: 'John',
	lastname: 'Smith',
	birthyear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily' ],
	job: 'teacher',
	isMarried: false,
	calcAge: function(birthyear) {
		this.age = 2018 - this.birthyear;	//this means the current object
	}
};

john.calcAge();	
console.log(john);
*/

//**********************************************
// Loop and iterration (Section 2, Lecture 29)
//**********************************************

for (var i = 0; i < 10; i++) {
	console.log(i);
}
