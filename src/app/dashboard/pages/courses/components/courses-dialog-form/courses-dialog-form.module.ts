import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesDialogFormComponent } from './courses-dialog-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CoursesDialogFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CoursesDialogFormComponent
  ]
})
export class CoursesDialogFormModule { }
