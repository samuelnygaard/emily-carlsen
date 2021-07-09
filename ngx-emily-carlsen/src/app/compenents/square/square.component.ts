import { Square } from './../../models/square';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() square!: Square;

  constructor() { }

  ngOnInit(): void {
  }

  get accent(): boolean {
    return (this.square.x + this.square.y) % 2 === 0;
  }
}
