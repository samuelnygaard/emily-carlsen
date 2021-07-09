import uuid
from gameconfig import GameConfig
from board import Board

class Game:
    config: GameConfig
    uuid: str
    board: Board
    white_to_move: bool

    def __init__(self, config: GameConfig) -> None:
        self.uuid = uuid.uuid4()
        self.board = Board()
        self.config = config
        self.white_to_move = True
