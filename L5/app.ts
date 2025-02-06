let userInput : unknown;
let userName : string;
userInput = 10;
userName = "user";

// userName = userInput;      //we cannot assign this (for removing error we can use ${any})
userInput = userName //       // we can assign this 
if(typeof userInput === "string") {
    userName = userInput;
}

// Never return type 
function generateError(message : string , code : number) : never{
    throw{message : message , statuscode : code}
}
const res = generateError("Internal server error" , 500);
console.log(res);
