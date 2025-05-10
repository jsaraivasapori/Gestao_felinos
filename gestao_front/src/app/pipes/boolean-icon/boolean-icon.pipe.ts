import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanIcon',
  standalone: true,
})
export class BooleanIconPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'add' : 'remove';
  }
}
