var userInput;
var userName;
userInput = 10;
userName = "user";
// userName = userInput;      //we cannot assign this (for removing error we can use ${any})
userInput = userName; //       // we can assign this 
if (typeof userInput === "string") {
    userName = userInput;
}
// Never return type 
function generateError(message, code) {
    throw { message: message, statuscode: code };
}
var res = generateError("Internal server error", 500);
console.log(res);
