function add(num1 : number , num2 : number , printResult : Boolean) {
    if(printResult) {
        console.log(` ${someWord} ${num1 + num2}`);
        
    }else {
        return "correct your code";
    }
}
const someWord = "some of the two number is =";
const printResult = true;
const ans = add(5,5 , printResult);
console.log(ans);
