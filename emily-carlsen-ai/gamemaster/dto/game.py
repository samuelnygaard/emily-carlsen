import uuid
from gamemaster.dto.board import Board
from gamemaster.dto.gameconfig import GameConfig


class Game:
    config: GameConfig
    uuid: str
    board: Board
    white_to_move: bool

    def __init__(self, config: GameConfig) -> None:
        self.uuid = uuid.uuid4().hex
        self.board = Board()
        self.config = config
        self.white_to_move = True
