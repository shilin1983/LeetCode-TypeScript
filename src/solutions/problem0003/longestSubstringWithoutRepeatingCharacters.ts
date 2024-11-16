export default function lengthOfLongestSubstring(s: string): number {
	const hashTable = new Map<string, number>()
	let left = 0,
		right = 0,
		maxLength = 0

	while (right < s.length) {
		const char = s[right]

		// * 如果哈希表中存在当前元素，则移动滑动窗口左边界到当前元素的下一个位置
		if (hashTable.has(char)) {
			left = Math.max(left, hashTable.get(char)! + 1)
		}

		// * 将当前元素及其索引插入哈希表
		hashTable.set(char, right)
		// * 移动滑动窗口右边界
		right++
		// * 计算当前滑动窗口最大长度
		maxLength = Math.max(maxLength, right - left)
	}

	return maxLength
}
