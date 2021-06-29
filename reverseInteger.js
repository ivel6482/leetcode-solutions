var reverse = function (x) {
	const str = x.toString()
	const reversed = parseInt(str.split('').reverse().join(''))

	if (reversed >= Math.pow(-2, 31) && reversed <= Math.pow(2, 31) - 1) {
		const sign = Math.sign(x)
		return reversed * sign
	} else {
		return 0
	}
}
