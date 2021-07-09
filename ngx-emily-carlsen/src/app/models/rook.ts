import { Piece } from './piece';

export class Rook implements Piece {
  white = true;

  constructor(white = true) {
    this.white = white;
  }

  get html(): string {
    return this.white ? '&#9814;' : '&#9820;';
  }
}
