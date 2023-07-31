import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card'; 
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
