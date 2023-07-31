import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogModule } from './components/user-form-dialog/user-form-dialog.module';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserFormDialogModule,
    RouterModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
