console.log("Lets learn functions...");


function add(num1 : number , num2 : number) : number {
    return num1 + num2;
}
const ans = add(5,5);
console.log(ans);
function greet(name : string) : void {
    console.log(`Hi , ${name}`);
}
const ans2 = greet("Shraddha")
console.log(ans2);

let combineFunction : Function;
// combineFunction = 10              // invalid
// combineFunction = function(){};  // valid
combineFunction = add;
combineFunction = greet;
console.log(combineFunction(1,2));
console.log(combineFunction("Shraddha"));

