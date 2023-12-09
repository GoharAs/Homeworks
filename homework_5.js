//1. Given a string. Check whether the string is palindrome or not.
function isPalindrome(string) {
    let reverseStr = ''
    for (let i = (string.length - 1); i >= 0; i--) {
        reverseStr += string[i]
    }
    if (string === reverseStr) {
        return true
    }
    return false
}

//2. Given a string and symbols. Change first symbol by the second one in the string.
function changeSymb(text, symbol_1, symbol_2) {
    let newText = ''
    for (let i = 0; i < text.length; i++) {
        if (text[i] === symbol_1) {
            newText += symbol_2
        } else {
            newText += text[i]
        }
    }
    return newText
}

//3. Insert a string. Create new string which is the mirror reverse of the inserted one around its center.
function mirrorReverse(string) {
    let middle = Math.round(string.length / 2)
    let newString = ''
    for (let i = middle; i < string.length; i++) {
        newString += string[i]
    }
    for (let i = 0; i < middle; i++) {
        newString += string[i]
    }
    return (newString)
}

//4. Print the following number pattern: function will take argument (in this case it is 5)
function printPattern(number) {
    let pattern = ''
    let row = ''
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            row += String(j)
        }
        pattern += row + '\n'
        row = ''
    }
    for (let i = number - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            row += String(j)
        }
        pattern += row + '\n'
        row = ''
    }
    console.log(pattern)
}

//5. Given an object. Invert it (keys become values and values become keys).
function invertObj(obj) {
    for (let key in obj) {
        obj[obj[key]] = key
        delete obj[key]
    }
    return obj
}   
