def find_missing_number(nums, n):
    for i in range (1, n + 1):
        if i not in nums:
            return i