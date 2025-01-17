const fibonacci = (n) => {
	// your code here
	if (n < 2)
		return [1];

	const fib = [0,1];
	for (let i = 2; i<= n; i++) {
		fib.push(fib[i -1] + fib[i - 2]);
	}
	fib.shift();

	return fib;
}

module.exports = fibonacci;