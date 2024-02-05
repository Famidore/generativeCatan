import networkx as nx
import matplotlib.pyplot as plt
import math


'''
Ogólnie to jest to tylko koncept, wiesz rysujemy koła i umieszczamy na nim wierzchołki centralne
dla których możemy wywoływać funkcję budującą dane pole i np dodającą go do pamięci czy coś
tu chciałem pokazać koncept i jak to działa, implementacja samej funkcji create_hexagon_graph była by bardzo
ale jednak no bardziej złożona :D
'''
def create_hexagon_graph(G,id, a=1, center_position=(0, 0)):
    # Dodanie środka
    center_node = f'center{id}'
    G.add_node(center_node, pos=center_position)

    # Dodanie wierzchołków sześciokąta wokół środka
    num_vertices = 6
    for i in range(num_vertices):
        # w sumie to niżej wyjaśniłem jak działa
        theta = (2 * math.pi / num_vertices) * i
        x = center_position[0] + math.cos(theta)*a
        y = center_position[1] + math.sin(theta)*a
        G.add_node(f"{id}_{i}", pos=(x, y))
        G.add_edge(f"{id}_{i}", f"{id}_{(i + 1) % num_vertices}")  # Krawędź między sąsiadami
        G.add_edge(f"{id}_{i}", center_node)  # Krawędź do środka

    # Zwrócenie utworzonego grafu
    return G


G = nx.Graph()
center_position = (0, 0)
a = 1
# stwórz centralny sześciokąt
G = create_hexagon_graph(G, id=center_position, a=a, center_position=center_position)
# oblicz jak daleko powinny znajdować się kolejne
promien = a * math.sqrt(3)
# oblicz kąt na kole, o jaki będziemy się przesuwać
alfa_zero = (2 * math.pi / 6)
for x in range(6):
    # oblicz połorzenie wierzchołka centralnego na kole
    alfa = (2 * math.pi / 6) * x
    # dodajemy połowę kąta, aby przesunąć go w fazie o pół kąta, by pasowały do siebie klocki
    x = center_position[0] + math.cos(alfa+alfa_zero/2) * promien
    y = center_position[1] + math.sin(alfa+alfa_zero/2) * promien
    G = create_hexagon_graph(G, (x, y), a, (x, y))

# Wypisanie pozycji wierzchołków
pos = nx.get_node_attributes(G, 'pos')
for node, position in pos.items():
    print(f'Wierzchołek {node}: Pozycja {position}')

# Wizualizacja grafu
pos = nx.get_node_attributes(G, 'pos')
nx.draw(G, pos, with_labels=False, node_size=700, node_color='skyblue', font_size=8, font_color='black', font_weight='bold')
plt.title('Sześciokąt Równoboczny wokół Środka')
plt.show()
