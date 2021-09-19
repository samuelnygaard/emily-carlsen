import { SliceBoardPipe } from './slice-board.pipe';
import { Rook } from './models/rook';
import { Queen } from './models/queen';
import { Pawn } from './models/pawn';
import { Knight } from './models/knight';
import { King } from './models/king';
import { Bishop } from './models/bishop';
import { Piece } from './models/piece';
import { Square } from './models/square';
import { SlicePipe } from '@angular/common';

export class Fen {
  sliceBoardPipe: SliceBoardPipe;

  constructor(sliceBoardPipe: SliceBoardPipe) {
    this.sliceBoardPipe = sliceBoardPipe;
  }

  isNumber(value: string | number): boolean {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  }

  getPiece(symbol: string, white: boolean): Piece {
    switch (symbol.toLowerCase()) {
      case 'p':
        return new Pawn(white);
      case 'n':
        return new Knight(white);
      case 'b':
        return new Bishop(white);
      case 'r':
        return new Rook(white);
      case 'k':
        return new King(white);
      case 'q':
        return new Queen(white);
      default:
        throw new Error('No Piece for symbol: ' + symbol);
    }
  }

  fenToBoard(fen: string): Square[] {
    const board: Square[] = [];
    new Array(64).fill(0).forEach((_, i) => board.push(new Square(i)));
    fen = fen.split(' ')[0];

    let file = 0;
    let row = 7;

    for (const s of fen) {
      if (s === '/') {
        file = 0;
        row--;
      } else {
        if (this.isNumber(s)) {
          file += Number(s.toString());
        } else {
          board[row * 8 + file].piece = this.getPiece(s, s === s.toUpperCase());
          file++;
        }
      }
    }

    return board;
  }

  boardToFen(board: Square[]): string {
    let fen = '';

    for (const row of this.sliceBoardPipe.transform(board)) {
      let space = 0;
      for (const s of row) {
        if (s.piece) {
          if (space) {
            fen += space;
            space = 0;
          }
          let f = s.piece.symbol;
          if (s.piece.white) {
            f = f.toUpperCase();
          }
          fen += f;
        } else {
          space++;
        }
      }

      if (space) {
        fen += space;
      }

      fen += '/';
    }

    return fen;
  }
}
