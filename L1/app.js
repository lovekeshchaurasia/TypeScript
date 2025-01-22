function add(num1, num2, printResult) {
    if (printResult) {
        console.log(" ".concat(someWord, " ").concat(num1 + num2));
    }
    else {
        return "correct your code";
    }
}
var someWord = "some of the two number is =";
var printResult = true;
var ans = add(5, 5, printResult);
console.log(ans);
