// function destroyer(arr) {
//     // console.log(arguments)
//     // const argArray = Array.from(arguments)
//     const argArray = [...arguments].slice(1)
//         // console.log(argArray)

//     // const filteredArray = []

//     // for (let i = 0; i < arr.length; i++) {
//     //     if (!argArray.includes(arr[i])) {
//     //         filteredArray.push(arr[i])
//     //     }
//     // }

//     // for (const ele of arr) {
//     //     if (!argArray.includes(ele)) {
//     //         filteredArray.push(ele)
//     //     }
//     // }

//     // const filteredArray = arr.filter(ele => !argArray.includes(ele))
//     // return filteredArray

//     // return arr.filter(ele => !argArray.includes(ele))

//     return arr.filter(ele => ![...arguments].slice(1).includes(ele))
// }

// usring arrow function

// const destroyer = (...args) => {
//     return args[0].filter(ele => !args.slice(1).includes(ele))
// }

const destroyer = (...args) => args[0].filter(ele => !args.slice(1).includes(ele))

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))