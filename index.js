"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setDifference = setDifference;
exports.intersection = intersection;
exports.union = union;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// a \ b
function setDifference(a, b) {
	return b.filter(function (element) {
		return a.indexOf(element) === -1;
	});
}

function intersection(a, b) {
	return b.filter(function (element) {
		return a.indexOf(element) !== -1;
	});
}

function union(a, b) {
	return [].concat(_toConsumableArray(a), _toConsumableArray(b));
}

