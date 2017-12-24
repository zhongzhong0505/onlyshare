import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocListComponent } from './doc-list/doc-list.component';
import { docRoutes } from './doc.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(docRoutes)
  ],
  declarations: [DocListComponent]
})
export class DocModule { }
