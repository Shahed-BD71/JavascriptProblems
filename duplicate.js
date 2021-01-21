var number = [3, 6, 7, 5, 3, 8, 9, 5, 8, 2, 6, 10, 7];
var uniqueNumber = [];
for (let i = 0; i < number.length; i++) {
    var element = number[i];
    var index = uniqueNumber.indexOf(element);
    if(index == -1) {
        uniqueNumber.push(element);
    }
}
console.log(uniqueNumber);