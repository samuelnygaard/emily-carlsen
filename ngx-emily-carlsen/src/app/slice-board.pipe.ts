import { Square } from './models/square';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceBoard'
})
export class SliceBoardPipe implements PipeTransform {

  transform(board: Square[], ...args: unknown[]): Square[][] {
    const result: Square[][] = [];
    let row: Square[] = [];

    board.forEach((p, i) => {
      if (i % 8 === 0) {
        if (row.length) {
          result.push(row);
        }
        row = [];
      }
      row.push(p);
    });

    result.push(row);

    return result.reverse();
  }

}
