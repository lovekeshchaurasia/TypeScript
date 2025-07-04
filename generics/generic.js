// generics in Typescript
// generic functions
// generic interfaces
// generic classes
console.log("Loading the generics operations");
// functions 
function abcd(a) {
    console.log(a);
}
abcd("hello");
abcd(100);
function second(a, b, c) {
    console.log("First value = " + a + " , Second value = " + b + " , Third Value = " + c);
}
second("hello", "world", 90);
second(200, "brook", 95);
function inter(obj) {
    console.log("Printing the obj ->");
    console.log(obj);
}
inter({ name: "Stark", age: 25, key: "Builder" });
// classes
var BottleMaker = /** @class */ (function () {
    function BottleMaker(key) {
        this.key = key;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Tony Stark");
console.log(b1);
