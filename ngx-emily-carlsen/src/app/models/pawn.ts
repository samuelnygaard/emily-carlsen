import { Piece } from './piece';

export class Pawn implements Piece {
  white = true;

  constructor(white = true) {
    this.white = white;
  }

  get html(): string {
    return this.white ? '&#9817;' : '&#9823;';
  }
}
