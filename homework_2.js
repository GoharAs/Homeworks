//1. Given a number print its digits count. Use both loops (for, while)
//for
let count=0
let n=+prompt()
for (let input=Math.abs(n); input !==0; input=Math.floor(input/10)) {
    count+=1}
console.log(count)
//while
let count=0
let n=+prompt()
let input=Math.abs(n)
while (input!==0) {
    input=Math.floor(input/10)
    count+=1
}
console.log(count)

//2. Count numbers of digit 9 in a number. Use both loops (for, while)
//for
let count=0
let input=prompt()
for (let i=0; i<input.length; i+=1) {
    if (+input[i]===9) {
     count+=1   
    }
 }
console.log(count)
//while
let count=0
let input=prompt()
let i=0
while (i<input.length) {
    if (+input[i]===9) {
     count+=1   
    }
    i+=1
}
console.log(count)

//3. Given two numbers. Print only odd numbers between that numbers.
let number1 = +prompt("1st number")
let number2=+prompt("2nd number")
for (let i = number1 ; i < number2; i+=1) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

//4. Given a number as input, insert dashes (-) between each two even numbers.
let input=prompt()
let result=''
for (let i = 0; i < input.length; i++) {
    if (+input[i] % 2 ===0) {
        result=result+input[i]
        if(i<(input.length-1)) {result=result+'-'}
    } else {
        result=result+input[i]
    }
}
console.log(result)

//5. Given a positive number. Print it in reverse order.
let input=prompt()
let result=''
for (let i = input.length-1; i >= 0; i--) {
    result+=input[i]
}
console.log(result)


