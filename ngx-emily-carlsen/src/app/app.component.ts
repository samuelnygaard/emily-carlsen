import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fenControl = new FormControl();

  constructor() {
    this.fenControl.disable();
  }

  change(fen: string) {
    this.fenControl.setValue(fen);
  }
}
