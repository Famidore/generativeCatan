import networkx as nx
import matplotlib.pyplot as plt
import random


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

    def __init__(
        self,
        num_of_hexes: int = 19,
        num_of_grass: int = 3,
        num_of_trees: int = 4,
        num_of_ores: int = 4,
        num_of_wheat: int = 3,
        num_of_clay: int = 4,
        num_of_desert: int = 1,
    ):
        self.num_of_hexes = num_of_hexes
        # self.num_of_grass = num_of_grass
        # self.num_of_trees = num_of_trees
        # self.num_of_ores = num_of_ores
        # self.num_of_wheat = num_of_wheat
        # self.num_of_clay = num_of_clay
        # self.num_of_desert = num_of_desert

        self.types = {
            "grass": num_of_grass,
            "trees": num_of_trees,
            "ores": num_of_ores,
            "wheat": num_of_wheat,
            "clay": num_of_clay,
            "desert": num_of_desert,
        }

    def get_nodes(self):
        """
        Returns list of nodes' colors, labels, positions
        """

        hex_list = []
        options = {
            "grass": "tab:green",
            "trees": "green",
            "ores": "gray",
            "wheat": "yellow",
            "clay": "orange",
            "desert": "white",
        }

        for type in self.types:
            for i in range(self.types[type]):
                hex_list.append(
                    {
                        "color": options[type],
                        "label": type,
                        "position": (i, 0),
                    }
                )

        return hex_list

    def construct_trees(self, graph):
        nodes_copy = dict(graph.nodes())
        for node in nodes_copy:
            for i in range(6):
                graph.add_node(str(node) + f".{i}", color="black", style="filled")
                graph.add_edge(node, str(node) + f".{i}")

        return graph

    def generate_standard_map(self):
        """

        Returns
        -------
        game_map
        """

        h_l = self.get_nodes()
        game_map = nx.Graph()

        for index, hex in enumerate(h_l):
            game_map.add_node(
                hex["label"] + f"{index}",
                color=hex["color"],
                # pos=hex["position"],
                style="filled",
            )

        self.construct_trees(game_map)

        pos = nx.spring_layout(game_map)

        nx.draw(
            game_map,
            pos=pos,
            node_color=[c for n, c in game_map.nodes(data="color")],
            with_labels=True,
            node_shape="d",
            node_size=50,
        )
        plt.show()

        return game_map
