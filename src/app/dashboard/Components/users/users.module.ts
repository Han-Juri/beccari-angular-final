import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogModule } from './components/user-form-dialog/user-form-dialog.module';
import { UsersTableComponent } from './components/users-table/users-table.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserFormDialogModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
