// Javascript file
let a = 2;
function square (num) {
    var ans = num * num;
    return ans;
}
var square2 = square(a);
var square4 = square(4);
console.log(square2);
alert(square4);


// function substract (a, b){
//     return a - b;
// }
// console.log(substract(10, 5));
// console.log(substract(7, 150));


function sum (x, y){
    return x + y;
}
console.log(sum(3, 4));
console.log(sum(23, 83));


function division(s, h){
    return h / s;
}
console.log(division(8, 16));
console.log(division(4, 32));

function multiply(g, j){
    return g * j;
}
console.log(multiply(2, 45));
console.log(multiply(5, 6));


// getName();
// console.log(x);

var x =7;
function getName(){
    console.log("Namaste Javascript");
}
getName(); // თუ ამას გადავიტანთ ზემოთ მაგალითად მე-40 ხაზზე კონსოლში მაინც გამოჩნდება  "Namaste Javascript"
console.log(x);  // თუ ამნას გადავიტანთ 39 ხაზზე, მაშინ გვექნება  undefuned, 
//ამ ორივეს გადატანა ფუნქციის დეკლარილებამდე, რა შედეგსაც იძლევა ამას ეწოდება hosting