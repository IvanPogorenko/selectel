import {Component} from '@angular/core';
import {RoutingService} from '../../routing/routing.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

  constructor(
    private readonly _routingService: RoutingService,
  ) { }

  public navigateToConstructor(){
    this._routingService.navigateToConstructor();
  }

}
