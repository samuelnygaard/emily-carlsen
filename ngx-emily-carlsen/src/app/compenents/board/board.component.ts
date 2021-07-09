import { Square } from './../../models/square';
import { Pawn } from './../../models/pawn';
import { Piece } from './../../models/piece';
import { Queen } from './../../models/queen';
import { Bishop } from './../../models/bishop';
import { Knight } from './../../models/knight';
import { Rook } from './../../models/rook';
import { Component, OnInit } from '@angular/core';
import { King } from 'src/app/models/king';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  lastClickedSquare?: Square;
  board!: Square[][];

  constructor() {}

  ngOnInit(): void {
    this.resetBoard();
  }

  clickSquare(s: Square) {
    if (this.lastClickedSquare) {
      this.lastClickedSquare.clicked = false;
    }
    if (this.lastClickedSquare && s.moveableTo) {
      this.moveTo(s);
    } else {
      this.clearMoveableSquares();
      if (s.piece) {
        s.clicked = !s.clicked;
        if (s.clicked) {
          this.markMoveableSquares(s);
        }
      }
    }
  }

  markMoveableSquares(s: Square) {
    this.lastClickedSquare = s;
    const moveableSquares: [x: number, y: number][] = [];

    if (s.piece?.symbol === 'p') {
      let offset = -1;
      if (s.piece.white) {
        offset = 1;
      }
      moveableSquares.push([s.x, s.y + offset]);
      moveableSquares.push([s.x, s.y + (offset * 2)]);
    }

    for (const sq of moveableSquares) {
      this.getSquare(sq[0], sq[1]).moveableTo = true;
    }
  }

  getSquare(x: number, y: number): Square {
    return this.board[y][x];
  }

  moveTo(s: Square) {
    if (this.lastClickedSquare && s.moveableTo) {
      s.piece = this.lastClickedSquare.piece;
      this.lastClickedSquare.piece = undefined;
      this.lastClickedSquare = undefined;
      this.clearMoveableSquares();
    }
  }

  clearMoveableSquares() {
    for (const row of this.board) {
      for (const s of row) {
        s.moveableTo = false;
      }
    }
  }

  resetBoard() {
    const board: Square[][] = [];
    for (let y = 0; y < 8; y++) {
      const row: Square[] = [];
      for (let x = 0; x < 8; x++) {
        const piece: Piece | undefined = this.getStartPiece(x, y);
        row.push(new Square(x, y, piece));
      }

      board.unshift(row);
    }

    this.board = board;
  }

  getStartPiece(x: number, y: number): Piece | undefined {
    const white = y < 2;
    if (y === 6 || y === 1) {
      return new Pawn(white);
    } else if (y === 7 || y === 0) {
      const row = [
        new Rook(white),
        new Knight(white),
        new Bishop(white),
        new Queen(white),
        new King(white),
        new Bishop(white),
        new Knight(white),
        new Rook(white),
      ];
      return row[x];
    }

    return undefined;
  }
}
