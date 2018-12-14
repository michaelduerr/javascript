/***********************
*
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);
job = 'Teacher';
console.log(job);
var $3Tax = 3;
var _$3Tax = 33;
*/

/************************************
* Variable mutation and type coercion
var firstName = 'John';
var age = 28;
var job, isMarried;
job = 'Teacher';
isMarried = false;
console.log(firstName + ' is a ' +age + ' year old ' +job + '. Is he married? ' + isMarried );
// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' +age + ' year old ' +job + '. Is he married? ' + isMarried );
var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' +lastName);
*/


/************************************
* Basic operators
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);
//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/


/************************************
* Operator precedence
var now = 2018;
var yearJohn = 1989;
var yearJane = 2002;
var fullAge = 18;
// Multiple Assignments
console.log(now - yearJohn);
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
console.log(now - yearJane);
var isFullAge = now - yearJane >= fullAge;
console.log(isFullAge);
// Grouping
var ageMark = 35;
var average = (ageMark + now - yearJohn) / 2;
console.log(average);
// Multiple Assignments
var x, y;
x = y = (3 + 5) + 4 - 6;
console.log(x, y);
// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/**************************************
* IF,ELSE statements with boolean logic
var firstName = 'John';
var age = 17;
if (age < 13 ) {
    console.log(firstName + ' is a boy');
} else if (age < 20 && age >= 13) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a jung man');
} else {
    console.log(firstName + ' is a man');
}
*/

/****++++++********************************
 * The Ternary Operator (alternative for if,else) and Switch Statement
var firstName = 'John';
var age = 22;
age >= 18 ? console.log(firstName + ' drinks beer') :
    console.log(firstName + ' drinks juice');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
/*
if(age >= 18) {
    var drink = 'beer';
}else {
    var drink = 'juice';
}
*/

/*
//Switch Statement
var job = 'pilot';
switch (job) {
    case 'teacher':
    case 'instructor':
    case 'professor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives UBER in Stockholm.');
        break;
    case 'diver':
        console.log(firstName + ' teaches diving in Australia.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
age = 25;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age <=20 && age >= 13:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age < 30:
        console.log(firstName + ' is a jung man');
        break;
    default:
        console.log(firstName + ' is a man');
}
*/


/*************************************************
* Truthy and Falsy values and equality operators
// falsy value: undefined, null, 0, '', NaN
// truthy values: NOT falsy values.
var height;
height = 23;
//height = '';
if(height || height === 0){
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
}
// Equality operators
if (height == '23'){
    console.log('The == operator does type coercion!');
}
*/

/*********************************************
* Functions
function calculateAge(year){
    return 2018 - year;
}
/*
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageJane, ageMike);
*/

/*
function yearUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
          console.log(firstName + ' retires in ' + retirement + ' years');  
    } else {
         console.log(firstName + ' is already retiered.');   
    }
}
yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'John');
*/

/*********************************************
* Function Statements and Expressions
//Function declaration
//Function whatDoYouDo(ob, firstName){}
// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to write code.';
        case 'driver':
            return firstName + ' is a driver in Stockholm.';
        case 'designer':
            return firstName + ' creates nice websites.';
        case 'writer':
            return firstName + ' writes novels.';
        default: return firstName + ' does something else.';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('retired', 'Mark'));
console.log(whatDoYouDo('designer', 'Jane'));
*/

/*********************************************
* Arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[0]);
console.log(names);
console.log(names.length);
// Mutate array data
names[1] = 'Ben';
console.log(names);
console.log(names.length);
names[names.length] = 'Mary';
console.log(names);
// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
console.log(john);
john.push('blue');
console.log(john);
john.unshift('Mr.');
console.log(john);
john.pop(); // remove last element
console.log(john);
john.shift(); // remove first element
console.log(john);
// Get position of element
console.log(john.indexOf(1990));
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer.';
console.log(isDesigner);
*/

/*********************************************
* Objects and properties
*/

/*
// Object literal
var peter = {
    firstname: 'Peter',
    lastName: 'Johnson',
    birthYear: 1995,
    family: ['Jessica', 'Michael', 'Ben', 'Eric'],
    job: 'cook',
    isMarried: false
};
var john = {
    firstname: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john, peter);
console.log(john.birthYear);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
// new Object syntax
var jane = new Object;
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
jane['isMarried'] = true;
console.log(jane);
*/

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
