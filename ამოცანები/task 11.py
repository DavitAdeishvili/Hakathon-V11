def fibonacci(n):
    list = [0, 1]
    list1 = [0, 1]
    for i in range(1, n-1):
        list1.append(sum(list))
        list.append(sum(list))
        list.remove(list[0])
    return list1

print (fibonacci(10))