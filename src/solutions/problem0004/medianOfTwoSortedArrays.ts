export default function findMedianSortedArrays(
	nums1: number[],
	nums2: number[],
): number {
	// * 合并两个数组，并排序
	const merged = [...nums1, ...nums2].sort((a, b) => a - b)

	const mid = Math.floor(merged.length / 2)
	if (merged.length % 2 === 0) {
		// * 如果合并后的数组长度为偶数，则中位数为中间两个数的平均值
		return (merged[mid - 1] + merged[mid]) / 2
	} else {
		// * 如果合并后的数组长度为奇数，则中位数为中间的数
		return merged[mid]
	}
}
