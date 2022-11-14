const diffArray = (arr1, arr2) => {
    // let union = []
    // for (let i = 0; i < arr1.length; i++) {
    //     if (!union.includes(arr1[i])) {
    //         union.push(arr1[i])
    //     }
    // }
    // for (let i = 0; i < arr2.length; i++) {
    //     if (!union.includes(arr2[i])) {
    //         union.push(arr2[i])
    //     }
    // }

    // union by using for....of  
    // let union = []  
    // for (const el of arr1) {
    //     if (!union.includes(el)) {
    //         union.push(el)
    //     }
    // }
    // for (const el of arr2) {
    //     if (!union.includes(el)) {
    //         union.push(el)
    //     }
    // }

    // union using sets

    const union = new Set([...arr1, ...arr2])

    let symDiff = []

    // for (let i = 0; i < union.length; i++) {
    //     const currentValue = union[i]
    //     if (arr1.includes(currentValue) && !arr2.includes(currentValue)) {
    //         symDiff.push(currentValue)
    //     } else if (!arr1.includes(currentValue) && arr2.includes(currentValue)) {
    //         symDiff.push(currentValue)
    //     }
    // }

    for (const currentValue of union) {
        if (arr1.includes(currentValue) && !arr2.includes(currentValue)) {
            symDiff.push(currentValue)
        } else if (!arr1.includes(currentValue) && arr2.includes(currentValue)) {
            symDiff.push(currentValue)
        }
    }

    return symDiff
}

console.log(diffArray([1, 2, 3, 4], [1, 2, 3, 5, 6]))