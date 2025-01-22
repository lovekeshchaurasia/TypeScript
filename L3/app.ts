// UNION 
// LITERAL TYPES
// TYPE ALIAS / SURTOM TYPES


//<----------UNION------------> |->pipe in Typescript
// function combine(num1 : number | string | boolean , num2 : number | string) {
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number") {
//         result = num1 + num2;
//     }else {
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }

//<---------LITERALS  TYPES------------->
// function combine(num1 : number | string | boolean , num2 : number | string , conversionType : "as-number" | "as-string") {
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
//         result = +num1 + +num2;
//     }else {
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// } 
// const sum1 = combine("10","20","as-number");
// // const sum2 = combine(10 , 50 , "as-number");
// const combineName = combine("Jack" , "Mern" , "as-string");
// console.log(sum1);
// console.log(combineName);


// TYPE ALIAS / CUSTOM TYPES
type Combinable = number | string;
type conversionType = "as-number" | "as-string";

function combine(num1 : Combinable , num2 : Combinable , conversionType : conversionType) {
    let result;
    if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }else {
        result = num1.toString() + num2.toString();
    }
    return result;
} 
const sum1 = combine("10","20","as-number");
// const sum2 = combine(10 , 50 , "as-number");
const combineName = combine("Jack" , "Mern" , "as-string");
console.log(sum1);
console.log(combineName);

type User = {
    name : string;
    age : number;
    skills : string[];
}
const user : User = {
    name : "Jenny",
    age : 21 ,
    skills : ["React js , Node js"]
}
function greet(user : User) {
    console.log(`Hi , I am ${user.name}`);
}
greet(user);