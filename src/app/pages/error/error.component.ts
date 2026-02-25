import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ROUTING_CFG} from '../../routing/app.paths';

@Component({
  selector: 'app-error',
  imports: [
    RouterLink
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {

  protected readonly ROUTING_CFG = ROUTING_CFG;
}
