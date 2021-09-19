import { Square } from './../../models/square';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() rowIndex!: number;
  @Input() square!: Square;

  constructor() { }

  ngOnInit(): void {
  }

  get accent(): boolean {
    const r = this.square.index % 2 === 0;
    return this.rowIndex % 2 ? !r : r;
  }
}
