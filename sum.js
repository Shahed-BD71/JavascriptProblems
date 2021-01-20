var numbers = [55, 65, 44, 63, 87, 96, 77, 88, 25, 32];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
}
console.log("total: ", sum)

// by function

function totalSum(numbers) {
    var sum = 0;
    for (var i=0; i<numbers.length; i++) { 
        var element = numbers[i];
        sum = sum + element;
    }
        return sum;
}
var result = totalSum(numbers);
console.log(result);