def is_prime(n):
    res1 = []
    for i in range(1, n+1):
        res2 = []
        for x in range(1, i + 1):
            if i % x == 0:
                res2.append(x)
        if len(res2) == 2:
            res1.append(i)
    return res1

print (is_prime(10))