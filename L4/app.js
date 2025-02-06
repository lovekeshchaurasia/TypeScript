console.log("Lets learn functions...");
function add(num1, num2) {
    return num1 + num2;
}
var ans = add(5, 5);
console.log(ans);
function greet(name) {
    console.log("Hi , ".concat(name));
}
var ans2 = greet("Shraddha");
console.log(ans2);
var combineFunction;
// combineFunction = 10              // invalid
// combineFunction = function(){};  // valid
combineFunction = add;
combineFunction = greet;
console.log(combineFunction(1, 2));
console.log(combineFunction("Shraddha"));
