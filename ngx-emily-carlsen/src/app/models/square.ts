import { Piece } from './piece';

export class Square {
  x!: number;
  y!: number;
  piece?: Piece;
  clicked = false;
  moveableTo = false;

  constructor(x: number, y: number, piece?: Piece) {
    this.x = x;
    this.y = y;
    this.piece = piece;
  }
}
