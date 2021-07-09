import { Piece } from './piece';

export class King implements Piece {
  white = true;

  constructor(white = true) {
    this.white = white;
  }

  get html(): string {
    return this.white ? '&#9812;' : '&#9818;';
  }

  get symbol(): string {
    return 'k';
  }
}
