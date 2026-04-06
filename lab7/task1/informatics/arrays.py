print("1.")
n = int(input())
arr = list(map(int, input().split()))
for i in range(0, n, 2):
    print(arr[i], end=" ")

print("\n2.")
n = int(input())
arr = list(map(int, input().split()))
for x in arr:
    if x % 2 == 0:
        print(x, end=" ")

print("\n3.")
n = int(input())
arr = list(map(int, input().split()))
count = 0
for x in arr:
    if x > 0:
        count += 1
print(count)

print("\n4.")
n = int(input())
arr = list(map(int, input().split()))
count = 0
for i in range(1, n):
    if arr[i] > arr[i - 1]:
        count += 1
print(count)

print("\n5.")
n = int(input())
arr = list(map(int, input().split()))
found = False
for i in range(1, n):
    if (arr[i] > 0 and arr[i - 1] > 0) or (arr[i] < 0 and arr[i - 1] < 0):
        found = True
if found:
    print("YES")
else:
    print("NO")

print("\n6.")
n = int(input())
arr = list(map(int, input().split()))
count = 0
for i in range(1, n - 1):
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        count += 1
print(count)

print("\n7.")
n = int(input())
arr = list(map(int, input().split()))
for i in range(n // 2):
    arr[i], arr[n - i - 1] = arr[n - i - 1], arr[i]
for x in arr:
    print(x, end=" ")