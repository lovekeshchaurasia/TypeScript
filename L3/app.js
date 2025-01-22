// UNION 
// LITERAL TYPES
// TYPE ALIAS / SURTOM TYPES
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine("10", "20", "as-number");
// const sum2 = combine(10 , 50 , "as-number");
var combineName = combine("Jack", "Mern", "as-string");
console.log(sum1);
console.log(combineName);
var user = {
    name: "Jenny",
    age: 21,
    skills: ["React js , Node js"]
};
function greet(user) {
    console.log("Hi , I am ".concat(user.name));
}
greet(user);
