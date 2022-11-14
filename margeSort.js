// const margeSort = (array) => {

//     if(array.length <= 1) return console.log("Array already sorted")

//     const half = array.length / 2

//     const left = array.splice(0, half)
// }  

const incrementValueByTwo = (array) => {
    let incremetedValue = []
    for (let i = 0; i < array.length; i++) {
        let value = array[i] * 2
        incremetedValue.push(value)
    }
    return incremetedValue
}

const array = [1, 3, 4, 5, 6, 3, 2]
console.log(array)

const newValues = incrementValueByTwo(array)
console.log(newValues)