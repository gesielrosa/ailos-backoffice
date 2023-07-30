import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Member} from '../models/member.model';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private readonly _http: HttpClient) {}

  public get(params: {cpf: string}): Observable<Member> {
    const _params = new HttpParams({fromObject: params});
    return this._http.get<Member>('/members', {params: _params});
  }
}
