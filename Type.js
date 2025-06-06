// Different ways of writing javascript functions:
// way 1
function add(a,b){
    return a+b;
}
var result = add(2,3);
console.log(result)


// way2 
var a2 = function(a,b){
    return a+b;
}
var r2 = a2(4,5);
console.log(r2)

//way3
var a3 = (a,b) => {
    return a+b;
}
var r3 = a3(7,8);
console.log(r3)

//way4
var a4 = (a,b) => a+b;
r4 = a4(9,0);
console.log(r4)

//way5 
( function(a,b){
    return a+b;
})();


