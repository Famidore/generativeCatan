import networkx as nx


class CatanMap:
    """
    A map class.

    ```
    Attributes
    ----------
    num_of_hexes : int = 19
        number of hexes on the map

    Methods
    ------
    ???
    """

    def __init__(self, num_of_hexes: int = 19, num_of_grass: int = 3, num_of_trees: int = 4, num_of_ores: int = 4,
                 num_of_wheat: int = 3, num_of_clay: int = 4, num_of_desert: int = 1):
        self.num_of_hexes = num_of_hexes
        self.num_of_grass = num_of_grass
        self.num_of_trees = num_of_trees
        self.num_of_ores = num_of_ores
        self.num_of_wheat = num_of_wheat
        self.num_of_clay = num_of_clay
        self.num_of_desert = num_of_desert

    def generate_standard_map(self):
        """

        Returns
        -------
        game_map
        """
        game_map = nx.Graph()

        return game_map
