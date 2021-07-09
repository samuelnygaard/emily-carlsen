import { Piece } from './piece';

export class Queen implements Piece {
  white = true;

  constructor(white = true) {
    this.white = white;
  }

  get html(): string {
    return this.white ? '&#9813;' : '&#9819;';
  }
}
