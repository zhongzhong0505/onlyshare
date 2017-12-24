import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [{
        path: 'api',
        loadChildren: '../api/api.module#ApiModule'
    }, {
        path: 'docs',
        loadChildren: '../doc/doc.module#DocModule'
    }, {
        path: 'mock',
        loadChildren: '../mock/mock.module#MockModule'
    }]
}];
