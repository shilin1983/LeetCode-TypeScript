import { describe, expect, test } from 'bun:test'
import findMedianSortedArrays from './medianOfTwoSortedArrays'

interface Case {
	nums1: number[]
	nums2: number[]
	expected: number
}

describe('4.寻找两个正序数组的中位数', (): void => {
	const cases: Case[] = [
		{
			nums1: [1, 3],
			nums2: [2],
			expected: 2,
		},
		{
			nums1: [1, 2],
			nums2: [3, 4],
			expected: 2.5,
		},
	]

	test.each(cases)('示例%#', ({ nums1, nums2, expected }): void => {
		expect(findMedianSortedArrays(nums1, nums2)).toEqual(expected)
	})
})
