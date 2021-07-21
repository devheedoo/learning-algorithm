class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

function swapPairs(head: ListNode | null): ListNode | null {
	swapPairWithNext(head);
	return head;
};

function swapPairWithNext(pair: ListNode | null) {
	if (pair === null || pair.next === null) return;
	const temp = pair.val;
	pair.val = pair.next.val;
	pair.next.val = temp;
	swapPairWithNext(pair.next.next);
}

console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));