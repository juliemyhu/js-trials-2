"use strict";

// Ex;
// > countWords('hi hi hi julie julie hu')
// { hi: 3, julie: 2, hu: 1 }

// 1. countWords
function countWords(phrase) {
  const wordCounts = {};
 
  for (const word of phrase.split(' ')) {
  	if (word in wordCounts) {
  		wordCounts[word] += 1;
  	}
  	else {
  		wordCounts[word] = 1;
  	}
  }

  return wordCounts; 
}

// Ex: 
// > getMelonsAtPrice(2.50)
// [ 'Cantaloupe', 'Honeydew' ]
// > getMelonsAtPrice(14.25)
// [ 'Christmas' ]
// > getMelonsAtPrice(3)
// undefined


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
  	2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
};
	if (!melonPrices[price]) {
		return 
	}
	return melonPrices[price].sort()
}
