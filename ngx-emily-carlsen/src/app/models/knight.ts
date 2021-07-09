import { Piece } from './piece';

export class Knight implements Piece {
  white = true;

  constructor(white = true) {
    this.white = white;
  }

  get html(): string {
    return this.white ? '&#9816;' : '&#9822;';
  }

  get symbol(): string {
    return 'n';
  }
}
