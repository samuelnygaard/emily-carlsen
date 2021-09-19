import { SliceBoardPipe } from './../../slice-board.pipe';
import { Fen } from './../../utils';
import { Square } from './../../models/square';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  f!: Fen;
  readonly startFen =
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  lastClickedSquare?: Square;
  whitesTurn = true;

  board!: Square[];
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor(sliceBoardPipe: SliceBoardPipe) {
    this.f = new Fen(sliceBoardPipe);
  }

  ngOnInit(): void {
    this.reset();
    this.change.emit(this.fen);
  }

  get fen(): string {
    return this.f.boardToFen(this.board);
  }

  set fen(fen: string) {
    this.board = this.f.fenToBoard(fen);
  }

  reset() {
    this.board = this.f.fenToBoard(this.startFen);
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
    const i = this.board.indexOf(s);

    if (s.piece?.symbol === 'p') {
      let offset = -8;
      if (s.piece.white) {
        offset = 8;
      }

      this.board[i + 1 * offset].moveableTo = true;
      this.board[i + 2 * offset].moveableTo = true;
    }
  }

  moveTo(s: Square) {
    if (this.lastClickedSquare && s.moveableTo) {
      s.piece = this.lastClickedSquare.piece;
      this.lastClickedSquare.piece = undefined;
      this.lastClickedSquare = undefined;
      this.clearMoveableSquares();

      this.change.emit(this.fen);
    }
  }

  clearMoveableSquares() {
    for (const p of this.board) {
      p.moveableTo = false;
    }
  }
}
