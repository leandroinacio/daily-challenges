// Assuming list has only numbers
const generateProductList = (list) => {
	console.log(`Checking list ${list.toString()}`);
	
	const result = list.map((value, index) => {
		console.log(`Value ${value}, index ${index}`);
		
		return list.reduce((accumulator, reduceValue, reduceIndex) => {
			console.log(`Accumulator ${accumulator}, reduceValue ${reduceValue}, reduceIndex ${reduceIndex}`);
			
			return (index === reduceIndex) ? accumulator : accumulator * reduceValue;
		}, 1);
	});
		
	return result;
};

// Tests should return true
console.log(generateProductList([1, 2, 3, 4, 5]).toString() === [120, 60, 40, 30, 24].toString());
console.log(generateProductList([3, 2, 1]).toString() === [2, 3, 6].toString());
console.log(generateProductList([1, 1]).toString() === [1, 1].toString());
console.log(generateProductList([1]).toString() === [1].toString());
