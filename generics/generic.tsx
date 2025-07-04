// generics in Typescript

// generic functions
// generic interfaces
// generic classes


console.log("Loading the generics operations");
// functions 

function abcd<T>(a: T) {
    console.log(a);  
}
abcd<string>("hello");
abcd<number>(100)


function second<T>(a: T , b: string , c: number) {
    console.log("First value = " + a + " , Second value = " + b + " , Third Value = " + c);
}
second<string>("hello" , "world" , 90)
second<number>(200,  "brook" , 95)

// interfaces

interface Halua<T> {
    name: string ,
    age: number ,
    key: T;
}

function inter(obj: Halua<string>) {
    console.log("Printing the obj ->");
    console.log(obj);   
}

inter({name: "Stark" , age: 25 , key: "Builder"})

// classes

class BottleMaker<T> {
    constructor(public key: T){}
}

let b1 = new BottleMaker<string>("Tony Stark")
console.log(b1);
