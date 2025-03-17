if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    unique_scores = sorted(set(score for _, score in students))
    second_lowest_score = unique_scores[1]
    second_lowest_students = sorted([name for name, score in students if score == second_lowest_score])

    # Print names in alphabetical order
    for student in second_lowest_students:
        print(student)
