print("1.")
a = int(input())
b = int(input())
if a > b:
    print(a)
else:
    print(b)

print("\n2.")
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

print("\n3.")
correct = int(input())
student = int(input())
if (correct == 1 and student == 1) or (correct != 1 and student != 1):
    print("YES")
else:
    print("NO")

print("\n4.")
x = int(input())
if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)

print("\n5.")
a = int(input())
b = int(input())
if a > b:
    print(1)
elif b > a:
    print(2)
else:
    print(0)