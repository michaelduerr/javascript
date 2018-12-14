var massMark, massJohn, heightJohn, heightMark;
massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

console.log('Mark\'s BMI is ' + bmiMark);
console.log('John\'s BMI is ' + bmiJohn);

if(bmiMark > bmiJohn) {
   console.log('Mark\'s BMI is greater than John\'s.');  
}
else {
      console.log('Marks\'s BMI is smaller than John\'s.');  
}

//var bmiGreater = bmiMark >= bmiJohn;
//console.log('Is Mark\'s BMI greater than John\'s? ' + bmiGreater);