import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noFinity'
})
export class NoFinityPipe implements PipeTransform {

  transform(value: number): number {
    return (value === Infinity || Number.isNaN(value)) ? 0 : value;
  }

}
