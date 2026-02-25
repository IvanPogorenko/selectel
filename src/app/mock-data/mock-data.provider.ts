import {Injectable} from '@angular/core';
import mockData from './data.json';
import {IType} from '../interfaces/IType';
import {IItem} from '../interfaces/IItem';
import {delay, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataProvider {

  constructor() {}

  private readonly API_DELAY = 500;

  private _types: IType[] = mockData.types;
  private _items: IItem[] = mockData.items;

  public getTypes(): Observable<IType[]>{
    return of(this._types).pipe(
      delay(this.API_DELAY),
    );
  }

  public getItemsByType(id: number): Observable<IItem[]>{
    return of(this._items).pipe(
      delay(this.API_DELAY),
      map(items => items.filter(item => item.typeId === id))
    );
  }

}
