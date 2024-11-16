import ListNode from '@/structures/linkedList'

export default function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null {
	const head = new ListNode(0)
	let current = head,
		carry = 0

	// * 遍历两个链表，逐位计算当前位置和，并与进位值相加
	// * 遍历结束后，如果还有进位值，则在链表末尾添加一个新的节点
	while (l1 !== null || l2 !== null || carry !== 0) {
		const sum = (l1?.val || 0) + (l2?.val || 0) + carry

		l1 = l1?.next || null
		l2 = l2?.next || null

		current.next = new ListNode(sum % 10)
		current = current.next
		carry = Math.floor(sum / 10)
	}

	return head.next
}
