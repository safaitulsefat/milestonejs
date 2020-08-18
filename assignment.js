//feet to mile
function feetToMile(a) {
    return a * 0.000189394;
}
var mile = feetToMile(20);
console.log(mile.toFixed(6));

//wood calculator
function woodCalculator(chair,table,sleep) {
    var totalChair = 1 * chair;
    var totalTable = 3 * table;
    var totalSleep = 5 * sleep;
    var total = totalChair + totalTable + totalSleep;
    return total;
}
var x = woodCalculator(14,14,5);

console.log(x);

//brick calculator
function brickCalculator(floor) {
    if (floor<=10) {
        var  ten = floor * 15;
        var brick = x * 1000;
        return brick;
    }
    
   
    else if (floor<=20) {
        var ten = 10 * 15;
        var value = floor - 10;
        var twenty = value * 12;
        var total = ten + twenty;
        var brick = total * 1000;
        return brick;
    }
    else if(floor>20){
        var ten = 10 * 15;
        var twenty = 10 * 12;
        var value = floor - 20;
        var twentyup = value * 10;
        var total = ten + twenty + twentyup;
        var brick = total * 1000;
        return brick;
    }
};
var u = brickCalculator(15);
console.log(u);

//tiny friend


function tinyFriend(arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }

    return shortest;
}

var output = tinyFriend(["rahim", 'siam', "sad", 'karim']);
console.log(output); 