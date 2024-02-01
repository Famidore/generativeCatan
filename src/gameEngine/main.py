from city import City
from road import Road
from map import CatanMap


def game():
    m = CatanMap()
    m.generate_standard_map()
    return None


if __name__ == "__main__":
    game()
