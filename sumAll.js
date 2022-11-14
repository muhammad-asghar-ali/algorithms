const sumAll = (arr) => {
    let min
    let max

    // 1st
    min = arr[0] > arr[1] ? arr[1] : arr[0]
    max = arr[0] > arr[1] ? arr[0] : arr[1]

    //2nd
    if (arr[0] > arr[1]) {
        max = arr[0]
        min = arr[1]
    } else {
        max = arr[1]
        min = arr[0]
    }

    let sum = 0

    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}

const sumAll1 = (arr) => {
    let sum = 0
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum = sum + i
    }
    return sum
}

console.log(sumAll([1, 4]))
console.log(sumAll1([1, 4]))