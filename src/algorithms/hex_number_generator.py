import random
import matplotlib.pyplot as plt


def generate_numbers(num_of_hexes: int = 19):
    """
    Generates a list of hex numbers given number of hexes
    Based on gaussian distribution
    """
    mean = 7
    sigma = 1
    nums = [n for n in range(2, 13)]

    while len(nums) < num_of_hexes:
        n = int(random.gauss(mean, sigma))
        if n in nums and n != 7:
            nums.append(n)

    return nums


if __name__ == "__main__":
    plt.hist(generate_numbers(), bins=19)
    plt.show()
