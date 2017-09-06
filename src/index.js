// a \ b
export
function setDifference(a, b) {
	return b.filter(element => a.indexOf(element) === -1)
}

export
function intersection(a, b) {
	return b.filter(element => a.indexOf(element) !== -1)
}

export
function union(a, b) {
	return [
		...a,
		...b,
	]
}
