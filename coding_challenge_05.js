//**********************************************
// Objects and methods (Section 2, Lecture 30)
//**********************************************

var john = {
	name: 'John',
	bill: [124, 48, 268, 180, 42],
	tip:[],
	averageTip:[],
	final:[],
	calctip: function() {	
		for (var i = 0; i < this.bill.length; i++){
			if (this.bill[i] < 50){
				this.tip[i] = this.bill[i] * 0.2; 
				this.final[i] = this.bill[i] + this.tip[i];
			}
			else if (this.bill[i] <= 50 || this.bill[i] < 200) {
                this.tip[i] = this.bill[i] * 0.15;
                this.final[i] = this.bill[i] + this.tip[i];
			}
			else if (this.bill[i] > 200){
				this.tip[i] = this.bill[i] * 0.1;
				this.final[i] = this.bill[i] + this.tip[i];
			}
		} 
	} 
};
console.log(john.calctip());
console.log(john);

// Mark
var mark = {
	name: 'Mark',
	bill: [77, 375, 110, 45],
	tip:[],
	averageTip:[],
	final:[],
	calctip: function() {	
		for (var i = 0; i < this.bill.length; i++){
			if (this.bill[i] < 100){
				this.tip[i] = this.bill[i] * 0.2; 
				this.final[i] = this.bill[i] + this.tip[i];
			}
			else if (this.bill[i] >= 100 || this.bill[i] < 300) {
                this.tip[i] = this.bill[i] * 0.1;
                this.final[i] = this.bill[i] + this.tip[i];
			}
			else if (this.bill[i] > 300){
				this.tip[i] = this.bill[i] * 0.25;
				this.final[i] = this.bill[i] + this.tip[i];
			}
		} 
	} 	
};

console.log(mark.calctip());
console.log(mark);

function calcAverage(tip, name) {
	var sumTip = 0;
	var averageTip = 0;
	for (var i = 0; i < tip.length; i++){
	sumTip = sumTip + tip[i]; 
	}	
	averageTip = sumTip / tip.length;
	if (name == "Mark"){
		mark.averageTip = averageTip;
		} else if (name == "John"){
        john.averageTip = averageTip;
		}
	return averageTip;	
}

var markAverage = calcAverage(mark.tip, 'Mark');
var johnAverage = calcAverage(john.tip, 'John');

if (markAverage > johnAverage) {
  console.log('The average tip of Mark is ' + markAverage + '$, which is higher than Johns' + johnAverage + '$.');
} else {
  console.log('The average tip of John is ' + johnAverage + '$, which is higher than Marks' + markAverage + '$.');	
}
