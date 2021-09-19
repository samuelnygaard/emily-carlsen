import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BoardComponent } from './compenents/board/board.component';
import { SquareComponent } from './compenents/square/square.component';
import { SliceBoardPipe } from './slice-board.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    SliceBoardPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [SliceBoardPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
