export default class ListNode {
	val: number
	next: ListNode | null

	constructor(val: number, next: ListNode | null = null) {
		this.val = val
		this.next = next
	}
}

// * 整数数组转链表
export const int2List = (nums: number[]): ListNode | null => {
	let head: ListNode | null = null

	if (nums.length !== 0) {
		for (const num of nums.reverse()) {
			const node = new ListNode(num)
			node.next = head
			head = node
		}
	}

	return head
}
