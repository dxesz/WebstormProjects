print("1.")
a = int(input())
b = int(input())
for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")

print("\n2.")
a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")

print("\n3.")
a = int(input())
b = int(input())
for i in range(a, b + 1):
    if int(i ** 0.5) ** 2 == i:
        print(i, end=" ")

print("\n4.")
x = int(input())
d = int(input())
count = 0
for digit in str(x):
    if int(digit) == d:
        count += 1
print(count)

print("\n5.")
x = int(input())
s = 0
for digit in str(x):
    s += int(digit)
print(s)

print("\n6.")
x = input()
print(int(x[::-1]))

print("\n7.")
x = int(input())
for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break

print("\n8.")
x = int(input())
for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ")

print("\n9.")
x = int(input())
count = 0
for i in range(1, int(x ** 0.5) + 1):
    if x % i == 0:
        count += 2
        if i * i == x:
            count -= 1
print(count)

print("\n10.")
s = 0
for _ in range(100):
    s += int(input())
print(s)

print("\n11.")
n = int(input())
s = 0
for _ in range(n):
    s += int(input())
print(s)

print("\n12.")
b = input()
print(int(b, 2))

print("\n13.")
n = int(input())
count = 0
for _ in range(n):
    if int(input()) == 0:
        count += 1
print(count)