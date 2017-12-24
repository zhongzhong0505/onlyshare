import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ApiComponent } from './api.component';
import { ApiRegisterComponent } from './api-register/api-register.component';
import { ApiListComponent } from './api-list/api-list.component';
import { ApiDetailComponent } from './api-detail/api-detail.component';
import { ApiParamsComponent } from './api-params/api-params.component';
import { ApiTestComponent } from './api-test/api-test.component';

import { apiRoutes } from './api.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(apiRoutes)
  ],
  declarations: [ApiComponent, ApiRegisterComponent, ApiListComponent, ApiDetailComponent, ApiParamsComponent, ApiTestComponent]
})
export class ApiModule { }
