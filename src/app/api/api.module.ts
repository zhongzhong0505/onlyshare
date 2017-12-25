import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ApiComponent } from './api.component';
import { ApiRegisterComponent } from './api-register/api-register.component';
import { ApiListComponent } from './api-list/api-list.component';
import { ApiDetailComponent } from './api-detail/api-detail.component';
import { ApiParamsComponent } from './api-params/api-params.component';
import { ApiTestComponent } from './api-test/api-test.component';
import { apiRoutes } from './api.routes';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(apiRoutes),
    NgZorroAntdModule.forRoot(),
    FormsModule
  ],
  declarations: [ApiComponent, ApiRegisterComponent, ApiListComponent, ApiDetailComponent, ApiParamsComponent, ApiTestComponent]
})
export class ApiModule { }
