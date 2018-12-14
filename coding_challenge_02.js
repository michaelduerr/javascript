var averageJohn = (129 + 120 + 103) / 3;
var averageMark = (119 + 94 + 123) / 3;
var averageMary = (97 + 134 + 105) / 3;
console.log('John\'s team average: ' + averageJohn);
console.log('Mark\'s team average: ' + averageMark);
console.log('Mary\'s team average: ' + averageMary);


if (averageJohn > averageMark && averageJohn > averageMary) {
    console.log('John\'s team wins in average better than Mark\'s team with ' + averageJohn + ' points.');
} else if (averageMark > averageJohn && averageMark > averageMary) {
     console.log('Mark\'s team wins in average better than John\'s team with ' + averageMark + ' points.');
} else if (averageMary > averageJohn && averageMary > averageMark) {
         console.log('Mary\'s team wins in average better than John\'s team and Mark\'s team with ' + averageMary + ' points.');
}
else {
    console.log('There is a draw!');
}
/*
else if (averageMark === averageJohn === averageMary) {
     console.log('All teams win equal in average');
}
*/