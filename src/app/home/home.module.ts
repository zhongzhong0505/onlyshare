import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd';

import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    NzBreadCrumbModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
