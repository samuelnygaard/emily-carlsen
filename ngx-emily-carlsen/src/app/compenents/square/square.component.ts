import { Piece } from './../../models/piece';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() accent = false;
  @Input() piece!: Piece | null;

  constructor() { }

  ngOnInit(): void {
  }

}
