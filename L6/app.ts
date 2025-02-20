//Basic class
// class Department {
//     name : string;
//     constructor(n : string) {
//         this.name = n;
//     }
//     describe(this : Department) {
//         console.log("Department" , this.name);        
//     }
// }
// const accounting = new Department("Accounting");
// console.log(accounting);
// accounting.describe();

// const accountingCopy = {
//     describe : accounting.describe()
// }
// console.log(accountingCopy);

//private , public access modifier
class Department {
    name : string;
    employees:string[] = []
    constructor(n : string) {
        this.name = n;
    }
    describe(this : Department) {
        console.log("Department" , this.name);        
    }
    addEmployee(emp : string) {
        this.employees.push(emp)
    }
    printEmployeeInformation() {
        console.log('Number of emp: ' , this.employees.length);
        console.log(this.employees);
        
        
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
accounting.addEmployee("Shraddha")
accounting.addEmployee("Rohit")
accounting.addEmployee("Accounting")
accounting.addEmployee("Striver")
accounting.printEmployeeInformation();

accounting.employees = ['xyz'];
