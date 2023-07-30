import {Pipe, PipeTransform} from '@angular/core';

import {Member} from '../models/member.model';

@Pipe({
  name: 'docStatusText',
  standalone: true,
})
export class DocStatusPipe implements PipeTransform {
  public transform(value: Member['doc_status']): string {
    return (
      {
        regular: 'Regular',
        irregular: 'Irregular',
      }[value] || 'Não especificado'
    );
  }
}
