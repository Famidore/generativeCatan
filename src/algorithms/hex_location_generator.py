def generate_actions(number_of_hexes: int):
    start_action = (1, 1)
    possible_actions = [(0, -2), (-1, -1), (-1, 1), (0, 2), (1, -1)]
    number_of_circles = number_of_hexes // 6
    actions = []

    if number_of_hexes > 0:
        for i in range(1, number_of_circles + 1):
            actions.append([start_action])
            for action in possible_actions:
                actions.append([action] * i)
            if i > 1:
                actions.append([start_action] * (i - 1))

        if number_of_hexes % 6 != 0:
            actions.append([start_action])
            if number_of_hexes % 6 > 1:
                actions.append(possible_actions[: (number_of_hexes % 6) - 1])

    return [x for xs in actions for x in xs]


if __name__ == "__main__":
    print(generate_actions(7))
