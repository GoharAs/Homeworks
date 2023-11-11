//1. Given a number. Print “odd” if the number is odd and “even” if it’s even.
let input=Number(prompt("Give me a number"))
if(input % 2===0) {
    console.log("even")
} else {
    "odd"
}


//2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let number1=Number(prompt("Give me first number"))
let number2=Number(prompt("Give me second number"))
if (number1 % number2===0) {
    console.log(1)
} else if (number2 % number1===0) {
    console.log(1)
} else {
    console.log(0)
}


//3. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. 
//If the last digit of the inserted number is 0, number remains the same.
let input=Number(prompt("Give me a positive integer"))
let remainder=input % 10
let whole_numb=(input-remainder)/10
if (remainder % 10 ===0 || whole_numb===0) {
    console.log(input)
} else {
    console.log(String(remainder)+String(whole_numb))
}


//4. Given five numbers as input. Calculate and print the average of the numbers(without using arrays).
let number1=Number(prompt("Give me 1st number"))
let number2=Number(prompt("Give me 2nd number"))
let number3=Number(prompt("Give me 3th number"))
let number4=Number(prompt("Give me 4th number"))
let number5=Number(prompt("Give me 5th number"))
console.log((number1+number2+number3+number4+number5)/5)

//5. Given the following code rewrite it using only two if operators. (Hint: use logical operators).
var n = +prompt();

var i=0;
var j=0;

if(n % 2 === 0 && !Math.floor(n/10)) {
    i += 1;
}

if(n % 3 === 0 && n % 10 === 1){
    j +=1;
} 