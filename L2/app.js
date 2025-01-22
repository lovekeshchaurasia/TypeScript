// Object , Array , Tuple , Enum
// <--------Object----------> 
// const person : {
//     firstName : string;
//     age : number;
//     xyz : {
//         address : string;
//     }
// } = {
//     firstName : "Tony Stark" ,
//     age : 21 ,
//     xyz : {
//         address : "Pune"
//     }
// };
// <---------Array---------->
// const person : {
//     firstName : string;
//     age : number;
//     skills : string[];
// } = {
//     firstName : "Tony Stark" ,
//     age : 21 ,
//     skills : ["React js , Node js"]
// };
// let favourite1 : string[];
// favourite1 = ["Hindi" , "English"]
// let favourite2 : any[]; // loose ts powerfull
// favourite2 = ["Hindi" , "English"]
// console.log(person);
// <-----------Tuple------------->
// const person : {
//     name : string;
//     age : number;
//     skills : string[];
//     product : [number , string]; // fixed array of two types 0-> number , 1-> string
// } = {
//     name : "John Doe" ,
//     age : 21 ,
//     skills : ["React js , Node js"] ,
//     product : [10 , "MacBook m2"]
// }
// console.log(person);
// <-------------Enum-------------->
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
var person = {
    name: "Eve",
    age: 21,
    skills: ["React , Node js"],
    product: [10, "Mackbook Air M2"],
    role: Role.READ_USER_ONLY
};
if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("Read User Only");
}
