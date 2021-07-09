import uuid
from gamemaster.dto.board import Board
from gamemaster.dto.gameconfig import GameConfig



class Game:
    config: GameConfig
    uuid: str
    board: Board
    white_to_move: bool
    halfmoves: int
    fullmoves: int

    def __init__(self, config: GameConfig) -> None:
        self.uuid = uuid.uuid4().hex
        self.board = Board()
        self.config = config
        self.white_to_move = True
        self.halfmoves = 0
        self.fullmoves = 0

    def toFen(self) -> str:
        fen: str = ""
        empty: int = 0
        for i, row in enumerate(self.squares):
            for i, piece in enumerate(row):
                if piece == '.':
                    empty += 1
                else:
                    if empty > 0:
                        fen += empty
                        empty = 0
                    fen += piece
            if empty > 0:
                fen += empty
                empty = 0
            if i < 7:
                fen += '/'

            # Whose turn is it
            fen += f" { 'w' if self.white_to_move else 'b'} "
            # Castling availability TODO: implement actual castling availability. Currently just says noone can castle.
            fen += '- '
            # En passant targets. TODO: implement actual En passant availability. Currently just says noone can En passant.
            fen += '- '

            # Halfmove clock: The number of halfmoves since the last capture or pawn advance, used for the fifty-move rule.
            # TODO: implement. currently constant, so newer use 50-move rule.
            fen += f'{self.halfmoves} '

            # Fullmove number: The number of the full move. It starts at 1, and is incremented after Black's move.
            # TODO: implement. currently constant, so newer use 50-move rule.
            fen += f'{self.fullmoves}'

        return fen
