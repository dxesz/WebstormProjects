print("1.")
a = int(input())
b = int(input())

c = (a ** 2 + b ** 2) ** 0.5

print(c)
print("\n2.")

n = int(input())

print("The next number for the number", n, "is", n + 1, sep=" ", end=".\n")
print("The previous number for the number", n, "is", n - 1, sep=" ", end=".")

print("\n3.")
n = int(input())
k = int(input())

print(k // n)

print("\n4.")
n = int(input())
k = int(input())

print(k % n)

print("\n5.")

v = int(input())
t = int(input())

position = v * t

print(position % 109)