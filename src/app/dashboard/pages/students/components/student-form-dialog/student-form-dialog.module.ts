import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormDialogComponent } from './student-form-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StudentFormDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StudentFormDialogComponent
  ]
})
export class StudentFormDialogModule { }
