from pydantic import BaseModel

class GameConfig(BaseModel):
    name: str
    player1: str  # "human" | "ai"
    player2: str  # "human" | "ai"
    starting_player: int  # 1 = player1, 2 = player2, 0 = random

