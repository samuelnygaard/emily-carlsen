from gameconfig import GameConfig
from game import Game

class GameMaster:

    gamesById = dict()

    def get_game(self, uuid: str):
        return self.gamesById[uuid] if uuid in self.gamesById else None

    def create_game(self, config: GameConfig):
        game = Game(config)
        self.gamesById[game.uuid] = game
