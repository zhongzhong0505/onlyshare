import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockListComponent } from './mock-list/mock-list.component';
import { mockRoutes } from './mock.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mockRoutes)
  ],
  declarations: [MockListComponent]
})
export class MockModule { }
