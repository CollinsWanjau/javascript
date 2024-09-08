const factorial = (n, memo) => {
	memo = memo || {}

	if (memo[n]) return memo[n]
	if (n === 0) return 1
	for (let i = 0; i < n; i++) {
		memo[n] = n * factorial(n - 1, memo)
	}

	return memo[n]
}

console.log(factorial(12))
console.log(factorial(120))
console.log(factorial(1200))
console.log(factorial(12000))
