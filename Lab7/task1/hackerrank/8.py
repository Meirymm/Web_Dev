if __name__ == '__main__':
    n = int(input())  
    arr = list(map(int, input().split()))  

    max_score = max(arr)
    arr = [score for score in arr if score != max_score]
    runner_up = max(arr)

    print(runner_up)
