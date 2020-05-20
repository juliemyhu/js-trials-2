"use strict";

// Ex:
// > printIndices(['apple','berry','cherry'])
// apple 0
// berry 1
// cherry 2

// 1. printIndices
function printIndices(items) {
	let i = 0;		
  for (const item of items) {
  	console.log(`${item} ${i}`);

  	i += 1; 
  }
}

// Ex:
// > everyOtherItem(['apple','berry','cherry'])
// [ 'apple', 'cherry' ]

// 2. everyOtherItem
function everyOtherItem(items) {
	
	const result = [];
	for (const item in items) {
		if (item % 2 ==0) {
			result.push(items[item]);
		}
	}
  return result;
}

// Ex.smallestNItems([1, 30, 4, 21, 100000], 2 )
// [ 4, 1 ]

// 3. smallestNItems
function smallestNItems(items, n) {

  const sortedItems = items.sort((a,b) => a-b);
  const sortedNItems = sortedItems.slice(0,n);
  sortedNItems.reverse();

  console.log(sortedNItems);
}
