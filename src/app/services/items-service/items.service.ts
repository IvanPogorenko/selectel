import { Injectable } from '@angular/core';
import {MockDataProvider} from '../../mock-data/mock-data.provider';
import {Observable} from 'rxjs';
import {IItem} from '../../interfaces/IItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private readonly _mockDataProvider: MockDataProvider,
  ) { }

  public getItemsByType(id: number): Observable<IItem[]> {
    return this._mockDataProvider.getItemsByType(id);
  }

}
