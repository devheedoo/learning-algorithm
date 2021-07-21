
// time complexity: O(logN)
function findUpperBound(numbers: number[], target: number, firstIndex = 0, lastIndex = numbers.length - 1): number {
	const middleIndex = Math.floor((firstIndex + lastIndex) / 2);
	if (lastIndex < firstIndex)
		return firstIndex >= numbers.length ? -1 : firstIndex;
	else if (target === numbers[middleIndex])
		return middleIndex;
	if (numbers[middleIndex] > target)
		return findUpperBound(numbers, target, firstIndex, middleIndex - 1);
	else if (numbers[middleIndex] < target)
		return findUpperBound(numbers, target, middleIndex + 1, lastIndex);
	else return middleIndex;
}

// tests
console.log(findUpperBound([2], 1), 'should be 0');
console.log(findUpperBound([2], 2), 'should be 0');
console.log(findUpperBound([2, 5, 10, 11, 12, 13, 100], 11), 'should be 3');
console.log(findUpperBound([2, 5, 10, 11, 12, 13, 100, 101], 11), 'should be 3');
console.log(findUpperBound([2, 5, 10, 11, 12, 13, 100, 101], 12), 'should be 4');
console.log(findUpperBound([-1, 0, 3, 5, 9, 12], -5), 'should be 0');
console.log(findUpperBound([-1, 0, 3, 5, 9, 12], 13), 'should be -1');
console.log(findUpperBound([2, 5, 10, 11, 12, 13, 100, 101], 3), 'should be 1');
console.log(findUpperBound([2, 5, 10, 11, 12, 13, 100], 14), 'should be 6');
console.log(findUpperBound([2, 5, 10, 11, 12, 13, 100, 101], 8), 'should be 2');
