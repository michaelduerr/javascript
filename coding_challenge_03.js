
function calculateTip(bill) {
    
    var percentag ;
    if (bill < 50) {
        percentage = .20;
    } else if (bill >= 50 || bill <= 200) {
        percentage = .15;
    } else if (bill > 200) {
        percentage = .10;
    }

    return percentage * bill;
}

var bills = [124, 48, 256];
var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];

var finalValues = [bills[0] + tips[0], 
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);                                                 