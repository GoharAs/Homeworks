//Implement following array methods 
//1.find
function myFindArr(arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i]
        }
    }
    return undefined
}
//2.filter
function myFindArr(arr, callback) {
    let filteredArr = []
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}

//3.forEach
function myForEach(arr, callback) {
    for (i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

//4.some
function mySomeArr(arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true
        }
    }
    return false
}

//5.every
function myEveryArr(arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false
        }
    }
    return true
}

//6.map
function myMap(arr, callback) {
    for (i = 0; i < arr.length; i++) {
        let mappedArr = []
        mappedArr.push(callback(arr[i], i, arr))
    }
    return mappedArr
}

//7.reduce
function myReduce(arr, callback, initialValue = arr[0]) {
    let result = initialValue
    for (i = 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr)
    }
    return result
}