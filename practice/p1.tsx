interface A {
    a: number , 
    b : string
}
interface B extends A {
    c : number
}

function demo(obj : B) {
    console.log(obj.a , obj.b , obj.c);
}
const obj = {
    a : 1 ,
    b :"kuch v" ,
    c : 2
}
demo(obj) 

class BottleMaker {
    constructor(public name: string , public price : number) {}
}

let b1 = new BottleMaker("Milton" , 1200)

class ABCD {
    constructor(public _name: string , public age: number) {}
    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    static getRandom() {
        return Math.random();
    }
}

//Rest parameters
// ... this is a spread/rest operator
function abcd(...args: number[]) {

}
abcd(1,2,2,44,67,8,9)
let u1 = new ABCD("harsh" , 25);

//fn signature
function func(a: string): void;
function func(a: string , b: number): number;
function func(a: any , b: any) {
    if(typeof a == "string" && b == "undefined") {
        console.log("hey");      
    }
    if(typeof a == "string" && b == "number") {
        console.log("123");      
    } else {
         throw new Error("Invalid arguments");
    }
}