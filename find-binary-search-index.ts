// time complexity: O(logN)
function findBinarySearchIndex(numbers: number[], target: number, firstIndex = 0, lastIndex = numbers.length - 1): number {
	const middleIndex = Math.floor((firstIndex + lastIndex) / 2);
	if (lastIndex < firstIndex)
		return -1;
	else if (target === numbers[middleIndex])
		return middleIndex;
	else if (numbers[middleIndex] > target)
		return findBinarySearchIndex(numbers, target, firstIndex, middleIndex - 1);
	else if (numbers[middleIndex] < target)
		return findBinarySearchIndex(numbers, target, middleIndex + 1, lastIndex);
}

// tests
console.log(findBinarySearchIndex([2], 1), 'should be -1');
console.log(findBinarySearchIndex([2], 2), 'should be 0');
console.log(findBinarySearchIndex([2, 5, 10, 11, 12, 13, 100], 11), 'should be 3');
console.log(findBinarySearchIndex([2, 5, 10, 11, 12, 13, 100, 101], 11), 'should be 3');
console.log(findBinarySearchIndex([2, 5, 10, 11, 12, 13, 100, 101], 12), 'should be 4');
console.log(findBinarySearchIndex([-1, 0, 3, 5, 9, 12], 2), 'should be -1');