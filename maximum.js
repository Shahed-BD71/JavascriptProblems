var businessman = 450;
var minister = 650;
var Amla = 750;

// way one-shortcut

var max = Math.max(businessman, minister, Amla);
console.log(max);

// way two.

if (businessman > minister) {
    if(businessman > Amla){
    console.log("Businessman is Bigger");
}
else{
    console.log("Amla is Bigger");
    }
}
else{
    if(minister > Amla){
    console.log("Minister is Bigger");
    }
    else{
    console.log("Amla is Bigger");
    }
}