import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
  }, {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  }, {
    path: '**',
    loadChildren: 'app/home/home.module#HomeModule'
  }
];
