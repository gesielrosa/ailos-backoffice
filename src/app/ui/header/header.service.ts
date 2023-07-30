import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _title$ = new BehaviorSubject<string>('');

  private _breadcrumbs$ = new BehaviorSubject<string[]>([]);

  get title$(): Observable<string> {
    return this._title$.asObservable();
  }

  get breadcrumbs$(): Observable<string[]> {
    return this._breadcrumbs$.asObservable();
  }

  public setTitle(value: string): void {
    this._title$.next(value);
  }

  public setBreadcrumbs(value: string[]): void {
    this._breadcrumbs$.next(value);
  }
}
