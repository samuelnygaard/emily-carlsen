from gamemaster.dto.gameconfig import GameConfig
from gamemaster.dto.game import Game
from gamemaster.dto.gamesummary import GameSummary
from typing import List
import chess


class GameMaster:

    games_by_id = dict()

    def list_games(self) -> List[GameSummary]:
        return list(map(lambda game: GameSummary.from_game(game), self.games_by_id.values()))

    def get_game(self, uuid: str) -> Game:
        return self.games_by_id[uuid] if uuid in self.games_by_id else None

    def create_game(self, config: GameConfig) -> Game:
        game = Game(config)
        self.games_by_id[game.uuid] = game
        return game

    def getValidMoves(self, game: Game):
        fen: str = game.toFen()
        currentBoard = chess.Board(fen)
        return currentBoard.legal_moves()
