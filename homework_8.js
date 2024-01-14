//1. implement bubble sort with different loops (for, while)
//for
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const t = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = t
                swapped = true
            }
        }
        if (swapped === false) {
            break
        }
    }
    return arr
}

//while
function bubbleSort(arr) {
    let i = 0
    while (i < arr.length - 1) {
        let swapped = false
        let j = 0
        while (j < arr.length - i - 1) {
            if (arr[j] > arr[j + 1]) {
                let t = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = t
                swapped = true
            }
            j++
        }
        if (swapped === false) {
            break
        }
        i++
    }
    return arr
}

//2. implement build in array sort method with bubble sort algorithm
function mySort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (String(arr[j]) > String(arr[j + 1])) {
                const t = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = t
                swapped = true
            }
        }
        if (swapped === false) {
            break
        }
    }
    return arr
}