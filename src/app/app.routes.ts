import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  }, {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  }
];
