import { describe, expect, test } from 'bun:test'
import lengthOfLongestSubstring from './longestSubstringWithoutRepeatingCharacters'

interface Case {
	s: string
	expected: number
}

describe('3.无重复字符的最长子串', (): void => {
	const cases: Case[] = [
		{
			s: 'abcabcbb',
			expected: 3,
		},
		{
			s: 'bbbbb',
			expected: 1,
		},
		{
			s: 'pwwkew',
			expected: 3,
		},
	]

	test.each(cases)('示例%#', ({ s, expected }): void => {
		expect(lengthOfLongestSubstring(s)).toEqual(expected)
	})
})
