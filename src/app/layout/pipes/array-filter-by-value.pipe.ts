import {Pipe, PipeTransform} from '@angular/core';
import {Media} from '../../characters/medias/medias';

@Pipe({
  name: 'arrayFilterByValue'
})
export class ArrayFilterByValuePipe implements PipeTransform {

  transform(medias: Media[], filter: string): unknown[] {
    if (!medias || !filter) {
      return medias;
    }
    return medias.filter(media => media.type === filter);
  }

}
