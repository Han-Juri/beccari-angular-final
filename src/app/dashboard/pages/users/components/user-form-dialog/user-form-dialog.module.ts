import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormDialogComponent } from './user-form-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    UserFormDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UserFormDialogComponent
  ]
})
export class UserFormDialogModule { }
