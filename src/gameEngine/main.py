from map import CatanMap
import networkx as nx
import matplotlib.pyplot as plt


def game():
    m = CatanMap()
    m.create_map()
    pos = nx.get_node_attributes(m.map, 'pos')
    print(len(pos))
    for node, position in pos.items():
        print(f'Wierzchołek {node}: Pozycja {position}')

    # Wizualizacja grafu
    pos = nx.get_node_attributes(m.map, 'pos')
    nx.draw(m.map, pos, with_labels=False, node_size=700, node_color='skyblue', font_size=8, font_color='black',
            font_weight='bold')
    plt.title('Sześciokąt Równoboczny wokół Środka')
    plt.show()
    return None


if __name__ == "__main__":
    game()
