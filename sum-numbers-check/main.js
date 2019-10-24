// Assuming list always has at least 2 numbers
// Assuming list has only numbers
// Assuming k is always a number
const isSumReachable = (list, k) => {
	console.log(`Checking value ${k}`);
	
	// Do not iterate the last item on list because it has already been checked
	for (let position = 0; position < list.length - 1; position++) {
		console.log(`Position ${position}, value ${list[position]}`)
		
		// Check until it reaches last item 
		for (let nextPosition = position + 1; nextPosition < list.length; nextPosition++) {
			const total = list[position] + list[nextPosition];
			console.log(`Next position ${nextPosition}, value ${list[nextPosition]}, total ${total}`)
			
			if (total === k) return true;
		}
	}
	
	return false;
};

// True
console.log('Should return true');
console.log(isSumReachable([-2, 2, 4, 5], 3));
console.log(isSumReachable([2, 1, 1, 1], 3));
console.log(isSumReachable([0, 1], 1));
console.log(isSumReachable([0, 1, 1], 1));

// False
console.log('Should return false');
console.log(isSumReachable([0, 1], 2));
console.log(isSumReachable([3, 5, 9], 1));