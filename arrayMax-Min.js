var marks = [55, 65, 44, 63, 87, 96, 77, 88, 25, 32];
var max = marks[0];
for(var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element > max){
        max = element;
    }

}
console.log("Height Value is: ", max);


var marks = [49, 78, 87, 45,88, 55, 34, 90, 31]
var min = marks[0];
for (var i = 0; i<marks.length; i++) {
    var element = marks[i];
    if (element<min){
        min = element;
    }
}
console.log("Lowest value is: ", min);