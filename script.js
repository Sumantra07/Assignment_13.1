/*
 *
 * Program to use promise feauture
 * param stArray is the array of Strings
 * 
 */

function convertToUpperCase(stArray) {
	// calculate timeout based on array size
	var timeout = 1000 * stArray.length;
	// create promise
	var stringFormatter = new Promise(function (resolve, reject) {
		// long standing opertion
		setTimeout(timeout, resolve());
	});
	// if Promise is resolved
	stringFormatter.then(function () {
		for (var i = 0; i < stArray.length; i++) {
			stArray[i] = stArray[i].toUpperCase();
			console.log(stArray[i]);

		}

	});

	return stringFormatter;
}

var sample = ["abc", "cde", "ghi"];
// returns the promise
var result = convertToUpperCase(sample);



