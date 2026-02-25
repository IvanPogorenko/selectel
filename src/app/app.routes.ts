import {Routes} from '@angular/router';
import {ROUTING_CFG} from './routing/app.paths';
import {ConstructorComponent} from './pages/constructor/constructor.component';
import {MainComponent} from './pages/main/main.component';
import {ErrorComponent} from './pages/error/error.component';

export const routes: Routes = [
  {
    path: ROUTING_CFG.Main,
    component: MainComponent
  },
  {
    path: ROUTING_CFG.Constructor,
    component: ConstructorComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];
