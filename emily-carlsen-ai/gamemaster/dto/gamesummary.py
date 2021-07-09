from gamemaster.dto.game import Game

class GameSummary:
    name: str
    uuid: str

    @staticmethod
    def from_game(game: Game):
        game_summary = GameSummary()
        game_summary.name = game.config.name
        game_summary.uuid = game.uuid
        return game_summary
