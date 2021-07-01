var romanToInt = function (s) {
	return s.split('').reduce((acc, char, index, array) => {
		const nextEl = array[index + 1]
		switch (char) {
			case 'I':
				if (nextEl === 'V' || nextEl === 'X') {
					return acc - 1
				} else {
					return acc + 1
				}
			case 'V':
				return acc + 5
			case 'X':
				if (nextEl === 'L' || nextEl === 'C') {
					return acc - 10
				} else {
					return acc + 10
				}
			case 'L':
				return acc + 50
			case 'C':
				if (nextEl === 'D' || nextEl === 'M') {
					return acc - 100
				} else {
					return acc + 100
				}
			case 'D':
				return acc + 500
			case 'M':
				return acc + 1000
			default:
				return acc
		}
	}, 0)
}
