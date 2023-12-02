//Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that its digits product is equal to n.
function isPrime(j) {
    let result = 0
    for (i = 2; i < j; i++) {
        if (j % i === 0 && j != 1) {
            ++result
        } else {
            result
        }
    }
    if (result > 0 || j === 1) {
        return false
    } else {
        return true
    }
}


function MinDigProd(n) {
    if (n === 1) {
        return 11
    } else {
        if (n === 0) {
            return 10
        } else {
            if (isPrime(n)) {
                return 'N/A n is Prime Number'
            } else {
                let i = 10
                let StrI = String(i)
                let a = StrI[0]
                let b = StrI[1]
                while (Number(a) * Number(b) <= n) {
                    if (Number(a) * Number(b) === n) {
                        return i
                    } else {
                        i++
                        StrI = String(i)
                        a = StrI[0]
                        b = StrI[1]
                    }
                }
                return "N/A"
            }
        }
    }
}


//2. Find the biggest common divisor of two inserted numbers.
function isPrime(j) {
    let result = 0
    for (i = 2; i < j; i++) {
        if (j % i === 0 && j != 1) {
            ++result
        } else {
            result
        }
    }
    if (result > 0 || j === 1) {
        return false
    } else {
        return true
    }
}

function MaxDiv(a, b) {
    if (a % b === 0) {
        return b
    } else if (b % a === 0) {
        return a
    } else {
        if (isPrime(a) || isPrime(b)) {
            return 1
        }
        else {
            if (Math.abs(a) < Math.abs(b)) {
                for (let i = Math.abs(a); i > 0; i--) {
                    if (a % i === 0 && b % i === 0) {
                        return i
                    }
                }
            } else {
                for (let i = Math.abs(b); i > 0; i--) {
                    if (a % i === 0 && b % i === 0) {
                        return i
                    }
                }
            }
        }
    }
}

//3. Given a number. Print all prime factors of the number.
function isPrime(j) {
    let result = 0
    for (i = 2; i < j; i++) {
        if (j % i === 0 && j != 1) {
            ++result
        } else {
            result
        }
    }
    if (result > 0 || j === 1) {
        return false
    } else {
        return true
    }
}
function PrimeNumbers(n) {
    if (n === 0 || n === 1) {
        return "N/A"
    } else {
        if (isPrime(n)) {
            return n
        } else {
            for (let i = 2; i <= n; i++) {
                if (isPrime(i) && n % i === 0) {
                    console.log(i)
                }
            }
        }
    }
}

//4. Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * … * 3 * 2* 1 , 0! = 1 )
function factorial(n) {
    if (n === 0) {
        return '0! = 1'
    } else {
        let result = 1
        for (let i = n; i > 0; i--) {
            result *= i
        }
        return (n + "! =" + result)
    }
}

//5. Given a number n ( n &gt;= 0 ). Print n Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3,5, 8 …, a k = a k-1 + a k-2 )
function fibonacci(n) {
    let PrePrev = 0
    let Prev = 1
    let result = 0
    if (n === 0) {
        return 0
    } else {
        if (n === 1) {
            return 1
        } else {
            for (i = 2; i <= n; i++) {
                result = PrePrev + Prev
                PrePrev = Prev
                Prev = result
            }
            return result
        }
    }
}

//6. Given a number n ( n &gt; 0 ). Print Fibonacci series up to n.
function fibonacci(n) {
    let PrePrev = 0
    let Prev = 1
    let result = 0
    if (n === 0) {
        return 0
    } else {
        if (n === 1) {
            return 1
        } else {
            for (i = 2; i <= n; i++) {
                result = PrePrev + Prev
                PrePrev = Prev
                Prev = result
            }
            return result
        }
    }
}

function printFibonacci(n) {
    for (let i = 0; i <= n - 1; i++) {
        console.log(fibonacci(i))
    }
}