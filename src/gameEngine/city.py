class City:
    """
    A city class.

    ```
    Attributes
    ----------
    position : tuple
        position of the city
    level : int
        level of the city (1:village, 2:city)
    owner : str
        owner of the city
    get_stats : bool = True
        decide if city will gather stats

    Methods
    ------
    ???
    """

    def __init__(self, position: tuple, level: int, owner: str, get_stats: bool = True):
        self.position = position
        self.level = level
        self.owner = owner
        self.get_stats = get_stats
