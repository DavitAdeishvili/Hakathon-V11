def count_vowels(s):
    count = 0
    vowels = "aeiouAEIOU"
    for i in s:
        if i in vowels:
            count += 1
    return count

print (count_vowels("hello"))
print(count_vowels("AEIOU"))
print(count_vowels("Python"))
print(count_vowels("bcd"))
print(count_vowels("The Quick Brown Fox"))