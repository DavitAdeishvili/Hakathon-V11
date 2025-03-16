def number_type(n):
    if n == 0:
        return "Zero"
    if n > 0:
        return "Positive"
    else:
        return "Negative"

print (number_type(10))
print (number_type(-5))
print (number_type(0))