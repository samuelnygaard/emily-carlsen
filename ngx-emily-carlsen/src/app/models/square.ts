import { Piece } from './piece';

export class Square {
  index!: number;
  piece?: Piece;
  clicked = false;
  moveableTo = false;

  constructor(index: number, piece?: Piece) {
    this.index = index;
    this.piece = piece;
  }
}
