import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';

import {Member} from '../../features/members/models/member.model';

@Injectable({
  providedIn: 'root',
})
export class FakeMemberRequestInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url.includes('/members')) {
      const cpf = req.params.get('cpf');
      const member = FAKE_MEMBERS.find((member) => member.doc === cpf);

      if (member) {
        const response = new HttpResponse({body: member, status: 200});
        return of(response);
      }

      const response = new HttpResponse({body: null, status: 404});
      return throwError(() => response);
    }

    return next.handle(req);
  }
}

const FAKE_MEMBERS: Member[] = [
  {
    name: 'Mariane de Sousa Oliveira',
    doc: '30907589030',
    doc_status: 'regular',
    accounts: [
      {
        name: 'Conta aplicação',
        office: 'Cooperativa Viacredi',
        number: '557932-4',
      },
      {
        name: 'Conta corrente',
        office: 'Cooperativa Viacredi',
        number: '778461-8',
      },
    ],
  },
  {
    name: 'João Carlos Pereira',
    doc: '07130736089',
    doc_status: 'irregular',
    accounts: [
      {
        name: 'Conta corrente',
        office: 'Cooperativa Viacredi',
        number: '897324-1',
      },
    ],
  },
  {
    name: 'José Silva Santos',
    doc: '47682789069',
    doc_status: 'regular',
    accounts: [
      {
        name: 'Conta aplicação',
        office: 'Cooperativa Viacredi',
        number: '90173-3',
      },
    ],
  },
];
