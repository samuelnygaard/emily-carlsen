import { Piece } from './piece';

export class Bishop implements Piece {
  white = true;

  constructor(white = true) {
    this.white = white;
  }

  get html(): string {
    return this.white ? '&#9815;' : '&#9821;';
  }

  get symbol(): string {
    return 'b';
  }
}
