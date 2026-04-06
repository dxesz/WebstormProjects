print("1.")
n = int(input())
i = 1
while i * i <= n:
    print(i * i)
    i += 1

print("\n2.")
n = int(input())
d = 2
while n % d != 0:
    d += 1
print(d)

print("\n3.")
n = int(input())
x = 1
while x <= n:
    print(x, end=" ")
    x *= 2

print("\n4.")
n = int(input())
while n % 2 == 0 and n > 1:
    n //= 2
if n == 1:
    print("YES")
else:
    print("NO")

print("\n5.")
n = int(input())
k = 0
x = 1
while x < n:
    x *= 2
    k += 1
print(k)