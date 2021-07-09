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
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: (Piece | null)[][] = [
    [new Rook(false), new Knight(false), new Bishop(false), new Queen(false), new King(false), new Bishop(false), new Knight(false), new Rook(false)],
    [new Pawn(false), new Pawn(false), new Pawn(false), new Pawn(false), new Pawn(false), new Pawn(false), new Pawn(false), new Pawn(false)],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn()],
    [new Rook(), new Knight(), new Bishop(), new Queen(), new King(), new Bishop(), new Knight(), new Rook()],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
