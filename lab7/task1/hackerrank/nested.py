n = int(input())

students = []
scores = []

for _ in range(n):
    name = input()
    score = float(input())
    students.append([name, score])
    scores.append(score)

unique_scores = sorted(set(scores))
second_lowest = unique_scores[1]

names = [name for name, score in students if score == second_lowest]

# сортируем имена и выводим
for name in sorted(names):
    print(name)