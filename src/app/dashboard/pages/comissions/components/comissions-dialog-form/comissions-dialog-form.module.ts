import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComissionsDialogFormComponent } from './comissions-dialog-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ComissionsDialogFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ComissionsDialogFormComponent
  ]
})
export class ComissionsDialogFormModule { }
