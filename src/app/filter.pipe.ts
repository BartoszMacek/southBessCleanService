import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'imageFilterByCat'})
export class ImageFilterByCatPipe implements PipeTransform {
  transform(value: any[], args: string): any {
    if (args === 'all') {
      return value;
    } else {
      return value.filter(item => {
        return item.category === args;
      });
    }
  }

}
