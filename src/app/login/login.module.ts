import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

import {ButtonModule} from 'primeng/primeng';

import { loginRoutes } from './login.routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    ButtonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
