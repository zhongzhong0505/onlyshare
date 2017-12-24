import {Routes} from '@angular/router';
import { ApiListComponent } from './api-list/api-list.component';
import { ApiComponent } from './api.component';

export const apiRoutes: Routes = [
  {
    path: '',
    component: ApiComponent,
    children: [{
      path: '',
      redirectTo: 'list'
    }, {
      path: 'list',
      component: ApiListComponent
    }]
  }
];
