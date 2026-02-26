import {Component} from '@angular/core';
import {RoutingService} from '../../routing/routing.service';
import {PortfolioComponent} from '../../components/portfolio/portfolio.component';

@Component({
  selector: 'app-main',
  imports: [
    PortfolioComponent
  ],
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
