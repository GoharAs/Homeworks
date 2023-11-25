//1. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.
let input=prompt()
let result=''
for (let i=0; i<=(input.length-3); i++) {
      if((input[i]==='0' && input[i+1]==='0' && input[i+2]==='0') || result==='yes') {
        result='yes'
    } else result='no'
}
console.log(result)

//2. Insert a number. Remove all zeros from the number, except the last one and print the number. If there are at most one zero, print “Nothing to remove”.
let input=prompt()
let result=''
let count=0
if(input.length===1){
    console.log('Nothing to remove')
} else {
    for (let i=0;i<input.length;i++) {
        if (input[i]==='0' && i!=(input.length-1)) {
            count++
        } else {
            result+=input[i]
        }
    }
}
if(count>1) {
    console.log(result)
} else {
    'Nothing to remove'
}

//3. Insert a n positive number. Check number is prime or not. Prime numbers are numbers that have only 2 factors: 1 and themselves. 
//For example, the first 5 prime numbers are 2, 3, 5, 7, and 11.
let n=+prompt()
let result=0
for (i=2; i<n; i++) {
    if (n % i === 0 && n!=1) {
        ++result
    } else {
        result
    }
}
if (result>0 || n===1) {
    console.log(false)} else {
    console.log(true)
    }

//4. Insert a n positive number. Print the n-st prime number.
function isPrime(j) {
    let result=0
    for (i=2; i<j; i++) {
    if (j % i === 0 && j != 1) {
        ++result
    } else {
        result
    }
}
if (result>0 || j===1) {
    return false} else {
    return true
    }
}

let n=+prompt()
let count=0
let k
for (k=1; count<n; k++) {
    if(isPrime(k)===true) {
        ++count
    } else {
        count
    }
}
console.log(k-1)

//5. Insert two positive integers n and m between 1 and 10. Compute and print n m .
let n= +prompt()
let m= +prompt()
console.log(Math.pow(n,m))