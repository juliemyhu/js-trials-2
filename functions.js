"use strict";

// Ex:
// > isHometown('San Francisco')
// true
// 1. isHometown

function isHometown(town) {

	return town === "San Francisco"
}


// Ex:
// > getFullName('julie','hu')
// 'julie hu '
// 2. getFullName

function getFullName(firstName, lastName) {

	return (`${firstName} ${lastName} `)
}

// Ex:
// > calculateTotal(3,'PA')
// 3.1500000000000004
// > calculateTotal(300,'MA')
// 315

// 3. calculateTotal

function calculateTotal(basePrice, state, tax=0.05) {


	const subtotal = basePrice * (1 + tax);

	let fee = 0;

	if (state === 'CA') {
		fee == 0.03 * subtotal;
	}
	else if (state === 'PA') {
		fee == 2
	}
	else if (state === 'MA') {
		if (basePrice <= 100) {
			fee == 1
		}
		else {
			fee == 3
		}
	}
	return subtotal + fee;

}