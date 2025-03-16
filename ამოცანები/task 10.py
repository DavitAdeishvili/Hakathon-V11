def is_prime(n):
    res = []
    for i in range(1, n+1):
        if n % i == 0:
            res.append(i)
    return len(res) == 2

print (is_prime(2))
print (is_prime(3))
print (is_prime(4))
print (is_prime(11))
print (is_prime(15))