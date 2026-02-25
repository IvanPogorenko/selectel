import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {APP_PATHS} from './app.paths';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private _router: Router,
  ) { }

  public navigateToMain(){
    this._router.navigate([APP_PATHS.Main]);
  }

  public navigateToConstructor(){
    this._router.navigate([APP_PATHS.Constructor]);
  }
}
