import { Injectable } from '@angular/core';
import {MockDataProvider} from '../../mock-data/mock-data.provider';
import {Observable} from 'rxjs';
import {IType} from '../../interfaces/IType';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(
    private readonly _mockDataProvider: MockDataProvider
  ) { }

  public getTypes(): Observable<IType[]>{
    return this._mockDataProvider.getTypes();
  }
}
