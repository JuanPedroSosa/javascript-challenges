const trialDivision = (number) => {
	// your code here
	if (!Number.isInteger(number))
		return false;

	if (number <= 1)
		return false;

	const raiz = Math.floor(Math.sqrt(number)) + 1;

	for (let i = 2; i < raiz; ++i) {
    if (number % i == 0)
      return false;
  }

	return true;
}

module.exports = trialDivision;