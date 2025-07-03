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
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department", this.name);
    };
    Department.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log('Number of emp: ', this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
accounting.addEmployee("Shraddha");
accounting.addEmployee("Rohit");
accounting.addEmployee("Accounting");
accounting.addEmployee("Striver");
accounting.printEmployeeInformation();
accounting.employees = ['xyz'];
//access modifier
//private
//public
//protected
