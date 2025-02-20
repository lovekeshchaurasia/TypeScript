"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department", this.name);
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
const accountingCopy = {
    describe: accounting.describe()
};
console.log(accountingCopy);
