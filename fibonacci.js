const fibonacci = (n) => {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(100));

// function fib(n, memo) {
//     if (n < 2) {
//         return n;
//     }
//     if (!memo[n]) {
//         // when the object doesn't have the property of n
//         // store the result of the call inside memo[n]
//         memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     }
//     return memo[n];
// }

// console.log(fib(100, {})); // 5