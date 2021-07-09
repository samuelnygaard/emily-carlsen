
from gamemaster.dto.game import Game
from gamemaster.dto.gameconfig import GameConfig
import uvicorn
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from argparse import ArgumentParser

from gamemaster.gamemaster import GameMaster
from gamemaster.dto.gamesummary import GameSummary
from typing import List


# --- Welcome to your Emily API! --- #
# See the README for guides on how to test it.

# Your API endpoints under http://yourdomain/api/...
# are accessible from any origin by default.
# Make sure to restrict access below to origins you
# trust before deploying your API to production.

parser = ArgumentParser()
parser.add_argument('-e', '--env', default='.env',
                    help='sets the environment file')
args = parser.parse_args()
dotenv_file = args.env
load_dotenv(dotenv_file)

app = FastAPI()

game_master = GameMaster()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/api/health')
def health_check():
    return {
        'status': 'UP',
        'port': os.environ.get("HOST_PORT"),
    }


@app.post('/games')
def new_game(game_config: GameConfig) -> Game:
    game = game_master.create_game(game_config)
    return game


@app.get('/games/{uuid}')
def get_game(uuid: str) -> GameSummary:
    game = game_master.get_game(uuid)
    return game


@app.get('/games')
def list_games() -> List[GameSummary]:
    games = game_master.list_games()
    return games


if __name__ == '__main__':

    uvicorn.run(
        'api:app',
        host=os.environ.get('HOST_IP'),
        port=int(os.environ.get('CONTAINER_PORT'))
    )
